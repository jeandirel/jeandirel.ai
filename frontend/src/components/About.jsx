import React from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const About = () => {
  const { t, lang } = useLanguage();
  const cvUrl = lang === "fr" ? PROFILE.links.cvFr : PROFILE.links.cvEn;

  return (
    <section id="about" data-testid="about-section" className="py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="overline mb-4">{t.about.eyebrow}</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="about-title">
            {t.about.title}
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 lg:col-start-6 space-y-6 text-[#D1D5DB] text-base lg:text-lg leading-relaxed"
          data-testid="about-body"
        >
          <p>{t.about.body1}</p>
          <p>{t.about.body2}</p>
          <p>{t.about.body3}</p>

          <div className="pt-6 mt-2 border-t border-white/10">
            <div className="flex items-start gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0 pulse-dot" />
              <p className="text-white font-medium">{t.about.availability}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                data-testid="about-download-cv"
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/15 hover:border-white/40 text-sm text-white transition-all"
              >
                <Download size={14} />
                {t.about.downloadCV}
              </a>
              <button
                data-testid="about-contact-button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white text-[#0B0F19] hover:bg-[#D1D5DB] text-sm font-medium transition-all"
              >
                <Mail size={14} />
                {t.about.contactMe}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
