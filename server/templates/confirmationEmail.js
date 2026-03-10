/**
 * Builds the user confirmation HTML email.
 */
export function buildConfirmationEmail({ name, subject, message, preferredDate, preferredTime, timezone }) {
  const year = new Date().getFullYear();
  const messageSummary = message && message.length > 150 ? message.substring(0, 150) + '...' : (message || 'No description provided');

  const scheduleSection = (preferredDate || preferredTime) ? `
      <div style="background: rgba(153, 69, 255, 0.03); border: 1px solid rgba(153, 69, 255, 0.1); border-radius: 20px; padding: 32px; margin-bottom: 32px; text-align: left;">
        <p style="color: #9945FF; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 16px;">Strategy Session Dispatch</p>
        <div style="display: flex; gap: 32px; flex-wrap: wrap;">
          <div style="margin-right: 32px;">
            <p style="color: rgba(245, 245, 250, 0.4); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Proposed Date</p>
            <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">${preferredDate || 'To be confirmed'}</p>
          </div>
          <div style="margin-right: 32px;">
            <p style="color: rgba(245, 245, 250, 0.4); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Proposed Time</p>
            <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">${preferredTime || 'To be confirmed'}</p>
          </div>
        </div>
        <div style="margin-top: 20px; color: rgba(245, 245, 250, 0.3); font-size: 13px; font-weight: 500;">
          🌐 Coordinate: <span style="color: rgba(245, 245, 250, 0.6);">${timezone || 'Local Time'}</span>
        </div>
      </div>
    ` : '';

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 40px auto; background: #0A0A0F; border-radius: 32px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); color: #F5F5FA; box-shadow: 0 30px 60px rgba(0,0,0,0.6);">
      <div style="background: linear-gradient(135deg, #12121A, #0A0A0F); padding: 56px 48px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="width: 64px; height: 64px; background: #9945FF; border-radius: 20px; margin: 0 auto 32px; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 32px; box-shadow: 0 12px 32px rgba(153, 69, 255, 0.3); color: #ffffff;">H</div>
        <h1 style="color: #ffffff; margin: 0 0 12px; font-size: 32px; font-weight: 800; letter-spacing: -0.04em; line-height: 1.1;">Welcome to the <span style="color: #9945FF;">Elite</span>, ${name}</h1>
        <p style="color: rgba(245, 245, 250, 0.5); margin: 0; font-size: 18px; line-height: 1.5; font-weight: 500;">Your vision for <span style="color: #ffffff;">${subject}</span> has been received.</p>
      </div>

      <div style="padding: 48px; text-align: center;">
        <p style="color: rgba(245, 245, 250, 0.8); font-size: 16px; line-height: 1.8; margin: 0 0 40px;">
          The transmission reached our content engineers securely. We're currently analyzing your project scope to ensure our strategy session is engineered for maximum conversion impact.
        </p>

        ${scheduleSection}

        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; padding: 32px; margin-bottom: 40px; text-align: left;">
          <p style="color: rgba(245, 245, 250, 0.4); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 20px;">Mission Protocol</p>
          <div style="color: #F5F5FA; font-size: 15px; line-height: 1.7;">
            <div style="margin-bottom: 14px; display: flex; align-items: flex-start; gap: 12px;">
              <span style="color: #9945FF;">⚡</span> <span><strong>Analysis:</strong> Our team is deep-diving into your target niche.</span>
            </div>
            <div style="margin-bottom: 14px; display: flex; align-items: flex-start; gap: 12px;">
              <span style="color: #9945FF;">⚡</span> <span><strong>Verification:</strong> We'll confirm the final schedule within 24 hours.</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <span style="color: #9945FF;">⚡</span> <span><strong>Strategy:</strong> Prepare for a surgical analysis of your content pipeline.</span>
            </div>
          </div>
        </div>

        <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 32px; text-align: left;">
          <p style="color: rgba(245, 245, 250, 0.3); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Lead Summary</p>
          <div style="color: rgba(245, 245, 250, 0.5); font-size: 14px; font-style: italic; line-height: 1.6; border-left: 2px solid #9945FF; padding-left: 16px;">"${messageSummary}"</div>
        </div>
      </div>

      <div style="padding: 40px; background: linear-gradient(180deg, rgba(153, 69, 255, 0.05), rgba(153, 69, 255, 0.02)); text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
        <p style="margin: 0 0 12px; color: rgba(245, 245, 250, 0.6); font-size: 15px;">Need immediate assistance? Reply directly to this dispatcher.</p>
        <p style="margin: 0; color: rgba(245, 245, 250, 0.3); font-size: 12px; font-weight: 500;">© ${year} Hypematter Media. All rights reserved.</p>
      </div>
    </div>
  `;
}
