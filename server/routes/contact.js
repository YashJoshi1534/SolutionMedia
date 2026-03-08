import { Router } from "express";
import logger from "../utils/logger.js";
import transporter from "../config/transporter.js";
import { buildAdminEmail } from "../templates/adminEmail.js";
import { buildConfirmationEmail } from "../templates/confirmationEmail.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, preferredDate, preferredTime } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, subject and message are required",
      });
    }

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "contact@hypemattermedia.com";

    logger.info(`Contact form received from ${name} (${email})`);

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

    // send admin email
    await transporter.sendMail({
      from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: receiverEmail,
      subject: `[Contact Form] ${subject} — from ${name}`,
      html: buildAdminEmail({ name, email, subject, message, scheduleHtml }),
    });

    // send confirmation email
    await transporter.sendMail({
      from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting us`,
      html: buildConfirmationEmail({ name, subject, message, userScheduleInfo }),
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    logger.error("Contact API error", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

export default router;