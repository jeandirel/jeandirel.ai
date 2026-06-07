import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { SKILL_GROUPS, CERTIFICATIONS } from "../data/profile";

const LEVEL_COLORS = { cyan: "#00D4FF", violet: "#7C3AED", white: "#D1D5DB" };
const ISSUER_ACCENTS = { "UC Berkeley": "cyan", IBM: "violet", LinkedIn: "white" };

const ProficiencyDots = ({ level, accent }) => {
  const color = LEVEL_COLORS[accent] || "#9CA3AF";
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < level ? (level === 5 ? "dot-expert" : "") : ""}
          style={{
            display: "inline-block",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: i < level ? color : "rgba(255,255,255,0.1)",
            transition: "background 0.3s",
          }}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" data-testid="skills-section" className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.skills.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="skills-title">
              {t.skills.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((g, idx) => {
            const accentColor = LEVEL_COLORS[g.accent] || "#9CA3AF";
            const cardClass = g.accent === "cyan" ? "bento-card-cyan" : g.accent === "violet" ? "bento-card-violet" : "";
            const levelLabel = t.skills.levelLabel[g.level] || "";

            return (
              <motion.div
                key={g.group.en}
                data-testid={`skill-group-${idx}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                className={`bento-card ${cardClass} rounded-md p-5`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: accentColor }}>
                    {String(idx + 1).padStart(2, "0")} / {SKILL_GROUPS.length}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#6B7280]">
                      {levelLabel}
                    </span>
                    <ProficiencyDots level={g.level} accent={g.accent} />
                  </div>
                </div>

                <h3 className="font-display text-base text-white tracking-tight mb-3" style={{ color: g.level === 5 ? "#fff" : "#e5e7eb" }}>
                  {g.group[lang]}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => {
                    const isFeatured = g.featured && g.featured.includes(it);
                    return (
                      <span key={it} className={`chip ${isFeatured ? "chip-featured" : ""}`}>
                        {it}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="overline mb-6">Certifications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((c, i) => {
              const accentKey = ISSUER_ACCENTS[c.issuer] || "white";
              const dotColor = LEVEL_COLORS[accentKey];
              return (
                <motion.div
                  key={c.name}
                  data-testid={`cert-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-start gap-3 p-4 border border-white/10 rounded-md hover:border-white/25 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: dotColor }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium leading-snug">{c.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: dotColor }}>
                      {c.issuer}
                      <span className="text-[#6B7280]"> · {c.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
