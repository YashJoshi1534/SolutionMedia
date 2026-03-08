import { Router } from "express";
import logger from "../utils/logger.js";
import transporter from "../config/transporter.js";
import { buildAdminEmail } from "../templates/adminEmail.js";
import { buildConfirmationEmail } from "../templates/confirmationEmail.js";

const router = Router();

/**
 * POST /api/contact
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, preferredDate, preferredTime } =
      req.body;

    logger.info(`New contact submission from "${name}" <${email}>`);

    // ───── Validation ─────
    if (!name || !email || !subject || !message) {
      logger.warn("Validation failed — missing fields");

      return res.status(400).json({
        success: false,
        error: "Name, email, subject and message are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      logger.warn(`Invalid email provided: ${email}`);

      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    logger.success("Validation passed");

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "contact@hypemattermedia.com";

    // ───── Schedule formatting ─────
    let scheduleHtml = "";
    let userScheduleInfo = "";

    if (preferredDate || preferredTime) {
      const formattedDate = preferredDate
        ? new Date(preferredDate).toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified";

      const formattedTime = preferredTime || "Not specified";

      scheduleHtml = `
      <tr>
        <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600">Preferred Date</td>
        <td style="padding:10px 0;color:#022c22;font-size:15px">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600">Preferred Time</td>
        <td style="padding:10px 0;color:#022c22;font-size:15px">${formattedTime}</td>
      </tr>
      `;

      userScheduleInfo = `
      <p style="color:#334155;font-size:15px;">
      <strong>Your requested schedule:</strong><br/>
      📅 ${formattedDate}<br/>
      🕐 ${formattedTime}
      </p>
      `;
    }

    // ───── Send Response Immediately (important for Vercel) ─────
    res.status(200).json({
      success: true,
      message:
        "Your message has been received! We'll get back to you shortly.",
    });

    // ───── Send Emails in Background ─────
    try {
      logger.info(`Sending admin notification to ${receiverEmail}`);

      await transporter.sendMail({
        from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Contact Form] ${subject} — from ${name}`,
        html: buildAdminEmail({
          name,
          email,
          subject,
          message,
          scheduleHtml,
        }),
      });

      logger.success("Admin email sent");

      logger.info(`Sending confirmation email to ${email}`);

      await transporter.sendMail({
        from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}! — Hypematter Media`,
        html: buildConfirmationEmail({
          name,
          subject,
          message,
          userScheduleInfo,
        }),
      });

      logger.success(`Confirmation email sent to ${email}`);
    } catch (mailError) {
      logger.error("Email sending failed", mailError.message);
    }
  } catch (error) {
    logger.error("Contact route crashed", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;