import React, { useRef } from "react";
import {
  Landmark, ShieldCheck, Network, HeartHandshake, Eye, ShieldAlert,
  Database, Lock, Shield, UserCheck, FileSearch, BadgeCheck, Award,
  KeyRound, Compass, Sparkles, GitBranch,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { COMPLIANCE } from "../../data/governance";
import SectionHeading from "./SectionHeading";
import DownloadButton from "./DownloadButton";

// Map serialisable icon names (data layer) → lucide components (view layer).
const ICONS = {
  Landmark, ShieldCheck, Network, HeartHandshake, Eye, ShieldAlert,
  Database, Lock, Shield, UserCheck, FileSearch, BadgeCheck, Award,
  KeyRound, Compass, Sparkles, GitBranch,
};

const ComplianceCard = ({ item, index, lang, labels }) => {
  const Icon = ICONS[item.icon] || ShieldCheck;
  const isCyan = item.accent === "cyan";
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Subtle 3D tilt toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      style={{ perspective: 900 }}
      data-testid={`compliance-card-${item.id}`}
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className={`bento-card ${isCyan ? "bento-card-cyan gov-glow" : "bento-card-violet gov-glow-violet"} rounded-md p-6 h-full flex flex-col`}
      >
        <div
          className={`w-11 h-11 rounded-md flex items-center justify-center mb-5 border ${
            isCyan
              ? "border-[#00D4FF]/30 bg-[#00D4FF]/[0.06] text-[#00D4FF]"
              : "border-[#7C3AED]/30 bg-[#7C3AED]/[0.06] text-[#7C3AED]"
          }`}
          aria-hidden="true"
        >
          <Icon size={20} strokeWidth={1.6} />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-display text-lg text-white tracking-tight">{item.title[lang]}</h3>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-3">
          {item.tag}
        </span>
        <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6 flex-1">
          {item.description[lang]}
        </p>

        <DownloadButton
          href={item.guide}
          label={labels.download}
          aria-label={`${labels.downloadAria} — ${item.title[lang]}`}
          variant="ghost"
          className="self-start -ml-1"
          data-testid={`compliance-download-${item.id}`}
        />
      </motion.article>
    </motion.div>
  );
};

const ComplianceCards = () => {
  const { t, lang } = useLanguage();
  const c = t.governance.compliance;

  return (
    <section
      id="gov-compliance"
      data-testid="governance-compliance"
      className="relative py-24 lg:py-32 border-t border-white/10"
      aria-labelledby="gov-compliance-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          id="gov-compliance-title"
          eyebrow={c.eyebrow}
          title={c.title}
          subtitle={c.subtitle}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {COMPLIANCE.map((item, i) => (
            <ComplianceCard key={item.id} item={item} index={i} lang={lang} labels={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceCards;
