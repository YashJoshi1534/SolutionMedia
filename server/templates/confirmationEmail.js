/**
 * Builds the user confirmation HTML email.
 */
export function buildConfirmationEmail({ name, subject, message, userScheduleInfo }) {
    const year = new Date().getFullYear();
    const messageSummary = message.length > 150 ? message.substring(0, 150) + '...' : message;

    return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background: linear-gradient(135deg, #022c22, #064e3b); padding: 40px 28px; text-align: center;">
        <div style="width: 60px; height: 60px; background: #f97316; border-radius: 16px; margin: 0 auto 16px; display: flex; justify-content: center; align-items: center;">
          <span style="color: white; font-size: 28px; font-weight: bold; line-height: 60px;">H</span>
        </div>
        <h1 style="color: #ffffff; margin: 0 0 8px; font-size: 24px; font-weight: 700;">Thank You, ${name}!</h1>
        <p style="color: rgba(249,250,251,0.7); margin: 0; font-size: 15px;">We've received your message successfully</p>
      </div>

      <div style="padding: 32px 28px;">
        <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
          Hi <strong>${name}</strong>,<br/><br/>
          Thank you for getting in touch with <strong>Hypematter Media</strong>! We appreciate your interest and want you to know that your message is important to us.
        </p>

        <div style="background: linear-gradient(135deg, #fff7ed, #fef3c7); border: 1px solid #fed7aa; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <p style="color: #92400e; font-size: 14px; font-weight: 600; margin: 0 0 8px;">📋 What happens next?</p>
          <ul style="color: #78350f; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 18px;">
            <li>Our team will review your inquiry carefully</li>
            <li>A dedicated team member will be assigned to your request</li>
            <li>You'll hear back from us within <strong>24 hours</strong></li>
          </ul>
        </div>

        ${userScheduleInfo}

        <div style="background: #f1f5f9; border-radius: 12px; padding: 20px; margin-top: 20px;">
          <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px;">Your message summary</p>
          <p style="color: #334155; font-size: 14px; margin: 0 0 4px;"><strong>Subject:</strong> ${subject}</p>
          <p style="color: #334155; font-size: 14px; margin: 0; white-space: pre-wrap;"><strong>Message:</strong> ${messageSummary}</p>
        </div>
      </div>

      <div style="padding: 24px 28px; background: linear-gradient(135deg, #022c22, #064e3b); text-align: center;">
        <p style="margin: 0 0 4px; color: rgba(249,250,251,0.8); font-size: 13px;">Need immediate help? Reply directly to this email.</p>
        <p style="margin: 0; color: rgba(249,250,251,0.5); font-size: 12px;">© ${year} Hypematter Media. All rights reserved.</p>
      </div>
    </div>
  `;
}
