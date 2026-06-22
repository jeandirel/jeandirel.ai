import React, { useState, useRef, useCallback } from "react";
import { Download, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DownloadButton — accessible PDF download with premium visual feedback.
 *
 * Renders a real <a download> (so it works without JS and is crawlable), and
 * layers a brief "downloading → done" state with an animated pulse ring on top.
 *
 * @param {string} href      Path to the PDF (e.g. "/documents/AI_Act_Guide.pdf").
 * @param {string} label     Visible label (e.g. "Download Guide").
 * @param {string} [variant] "solid" | "outline" | "ghost"
 */
const DownloadButton = ({
  href,
  label,
  variant = "outline",
  className = "",
  "data-testid": testId,
  "aria-label": ariaLabel,
}) => {
  const [state, setState] = useState("idle"); // idle | loading | done
  const timers = useRef([]);

  const onClick = useCallback(() => {
    // The native <a download> handles the actual download; we only animate.
    setState("loading");
    timers.current.push(
      setTimeout(() => setState("done"), 650),
      setTimeout(() => setState("idle"), 2200)
    );
  }, []);

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]";
  const variants = {
    solid: "px-5 py-2.5 bg-[#00D4FF] text-[#0B0F19] hover:bg-[#33DDFF]",
    outline:
      "px-4 py-2.5 border border-white/15 text-[#D1D5DB] hover:text-white hover:border-white/40",
    ghost: "px-3 py-2 text-[#9CA3AF] hover:text-white",
  };

  const filename = href ? href.split("/").pop() : undefined;

  return (
    <a
      href={href}
      download={filename}
      onClick={onClick}
      data-testid={testId}
      aria-label={ariaLabel || label}
      className={`${base} ${variants[variant]} ${state === "loading" ? "gov-downloading" : ""} ${className}`}
    >
      <span className="relative w-4 h-4 shrink-0" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          {state === "idle" && (
            <motion.span
              key="icon"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0"
            >
              <Download size={16} />
            </motion.span>
          )}
          {state === "loading" && (
            <motion.span
              key="load"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0"
            >
              <Loader2 size={16} className="animate-spin" />
            </motion.span>
          )}
          {state === "done" && (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 text-[#00D4FF]"
            >
              <Check size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span>{label}</span>
    </a>
  );
};

export default DownloadButton;
