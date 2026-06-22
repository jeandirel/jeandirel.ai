import React from "react";
import { ListChecks, ShieldAlert, FileText, Network, LayoutTemplate, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { RESOURCES } from "../../data/governance";
import SectionHeading from "./SectionHeading";
import DownloadButton from "./DownloadButton";

const ICONS = { ListChecks, ShieldAlert, FileText, Network, LayoutTemplate, Award };

const Resources = () => {
  const { t, lang } = useLanguage();
  const r = t.governance.resources;

  return (
    <section
      id="gov-resources"
      data-testid="governance-resources"
      className="relative py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]"
      aria-labelledby="gov-resources-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-resources-title"
          eyebrow={r.eyebrow}
          title={r.title}
          subtitle={r.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESOURCES.map((res, i) => {
            const Icon = ICONS[res.icon] || FileText;
            return (
              <motion.article
                key={res.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="bento-card bento-card-cyan gov-glow rounded-md p-6 flex flex-col"
                data-testid={`resource-card-${res.id}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#00D4FF]">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF]">
                    {r.kinds[res.kind] || res.kind}
                  </span>
                </div>
                <h3 className="font-display text-lg text-white tracking-tight mb-2">
                  {res.title[lang]}
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6 flex-1">
                  {res.description[lang]}
                </p>
                <DownloadButton
                  href={res.pdf}
                  label={r.download}
                  variant="outline"
                  className="self-start"
                  data-testid={`resource-download-${res.id}`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
