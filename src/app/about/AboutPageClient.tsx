"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const agencyStats = [
  { value: "50+", label: "Businesses served across web, apps, and software." },
  { value: "7 DAYS", label: "Turnaround guarantee in writing for qualified sprints." },
  { value: "100%", label: "Code ownership certificate — you own all assets & data." },
  { value: "99%", label: "On-time delivery rate across deployed client projects." },
];

const pillars = [
  {
    num: "( 01 )",
    title: "Engineering Excellence",
    desc: "We build on modern frameworks like Next.js, React Native, and PostgreSQL. Every line of code is structured for sub-second page loads, SEO crawlers, and high security.",
  },
  {
    num: "( 02 )",
    title: "Conversion-Led Design",
    desc: "A great design isn't just art — it has a commercial job to do. We architect typography, visual hierarchy, and CTA flow to guide visitors into paying inquiries.",
  },
  {
    num: "( 03 )",
    title: "Zero Agency Theatre",
    desc: "No unnecessary 50-page slide decks, fake jargon, or endless delays. You work directly with engineers and designers who deliver live production code on time.",
  },
];

export default function AboutPageClient() {
  return (
    <div className="bg-white text-[#1E1E1E] min-h-screen pt-24 md:pt-32">
      {/* ── 01 / HERO SECTION ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#8A919B] block mb-4">
            ( 01 / ABOUT EXPECTO )
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] leading-[1.05] mb-8">
            A digital agency cultivating bold brands and high-performance software.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6271] font-mono leading-relaxed max-w-3xl mb-10">
            Expecto® is an independent digital agency based in Ballia, Uttar Pradesh, engineering websites, web apps, and bespoke operational software for ambitious founders across India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1E] text-white text-xs font-mono font-medium hover:bg-black transition-colors"
            >
              <span>Work With Us</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F6F7F9] text-[#1E1E1E] text-xs font-mono font-medium border border-[#E5E7EB] hover:bg-[#EEF0F6] transition-colors"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t border-[#E5E7EB]">
          {agencyStats.map((s) => (
            <div key={s.label} className="p-5 md:p-6 rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] block mb-2">
                {s.value}
              </span>
              <p className="font-mono text-xs text-[#5A6271] leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 / PHILOSOPHY & STORY ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-[#8A919B] block mb-4">
              ( 02 / WHY WE EXIST )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E] leading-[1.15] mb-6">
              Most businesses are held back by slow, generic templates.
            </h2>
            <p className="font-mono text-sm text-[#5A6271] leading-relaxed mb-6">
              In a crowded market, potential clients judge your business within 3 seconds of landing on your website. When a site takes 5 seconds to load or looks like a template from 2018, credibility evaporates.
            </p>
            <p className="font-mono text-sm text-[#5A6271] leading-relaxed mb-8">
              At Expecto, we treat web design and software engineering as high-leverage growth investments. We write clean, bespoke code that loads instantly, ranks on Google, and converts visitors into paying customers.
            </p>
            <div className="space-y-3">
              {[
                "100% bespoke Next.js UI tailored to your business model",
                "Sub-second load speeds guaranteed on mobile and desktop",
                "Direct communication with technical builders — no account managers",
                "Clear fixed sprint pricing and guaranteed delivery dates",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-xs font-mono text-[#1E1E1E]">
                  <CheckCircle2 size={16} className="text-[#1E1E1E] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-tl-[64px] rounded-br-[64px] overflow-hidden bg-[#F8F9FA] border border-[#E5E7EB] shadow-md">
              <Image
                src="/pages/innovation.webp"
                alt="Expecto Digital Engineering & Innovation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 / OUR CORE PILLARS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs text-[#8A919B] block mb-3">
            ( 03 / HOW WE WORK )
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E]">
            Our Foundational Pillars.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-[28px] bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1E1E1E] transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-[#8A919B] block mb-4">
                  {p.num}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#1E1E1E] mb-3">
                  {p.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#5A6271] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 / FINAL CTA ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-[#1E1E1E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-white/50 block mb-3">
              ( START A PROJECT )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Ready to elevate your digital presence?
            </h2>
            <p className="font-mono text-sm text-white/70 leading-relaxed">
              We help ambitious companies replace outdated systems with high-converting digital products.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#1E1E1E] text-xs font-mono font-bold hover:bg-[#F0F2F5] transition-colors whitespace-nowrap shadow-lg"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
