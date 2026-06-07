import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";

const SUGGESTIONS = {
  en: [
    "What are Jean's main skills?",
    "What services does he offer?",
    "Is Jean available for freelance?",
    "Tell me about his research",
  ],
  fr: [
    "Quelles sont les compétences de Jean ?",
    "Quels services propose-t-il ?",
    "Jean est-il disponible en freelance ?",
    "Parle-moi de sa recherche",
  ],
};

const AskJean = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang] = useState(() => localStorage.getItem("jd_lang") || "en");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = SUGGESTIONS[lang] || SUGGESTIONS.en;

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setLoading(true);
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/chat`, {
        message: trimmed,
        history: messages.map((m) => ({ role: m.role, content: m.content })),
      });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            lang === "fr"
              ? "Service temporairement indisponible. Contactez Jean directement : jeandirel@ogooueia.com"
              : "Service temporarily unavailable. Contact Jean directly: jeandirel@ogooueia.com",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 left-6 z-[150] flex items-center gap-2 px-4 py-3 rounded-full bg-[#0B0F19] border border-[#00D4FF]/40 text-[#00D4FF] shadow-lg shadow-[#00D4FF]/10 hover:bg-[#00D4FF]/10 transition-all duration-300 ${open ? "hidden" : "flex"}`}
        aria-label="Ask Jean AI"
      >
        <Bot size={18} />
        <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Ask Jean</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] pulse-dot" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-6 z-[150] w-[340px] sm:w-[380px] flex flex-col rounded-xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/60 overflow-hidden"
            style={{ maxHeight: "min(520px, calc(100vh - 96px))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0B0F19]">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-[#00D4FF]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">Ask Jean</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] pulse-dot" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#9CA3AF] hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-[#D1D5DB] leading-relaxed">
                    {lang === "fr"
                      ? "Bonjour ! Je suis l'assistant IA de Jean. Posez-moi vos questions sur son parcours, ses projets ou ses services."
                      : "Hi! I'm Jean's AI assistant. Ask me anything about his background, projects, or services."}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-left text-xs text-[#9CA3AF] px-3 py-2 rounded border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-all duration-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#00D4FF]/15 text-white border border-[#00D4FF]/20"
                        : "bg-white/[0.06] text-[#D1D5DB] border border-white/[0.08]"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] border border-white/[0.08] px-3 py-2 rounded-lg">
                    <Loader2 size={14} className="text-[#00D4FF] animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 px-3 py-3 bg-[#0B0F19]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={lang === "fr" ? "Posez votre question…" : "Ask a question…"}
                  maxLength={500}
                  className="flex-1 bg-transparent text-sm text-white placeholder-[#9CA3AF] outline-none"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="text-[#00D4FF] disabled:opacity-30 hover:text-white transition-colors"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskJean;
