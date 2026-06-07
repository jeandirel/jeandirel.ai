import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const SPECIALIZATIONS = {
  en: ["RAG systems", "AI agents", "NLP classifiers", "MLOps pipelines"],
  fr: ["systèmes RAG", "agents IA", "classificateurs NLP", "pipelines MLOps"],
};

const TypewriterWord = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-[#00D4FF]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const AnimatedCounter = ({ target, suffix = "", duration = 1400 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const { t, lang } = useLanguage();
  const cvUrl = lang === "fr" ? PROFILE.links.cvFr : PROFILE.links.cvEn;
  const words = SPECIALIZATIONS[lang];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const visitorTypes = lang === "fr"
    ? [
        { label: "Je suis recruteur", target: "experience" },
        { label: "Je cherche un consultant", target: "services" },
        { label: "Je suis chercheur", target: "research" },
      ]
    : [
        { label: "I'm a recruiter", target: "experience" },
        { label: "I'm a client", target: "services" },
        { label: "I'm a researcher", target: "research" },
      ];

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 hero-glow overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            data-testid="hero-status-pill"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#D1D5DB]">
              {t.hero.status}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overline mb-6"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] tracking-tighter mb-4"
            data-testid="hero-title"
          >
            {t.hero.title1}
            <br />
            <span className="text-white">{t.hero.title2}</span>
          </motion.h1>

          {/* Typewriter line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-display text-2xl sm:text-3xl lg:text-5xl tracking-tighter mb-8 text-[#9CA3AF]"
          >
            {lang === "fr" ? "→ " : "→ "}
            <TypewriterWord words={words} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base lg:text-lg text-[#D1D5DB] max-w-2xl leading-relaxed mb-6"
            data-testid="hero-subtitle"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Visitor type selector */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {visitorTypes.map((v) => (
              <button
                key={v.target}
                onClick={() => scrollTo(v.target)}
                className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/10 text-[#9CA3AF] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-all duration-200"
              >
                {v.label}
              </button>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              data-testid="hero-book-meeting"
              onClick={() => scrollTo("booking")}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] font-medium transition-all active:scale-[0.98]"
            >
              {t.hero.cta1}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              data-testid="hero-download-cv"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 hover:border-white/40 text-white font-medium transition-all"
            >
              <Download size={16} />
              {t.hero.cta2}
            </a>

            <a
              data-testid="hero-linkedin-link"
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-sm text-[#D1D5DB] hover:text-white transition-colors link-underline"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 mx-auto w-48 sm:w-64 lg:w-auto"
        >
          <div className="relative aspect-[3/4] surface rounded-md overflow-hidden">
            <img
              src={PROFILE.images.portrait}
              alt="Jean Direl — AI Engineer portrait"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              data-testid="hero-portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00D4FF] mb-1">
                {PROFILE.location}
              </div>
              <div className="text-white text-lg font-display">{PROFILE.name}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip — animated counters */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {[
            { numeric: true, target: 5, suffix: "+", label: t.hero.stat1Label },
            { numeric: true, target: 10, suffix: "+", label: t.hero.stat2Label },
            { numeric: false, value: t.hero.stat3, label: t.hero.stat3Label },
            { numeric: false, value: t.hero.stat4, label: t.hero.stat4Label },
          ].map((s, i) => (
            <motion.div
              key={i}
              data-testid={`hero-stat-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-6 lg:py-8 lg:px-6 border-r last:border-r-0 border-white/10 lg:border-b-0 border-b"
            >
              <div className="font-display text-3xl lg:text-4xl text-white tracking-tight">
                {s.numeric ? (
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
