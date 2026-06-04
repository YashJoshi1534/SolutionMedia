/**
 * Builds the user confirmation HTML email.
 */
export function buildConfirmationEmail({ name, subject, message, preferredDate, preferredTime, timezone }) {
  const year = new Date().getFullYear();
  const firstName = name ? name.split(' ')[0] : 'there';

  const scheduleSection = (preferredDate || preferredTime) ? `
      <div style="margin: 24px 0; text-align: left; font-size: 15px; line-height: 1.6; color: #333333;">
        <p style="margin: 0 0 8px; font-weight: 700; color: #111111;">Proposed Strategy Session Details:</p>
        <p style="margin: 0 0 4px;"><strong>Date:</strong> ${preferredDate || 'To be confirmed'}</p>
        <p style="margin: 0 0 4px;"><strong>Time:</strong> ${preferredTime || 'To be confirmed'}</p>
        <p style="margin: 0;"><strong>Timezone:</strong> ${timezone || 'Local Time'}</p>
      </div>
    ` : '';

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222222; background-color: #ffffff;">
      <div style="margin-bottom: 32px; text-align: left;">
        <div style="background-color: #ffffff; padding: 10px 16px; display: inline-block; border-radius: 8px; border: 1px solid #eeeeee;">
          <img src="cid:logo@genarcstudio.com" alt="GenArc Studio" style="height: 32px; width: auto; display: block; border: none;" />
        </div>
      </div>

      <div style="text-align: left; font-size: 15px; line-height: 1.6;">
        <p style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 16px;">Hi ${firstName},</p>
        
        <p style="margin: 0 0 16px; color: #333333;">
          I appreciate your interest in working with us.
        </p>
        
        <p style="margin: 0 0 16px; color: #333333;">
          We have received your discovery call request. Our team will review the details you submitted and get back to you shortly with a confirmation and next steps.
        </p>
        
        <p style="margin: 0 0 16px; color: #333333;">
          If we need any additional information before the call, we'll reach out via email.
        </p>
        
        <p style="margin: 0 0 24px; color: #333333;">
          We appreciate your patience and look forward to connecting with you.
        </p>

        ${scheduleSection}

        <p style="margin: 24px 0 0; color: #333333;">
          Best regards,<br/>
          <strong>GenArc Studio</strong>
        </p>
      </div>

      <div style="margin-top: 48px; border-top: 1px solid #eee; padding-top: 16px; text-align: left;">
        <p style="margin: 0; color: #999999; font-size: 11px;">© ${year} GenArc Studio. All rights reserved.</p>
      </div>
    </div>
  `;
}
