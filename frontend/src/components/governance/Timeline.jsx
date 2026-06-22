import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { TIMELINE } from "../../data/governance";
import SectionHeading from "./SectionHeading";

const Timeline = () => {
  const { t, lang } = useLanguage();
  const tl = t.governance.timeline;

  return (
    <section
      id="gov-timeline"
      data-testid="governance-timeline"
      className="relative py-24 lg:py-32 border-t border-white/10 overflow-hidden"
      aria-labelledby="gov-timeline-title"
    >
      <div className="gov-grid" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-timeline-title"
          eyebrow={tl.eyebrow}
          title={tl.title}
          subtitle={tl.subtitle}
          align="center"
        />

        <div className="relative mt-16">
          {/* Center (lg) / left (mobile) animated line */}
          <div className="absolute top-0 bottom-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-px">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="gov-timeline-line w-full h-full"
            />
          </div>

          <ol className="space-y-10 lg:space-y-2">
            {TIMELINE.map((item, i) => {
              const isCyan = item.accent === "cyan";
              const left = i % 2 === 0;
              return (
                <li
                  key={item.year}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
                  data-testid={`timeline-item-${i}`}
                >
                  {/* node dot */}
                  <span
                    className={`absolute left-4 lg:left-1/2 top-1.5 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-3 h-3 rounded-full ring-4 ring-[#0B0F19] z-10 ${
                      isCyan ? "bg-[#00D4FF]" : "bg-[#7C3AED]"
                    }`}
                    aria-hidden="true"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: left ? -24 : 24, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className={`pl-12 lg:pl-0 ${
                      left ? "lg:col-start-1 lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"
                    }`}
                  >
                    <div className="surface gov-glow rounded-md p-6 inline-block w-full">
                      <span
                        className={`font-mono text-xs font-medium ${
                          isCyan ? "text-[#00D4FF]" : "text-[#7C3AED]"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg text-white tracking-tight mt-1 mb-2">
                        {item.title[lang]}
                      </h3>
                      <p className="text-sm text-[#D1D5DB] leading-relaxed">
                        {item.description[lang]}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
