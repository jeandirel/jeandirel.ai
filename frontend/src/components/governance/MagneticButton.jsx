import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * MagneticButton — premium "magnetic" hover: the element drifts slightly toward
 * the cursor and springs back on leave. Renders an <a> or <button> based on
 * whether an `href` is provided. Falls back to a static element when the user
 * prefers reduced motion.
 *
 * All extra props (href, onClick, target, rel, download, aria-label, …) are
 * forwarded to the underlying element.
 */
const MagneticButton = ({
  children,
  className = "",
  strength = 0.35,
  as,
  href,
  ...rest
}) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = motion[as || (href ? "a" : "button")];

  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
