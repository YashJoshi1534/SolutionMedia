import { Router } from "express";
import logger from "../utils/logger.js";
import transporter from "../config/transporter.js";
import { buildAdminEmail } from "../templates/adminEmail.js";
import { buildConfirmationEmail } from "../templates/confirmationEmail.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, subject and message are required",
      });
    }

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "contact@hypemattermedia.com";

    logger.info(`Contact form received from ${name} (${email})`);

    // send admin email
    await transporter.sendMail({
      from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: receiverEmail,
      subject: `[Contact Form] ${subject} — from ${name}`,
      html: buildAdminEmail({ name, email, subject, message }),
    });

    // send confirmation email
    await transporter.sendMail({
      from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting us`,
      html: buildConfirmationEmail({ name, subject, message }),
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