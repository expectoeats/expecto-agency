"use client";

import React from "react";

const niches = [
  "🍽️ Local Restaurants", "🏋️ Fitness Studios", "💇 Beauty Salons",
  "🏠 Real Estate", "📚 Coaching Institutes", "👗 Clothing Boutiques",
  "📊 Chartered Accountants", "✈️ Travel Agencies", "🏥 Clinics",
  "🎉 Event Planners", "🍔 Food Startups", "💻 SaaS Founders",
  "🎓 Campus Platforms", "💰 Investment Advisors", "🧘 Gyms & Spas",
];

export default function Marquee() {
  return (
    <div className="bg-[var(--text)] border-y border-[var(--border)] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-0">
        {[...niches, ...niches].map((niche, i) => (
          <span
            key={i}
            className="inline-flex items-center font-montserrat font-medium text-sm text-white mx-4 shrink-0"
          >
            {niche}
            <span className="mx-4 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
