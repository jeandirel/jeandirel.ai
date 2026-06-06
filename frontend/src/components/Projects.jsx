import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROJECTS, PROFILE } from "../data/profile";

const Projects = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" data-testid="projects-section" className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.projects.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="projects-title">
              {t.projects.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.id}
              data-testid={`project-card-${p.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              className="bento-card rounded-md overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={PROFILE.images[p.image]}
                  alt={p.title[lang]}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#00D4FF] bg-[#0B0F19]/70 backdrop-blur px-2 py-1 rounded">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9CA3AF] mb-2">
                  {p.company}
                </div>
                <h3 className="font-display text-xl text-white mb-3 tracking-tight">
                  {p.title[lang]}
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-4 flex-1">
                  {p.summary[lang]}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-[#9CA3AF] italic leading-relaxed">
                    {p.impact[lang]}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
