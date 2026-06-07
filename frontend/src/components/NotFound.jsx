import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center px-6 grain">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[100px] hero-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-400/6 blur-[80px] hero-blob animation-delay-4" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-lg"
      >
        {/* Terminal icon */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <Terminal size={12} className="text-[#00D4FF]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
            error · status 404
          </span>
        </div>

        {/* 404 display */}
        <div className="font-display text-[120px] lg:text-[160px] leading-none text-white/5 tracking-tighter select-none mb-4">
          {t.notFound.code}
        </div>

        <div className="font-display text-3xl lg:text-4xl text-white tracking-tight mb-4 -mt-8">
          {t.notFound.title}
        </div>

        {/* Terminal-style code block */}
        <div className="mx-auto max-w-xs mb-8 text-left">
          <div className="glass rounded-md border border-white/10 overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-red-400/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <span className="w-2 h-2 rounded-full bg-green-400/60" />
              <span className="ml-2 font-mono text-[9px] text-[#6B7280]">router.log</span>
            </div>
            <pre className="p-3 text-[11px] font-mono leading-relaxed">
              <span className="text-[#6B7280]">$ </span>
              <span className="text-[#00D4FF]">GET</span>
              <span className="text-[#9CA3AF]"> /unknown-path</span>
              {"\n"}
              <span className="text-red-400">✗ 404 Not Found</span>
              {"\n"}
              <span className="text-[#9CA3AF]">→ </span>
              <span className="text-[#7C3AED]">redirecting to /</span>
            </pre>
          </div>
        </div>

        <p className="text-[#9CA3AF] text-base mb-10">{t.notFound.body}</p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] font-medium text-sm transition-all active:scale-[0.98]"
        >
          <ArrowLeft size={16} />
          {t.notFound.cta}
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
