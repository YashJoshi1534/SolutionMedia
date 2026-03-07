/**
 * Builds the admin notification HTML email.
 */
export function buildAdminEmail({ name, email, subject, message, scheduleHtml }) {
    return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background: linear-gradient(135deg, #022c22, #064e3b); padding: 32px 28px;">
        <h1 style="color: #f97316; margin: 0 0 4px; font-size: 22px;">New Contact Form Submission</h1>
        <p style="color: rgba(249,250,251,0.7); margin: 0; font-size: 14px;">Hypematter Media Website</p>
      </div>
      <div style="padding: 28px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #022c22; font-size: 15px;"><a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Subject</td>
            <td style="padding: 10px 0; color: #022c22; font-size: 15px;">${subject}</td>
          </tr>
          ${scheduleHtml}
        </table>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Message</p>
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; color: #022c22; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
      </div>
      <div style="padding: 16px 28px; background: #f1f5f9; text-align: center;">
        <p style="margin: 0; color: #94a3b8; font-size: 12px;">Sent from the Hypematter Media contact form</p>
      </div>
    </div>
  `;
}
