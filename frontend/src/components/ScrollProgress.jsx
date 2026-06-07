import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#00D4FF]"
        style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
      />
    </div>
  );
};

export default ScrollProgress;
