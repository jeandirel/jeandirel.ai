import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { PROFILE } from "../../data/profile";
import MagneticButton from "./MagneticButton";

const GovernanceCTA = () => {
  const { t } = useLanguage();
  const c = t.governance.cta;
  const navigate = useNavigate();

  // Cross-route navigation to the homepage contact section.
  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <section
      id="gov-cta"
      data-testid="governance-cta"
      className="relative py-24 lg:py-32 border-t border-white/10 overflow-hidden"
      aria-labelledby="gov-cta-title"
    >
      <div className="gov-aurora" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overline mb-4"
        >
          {c.eyebrow}
        </motion.p>
        <motion.h2
          id="gov-cta-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05] max-w-3xl mx-auto"
        >
          {c.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-[#D1D5DB] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {c.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={goToContact}
            data-testid="governance-cta-primary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] text-sm font-medium transition-colors"
          >
            {c.primary}
            <ArrowRight size={15} />
          </MagneticButton>
          <MagneticButton
            href={`mailto:${PROFILE.email}`}
            strength={0.25}
            data-testid="governance-cta-secondary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/15 hover:border-white/40 text-white text-sm font-medium transition-colors"
          >
            <Mail size={15} />
            {c.secondary}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceCTA;
