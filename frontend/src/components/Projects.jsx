import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";
import { PROJECTS } from "../data/projects";

const FILTERS = {
  en: [
    { id: "all", label: "All" },
    { id: "genai", label: "GenAI / RAG" },
    { id: "nlp", label: "NLP / LLM" },
    { id: "ml", label: "ML / Time Series" },
    { id: "vision", label: "Computer Vision" },
    { id: "mlops", label: "MLOps / IoT" },
    { id: "product", label: "Products" },
  ],
  fr: [
    { id: "all", label: "Tous" },
    { id: "genai", label: "GenAI / RAG" },
    { id: "nlp", label: "NLP / LLM" },
    { id: "ml", label: "ML / Séries temporelles" },
    { id: "vision", label: "Vision par ordi." },
    { id: "mlops", label: "MLOps / IoT" },
    { id: "product", label: "Produits" },
  ],
};

const FILTER_TAGS = {
  genai: ["RAG", "GenAI", "MCP", "Agentic AI", "LLM", "AI Safety", "Prompt Injection"],
  nlp: ["NLP", "CamemBERT", "BERT", "LLM", "Fine-tuning", "Mistral 7B", "Llama 2"],
  ml: ["ML", "Time Series", "Forecasting", "Agriculture", "Health", "Random Forest", "Digital Twin", "Remote Sensing", "Predictive"],
  vision: ["Computer Vision", "U-Net", "MediaPipe", "Emotion Detection"],
  mlops: ["MLOps", "IoT", "Docker", "Kubernetes", "FastAPI", "Azure", "Edge AI", "Observability"],
  product: ["Product", "SaaS", "Fullstack", "B2B", "Community", "Web", "Impact AI"],
};

const matchesFilter = (project, filterId) => {
  if (filterId === "all") return true;
  const allowed = FILTER_TAGS[filterId] || [];
  return project.tags.some((tag) => allowed.includes(tag));
};

const Projects = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState("all");
  const filters = FILTERS[lang];

  const visible = PROJECTS.filter((p) => matchesFilter(p, active));

  return (
    <section id="projects" data-testid="projects-section" className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.projects.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="projects-title">
              {lang === "fr" ? "Portfolio de projets" : "Project portfolio"}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
              {lang === "fr"
                ? "Une vue complète de mes projets professionnels, académiques, de recherche et entrepreneuriaux — de l'expérimentation à la production."
                : "A comprehensive view of my professional, academic, research and founder projects — from experimentation to production."}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#00D4FF]">
              {visible.length} {lang === "fr" ? "projets affichés" : "projects shown"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`font-mono text-[10px] uppercase tracking-[0.18em] px-4 py-2 rounded border transition-all duration-200 ${
                active === f.id
                  ? "border-[#00D4FF] text-[#00D4FF] bg-[#00D4FF]/10"
                  : "border-white/10 text-[#9CA3AF] hover:border-white/30 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, idx) => (
              <motion.article
                key={p.id}
                layout
                data-testid={`project-card-${p.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                className="bento-card rounded-md overflow-hidden flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={PROFILE.images[p.image] || PROFILE.images.neural}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#00D4FF] bg-[#0B0F19]/70 backdrop-blur px-2 py-1 rounded">
                      {p.year}
                    </span>
                    {p.status && t.projects.statusLabels[p.status] && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/80 bg-[#0B0F19]/70 backdrop-blur px-2 py-1 rounded border border-white/10">
                        {t.projects.statusLabels[p.status]}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9CA3AF] mb-2">
                    {p.company}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3 tracking-tight">
                    {p.title[lang]}
                  </h3>
                  <p className="text-sm text-[#D1D5DB] leading-relaxed mb-4">
                    {p.summary[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.slice(0, 6).map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {p.metrics && (
                    <div className="mb-4 rounded border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-3 py-2 font-mono text-[10px] leading-relaxed tracking-wide text-[#67E8F9]">
                      {p.metrics[lang]}
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="text-xs text-[#9CA3AF] italic leading-relaxed">
                      {p.impact[lang]}
                    </div>

                    {p.links?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.links.map((link) => (
                          <a
                            key={`${p.id}-${link.url}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#D1D5DB] transition-colors hover:border-[#00D4FF]/60 hover:text-[#00D4FF]"
                            aria-label={`${link.label[lang]} — ${p.title[lang]}`}
                          >
                            {link.label[lang]}
                            <ArrowUpRight size={12} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="text-center text-[#9CA3AF] font-mono text-sm py-16">
            {lang === "fr" ? "Aucun projet dans cette catégorie." : "No projects in this category."}
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
