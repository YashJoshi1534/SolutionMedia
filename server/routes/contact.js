import { Router } from "express";
import logger from "../utils/logger.js";
import transporter from "../config/transporter.js";
import { buildAdminEmail } from "../templates/adminEmail.js";
import { buildConfirmationEmail } from "../templates/confirmationEmail.js";
import Contact from "../models/Contact.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    logger.info("[STEP 1] Contact form POST received");
    logger.info(`[STEP 1] Raw body keys: ${Object.keys(req.body || {}).join(", ")}`);

    const { name, email, subject, message, preferredDate, preferredTime } = req.body;

    logger.info(`[STEP 1] Parsed fields — name: ${name}, email: ${email}, subject: ${subject}, message length: ${message?.length}, preferredDate: ${preferredDate}, preferredTime: ${preferredTime}`);

    if (!name || !email || !subject || !message) {
      logger.warn(`[STEP 1] Validation failed — missing required fields`);
      return res.status(400).json({
        success: false,
        error: "Name, email, subject and message are required",
      });
    }

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "contact@hypemattermedia.com";

    logger.info(`[STEP 1] Validation passed. Receiver email: ${receiverEmail}`);
    logger.info(`Contact form received from ${name} (${email})`);

    // ── STEP 2: Rate-limit DB check ──────────────────────────────────────────
    logger.info("[STEP 2] Checking rate limit via MongoDB...");
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    let recentContact;
    try {
      recentContact = await Contact.findOne({
        email,
        createdAt: { $gte: tenMinutesAgo },
      });
      logger.info(`[STEP 2] Rate-limit check done. Recent contact found: ${!!recentContact}`);
    } catch (dbErr) {
      logger.error(`[STEP 2] MongoDB rate-limit query FAILED — name: ${dbErr.name}, code: ${dbErr.code}, message: ${dbErr.message}`);
      logger.error(`[STEP 2] Stack: ${dbErr.stack}`);
      throw dbErr;
    }

    if (recentContact) {
      logger.warn(`[STEP 2] Rate limit hit for email: ${email}`);
      return res.status(429).json({
        success: false,
        error: "Please wait 10 minutes before sending another message.",
      });
    }

    // Build schedule HTML for Admin Email
    let scheduleHtml = '';
    if (preferredDate) {
      scheduleHtml += `
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Preferred Date</td>
            <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${preferredDate}</td>
          </tr>`;
    }
    if (preferredTime) {
      scheduleHtml += `
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Preferred Time</td>
            <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${preferredTime}</td>
          </tr>`;
    }

    // Build schedule info for User Confirmation Email
    let userScheduleInfo = '';
    if (preferredDate || preferredTime) {
      userScheduleInfo = `
        <div style="background: #e0f2fe; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <p style="color: #0369a1; font-size: 14px; font-weight: 600; margin: 0 0 8px;">🗓️ Schedule Request</p>
          <p style="color: #0c4a6e; font-size: 14px; margin: 0; line-height: 1.6;">
            You requested a connection 
            ${preferredDate ? `on <strong>${preferredDate}</strong>` : ''} 
            ${preferredTime ? `at <strong>${preferredTime}</strong>` : ''}. 
            We will confirm this time with you shortly.
          </p>
        </div>
      `;
    }

    // ── STEP 3: Save to Database ─────────────────────────────────────────────
    logger.info("[STEP 3] Saving contact to MongoDB...");
    let newContact;
    try {
      newContact = await Contact.create({
        name,
        email,
        subject,
        message,
        preferredDate,
        preferredTime,
      });
      logger.info(`[STEP 3] Contact saved successfully. ID: ${newContact._id}`);
    } catch (dbErr) {
      logger.error(`[STEP 3] MongoDB save FAILED — name: ${dbErr.name}, code: ${dbErr.code}, message: ${dbErr.message}`);
      logger.error(`[STEP 3] Stack: ${dbErr.stack}`);
      throw dbErr;
    }

    // ── STEP 4: Send Admin Email ─────────────────────────────────────────────
    logger.info(`[STEP 4] Sending admin email to: ${receiverEmail} from: ${process.env.EMAIL_USER}`);
    logger.info(`[STEP 4] EMAIL_USER env set: ${!!process.env.EMAIL_USER}, EMAIL_PASS env set: ${!!process.env.EMAIL_PASS}`);

    // ── STEP 5: Send Confirmation Email ──────────────────────────────────────
    logger.info(`[STEP 5] Sending confirmation email to: ${email}`);

    try {
      await Promise.all([
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          replyTo: email,
          to: receiverEmail,
          subject: `[Contact Form] ${subject} — from ${name}`,
          html: buildAdminEmail({ name, email, subject, message, scheduleHtml }),
        }),
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Thanks for contacting us",
          html: buildConfirmationEmail({ name, subject, message, userScheduleInfo }),
        }),
      ]);
      logger.info("[STEP 4/5] Both emails sent successfully");
    } catch (mailErr) {
      logger.error(`[STEP 4/5] Email send FAILED — name: ${mailErr.name}, code: ${mailErr.code}, message: ${mailErr.message}`);
      logger.error(`[STEP 4/5] responseCode: ${mailErr.responseCode}, response: ${mailErr.response}`);
      logger.error(`[STEP 4/5] Stack: ${mailErr.stack}`);
      throw mailErr;
    }

    logger.info("[DONE] Contact form handled successfully");
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    const errDetails = {
      name: error?.name,
      code: error?.code,
      message: error?.message,
      responseCode: error?.responseCode,
      response: error?.response,
      stack: error?.stack,
    };
    console.error("CONTACT API ERROR (full):", JSON.stringify(errDetails, null, 2));
    logger.error(`Contact API error — ${JSON.stringify(errDetails)}`);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send email or save to DB",
      errorName: error?.name,
      errorCode: error?.code,
    });
  }
});

export default router;