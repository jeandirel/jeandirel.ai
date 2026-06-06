import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { SERVICES } from "../data/profile";

const Services = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" data-testid="services-section" className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.services.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="services-title">
              {t.services.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              data-testid={`service-card-${s.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.07 }}
              className="bento-card rounded-md p-7 flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00D4FF] mb-4">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl text-white tracking-tight mb-3">
                {s.title[lang]}
              </h3>
              <p className="text-sm text-[#D1D5DB] leading-relaxed mb-5 flex-1">
                {s.description[lang]}
              </p>
              <ul className="space-y-1.5 mb-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            data-testid="services-cta"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-[#0B0F19] hover:bg-[#D1D5DB] text-sm font-medium transition-all"
          >
            {t.services.cta}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
