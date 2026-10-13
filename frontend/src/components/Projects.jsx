import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Database, Network, Mail, FileText, ShieldCheck, Sprout, Activity, Plus, Minus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PROJECTS } from "../data/projects";

const FILTERS = [
  { id: "all", fr: "Tous les projets", en: "All projects", tags: [] },
  { id: "genai", fr: "GenAI & RAG", en: "GenAI & RAG", tags: ["RAG", "GenAI", "Agentic AI", "LLM", "AI Safety"] },
  { id: "nlp", fr: "NLP & LLM", en: "NLP & LLM", tags: ["NLP", "CamemBERT", "BERT", "LLM", "Fine-tuning"] },
  { id: "ml", fr: "Machine Learning", en: "Machine Learning", tags: ["ML", "Time Series", "Forecasting", "Predictive"] },
  { id: "vision", fr: "Vision", en: "Vision", tags: ["Computer Vision", "U-Net", "MediaPipe"] },
  { id: "mlops", fr: "MLOps & IoT", en: "MLOps & IoT", tags: ["MLOps", "IoT", "Docker", "Kubernetes", "Edge AI"] },
  { id: "product", fr: "Produits", en: "Products", tags: ["Product", "SaaS", "Fullstack", "B2B", "Community", "Web", "Impact AI"] },
];

function ProjectVisual({ project, index, fr }) {
  const isRag = project.id === "pfe-dnsi-rag";
  const isMail = project.id === "email-classifier";
  const Icon = isRag ? Database : isMail ? Mail : project.tags.includes("Agriculture") ? Sprout : project.tags.includes("Health") ? Activity : Network;
  return <div className={`project-visual visual-${index % 4}`} aria-hidden="true">
    <div className="visual-top"><span>{isRag ? "KNOWLEDGE → INTELLIGENCE" : isMail ? "LANGUAGE → STRUCTURE" : "DATA → DECISIONS"}</span><span>0{index + 1}</span></div>
    <div className="system-diagram"><div className="diagram-node"><FileText size={23} /><span>{isMail ? "OUTLOOK" : "DATA"}</span></div><span className="diagram-connection" /><div className="diagram-core"><Icon size={38} strokeWidth={1.2} /><span>{isRag ? "RAG" : isMail ? "CamemBERT" : "ML ENGINE"}</span></div><span className="diagram-connection" /><div className="diagram-node"><ShieldCheck size={23} /><span>{isMail ? "TICKET" : "OUTPUT"}</span></div></div>
    <div className="visual-bottom"><span>{isRag ? "MISTRAL × QDRANT" : isMail ? "70K EMAILS · 3 LEVELS" : project.tags.slice(0, 2).join(" / ")}</span><span>{fr ? "SCHÉMA CONCEPTUEL" : "CONCEPTUAL DIAGRAM"}</span></div>
  </div>;
}

export default function Projects() {
  const { lang, t } = useLanguage();
  const fr = lang === "fr";
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const filter = FILTERS.find((item) => item.id === active);
  const matching = PROJECTS.filter((project) => active === "all" || project.tags.some((tag) => filter.tags.includes(tag)));
  const visible = showAll ? matching : matching.slice(0, 4);
  return <section id="projects" data-testid="projects-section" className="editorial-projects">
    <div className="editorial-container">
      <div className="section-kicker"><span>01 / {fr ? "RÉALISATIONS" : "SELECTED WORK"}</span><span>2023 — 2026</span></div>
      <div className="projects-heading"><h2 data-testid="projects-title">{fr ? "Moins de promesses." : "Less promise."}<br /><span>{fr ? "Plus de preuves." : "More proof."}</span></h2><p>{fr ? "Des systèmes déployés, des expérimentations rigoureuses et des résultats documentés. Voici comment je passe de l’idée à l’impact." : "Deployed systems, rigorous experiments and documented results. Here’s how I go from an idea to real impact."}</p></div>
      <div className="project-filters" role="group" aria-label={fr ? "Filtrer les projets" : "Filter projects"}>{FILTERS.map((item) => <button key={item.id} onClick={() => { setActive(item.id); setShowAll(false); }} aria-pressed={active === item.id}>{item[lang]}{item.id === "all" && <span>{PROJECTS.length}</span>}</button>)}</div>
      <p className="sr-only" role="status">{matching.length} {fr ? "projets trouvés" : "projects found"}</p>
      <div className="editorial-project-grid">
        {visible.map((project, index) => <article key={project.id} className="editorial-project" data-testid={`project-card-${project.id}`}>
          <ProjectVisual project={project} index={index} fr={fr} />
          <div className="project-meta"><span>{project.company}</span><span>{t.projects.statusLabels[project.status] || project.status}</span></div>
          <h3>{project.title[lang]}</h3>
          <p className="project-summary">{project.summary[lang]}</p>
          <div className="project-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <details className="project-details"><summary>{fr ? "Résultats & détails" : "Results & details"}<Plus size={17} className="details-plus" /><Minus size={17} className="details-minus" /></summary><div className="project-evidence">{project.metrics && <strong>{project.metrics[lang]}</strong>}<p>{project.impact[lang]}</p>{project.links?.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label[lang]}<ArrowUpRight size={15} /></a>)}</div></details>
        </article>)}
      </div>
      {!matching.length && <p className="project-empty">{fr ? "Aucun projet dans cette catégorie." : "No projects in this category."}</p>}
      {matching.length > 4 && <div className="project-more"><span>{visible.length} / {matching.length} {fr ? "projets" : "projects"}</span><button className="editorial-text-link" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{showAll ? (fr ? "Réduire la sélection" : "Show less") : (fr ? "Explorer tous les projets" : "Explore all projects")}<ArrowRight size={18} /></button></div>}
    </div>
  </section>;
}
