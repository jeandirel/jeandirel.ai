import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { EXPERIENCES } from "../data/profile";

const Experience = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" data-testid="experience-section" className="py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.experience.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="experience-title">
              {t.experience.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-2">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              data-testid={`experience-item-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 border-t border-white/10 hover:bg-white/[0.02] transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4 rounded"
            >
              <div className="lg:col-span-3">
                <div className="font-mono text-xs text-[#00D4FF] uppercase tracking-[0.15em] mb-1">
                  {exp.period}
                </div>
                <div className="font-display text-xl text-white tracking-tight">
                  {exp.company}
                </div>
                <div className="text-xs text-[#9CA3AF] mt-1">
                  {exp.location} · {exp.type}
                </div>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <h3 className="text-lg text-white font-medium mb-3">{exp.role[lang]}</h3>
                <p className="text-[#D1D5DB] text-sm lg:text-base leading-relaxed mb-4">
                  {exp.description[lang]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
