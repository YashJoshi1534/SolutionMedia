import { Router } from "express";
import logger from "../utils/logger.js";
import transporter from "../config/transporter.js";
import { buildAdminEmail } from "../templates/adminEmail.js";
import { buildConfirmationEmail } from "../templates/confirmationEmail.js";
import Contact from "../models/Contact.js";

const router = Router();

router.post("/", async (req, res) => {
  const start = Date.now();

  try {
    logger.info("[STEP 1] Contact form POST received");
    logger.info("[STEP 1] Raw body keys", Object.keys(req.body || {}));

    const { name, email, subject, message, preferredDate, preferredTime } = req.body;

    logger.info("[STEP 1] Parsed fields", {
      name,
      email,
      subject,
      messageLength: message?.length,
      preferredDate,
      preferredTime,
    });

    if (!name || !email || !subject || !message) {
      logger.warn("[STEP 1] Validation failed — missing required fields");

      return res.status(400).json({
        success: false,
        error: "Name, email, subject and message are required",
      });
    }

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "contact@hypemattermedia.com";

    logger.info("[STEP 1] Validation passed", { receiverEmail });
    logger.info("Contact form received", { name, email });

    // ── STEP 2: Rate-limit check ─────────────────────────────
    logger.info("[STEP 2] Checking rate limit via MongoDB");

    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    let recentContact;

    try {
      recentContact = await Contact.findOne({
        email,
        createdAt: { $gte: tenMinutesAgo },
      });

      logger.info("[STEP 2] Rate-limit check done", {
        recentContact: !!recentContact,
      });

    } catch (dbErr) {

      logger.error("[STEP 2] MongoDB rate-limit query FAILED", {
        name: dbErr.name,
        code: dbErr.code,
        message: dbErr.message,
        stack: dbErr.stack,
      });

      throw dbErr;
    }

    if (recentContact) {
      logger.warn("[STEP 2] Rate limit hit", { email });

      return res.status(429).json({
        success: false,
        error: "Please wait 10 minutes before sending another message.",
      });
    }

    // ── STEP 3: Save contact ─────────────────────────────
    logger.info("[STEP 3] Saving contact to MongoDB");

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

      logger.info("[STEP 3] Contact saved successfully", {
        id: newContact._id,
      });

    } catch (dbErr) {

      logger.error("[STEP 3] MongoDB save FAILED", {
        name: dbErr.name,
        code: dbErr.code,
        message: dbErr.message,
        stack: dbErr.stack,
      });

      throw dbErr;
    }

    // ── STEP 4: Send Emails ─────────────────────────────
    logger.info("[STEP 4] Sending emails", {
      receiverEmail,
      emailUserConfigured: !!process.env.EMAIL_USER,
      emailPassConfigured: !!process.env.EMAIL_PASS,
    });

    try {
      await Promise.all([
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          replyTo: email,
          to: receiverEmail,
          subject: `[Contact Form] ${subject} — from ${name}`,
          html: buildAdminEmail({ name, email, subject, message }),
        }),

        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Thanks for contacting us",
          html: buildConfirmationEmail({ name, subject, message }),
        }),
      ]);

      logger.info("[STEP 4/5] Both emails sent successfully");

    } catch (mailErr) {

      logger.error("[STEP 4/5] Email send FAILED", {
        name: mailErr.name,
        code: mailErr.code,
        message: mailErr.message,
        responseCode: mailErr.responseCode,
        response: mailErr.response,
        stack: mailErr.stack,
      });

      throw mailErr;
    }

    const duration = Date.now() - start;

    logger.info("[DONE] Contact form handled successfully", {
      duration: `${duration}ms`,
    });

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

    console.error("CONTACT API ERROR:", errDetails);

    // IMPORTANT: structured logging
    logger.error("Contact API error", errDetails);

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send email or save to DB",
      errorName: error?.name,
      errorCode: error?.code,
    });
  }
});

export default router;