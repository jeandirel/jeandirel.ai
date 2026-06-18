import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Check, Minus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ARCH_LEVELS } from "../data/aiArchitectures";

const ACCENTS = { cyan: "#00D4FF", violet: "#7C3AED", white: "#D1D5DB" };

const Section = ({ label, children }) => (
  <div className="pt-6 mt-6 border-t border-white/10 first:pt-0 first:mt-0 first:border-0">
    <p className="overline mb-4">{label}</p>
    {children}
  </div>
);

const ArchitectureModal = ({ arch, onClose }) => {
  const { t, lang } = useLanguage();

  // Lock body scroll + Escape to close while the panel is open.
  useEffect(() => {
    if (!arch) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [arch, onClose]);

  const d = arch?.detail;
  const accent = arch ? ACCENTS[ARCH_LEVELS[arch.level]?.accent] || ACCENTS.cyan : ACCENTS.cyan;
  const m = t.architectures.modal;

  return createPortal(
    <AnimatePresence>
      {arch && (
        <motion.div
          data-testid="architecture-modal"
          className="fixed inset-0 z-[120] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            data-testid="architecture-modal-backdrop"
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="relative w-full max-w-2xl h-full overflow-y-auto bg-[#0B0F19] border-l border-white/10"
          >
            {/* Accent top line */}
            <div
              className="sticky top-0 h-[2px] z-10"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
            />

            {/* Header */}
            <div className="sticky top-[2px] z-10 backdrop-blur-xl bg-[#0B0F19]/85 border-b border-white/10 px-6 lg:px-10 py-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full status-dot" style={{ background: accent }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: accent }}>
                    {t.architectures.levels[arch.level] || arch.level}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-white tracking-tight leading-tight">
                  {arch.title[lang]}
                </h3>
              </div>
              <button
                data-testid="architecture-modal-close"
                onClick={onClose}
                aria-label={m.close}
                className="flex-shrink-0 p-2 rounded-md border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/30 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 lg:px-10 py-8">
              {/* Use case strip */}
              <div className="surface rounded-md p-4 mb-2 flex items-start gap-3">
                <ArrowUpRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF]">
                    {m.useCaseLabel}
                  </span>
                  <p className="text-sm text-[#D1D5DB] leading-relaxed mt-1">{arch.useCase[lang]}</p>
                </div>
              </div>

              <Section label={m.overview}>
                <p className="text-base text-[#D1D5DB] leading-relaxed font-light">{d.overview[lang]}</p>
              </Section>

              <Section label={m.architecture}>
                <ol className="space-y-3">
                  {d.stages[lang].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-0.5 w-6 h-6 rounded border border-white/10 font-mono text-[10px] flex items-center justify-center"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-[#D1D5DB] leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </Section>

              <Section label={m.tech}>
                <div className="flex flex-wrap gap-1.5">
                  {arch.tech.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              </Section>

              <Section label={m.bestPractices}>
                <ul className="space-y-2.5">
                  {d.bestPractices[lang].map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#D1D5DB] leading-relaxed">
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section label={m.useCases}>
                <ul className="space-y-2.5">
                  {d.realUseCases[lang].map((u, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#D1D5DB] leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                      {u}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Advantages / Limits */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                <div className="surface rounded-md p-5">
                  <p className="overline mb-4">{m.advantages}</p>
                  <ul className="space-y-2">
                    {d.advantages[lang].map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#D1D5DB] leading-relaxed">
                        <Check size={13} className="mt-0.5 flex-shrink-0 text-[#00D4FF]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="surface rounded-md p-5">
                  <p className="overline mb-4">{m.limits}</p>
                  <ul className="space-y-2">
                    {d.limits[lang].map((l, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF] leading-relaxed">
                        <Minus size={13} className="mt-0.5 flex-shrink-0 text-[#7C3AED]" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Section label={m.skills}>
                <div className="flex flex-wrap gap-1.5">
                  {arch.detail.skills.map((s) => (
                    <span key={s} className="chip chip-featured">{s}</span>
                  ))}
                </div>
              </Section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ArchitectureModal;
