import React from "react";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const Footer = () => {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const cvUrl = lang === "fr" ? PROFILE.links.cvFr : PROFILE.links.cvEn;

  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-[#0B0F19] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="font-display text-2xl text-white tracking-tight">Jean Direl</span>
          </div>
          <p className="text-sm text-[#9CA3AF] mb-6 max-w-md">{t.footer.tagline}</p>
          <div className="flex items-center gap-3">
            <a
              data-testid="footer-linkedin"
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 hover:border-white/30 text-[#D1D5DB] hover:text-white transition-all"
            >
              <Linkedin size={14} />
            </a>
            <a
              data-testid="footer-github"
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 hover:border-white/30 text-[#D1D5DB] hover:text-white transition-all"
            >
              <Github size={14} />
            </a>
            <a
              data-testid="footer-email"
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 hover:border-white/30 text-[#D1D5DB] hover:text-white transition-all"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="overline mb-4">{t.footer.sections.site}</p>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a></li>
            <li><a href="#research" className="hover:text-white transition-colors">{t.nav.research}</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="overline mb-4">{t.footer.sections.connect}</p>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a href="#booking" className="hover:text-white transition-colors">{t.nav.booking}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            <li><a href={cvUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.nav.downloadCV}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="overline mb-4">{t.footer.sections.legal}</p>
          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
            {PROFILE.location}
          </p>
          <button
            data-testid="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm text-[#D1D5DB] hover:text-white link-underline"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-[#9CA3AF] font-mono">
          © {year} Jean Direl · {t.footer.rights}
        </p>
        <p className="text-xs text-[#9CA3AF] font-mono">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
};

export default Footer;
