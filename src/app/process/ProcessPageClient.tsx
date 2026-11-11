"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const processPhases = [
  {
    num: "( 01 )",
    phase: "PHASE 01",
    title: "Discovery & Requirements",
    desc: "We analyze your commercial goals, audience friction points, and operational requirements. We determine the exact scope needed to drive revenue and eliminate fluff.",
    deliverables: ["Product Specification", "Audience Flow Architecture", "Technical Stack Scope", "Sprint Timeline Guarantee"],
    image: "/pages/analytics.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
  },
  {
    num: "( 02 )",
    phase: "PHASE 02",
    title: "Wireframing & UI System",
    desc: "We craft an editorial, conversion-focused design system with typography, spacing, and micro-interactions that elevate your brand far above generic competitors.",
    deliverables: ["Bespoke UI Design", "Mobile-First Prototypes", "Design System Kit", "Visual Brand Alignment"],
    image: "/pages/workspace.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
  },
  {
    num: "( 03 )",
    phase: "PHASE 03",
    title: "Engineering & API Build",
    desc: "We engineer production-grade code using Next.js, React Native, and PostgreSQL. Every component is optimized for sub-second speeds and search engine crawlers.",
    deliverables: ["Production Next.js Code", "API & Database Build", "Lead Capture Integration", "Core Web Vitals 95+"],
    image: "/pages/coding.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
  },
  {
    num: "( 04 )",
    phase: "PHASE 04",
    title: "Audit & Security Testing",
    desc: "Rigorous testing across mobile devices, tablets, and desktop browsers. We verify SSL encryption, role permissions, payment gateways, and schema tags.",
    deliverables: ["Cross-Device QA Audit", "Security & Auth Verification", "Payment Gateway Testing", "Technical SEO Check"],
    image: "/pages/cyber-security.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
  },
  {
    num: "( 05 )",
    phase: "PHASE 05",
    title: "Live Deployment & Ownership",
    desc: "We launch to your production domain on high-speed Vercel/Cloud infrastructure and hand over 100% of the code, IP rights, and written ownership certificates.",
    deliverables: ["Production DNS Launch", "Analytics & GMB Setup", "Admin Panel Walkthrough", "100% Code Ownership"],
    image: "/pages/rocket.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
  },
];

export default function ProcessPageClient() {
  return (
    <div className="bg-white text-[#1E1E1E] min-h-screen pt-24 md:pt-32">
      {/* ── HERO ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#5A6271] block mb-4">
            ( 01 / DEVELOPMENT PROCESS )
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] leading-[1.05] mb-8">
            Transparent execution. From concept to live deployment.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6271] font-mono leading-relaxed max-w-3xl mb-10">
            No endless meetings or hidden surprises. Here is the exact five-phase engineering process Expecto follows on every client engagement.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1E] text-white text-xs font-mono font-medium hover:bg-black transition-colors"
            >
              <span>Schedule Initial Discovery</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F6F7F9] text-[#1E1E1E] text-xs font-mono font-medium border border-[#E5E7EB] hover:bg-[#EEF0F6] transition-colors"
            >
              <span>View All Capabilities</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5 PHASES SECTION ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="space-y-16 md:space-y-24">
          {processPhases.map((phase, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={phase.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-[#5A6271]">
                      {phase.num}
                    </span>
                    <span className="font-mono text-xs text-[#1E1E1E] px-3 py-1 rounded-full bg-[#F6F7F9] border border-[#E5E7EB]">
                      {phase.phase}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] mb-4">
                    {phase.title}
                  </h2>

                  <p className="font-mono text-sm sm:text-base text-[#5A6271] leading-relaxed mb-8">
                    {phase.desc}
                  </p>

                  <div className="p-6 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]">
                    <span className="font-mono text-xs text-[#5A6271] uppercase block mb-4">
                      Phase Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#1E1E1E]">
                          <div className="w-4 h-4 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3D Visual Arch Side */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden bg-white border border-[#E5E7EB] shadow-md ${phase.radius}`}>
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-[#1E1E1E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-white/50 block mb-3">
              ( STEP 01 STARTS HERE )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Ready to start Phase 01?
            </h2>
            <p className="font-mono text-sm text-white/70 leading-relaxed">
              Drop us your project requirements today. We will reply within 24 hours with an architecture roadmap and sprint timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#1E1E1E] text-xs font-mono font-bold hover:bg-[#F0F2F5] transition-colors whitespace-nowrap shadow-lg"
          >
            Start Discovery Sprint →
          </Link>
        </div>
      </section>
    </div>
  );
}
