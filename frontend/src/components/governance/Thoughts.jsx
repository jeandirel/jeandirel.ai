import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { PROFILE } from "../../data/profile";
import { THOUGHTS } from "../../data/governance";
import SectionHeading from "./SectionHeading";
import DownloadButton from "./DownloadButton";

const resolveCover = (cover) => (PROFILE.images[cover] ? PROFILE.images[cover] : cover);

const formatDate = (iso, lang) => {
  try {
    return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch (e) {
    return iso;
  }
};

const ThoughtModal = ({ thought, lang, labels, onClose }) => {
  const onKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onKey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[300] flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`thought-modal-title-${thought.id}`}
      data-testid="thought-modal"
    >
      <div className="absolute inset-0 bg-[#0B0F19]/85 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <motion.article
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative w-full max-w-2xl rounded-lg overflow-hidden my-auto"
      >
        <div className="relative h-44 overflow-hidden">
          <img src={resolveCover(thought.cover)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent" />
          <button
            onClick={onClose}
            aria-label={labels.close}
            data-testid="thought-modal-close"
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-md border border-white/15 bg-[#0B0F19]/60 text-white hover:border-white/40 transition-all"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-7 lg:p-9">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#9CA3AF] mb-4">
            <span className="px-2 py-0.5 rounded-full border border-white/10 text-[#D1D5DB]">
              {thought.category[lang]}
            </span>
            <span>{formatDate(thought.date, lang)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} /> {thought.readingTime} {labels.minRead}
            </span>
          </div>
          <h3
            id={`thought-modal-title-${thought.id}`}
            className="font-display text-2xl lg:text-3xl text-white tracking-tight mb-5 leading-[1.12]"
          >
            {thought.title[lang]}
          </h3>
          <div className="space-y-4 text-[#D1D5DB] text-base leading-relaxed max-h-[40vh] overflow-y-auto pr-1">
            {thought.body.map((para, i) => (
              <p key={i}>{para[lang]}</p>
            ))}
          </div>
          <div className="mt-7 pt-6 border-t border-white/10">
            <DownloadButton
              href={thought.pdf}
              label={labels.download}
              variant="solid"
              data-testid={`thought-modal-download-${thought.id}`}
            />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

const Thoughts = () => {
  const { t, lang } = useLanguage();
  const th = t.governance.thoughts;
  const [active, setActive] = useState(null);

  return (
    <section
      id="gov-thoughts"
      data-testid="governance-thoughts"
      className="relative py-24 lg:py-32 border-t border-white/10"
      aria-labelledby="gov-thoughts-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-thoughts-title"
          eyebrow={th.eyebrow}
          title={th.title}
          subtitle={th.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {THOUGHTS.map((thought, i) => (
            <motion.article
              key={thought.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="surface gov-glow rounded-md overflow-hidden flex flex-col group"
              data-testid={`thought-card-${thought.id}`}
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={resolveCover(thought.cover)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#0B0F19]/70 border border-white/10 text-[10px] font-mono uppercase tracking-[0.16em] text-[#D1D5DB]">
                  {thought.category[lang]}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                  <span>{formatDate(thought.date, lang)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} /> {thought.readingTime} {th.minRead}
                  </span>
                </div>
                <h3 className="font-display text-lg text-white tracking-tight mb-2 leading-snug">
                  {thought.title[lang]}
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-5 flex-1">
                  {thought.summary[lang]}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive(thought)}
                    data-testid={`thought-read-${thought.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white text-[#0B0F19] hover:bg-[#D1D5DB] text-sm font-medium transition-all"
                  >
                    <BookOpen size={14} />
                    {th.read}
                  </button>
                  <DownloadButton
                    href={thought.pdf}
                    label={th.download}
                    variant="ghost"
                    data-testid={`thought-download-${thought.id}`}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ThoughtModal
            thought={active}
            lang={lang}
            labels={th}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Thoughts;
