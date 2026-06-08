import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { VENTURES } from "../data/profile";

const STATUS_STYLES = {
  live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  building: "text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/30",
  active: "text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/30",
};

const STATUS_DOT = {
  live: "bg-emerald-400",
  building: "bg-[#00D4FF]",
  active: "bg-[#7C3AED]",
};

const VentureCard = ({ venture, featured, lang, t, index }) => {
  const hostname = venture.url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <motion.a
      href={venture.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`venture-card-${venture.id}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`bento-card bento-card-violet rounded-md flex flex-col group${featured ? " md:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className={`flex-1 flex flex-col ${featured ? "p-7 lg:p-9" : "p-6"}`}>
        {/* Top row: type + status */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7C3AED]">
            {venture.type[lang]}
          </span>
          <span
            className={`flex-shrink-0 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded border ${STATUS_STYLES[venture.status]}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[venture.status]}`} />
            {t.ventures.statusLabels[venture.status]}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display text-white tracking-tight mb-3 ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}
        >
          {venture.title[lang]}
        </h3>

        {/* Description */}
        <p className={`text-[#D1D5DB] leading-relaxed mb-5 flex-1 ${featured ? "text-base" : "text-sm"}`}>
          {venture.summary[lang]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {venture.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF] truncate">
              {venture.role[lang]}
            </span>
            <span className="text-white/20 flex-shrink-0">·</span>
            <span className="font-mono text-[10px] text-[#9CA3AF] flex-shrink-0">
              {venture.year}
            </span>
          </div>
          <span className="flex-shrink-0 flex items-center gap-1 font-mono text-[11px] text-[#9CA3AF] group-hover:text-[#7C3AED] transition-colors duration-300">
            {hostname}
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const Ventures = () => {
  const { t, lang } = useLanguage();

  const featured = VENTURES.find((v) => v.featured);
  const rest = VENTURES.filter((v) => !v.featured);

  return (
    <section
      id="ventures"
      data-testid="ventures-section"
      className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.ventures.eyebrow}</p>
            <h2
              className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]"
              data-testid="ventures-title"
            >
              {t.ventures.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.ventures.subtitle}
          </p>
        </div>

        {/* Bento grid — 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured card — Ogooué IA */}
          {featured && (
            <VentureCard
              venture={featured}
              featured
              lang={lang}
              t={t}
              index={0}
            />
          )}

          {/* Linka */}
          {rest[0] && (
            <VentureCard
              venture={rest[0]}
              featured={false}
              lang={lang}
              t={t}
              index={1}
            />
          )}

          {/* ChatNexa */}
          {rest[1] && (
            <VentureCard
              venture={rest[1]}
              featured={false}
              lang={lang}
              t={t}
              index={2}
            />
          )}

          {/* Gabon Diaspora */}
          {rest[2] && (
            <VentureCard
              venture={rest[2]}
              featured={false}
              lang={lang}
              t={t}
              index={3}
            />
          )}

          {/* Founder statement card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="bento-card bento-card-violet rounded-md p-6 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7C3AED] mb-5">
                {t.ventures.founderTag}
              </p>
              <p className="font-display text-2xl lg:text-3xl text-white tracking-tighter leading-tight whitespace-pre-line">
                {t.ventures.founderStatement}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mt-4 mb-6">
                {t.ventures.founderBody}
              </p>
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display text-3xl text-white tracking-tight">4</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF] mt-0.5">
                    {t.ventures.stat1}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white tracking-tight">0→1</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF] mt-0.5">
                    {t.ventures.stat2}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
