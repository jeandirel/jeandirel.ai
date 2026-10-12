import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const fr = lang === "fr";
  const items = [
    ["projects", fr ? "Projets" : "Work"],
    ["about", fr ? "À propos" : "About"],
    ["services", fr ? "Expertises" : "Expertise"],
    ["research", fr ? "Recherche" : "Research"],
  ];
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        document.querySelector('[data-testid="mobile-menu-toggle"]')?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [mobileOpen]);
  const sectionHref = (id) => pathname === "/" ? `#${id}` : `/#${id}`;
  return (
    <header className="editorial-nav" data-testid="site-header">
      <a href="#main-content" className="skip-link">{fr ? "Aller au contenu" : "Skip to content"}</a>
      <div className="editorial-container nav-inner">
        <Link to="/" className="wordmark" data-testid="logo-button" onClick={() => { setMobileOpen(false); if (pathname === "/") window.scrollTo({ top: 0 }); }}>jean direl<span>.</span><span className="wordmark-caption">AI ENGINEER</span></Link>
        <nav className="desktop-nav" aria-label={fr ? "Navigation principale" : "Main navigation"}>
          {items.map(([id, label]) => <a key={id} href={sectionHref(id)} data-testid={`nav-${id}-link`}>{label}</a>)}
          <Link to="/governance" aria-current={pathname === "/governance" ? "page" : undefined}>{fr ? "Gouvernance" : "Governance"}</Link>
        </nav>
        <div className="nav-actions"><button className="language-switch" onClick={toggleLang} data-testid="language-toggle" aria-label={fr ? "Switch to English" : "Passer en français"}><span className={fr ? "selected" : ""}>FR</span><span aria-hidden="true">/</span><span className={!fr ? "selected" : ""}>EN</span></button><a className="nav-contact" href={sectionHref("booking")} data-testid="nav-book-meeting-button">{fr ? "Parlons de votre projet" : "Let’s talk"}<ArrowUpRight size={16} /></a><button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={fr ? "Menu de navigation" : "Navigation menu"} data-testid="mobile-menu-toggle">{mobileOpen ? <X /> : <Menu />}</button></div>
      </div>
      {mobileOpen && <nav id="mobile-navigation" className="mobile-navigation" data-testid="mobile-menu" aria-label={fr ? "Navigation mobile" : "Mobile navigation"}>{items.map(([id, label]) => <a key={id} href={sectionHref(id)} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}<Link to="/governance">{fr ? "Gouvernance" : "Governance"}<ArrowUpRight size={18} /></Link><a href={sectionHref("booking")} onClick={() => setMobileOpen(false)}>{fr ? "Discutons de votre projet" : "Let’s talk about your project"}<ArrowUpRight size={18} /></a></nav>}
    </header>
  );
};
export default Navbar;
