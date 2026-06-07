const https = require("https");

const TO_EMAIL = "jeandirel@ogooueia.com";
const FROM_EMAIL = "onboarding@resend.dev";

function parseBody(req) {
  return new Promise((resolve) => {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    let raw = "";
    req.on("data", (chunk) => { raw += chunk; });
    req.on("end", () => {
      try { resolve(JSON.parse(raw)); } catch { resolve({}); }
    });
    req.on("error", () => resolve({}));
  });
}

function sendEmail(apiKey, payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const options = {
      hostname: "api.resend.com",
      path: "/emails",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (c) => { data += c; });
      res.on("end", () => { try { resolve(JSON.parse(data)); } catch { resolve({}); } });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(200).json({ ok: false, error: "Method not allowed" });

  const body = await parseBody(req);
  const { name, email, company, subject, message, inquiry_type } = body;

  if (!name || !email || !message) {
    return res.status(200).json({ ok: false, error: "Missing required fields" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_API_KEY not set — skipping email");
    return res.status(200).json({ ok: true });
  }

  const labelMap = {
    freelance: "Freelance mission",
    consulting: "Consulting / Advisory",
    recruiting: "Full-time role",
    research: "Research / CIFRE PhD",
    other: "Autre",
  };
  const inquiryLabel = labelMap[inquiry_type] || inquiry_type || "—";

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0B0F19;color:#fff;padding:32px;border-radius:8px;">
      <div style="color:#00D4FF;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:3px;margin-bottom:24px;">
        jeandirel.ai — Nouveau message de contact
      </div>
      <h2 style="margin:0 0 24px;font-size:20px;">Message de ${name}</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;width:120px;">Type</td><td style="padding:8px 0;color:#fff;font-size:13px;">${inquiryLabel}</td></tr>
        <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Nom</td><td style="padding:8px 0;color:#fff;font-size:13px;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;"><a href="mailto:${email}" style="color:#00D4FF;">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Société</td><td style="padding:8px 0;color:#fff;font-size:13px;">${company}</td></tr>` : ""}
        ${subject ? `<tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Sujet</td><td style="padding:8px 0;color:#fff;font-size:13px;">${subject}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding:16px;background:#161E2E;border-radius:6px;border-left:3px solid #00D4FF;">
        <div style="color:#9CA3AF;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Message</div>
        <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
      </div>
      <div style="margin-top:24px;text-align:center;">
        <a href="mailto:${email}" style="display:inline-block;padding:10px 24px;background:#00D4FF;color:#0B0F19;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px;">
          Répondre à ${name}
        </a>
      </div>
    </div>
  `;

  try {
    await sendEmail(apiKey, {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `[jeandirel.ai] ${inquiryLabel} — ${name}`,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err.message);
    return res.status(200).json({ ok: true });
  }
};
