/**
 * Builds the admin notification HTML email.
 * Theme: Elite Dark (Website Identical)
 * BG: #0A0A0F, Accent: #9945FF, Text: #F5F5FA
 */
export function buildAdminEmail({ name, email, subject, message, preferredDate, preferredTime, timezone }) {
  const scheduleHtml = (preferredDate || preferredTime) ? `
      <tr>
        <td style="padding: 12px 0; color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px; vertical-align: top;">Schedule</td>
        <td style="padding: 12px 0; color: #F5F5FA; font-size: 15px;">
          <div style="background: rgba(153, 69, 255, 0.05); border: 1px solid rgba(153, 69, 255, 0.1); border-radius: 12px; padding: 14px; margin-top: 4px;">
            <div style="margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 14px;">📅</span> <strong style="color: #ffffff;">${preferredDate || 'Not specified'}</strong>
            </div>
            <div style="margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 14px;">⏰</span> <strong style="color: #ffffff;">${preferredTime || 'Not specified'}</strong>
            </div>
            <div style="font-size: 12px; color: rgba(245, 245, 250, 0.5); display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 14px;">🌐</span> ${timezone || 'UTC'}
            </div>
          </div>
        </td>
      </tr>
    ` : '';

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 40px auto; background: #0A0A0F; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); color: #F5F5FA; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
      <div style="background: linear-gradient(135deg, #12121A, #0A0A0F); padding: 48px 40px; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="display: inline-flex; align-items: center; background: rgba(153, 69, 255, 0.1); border: 1px solid rgba(153, 69, 255, 0.2); padding: 8px 16px; border-radius: 100px; margin-bottom: 24px;">
          <div style="width: 8px; height: 8px; background: #9945FF; border-radius: 50%; margin-right: 10px;"></div>
          <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #C084FC;">New Strategic Lead [v2]</span>
        </div>
        <h1 style="color: #ffffff; margin: 0 0 12px; font-size: 32px; font-weight: 800; letter-spacing: -0.04em; line-height: 1.1;">Vision <span style="color: #9945FF;">Acquired</span></h1>
        <p style="color: rgba(245, 245, 250, 0.5); margin: 0; font-size: 16px; line-height: 1.5;">A new request has been neutralized and is ready for analysis.</p>
      </div>

      <div style="padding: 40px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px; vertical-align: top;">Lead Name</td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 16px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Work Email</td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 16px;"><a href="mailto:${email}" style="color: #9945FF; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Project Scope</td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 16px; font-weight: 600;">${subject}</td>
          </tr>
          ${scheduleHtml}
        </table>

        <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.05);">
          <p style="color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">The Vision</p>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 28px; color: rgba(245, 245, 250, 0.8); font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${message}</div>
        </div>
      </div>

      <div style="padding: 32px; background: rgba(255,255,255,0.01); text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
        <p style="margin: 0; color: rgba(245, 245, 250, 0.3); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Hypematter Media — Strategic Operations</p>
      </div>
    </div>
  `;
}
