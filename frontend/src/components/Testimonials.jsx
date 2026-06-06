import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { TESTIMONIALS } from "../data/profile";

const Testimonials = () => {
  const { t, lang } = useLanguage();

  return (
    <section data-testid="testimonials-section" className="py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <p className="overline mb-4">{t.testimonials.eyebrow}</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="testimonials-title">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t2, idx) => (
            <motion.div
              key={t2.name}
              data-testid={`testimonial-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="surface rounded-md p-8 lg:p-10 relative"
            >
              <Quote size={32} className="text-[#00D4FF]/30 mb-4" />
              <blockquote className="text-white text-lg lg:text-xl leading-relaxed font-light mb-8">
                &ldquo;{t2.quote[lang]}&rdquo;
              </blockquote>
              <div className="pt-6 border-t border-white/10">
                <div className="text-white font-medium">{t2.name}</div>
                <div className="text-sm text-[#9CA3AF] mt-1">
                  {t2.role[lang]} · {t2.company}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#00D4FF] mt-2">
                  {t2.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
