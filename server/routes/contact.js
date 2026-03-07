import { Router } from 'express';
import logger from '../utils/logger.js';
import transporter from '../config/transporter.js';
import { buildAdminEmail } from '../templates/adminEmail.js';
import { buildConfirmationEmail } from '../templates/confirmationEmail.js';

const router = Router();

/**
 * POST /api/contact
 * Handles contact form submissions:
 *   1. Validates input
 *   2. Sends admin notification email
 *   3. Sends user confirmation email
 */
router.post('/', async (req, res) => {
    const { name, email, subject, message, preferredDate, preferredTime } = req.body;

    logger.info(`New contact submission from "${name}" <${email}>`);
    logger.info(`Subject: "${subject}" | Date: ${preferredDate || 'N/A'} | Time: ${preferredTime || 'N/A'}`);

    // ── Validation ──
    if (!name || !email || !subject || !message) {
        logger.warn('Validation failed — missing required fields', {
            name: !!name, email: !!email, subject: !!subject, message: !!message,
        });
        return res.status(400).json({
            success: false,
            error: 'Name, email, subject, and message are required.',
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        logger.warn(`Validation failed — invalid email: "${email}"`);
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address.',
        });
    }

    logger.success('Validation passed');

    // ── Build schedule HTML ──
    const receiverEmail = process.env.RECEIVER_EMAIL || 'contact@hypemattermedia.com';
    let scheduleHtml = '';
    if (preferredDate || preferredTime) {
        const formattedDate = preferredDate
            ? new Date(preferredDate).toLocaleDateString('en-IN', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })
            : 'Not specified';
        const formattedTime = preferredTime || 'Not specified';

        scheduleHtml = `
      <tr>
        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Preferred Date</td>
        <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Preferred Time</td>
        <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${formattedTime}</td>
      </tr>
    `;
    }

    const userScheduleInfo = (preferredDate || preferredTime)
        ? `<p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 8px;">
         <strong>Your requested schedule:</strong><br/>
         📅 ${preferredDate ? new Date(preferredDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not specified'}<br/>
         🕐 ${preferredTime || 'Not specified'}
       </p>`
        : '';

    try {
        // ── 1) Admin notification ──
        logger.info(`Sending admin notification to ${receiverEmail}...`);

        await transporter.sendMail({
            from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: receiverEmail,
            subject: `[Contact Form] ${subject} — from ${name}`,
            html: buildAdminEmail({ name, email, subject, message, scheduleHtml }),
        });

        logger.success('Admin notification email sent');

        // ── 2) User confirmation ──
        logger.info(`Sending confirmation email to ${email}...`);

        await transporter.sendMail({
            from: `"Hypematter Media" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${name}! — Hypematter Media`,
            html: buildConfirmationEmail({ name, subject, message, userScheduleInfo }),
        });

        logger.success(`Confirmation email sent to ${email}`);
        logger.success(`✨ Contact form processed successfully for "${name}" <${email}>`);

        return res.status(200).json({
            success: true,
            message: 'Your message has been sent! Check your inbox for a confirmation email.',
        });
    } catch (err) {
        logger.error(`Failed to send email for "${name}" <${email}>`, err.message);
        logger.error('Stack trace', err.stack);
        return res.status(500).json({
            success: false,
            error: 'Failed to send email. Please try again later.',
        });
    }
});

export default router;
