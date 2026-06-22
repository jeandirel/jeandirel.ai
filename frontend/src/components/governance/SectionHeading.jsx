import React from "react";
import { motion } from "framer-motion";

/**
 * SectionHeading — shared eyebrow + title + subtitle block.
 * Mirrors the typography rhythm used across the site (overline, font-display,
 * tracking-tighter) so the Governance page reads as native to jeandirel.ai.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = "left", id }) => {
  const centered = align === "center";
  return (
    <div className={`mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overline mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.h2
          id={id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-5 text-[#D1D5DB] text-base lg:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
