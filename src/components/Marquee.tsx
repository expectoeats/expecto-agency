"use client";

import React from "react";
import {
  Utensils, Dumbbell, Scissors, Building2, GraduationCap, ShoppingBag,
  Calculator, Plane, Stethoscope, CalendarDays, UtensilsCrossed, Code2,
  School, TrendingUp, Flame,
} from "lucide-react";

const niches: { label: string; Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }> }[] = [
  { label: "Local Restaurants",     Icon: Utensils },
  { label: "Fitness Studios",       Icon: Dumbbell },
  { label: "Beauty Salons",         Icon: Scissors },
  { label: "Real Estate",           Icon: Building2 },
  { label: "Coaching Institutes",   Icon: GraduationCap },
  { label: "Clothing Boutiques",    Icon: ShoppingBag },
  { label: "Chartered Accountants", Icon: Calculator },
  { label: "Travel Agencies",       Icon: Plane },
  { label: "Clinics",               Icon: Stethoscope },
  { label: "Event Planners",        Icon: CalendarDays },
  { label: "Food Startups",         Icon: UtensilsCrossed },
  { label: "SaaS Founders",         Icon: Code2 },
  { label: "Campus Platforms",      Icon: School },
  { label: "Investment Advisors",   Icon: TrendingUp },
  { label: "Gyms & Spas",          Icon: Flame },
];

export default function Marquee() {
  return (
    <div className="bg-[var(--text)] border-y border-[var(--border)] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-0">
        {[...niches, ...niches].map((niche, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 font-montserrat font-medium text-sm text-white mx-4 shrink-0"
          >
            <niche.Icon size={14} strokeWidth={1.5} className="text-white/60" />
            {niche.label}
            <span className="mx-4 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
