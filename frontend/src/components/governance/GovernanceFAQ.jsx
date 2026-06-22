import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { FAQ } from "../../data/governance";
import SectionHeading from "./SectionHeading";

const FAQItem = ({ item, lang, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
    className="surface rounded-md overflow-hidden"
    data-testid={`faq-item-${item.id}`}
  >
    <h3>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        data-testid={`faq-trigger-${item.id}`}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 group"
      >
        <span className="font-display text-base lg:text-lg text-white tracking-tight pr-2">
          {item.q[lang]}
        </span>
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-md border border-white/10 text-[#00D4FF] transition-transform duration-300 ${
            isOpen ? "rotate-45 border-[#00D4FF]/40" : "group-hover:border-white/30"
          }`}
          aria-hidden="true"
        >
          <Plus size={16} />
        </span>
      </button>
    </h3>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 -mt-1 text-[#D1D5DB] text-sm lg:text-base leading-relaxed">
            {item.a[lang]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const GovernanceFAQ = () => {
  const { t, lang } = useLanguage();
  const f = t.governance.faq;
  const [open, setOpen] = useState(FAQ[0]?.id ?? null);

  return (
    <section
      id="gov-faq"
      data-testid="governance-faq"
      className="relative py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]"
      aria-labelledby="gov-faq-title"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-faq-title"
          eyebrow={f.eyebrow}
          title={f.title}
          subtitle={f.subtitle}
          align="center"
        />
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem
              key={item.id}
              item={item}
              lang={lang}
              index={i}
              isOpen={open === item.id}
              onToggle={() => setOpen(open === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceFAQ;
