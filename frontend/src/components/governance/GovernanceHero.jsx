import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { GOV_STATS } from "../../data/governance";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const wordItem = {
  hidden: { opacity: 0, y: "0.6em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const RevealLine = ({ text, className }) => (
  <span className="block overflow-hidden">
    <motion.span variants={wordContainer} initial="hidden" animate="show" className={`inline-block ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={wordItem} className="inline-block mr-[0.25em]">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  </span>
);

const GovernanceHero = () => {
  const { t, lang } = useLanguage();
  const g = t.governance.hero;

  return (
    <section
      id="gov-hero"
      data-testid="governance-hero"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-white/10"
    >
      <div className="gov-aurora" aria-hidden="true" />
      <div className="gov-grid" aria-hidden="true" />
      {/* floating decorative nodes */}
      <span className="gov-float absolute top-32 left-[12%] w-1.5 h-1.5 rounded-full bg-[#00D4FF]/60" aria-hidden="true" />
      <span className="gov-float-delay absolute top-52 right-[16%] w-1.5 h-1.5 rounded-full bg-[#7C3AED]/60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-8"
          data-testid="governance-hero-badge"
        >
          <ShieldCheck size={13} className="text-[#00D4FF]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D1D5DB]">
            {g.badge}
          </span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[1.02] text-white max-w-5xl">
          <RevealLine text={g.title} />
          <RevealLine text={g.titleAccent} className="gov-gradient-text" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-2xl text-[#D1D5DB] text-base lg:text-lg leading-relaxed"
        >
          {g.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollTo("gov-compliance")}
            data-testid="governance-hero-cta-primary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] text-sm font-medium transition-colors"
          >
            {g.ctaPrimary}
            <ArrowRight size={15} />
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => scrollTo("gov-publications")}
            strength={0.25}
            data-testid="governance-hero-cta-secondary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/15 hover:border-white/40 text-white text-sm font-medium transition-colors"
          >
            {g.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* Stats strip with animated counters */}
        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden border border-white/10 bg-white/[0.04]"
        >
          {GOV_STATS.map((s, i) => (
            <div key={i} className="bg-[#0B0F19] px-6 py-7" data-testid={`governance-stat-${i}`}>
              <dd className="font-display text-3xl lg:text-4xl text-white tracking-tighter">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <span className="text-[#00D4FF]">+</span>
              </dd>
              <dt className="mt-1.5 text-xs text-[#9CA3AF]">{s.label[lang]}</dt>
            </div>
          ))}
        </motion.dl>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => scrollTo("gov-compliance")}
          className="mt-14 inline-flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-white transition-colors group"
          aria-label={g.scrollHint}
        >
          <span className="font-mono uppercase tracking-[0.2em]">{g.scrollHint}</span>
          <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};

export default GovernanceHero;
