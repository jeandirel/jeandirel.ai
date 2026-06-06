import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { SKILL_GROUPS, CERTIFICATIONS } from "../data/profile";

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
          {SKILL_GROUPS.map((g, idx) => (
            <motion.div
              key={g.group.en}
              data-testid={`skill-group-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
              className="bento-card rounded-md p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00D4FF] mb-4">
                {String(idx + 1).padStart(2, "0")} / {SKILL_GROUPS.length}
              </div>
              <h3 className="font-display text-lg text-white tracking-tight mb-4">
                {g.group[lang]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="overline mb-6">
            {lang === "fr" ? "Certifications" : "Certifications"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.name}
                data-testid={`cert-${i}`}
                className="flex items-start gap-3 p-4 border border-white/10 rounded-md hover:border-white/25 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium truncate">{c.name}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">
                    {c.issuer} · {c.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
