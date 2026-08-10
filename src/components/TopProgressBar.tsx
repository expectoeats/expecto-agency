"use client";

import { useEffect, useRef } from "react";

export default function TopProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.body.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        const clamped = Math.max(0, Math.min(progress, 1));
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${clamped})`;
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9997,
        height: 2,
        width: "100%",
        background: "#F2F2F0",
        transformOrigin: "left",
        transform: "scaleX(0)",
      }}
    />
  );
}

