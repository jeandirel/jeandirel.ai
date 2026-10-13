import React from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const Hero = () => {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  return (
    <section id="hero" data-testid="hero-section" className="editorial-hero">
      <div className="editorial-container">
        <div className="hero-topline"><span>{fr ? "INGÉNIEUR IA · CHERCHEUR · ENTREPRENEUR" : "AI ENGINEER · RESEARCHER · BUILDER"}</span><span className="hero-location">ROUEN, FRANCE ↗ {fr ? "OUVERT SUR LE MONDE" : "WORKING GLOBALLY"}</span></div>
        <div className="hero-composition">
          <div className="hero-copy">
            <p className="hero-intro">{fr ? "Bonjour, je suis Jean Direl." : "Hello, I’m Jean Direl."}</p>
            <h1 data-testid="hero-title">{fr ? "L’intelligence" : "Intelligence,"}<br />{fr ? "artificielle." : "engineered."}<br /><span>{fr ? "L’impact réel." : "Real impact."}</span></h1>
            <p className="hero-description" data-testid="hero-subtitle">{fr ? "Je transforme la recherche en systèmes IA utiles, fiables et déployés. Des données à la production, avec l’humain au centre." : "I turn research into useful, trustworthy AI systems that ship. From data to production, with people at the center."}</p>
            <div className="hero-actions"><a className="editorial-button" href="#projects">{fr ? "Explorer mes projets" : "Explore my work"}<ArrowUpRight size={18} /></a><a className="editorial-text-link" href={fr ? PROFILE.links.cvFr : PROFILE.links.cvEn} target="_blank" rel="noreferrer" data-testid="hero-download-cv">{fr ? "Mon CV" : "My résumé"}<Download size={16} /></a></div>
          </div>
          <figure className="hero-portrait-card">
            <div className="portrait-heading"><span>JEAN DIREL</span><span>01 / PROFILE</span></div>
            <div className="portrait-image"><img src={PROFILE.images.portrait} alt={fr ? "Jean Direl, ingénieur en intelligence artificielle" : "Jean Direl, artificial intelligence engineer"} width="640" height="760" fetchPriority="high" data-testid="hero-portrait" /><span className="portrait-cross" aria-hidden="true">+</span></div>
            <figcaption><div><span className="availability-dot" />{fr ? "Prochaines collaborations" : "Next collaborations"}<strong>{fr ? "Disponible immédiatement" : "Available immediately"}</strong></div><a href="#booking" aria-label={fr ? "Discuter d’une collaboration" : "Discuss a collaboration"} data-testid="hero-book-meeting"><ArrowUpRight size={23} /></a></figcaption>
            <div className="portrait-credit"><a href="https://v0.dev" target="_blank" rel="noreferrer" className="v0-credit">Built with <span>v0</span></a></div>
          </figure>
        </div>
        <div className="hero-bottom"><a href="#projects"><ArrowDown size={16} />{fr ? "DU CONCEPT AU CONCRET" : "FROM CONCEPT TO REALITY"}</a><div><span>GENAI & RAG</span><span>{fr ? "AGENTS IA" : "AI AGENTS"}</span><span>MLOPS</span><span>{fr ? "IA RESPONSABLE" : "RESPONSIBLE AI"}</span></div></div>
      </div>
    </section>
  );
};
export default Hero;
