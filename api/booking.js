const https = require("https");

const TO_EMAIL = "jeandirel@ogooueia.com";
const FROM_EMAIL = "onboarding@resend.dev";

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

  try {
    if (req.method !== "POST") return res.status(200).json({ ok: false, error: "Method not allowed" });

    let body = req.body;
    if (Buffer.isBuffer(body)) body = JSON.parse(body.toString("utf8"));
    else if (typeof body === "string") body = JSON.parse(body);
    if (!body || typeof body !== "object") body = {};

    const { name, email, company, purpose, preferred_date, notes } = body;

    if (!name || !email || !purpose) {
      return res.status(200).json({ ok: false, error: "Missing required fields" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log("RESEND_API_KEY not set — skipping email");
      return res.status(200).json({ ok: true });
    }

    const safeName = String(name).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeEmail = String(email).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeCompany = company ? String(company).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
    const safePurpose = String(purpose).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeDate = preferred_date ? String(preferred_date).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
    const safeNotes = notes ? String(notes).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0B0F19;color:#fff;padding:32px;border-radius:8px;">
        <div style="color:#00D4FF;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:3px;margin-bottom:24px;">
          jeandirel.ai — Nouvelle demande de RDV
        </div>
        <h2 style="margin:0 0 24px;font-size:20px;">Demande de réunion de ${safeName}</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;width:140px;">Nom</td><td style="padding:8px 0;color:#fff;font-size:13px;">${safeName}</td></tr>
          <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;"><a href="mailto:${safeEmail}" style="color:#00D4FF;">${safeEmail}</a></td></tr>
          ${safeCompany ? `<tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Société / Labo</td><td style="padding:8px 0;color:#fff;font-size:13px;">${safeCompany}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Objet</td><td style="padding:8px 0;color:#fff;font-size:13px;">${safePurpose}</td></tr>
          ${safeDate ? `<tr><td style="padding:8px 0;color:#9CA3AF;font-size:13px;">Date souhaitée</td><td style="padding:8px 0;color:#fff;font-size:13px;">${safeDate}</td></tr>` : ""}
        </table>
        ${safeNotes ? `
        <div style="margin-top:24px;padding:16px;background:#161E2E;border-radius:6px;border-left:3px solid #7C3AED;">
          <div style="color:#9CA3AF;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Notes</div>
          <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safeNotes}</p>
        </div>` : ""}
        <div style="margin-top:24px;text-align:center;">
          <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 24px;background:#00D4FF;color:#0B0F19;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px;">
            Répondre à ${safeName}
          </a>
        </div>
      </div>
    `;

    await sendEmail(apiKey, {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `[jeandirel.ai] RDV — ${name} · ${purpose}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Booking handler error:", err.message || err);
    return res.status(200).json({ ok: true });
  }
};
