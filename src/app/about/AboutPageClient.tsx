"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Unsplash free-to-use images — editorial, no people
// Photo 1: minimal dark desk with laptop — Domenico Loia
const IMG_DESK = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80&auto=format&fit=crop";
// Photo 2: clean code on screen — Florian Olivo
const IMG_CODE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80&auto=format&fit=crop";
// Photo 3: minimal workspace flat lay — Kari Shea
const IMG_WORK = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop";

export default function AboutPageClient() {
  return (
    <div className="bg-white text-[var(--text)] min-h-screen">

      {/* ── 01 / HERO ── */}
      <section className="relative pt-[72px] md:pt-20 border-b border-white/10 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src={IMG_DESK} alt="" fill className="object-cover object-center" sizes="100vw" priority unoptimized />
          <div className="absolute inset-0 bg-[#0D0D0D]/72" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-8 md:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-7">
              <span className="font-montserrat text-[0.625rem] text-white/50 uppercase tracking-[0.22em] block mb-6">01 / About Expecto</span>
              <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mb-6">
                We design and build the{" "}
                <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
                  digital systems
                </span>{" "}
                behind growing businesses.
              </h1>
              {/* Frosted description */}
              <div className="mb-8 px-5 py-4 rounded-sm border border-white/10 max-w-[560px]"
                style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}>
                <p className="font-montserrat text-white/80 text-[1rem] leading-[1.8]">
                  Websites, web applications, e-commerce, CRM, ERP and custom digital experiences — designed around how a business actually works.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:bg-white/90 transition-colors duration-150">
                  Start a Project <ArrowRight size={14} strokeWidth={1.75} />
                </Link>
                <a href="#approach"
                  className="inline-flex items-center gap-2 border border-white/25 text-white font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:border-white/60 hover:bg-white/5 transition-colors duration-150">
                  See How We Work
                </a>
              </div>
            </div>

            {/* Editorial index card — frosted glass */}
            <div className="lg:col-span-3 lg:col-start-10 lg:pt-4">
              <div className="border border-white/15 rounded-sm overflow-hidden"
                style={{ background:"rgba(255,255,255,0.08)", backdropFilter:"blur(16px)" }}>
                <div className="px-5 py-4 border-b border-white/10">
                  <p className="font-montserrat text-[0.6875rem] text-white/50 uppercase tracking-[0.12em]">Expecto / Index</p>
                </div>
                {["Web Applications","Commerce Systems","Business Websites","CRM & ERP","Digital Products","India / Remote"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 px-5 py-3 border-b border-white/10 last:border-0">
                    <span className="font-montserrat text-[0.625rem] text-white/35 tabular-nums w-4 shrink-0">0{i+1}</span>
                    <span className="font-montserrat text-[0.8125rem] text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02 / WHAT IS EXPECTO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <span className="label-tag block mb-6">02 / What We Are</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-6">
                A digital agency, without the agency theatre.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] mb-5">
                Expecto is an independent digital agency that designs and builds websites, web applications and business systems. We work across design, development and digital infrastructure — helping businesses turn requirements into usable digital products.
              </p>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                Some projects need a website. Others need a store, a management system or something custom. We build according to the problem, not a pre-set package.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
              {/* Three pillars */}
              <div className="border border-[var(--border)]">
                {[
                  { num:"01", title:"Design",      desc:"How the product looks, communicates and guides users toward what matters." },
                  { num:"02", title:"Engineering", desc:"How it works underneath — reliably, quickly and without unnecessary complexity." },
                  { num:"03", title:"Business",    desc:"Why it exists and what success actually looks like for the business." },
                ].map((item, i) => (
                  <div key={item.title} className={`grid grid-cols-[auto_1fr_3fr] gap-3 p-5 ${i < 2 ? "border-b border-[var(--border)]" : ""}`}>
                    <span className="font-montserrat text-[0.625rem] shrink-0 text-[var(--text-3)] tabular-nums pt-0.5">{item.num}</span>
                    <div className="col-span-3">
                      <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{item.title}</p>
                    </div>
                    <div className="col-span-8">
                      <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03 / WHAT WE BUILD — with background image ── */}
      <section className="relative border-b border-[var(--border)] overflow-hidden">
        {/* Subtle bg */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src={IMG_CODE} alt="" fill className="object-cover object-center opacity-[0.04]" sizes="100vw" unoptimized />
        </div>
        <div className="relative z-10 bg-[var(--bg-subtle)]/80 backdrop-blur-sm">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
              <div className="lg:col-span-6">
                <span className="label-tag block mb-6">03 / What We Build</span>
                <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                  Not every business needs the same thing.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                  A website may be enough for one business. Another may need e-commerce, a CRM, a dashboard or a completely custom application.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {[
                { num:"01", title:"Web Development",  desc:"Business websites designed for clarity, performance and growth." },
                { num:"02", title:"Web Applications", desc:"Interfaces and systems built around real workflows." },
                { num:"03", title:"E-Commerce",       desc:"Storefronts designed around discovery, trust and conversion." },
                { num:"04", title:"CRM & ERP",        desc:"Internal systems that reduce repetitive operational work." },
                { num:"05", title:"UI / UX Redesign", desc:"Outdated digital products rebuilt for clarity and usability." },
                { num:"06", title:"Digital Systems",  desc:"Custom products built from idea to production." },
              ].map((cap) => (
                <div key={cap.num} className="bg-white p-8 md:p-9 hover:bg-[var(--bg-subtle)] transition-colors duration-150">
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums block mb-4">{cap.num}</span>
                  <p className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-2">{cap.title}</p>
                  <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 / APPROACH — with image ── */}
      <section id="approach" className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6">
              <span className="label-tag block mb-6">04 / Approach</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                We start with the business, not the template.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                Before deciding what to build, we look at what the digital product needs to accomplish — how customers discover it, what they need to understand, and what should happen next.
              </p>
            </div>
          </div>

          {/* Two-col: process + image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="border border-[var(--border)]">
                {[
                  { num:"01", title:"Understand", desc:"What does the business actually need the digital product to accomplish?" },
                  { num:"02", title:"Structure",  desc:"What information and functionality genuinely matter?" },
                  { num:"03", title:"Build",      desc:"What is the simplest, reliable way to make it work?" },
                  { num:"04", title:"Refine",     desc:"What needs to become faster, clearer or easier to use?" },
                ].map((step, i) => (
                  <div key={step.num} className={`grid grid-cols-[auto_1fr_3fr] gap-3 p-5 ${i < 3 ? "border-b border-[var(--border)]" : ""}`}>
                    <div className="col-span-1">
                      <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{step.num}</span>
                    </div>
                    <div className="col-span-3">
                      <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{step.title}</p>
                    </div>
                    <div className="col-span-8">
                      <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3] border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                <Image src={IMG_WORK} alt="Workspace" fill className="object-cover object-center" sizes="40vw" unoptimized />
                <div className="absolute inset-0 bg-[var(--text)]/20" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[var(--text)]/60 to-transparent">
                  <p className="font-montserrat text-[0.75rem] text-white/70 uppercase tracking-[0.12em]">Strategy · Design · Engineering · Delivery</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 / PRINCIPLES ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-6">05 / Principles</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                A few things we believe.
              </h2>
            </div>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {[
              { title:"Good design has a job.",             desc:"Design should make something clearer, easier or more useful — not simply more attractive." },
              { title:"Performance is part of design.",     desc:"A beautiful interface that loads slowly is still a poor experience." },
              { title:"Software should fit the business.",  desc:"The technology should adapt to the workflow, not force the business to adapt to the technology." },
              { title:"Simple is harder than complex.",     desc:"We prefer clear systems over unnecessary features, layers and decoration." },
            ].map((belief, i) => (
              <div key={belief.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-7 md:py-8">
                <div className="md:col-span-1">
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums">0{i+1}</span>
                </div>
                <div className="md:col-span-4">
                  <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{belief.title}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 / SMALL BY DESIGN — with bg image ── */}
      <section className="relative border-b border-[var(--border)] overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[40%] pointer-events-none hidden lg:block">
          <Image src={IMG_CODE} alt="" fill className="object-cover object-right" sizes="40vw" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-white/20" />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <span className="label-tag block mb-6">06 / The Studio</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-6">
                Small by design.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                Expecto is intentionally focused rather than built around layers of management. A smaller studio means fewer handoffs, direct communication and a closer connection between the business problem and the people solving it.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-[var(--border)] bg-white">
                {[
                  { label:"Strategy",    desc:"Understanding the problem before writing a line of code." },
                  { label:"Design",      desc:"Visual and information architecture that communicates clearly." },
                  { label:"Engineering", desc:"Development that is clean, tested and maintainable." },
                  { label:"Delivery",    desc:"Handover with full documentation and agreed ownership terms." },
                ].map((item, i) => (
                  <div key={item.label} className={`grid grid-cols-[auto_1fr_3fr] gap-3 p-5 md:p-7 ${i < 3 ? "border-b border-[var(--border)]" : ""}`}>
                    <span className="font-montserrat text-[0.625rem] shrink-0 text-[var(--text-3)] tabular-nums pt-0.5">0{i+1}</span>
                    <div className="col-span-3">
                      <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{item.label}</p>
                    </div>
                    <div className="col-span-8">
                      <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.65]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 07 / WHAT WE DON'T DO ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-6">07 / What We Don&apos;t Do</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                What we don&apos;t believe in.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                Being direct about what we won't do is as important as what we will.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { title:"One template for every business.",    desc:"Different businesses have different problems. The same design doesn't fit a law firm and a food startup." },
              { title:"Features to make a quote bigger.",    desc:"Every feature should have a reason. Complexity is not a measure of quality." },
              { title:"Guaranteed Google rankings.",         desc:"SEO has variables no agency can honestly guarantee. We build the right foundations and do our part." },
              { title:"Hiding important details.",           desc:"Scope, deliverables and responsibilities should be understandable before development begins." },
              { title:"Making simple things complicated.",   desc:"The simplest reliable solution is almost always the right one." },
              { title:"Overpromising to win a project.",     desc:"A realistic brief is more valuable to both sides than an impressive scope that creates problems later." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 md:p-9">
                <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-3 leading-snug">{item.title}</p>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 / WORKING TOGETHER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <span className="label-tag block mb-6">08 / Working Together</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-6">
                You should know what you&apos;re paying for.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                Projects should not feel like a black box. Scope, deliverables and responsibilities should be clear before development begins.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
                {[
                  { label:"Clear Scope",         desc:"What is included and what is not, agreed before work starts." },
                  { label:"Clear Communication", desc:"Regular updates so you know what is happening at every stage." },
                  { label:"Clear Handover",       desc:"What you receive at the end — source code, access, documentation." },
                  { label:"Clear Ownership",      desc:"What belongs to your business according to the agreed terms." },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-7">
                    <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-2">{item.label}</p>
                    <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.65]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 09 / LOCATION ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="label-tag block mb-3">09 / Location</span>
              <p className="font-montserrat font-bold text-[1.375rem] text-[var(--text)]">India / Remote</p>
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mt-1">
                Based in Ballia, Uttar Pradesh. Working with businesses across India.
              </p>
            </div>
            <div className="flex flex-row gap-6 mt-4 md:mt-0 md:gap-10">
              {[
                { label:"Established", value:"2023" },
                { label:"Location",   value:"Ballia, UP" },
                { label:"Model",      value:"Remote-first" },
              ].map((item) => (
                <div key={item.label} className="text-left md:text-right">
                  <p className="font-montserrat font-semibold text-[0.9375rem] md:text-[1.25rem] text-[var(--text)]">{item.value}</p>
                  <p className="font-montserrat text-[0.5625rem] md:text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em] mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 / CLOSING CTA ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image src="/pattern.webp" alt="" fill className="object-cover object-center opacity-[0.07]" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="max-w-[760px]">
            <p className="font-montserrat font-bold text-[clamp(2rem,5vw,3.75rem)] leading-[1.06] text-white tracking-tight mb-6">
              Good digital work should feel obvious.
            </p>
            <p className="font-montserrat text-[1rem] text-white/50 leading-[1.8] mb-10 max-w-[500px]">
              The technology should disappear into the experience. The design should make sense. The business should know what it gained from building it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:bg-white/90 transition-colors duration-150">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:border-white/50 transition-colors duration-150">
                See Our Work
              </Link>
            </div>
          </div>
          <p className="mt-16 font-montserrat text-[0.6875rem] text-white/20 uppercase tracking-[0.2em]">
            Expecto / Digital Agency / India
          </p>
        </div>
      </section>

    </div>
  );
}
