import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { AI_ARCHITECTURES, ARCH_CATEGORIES, ARCH_LEVELS } from "../data/aiArchitectures";
import ArchitectureModal from "./ArchitectureModal";

const ACCENTS = { cyan: "#00D4FF", violet: "#7C3AED", white: "#D1D5DB" };

// Build a single searchable string per architecture (title, copy, tech, tags, categories).
const searchIndex = (a) =>
  [
    a.title.en,
    a.title.fr,
    a.description.en,
    a.description.fr,
    a.level,
    ...a.tech,
    ...a.tags,
    ...a.categories,
  ]
    .join(" ")
    .toLowerCase();

const AIArchitectures = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return AI_ARCHITECTURES.filter((a) => {
      const matchesCat = active === "all" || a.categories.includes(active);
      const matchesQuery = !q || searchIndex(a).includes(q);
      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  const resetFilters = () => {
    setActive("all");
    setQuery("");
  };

  return (
    <section
      id="architectures"
      data-testid="architectures-section"
      className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.architectures.eyebrow}</p>
            <h2
              className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]"
              data-testid="architectures-title"
            >
              {t.architectures.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.architectures.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-xl">
          <Search
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
          />
          <input
            data-testid="architectures-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.architectures.searchPlaceholder}
            className="w-full bg-[#111827] border border-white/10 rounded-md pl-10 pr-4 py-3 text-sm text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#00D4FF] transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ARCH_CATEGORIES.map((f) => {
            const isActive = active === f.id;
            const color = ACCENTS[f.accent] || ACCENTS.cyan;
            return (
              <button
                key={f.id}
                data-testid={`architectures-filter-${f.id}`}
                onClick={() => setActive(f.id)}
                style={isActive ? { color, borderColor: color, background: `${color}1A` } : undefined}
                className={`font-mono text-[10px] uppercase tracking-[0.18em] px-4 py-2 rounded border transition-all duration-200 ${
                  isActive ? "" : "border-white/10 text-[#9CA3AF] hover:border-white/30 hover:text-white"
                }`}
              >
                {f.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B7280] mb-6">
          {visible.length} {visible.length === 1 ? t.architectures.result : t.architectures.results}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((a, idx) => {
              const accentKey = ARCH_LEVELS[a.level]?.accent || "cyan";
              const accent = ACCENTS[accentKey];
              const cardClass =
                accentKey === "cyan" ? "bento-card-cyan" : accentKey === "violet" ? "bento-card-violet" : "";
              return (
                <motion.button
                  key={a.id}
                  layout
                  type="button"
                  data-testid={`architecture-card-${a.id}`}
                  onClick={() => setSelected(a)}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: (idx % 3) * 0.05 }}
                  className={`bento-card ${cardClass} rounded-md p-6 flex flex-col text-left group`}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: accent }}>
                      {String(idx + 1).padStart(2, "0")} / {AI_ARCHITECTURES.length}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded border"
                      style={{ color: accent, borderColor: `${accent}40`, background: `${accent}0D` }}
                    >
                      {t.architectures.levels[a.level] || a.level}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-white tracking-tight mb-2 leading-snug">
                    {a.title[lang]}
                  </h3>
                  <p className="text-sm text-[#D1D5DB] leading-relaxed mb-4 flex-1">
                    {a.description[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {a.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="chip">#{tag}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B7280]">
                      {a.tech.slice(0, 3).join(" · ")}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-[#6B7280] group-hover:text-white transition-colors"
                    />
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#9CA3AF] font-mono text-sm mb-4">{t.architectures.empty}</p>
            <button
              data-testid="architectures-reset"
              onClick={resetFilters}
              className="font-mono text-[10px] uppercase tracking-[0.18em] px-4 py-2 rounded border border-white/10 text-[#9CA3AF] hover:border-white/30 hover:text-white transition-all"
            >
              {t.architectures.reset}
            </button>
          </div>
        )}
      </div>

      <ArchitectureModal arch={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default AIArchitectures;
