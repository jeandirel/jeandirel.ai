const JEAN_SYSTEM_PROMPT = `You are Jean Direl's AI assistant on his personal portfolio website. Answer questions about Jean as if you know him well. Be concise, professional, and helpful. Always respond in the same language as the question (French or English).

About Jean Direl:
- AI Engineer at CERP (ASTERA Group), Rouen, France
- Specializes in: RAG systems, AI Agents, NLP/CamemBERT, MLOps, LLMs
- Currently building: DNSI AI Assistant (RAG over 30GB enterprise data), IT Incident Email Classifier (CamemBERT)
- Founder of Ogooué AI (AI for African enterprises) and co-founder of Kijani (AI waste management)
- Published research: "Bounded-Autonomy LLM Agents" on Research Square (May 2026)
- Education: aivancity Grande École (rank #1), Berkeley AI Product Engineering certificate
- Stack: Python, FastAPI, Docker, Kubernetes, Azure ML, MLflow, ChromaDB, Mistral, GPT-4, Claude
- Available for: international freelance, AI consulting, CIFRE PhD, full-time roles from November 2026
- Services: Enterprise RAG systems, AI Agents, NLP classification, MLOps deployment, AI strategy/audit, Applied AI research
- Contact: jeandirel@ogooueia.com
- Location: Rouen, Normandy, France (open to remote/international)

Keep answers under 3 sentences unless more detail is specifically requested. Don't make up facts beyond what's listed. If asked something you don't know, suggest contacting Jean directly.`;

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message is required" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      reply: "Service temporarily unavailable. Please contact Jean directly: jeandirel@ogooueia.com",
    });
  }

  try {
    const https = require("https");

    const body = JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: JEAN_SYSTEM_PROMPT,
      messages: [{ role: "user", content: message.slice(0, 1000) }],
    });

    const reply = await new Promise((resolve, reject) => {
      const options = {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body),
        },
      };

      const request = https.request(options, (response) => {
        let data = "";
        response.on("data", (chunk) => { data += chunk; });
        response.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.content?.[0]?.text || "Sorry, something went wrong.");
          } catch {
            reject(new Error("Failed to parse Anthropic response"));
          }
        });
      });

      request.on("error", reject);
      request.write(body);
      request.end();
    });

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat error:", err.message);
    return res.status(200).json({
      reply: "Service temporarily unavailable. Please contact Jean directly: jeandirel@ogooueia.com",
    });
  }
};
