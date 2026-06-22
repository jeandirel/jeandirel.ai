import React, { useEffect, useState } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

// `route` items navigate to a dedicated page; the rest scroll to a homepage section.
const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "ventures", key: "ventures" },
  { id: "experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "architectures", key: "architectures" },
  { id: "research", key: "research" },
  { id: "services", key: "services" },
  { id: "governance", key: "governance", route: "/governance" },
];

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to a homepage section; if we're on another route, go home first.
  const goToSection = (id) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  };

  const handleNavClick = (item) => {
    setMobileOpen(false);
    if (item.route) {
      navigate(item.route);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    goToSection(item.id);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (isHome) goToSection("hero");
    else navigate("/");
  };

  const cvUrl = lang === "fr" ? PROFILE.links.cvFr : PROFILE.links.cvEn;

  const isActive = (item) => item.route && location.pathname === item.route;

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0B0F19]/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="logo-button"
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-white font-display text-lg tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] pulse-dot" />
          <span>Jean Direl</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}-link`}
              onClick={() => handleNavClick(item)}
              aria-current={isActive(item) ? "page" : undefined}
              className={`text-sm transition-colors link-underline ${
                isActive(item) ? "text-[#00D4FF]" : "text-[#D1D5DB] hover:text-white"
              }`}
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="language-toggle"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 hover:border-white/30 text-xs font-mono text-[#D1D5DB] hover:text-white transition-all"
            aria-label="Toggle language"
          >
            <Globe size={12} />
            <span className="uppercase tracking-wider">{lang}</span>
          </button>

          <a
            data-testid="nav-download-cv"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/30 text-xs text-[#D1D5DB] hover:text-white transition-all"
          >
            <Download size={12} />
            <span>{t.nav.downloadCV}</span>
          </a>

          <button
            data-testid="nav-book-meeting-button"
            onClick={() => goToSection("booking")}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] text-sm font-medium transition-all active:scale-[0.98]"
          >
            {t.nav.booking}
          </button>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-white/10 bg-[#0B0F19]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item)}
                aria-current={isActive(item) ? "page" : undefined}
                className={`text-left py-2.5 text-sm border-b border-white/5 ${
                  isActive(item) ? "text-[#00D4FF]" : "text-[#D1D5DB] hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </button>
            ))}
            <button
              data-testid="mobile-nav-contact"
              onClick={() => {
                setMobileOpen(false);
                goToSection("contact");
              }}
              className="text-left py-2.5 text-sm text-[#D1D5DB] hover:text-white border-b border-white/5"
            >
              {t.nav.contact}
            </button>
            <button
              data-testid="mobile-nav-book"
              onClick={() => {
                setMobileOpen(false);
                goToSection("booking");
              }}
              className="mt-3 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#00D4FF] text-[#0B0F19] text-sm font-medium"
            >
              {t.nav.booking}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
