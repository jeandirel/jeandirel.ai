import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { PROFILE } from "../../data/profile";
import { PUBLICATIONS } from "../../data/governance";
import SectionHeading from "./SectionHeading";
import DownloadButton from "./DownloadButton";

const resolveCover = (cover) =>
  PROFILE.images[cover] ? PROFILE.images[cover] : cover;

const formatDate = (iso, lang) => {
  try {
    return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "short",
    }).format(new Date(iso));
  } catch (e) {
    return iso;
  }
};

const Keywords = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((k) => (
      <span key={k} className="chip">{k}</span>
    ))}
  </div>
);

const Meta = ({ pub, lang, p }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#9CA3AF]">
    <span className="inline-flex items-center gap-1.5">
      <Calendar size={12} /> {formatDate(pub.date, lang)}
    </span>
    <span className="inline-flex items-center gap-1.5">
      <Clock size={12} /> {pub.readingTime} {p.minRead}
    </span>
    <span className="px-2 py-0.5 rounded-full border border-white/10 text-[#D1D5DB]">
      {pub.category[lang]}
    </span>
  </div>
);

const Actions = ({ pub, p }) => (
  <div className="flex flex-wrap items-center gap-3 mt-6">
    {pub.read && (
      <a
        href={pub.read}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`publication-read-${pub.id}`}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white text-[#0B0F19] hover:bg-[#D1D5DB] text-sm font-medium transition-all"
      >
        {p.read}
        <ArrowUpRight size={14} />
      </a>
    )}
    <DownloadButton
      href={pub.pdf}
      label={p.download}
      variant={pub.read ? "outline" : "solid"}
      data-testid={`publication-download-${pub.id}`}
    />
  </div>
);

const Publications = () => {
  const { t, lang } = useLanguage();
  const p = t.governance.publications;
  const [featured, ...rest] = PUBLICATIONS;

  return (
    <section
      id="gov-publications"
      data-testid="governance-publications"
      className="relative py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]"
      aria-labelledby="gov-publications-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-publications-title"
          eyebrow={p.eyebrow}
          title={p.title}
          subtitle={p.subtitle}
        />

        {/* Featured publication */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="surface gov-glow rounded-md overflow-hidden grid lg:grid-cols-2 mb-8"
            data-testid={`publication-card-${featured.id}`}
          >
            <div className="relative min-h-[240px] lg:min-h-full overflow-hidden">
              <img
                src={resolveCover(featured.cover)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D4FF] text-[#0B0F19] text-[10px] font-mono uppercase tracking-[0.16em]">
                {p.featured}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col">
              <Meta pub={featured} lang={lang} p={p} />
              <h3 className="font-display text-2xl lg:text-3xl text-white tracking-tight mt-4 mb-3 leading-[1.1]">
                {featured.title[lang]}
              </h3>
              <p className="text-[#D1D5DB] text-base leading-relaxed mb-5 flex-1">
                {featured.summary[lang]}
              </p>
              <Keywords items={featured.keywords} />
              <Actions pub={featured} p={p} />
            </div>
          </motion.article>
        )}

        {/* Rest of publications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface gov-glow rounded-md overflow-hidden flex flex-col"
              data-testid={`publication-card-${pub.id}`}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={resolveCover(pub.cover)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Meta pub={pub} lang={lang} p={p} />
                <h3 className="font-display text-lg text-white tracking-tight mt-3 mb-2 leading-snug">
                  {pub.title[lang]}
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-4 flex-1">
                  {pub.summary[lang]}
                </p>
                <Keywords items={pub.keywords} />
                <Actions pub={pub} p={p} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
