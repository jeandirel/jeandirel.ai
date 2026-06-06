import React from "react";
import { ArrowUpRight, GraduationCap, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE, RESEARCH_INTERESTS } from "../data/profile";

const Research = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="research" data-testid="research-section" className="py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="overline mb-4">{t.research.eyebrow}</p>
        </div>

        {/* Featured Paper */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 mb-20"
          data-testid="research-paper-card"
        >
          <div className="lg:col-span-7">
            <div className="surface rounded-md p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D4FF]/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Microscope size={14} className="text-[#00D4FF]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00D4FF]">
                    Research Square · Preprint · May 2026
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-white tracking-tighter leading-[1.1] mb-4" data-testid="research-title">
                  {t.research.title}
                </h2>
                <p className="text-[#D1D5DB] text-base lg:text-lg leading-relaxed mb-6">
                  {t.research.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    data-testid="research-doi-link"
                    href={PROFILE.links.researchSquare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] text-sm font-medium transition-all"
                  >
                    {t.research.readPaper}
                    <ArrowUpRight size={14} />
                  </a>
                  <span className="font-mono text-xs text-[#9CA3AF]">{t.research.doi}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="surface rounded-md p-8 lg:p-10 h-full">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={14} className="text-[#7C3AED]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C3AED]">
                  CIFRE PhD · 2026
                </span>
              </div>
              <h3 className="font-display text-2xl text-white tracking-tight mb-4" data-testid="research-cifre-title">
                {t.research.cifreTitle}
              </h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
                {t.research.cifreBody}
              </p>
              <button
                data-testid="research-cifre-cta"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-sm text-white link-underline"
              >
                {t.research.cifreCTA}
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Research Interests */}
        <div>
          <p className="overline mb-6">{t.research.interestsTitle}</p>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((r, i) => (
              <motion.span
                key={i}
                data-testid={`research-interest-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-[#D1D5DB] hover:text-white hover:border-white/30 transition-all"
              >
                {r[lang]}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
