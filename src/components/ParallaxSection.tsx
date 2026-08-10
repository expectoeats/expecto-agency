"use client";

import React from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  parallaxSpeed?: number;
  variant?: "default" | "split" | "horizontal" | "depth" | "magnetic" | "reveal";
}

export default function ParallaxSection({
  children,
  className = "",
  accentColor: _accentColor,
  parallaxSpeed: _parallaxSpeed,
  variant: _variant,
}: ParallaxSectionProps) {
  return (
    <section className={`relative isolate overflow-hidden py-14 md:py-20 lg:py-24 ${className}`}>
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #1E293B 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
