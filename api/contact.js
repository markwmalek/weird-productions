const MAILERSEND_URL = 'https://api.mailersend.com/v1/email';
const RATE_LIMIT_MAX_REQUESTS = 4;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const recentRequestsByIp = new Map();

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }
  return req.socket?.remoteAddress ?? 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const history = recentRequestsByIp.get(ip) ?? [];
  const recentHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentHistory.length >= RATE_LIMIT_MAX_REQUESTS) {
    recentRequestsByIp.set(ip, recentHistory);
    return true;
  }

  recentHistory.push(now);
  recentRequestsByIp.set(ip, recentHistory);
  return false;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function json(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
}

function jsonWithHeaders(res, status, payload, headers = {}) {
  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  json(res, status, payload);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' });
  }

  const { name, email, message, website } = req.body ?? {};
  const cleanedName = String(name ?? '').trim();
  const cleanedEmail = String(email ?? '').trim();
  const cleanedMessage = String(message ?? '').trim();
  const honeypotWebsite = String(website ?? '').trim();

  if (honeypotWebsite) {
    return json(res, 200, { ok: true });
  }

  if (!isValidEmail(cleanedEmail) || cleanedMessage.length < 5 || cleanedMessage.length > 3000 || cleanedName.length > 120) {
    return json(res, 400, { error: 'Invalid input' });
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    return jsonWithHeaders(
      res,
      429,
      { error: 'Too many requests' },
      { 'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)) }
    );
  }

  const apiKey = process.env.MAILERSEND_API_KEY;
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL;
  const fromName = process.env.MAILERSEND_FROM_NAME || 'Weird Productions Website';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'lindsay@weirdproductions.art';

  if (!apiKey || !fromEmail) {
    return json(res, 500, { error: 'Missing MailerSend configuration' });
  }

  const submittedAt = new Date().toISOString();

  const textBody = [
    'New message from weirdproductions.art',
    '',
    `Submitted At (UTC): ${submittedAt}`,
    `Name: ${cleanedName || 'Not provided'}`,
    `From: ${cleanedEmail}`,
    '',
    'Message:',
    cleanedMessage
  ].join('\n');

  const htmlBody = `
    <h2>New message from weirdproductions.art</h2>
    <p><strong>Submitted At (UTC):</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(cleanedName || 'Not provided')}</p>
    <p><strong>From:</strong> ${escapeHtml(cleanedEmail)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(cleanedMessage).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const response = await fetch(MAILERSEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: { email: fromEmail, name: fromName },
        to: [{ email: toEmail }],
        reply_to: { email: cleanedEmail },
        subject: 'New website message',
        text: textBody,
        html: htmlBody
      })
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error('MailerSend send failed:', providerError);
      return json(res, 502, { error: 'Email provider error' });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return json(res, 500, { error: 'Failed to send message' });
  }
}
