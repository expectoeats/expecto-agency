"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  HandDrawnArrow,
  HandDrawnCircle,
  HandDrawnUnderline,
  HandDrawnStamp,
  HandDrawnMarksheetSketch,
  HandDrawnCertificateSketch,
  HandDrawnStopwatchSketch,
} from "@/components/HandDrawnArt";

const modules = [
  {
    code: "MOD-01",
    title: "Automated Marksheet Generator",
    desc: "Single-click dynamic computation of subject-wise marks, percentage, and grade hierarchy with instant A4-ready printable PDF export.",
  },
  {
    code: "MOD-02",
    title: "QR Certificate Verification",
    desc: "Tamper-proof certificate generator paired with an online public verification endpoint (/verification) via unique serial lookup.",
  },
  {
    code: "MOD-03",
    title: "Mock Test & Result Engine",
    desc: "Timed online exam platform with real-time countdown, negative marking calculation, auto-grading, and instant student performance scorecards.",
  },
  {
    code: "MOD-04",
    title: "Centralized Institute CMS",
    desc: "Zero-code admin panel allowing the coaching team to edit notice marquees, course catalogs, fee structures, and public announcements directly.",
  },
  {
    code: "MOD-05",
    title: "Batch, Student & Staff Management",
    desc: "Unified operational registry for tracking student admissions, batch allocation, instructor schedules, and inquiry pipelines in one place.",
  },
  {
    code: "MOD-06",
    title: "High-ROI Architecture & Fast Rollout",
    desc: "Custom-engineered stack delivered in under 10 days, eliminating costly recurring 3rd-party SaaS fees with 100% permanent client code ownership.",
  },
];

const sprintStages = [
  {
    days: "Days 01–03",
    phase: "Architecture & DB",
    detail: "Database schema design, relational tables for courses/batches, role-based student & staff authentication architecture.",
  },
  {
    days: "Days 04–06",
    phase: "Generators & CMS",
    detail: "Core algorithms for dynamic marksheet calculation, PDF rendering pipeline, QR verification registry, and administrative CMS.",
  },
  {
    days: "Days 07–08",
    phase: "Mock Test Engine",
    detail: "Question bank schema, timed exam state management, automated evaluation logic, and student scorecard generation.",
  },
  {
    days: "Days 09–10",
    phase: "Audit & Deployment",
    detail: "Data integrity stress-testing, mobile responsiveness audit, institute staff handover, and live production deployment.",
  },
];

export default function CaseStudyRama() {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Label + logo bar */}
      <div className="flex items-center gap-4 mb-10">
        <span className="label-tag">Case Study / Institute ERP</span>
        <div className="h-px flex-1 bg-[var(--border)]" />
        <div className="flex items-center gap-3">
          <div className="bg-white border border-[var(--border)] p-1.5 rounded-sm flex items-center justify-center">
            <Image
              src="/work/rama-logo.jpeg"
              alt="Rama Coaching Center"
              width={140}
              height={36}
              className="h-8 md:h-9 w-auto object-contain"
              style={{ width: "auto" }}
              unoptimized
            />
          </div>
          <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.14em] hidden sm:inline-block">
            Fatehpur, UP
          </span>
        </div>
      </div>

      {/* Headline + Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 md:mb-16">
        <div className="lg:col-span-8">
          <div className="relative inline-block mb-3">
            <span className="font-mono text-[0.6875rem] text-[var(--text)] uppercase tracking-widest font-semibold border border-[var(--text)] px-2 py-0.5">
              Production Case Study · Record 10-Day Delivery
            </span>
          </div>
          <h2 className="font-montserrat font-semibold text-[clamp(1.6rem,2.8vw,2.35rem)] leading-[1.14] tracking-tight text-[var(--text)]">
            Full-scale Coaching ERP, Marksheet Generator &amp; Test Engine — shipped in 10 days.
          </h2>
          <div className="mt-3 max-w-sm">
            <HandDrawnUnderline className="w-48 h-3 text-[var(--text)]" />
          </div>
        </div>
        <div className="lg:col-span-4 mt-1">
          <p className="font-montserrat text-[var(--text-2)] text-[0.9375rem] leading-[1.8]">
            Rama Coaching Center needed a complete, turnkey digital infrastructure delivered urgently: public portal, centralized CMS, automated marksheet &amp; certificate engines, mock test portal, and student management — delivered on time within the client&apos;s budget.
          </p>
        </div>
      </div>

      {/* Hero Banner / UI Mockup — Editorial Framed */}
      <div className="border border-[var(--border)] bg-[#111111] mb-10 md:mb-14 lg:mb-16 shadow-[4px_4px_0px_0px_#111111]">
        {/* Top Spec Bar */}
        <div className="border-b border-white/10 px-4 md:px-6 py-2.5 flex items-center justify-between text-white/50 font-montserrat text-[0.6875rem] uppercase tracking-[0.12em]">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Production Release</span>
            <span>·</span>
            <span>https://ramainstitutetech.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-none bg-emerald-500 inline-block" />
            <span className="tabular-nums text-white">Live System</span>
          </div>
        </div>

        {/* Screenshot Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#0A0A0A]">
          <Image
            src="/work/rama-banner.png"
            alt="Rama Coaching Center Platform"
            fill
            className="object-cover object-top opacity-90"
            sizes="100vw"
            loading="lazy"
          />
        </div>

        {/* Bottom Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10 font-montserrat text-white">
          <div className="p-4 md:p-5 relative">
            <p className="text-[0.625rem] text-white/40 uppercase tracking-[0.12em] mb-1">Turnaround Time</p>
            <p className="text-[1.25rem] font-bold tracking-tight">10 Days</p>
            <div className="absolute right-4 top-3 w-16 h-8 pointer-events-none opacity-40">
              <HandDrawnCircle className="w-full h-full text-white" />
            </div>
          </div>
          <div className="p-4 md:p-5">
            <p className="text-[0.625rem] text-white/40 uppercase tracking-[0.12em] mb-1">Core Modules</p>
            <p className="text-[1.25rem] font-bold tracking-tight">7+ Engines</p>
          </div>
          <div className="p-4 md:p-5">
            <p className="text-[0.625rem] text-white/40 uppercase tracking-[0.12em] mb-1">Verification</p>
            <p className="text-[1.25rem] font-bold tracking-tight">100% Online QR</p>
          </div>
          <div className="p-4 md:p-5">
            <p className="text-[0.625rem] text-white/40 uppercase tracking-[0.12em] mb-1">Code Rights</p>
            <p className="text-[1.25rem] font-bold tracking-tight">100% Client Owned</p>
          </div>
        </div>
      </div>

      {/* ── Hand-Drawn Core Automation Engines Showcase (Marksheet + Certificate) ── */}
      <div className="border border-[var(--border)] bg-white mb-10 md:mb-14 lg:mb-16">
        <div className="border-b border-[var(--border)] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[var(--bg-subtle)]">
          <div>
            <span className="font-montserrat font-bold text-[0.75rem] text-[var(--text)] uppercase tracking-[0.16em]">
              Automated Document &amp; Verification Architecture
            </span>
            <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)] mt-0.5">
              Custom-built PDF compilation and tamper-proof verification engines
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.6875rem] text-[var(--text)] uppercase tracking-wider border border-[var(--text)] px-2 py-0.5 bg-white">
              Zero Manual Paperwork
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
          {/* Side A: Marksheet Generator */}
          <div className="p-6 md:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.6875rem] font-bold text-[var(--text)] uppercase tracking-wider border-b border-[var(--text)] pb-0.5">
                  ENGINE A · MARKSHEET GENERATOR
                </span>
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">A4 Vector Output</span>
              </div>
              <h3 className="font-montserrat font-bold text-[1.125rem] text-[var(--text)] mb-2">
                1-Click Dynamic Student Marksheets
              </h3>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.75] mb-6">
                Calculates totals, subject grading, and percentage instantly. Generates an official, print-ready A4 marksheet with school seal and roll number lookup.
              </p>

              {/* Hand-Drawn Illustration Art for Marksheet */}
              <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border)] relative group">
                <HandDrawnMarksheetSketch className="w-full max-w-[280px] mx-auto text-[var(--text)]" />
                <div className="mt-3 flex items-center justify-between text-[0.6875rem] font-mono text-[var(--text-3)] border-t border-[var(--border)] pt-2">
                  <span>Dynamic Calculation</span>
                  <span className="text-[var(--text)] font-semibold">100% Error-Free</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-1.5 font-montserrat text-[0.75rem] text-[var(--text-2)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--text)] shrink-0" />
                <span>Eliminates 15+ hours of manual office staff grading every exam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--text)] shrink-0" />
                <span>Single-click download directly from student login portal</span>
              </div>
            </div>
          </div>

          {/* Side B: Certificate Verification Engine */}
          <div className="p-6 md:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.6875rem] font-bold text-[var(--text)] uppercase tracking-wider border-b border-[var(--text)] pb-0.5">
                  ENGINE B · CERTIFICATE VERIFIER
                </span>
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">Tamper-Proof QR</span>
              </div>
              <h3 className="font-montserrat font-bold text-[1.125rem] text-[var(--text)] mb-2">
                Cryptographic QR Certificate Verification
              </h3>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.75] mb-6">
                Each certificate is issued with a unique cryptographic hash and QR code. Employers and universities can scan or search roll numbers online at /verification.
              </p>

              {/* Hand-Drawn Illustration Art for Certificate */}
              <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border)] relative group">
                <HandDrawnCertificateSketch className="w-full max-w-[280px] mx-auto text-[var(--text)]" />
                <div className="mt-3 flex items-center justify-between text-[0.6875rem] font-mono text-[var(--text-3)] border-t border-[var(--border)] pt-2">
                  <span>Public URL Lookup</span>
                  <span className="text-[var(--text)] font-semibold">Instant Authenticity</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-1.5 font-montserrat text-[0.75rem] text-[var(--text-2)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--text)] shrink-0" />
                <span>Prevents fake certificate circulation with public online registry</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--text)] shrink-0" />
                <span>Live search endpoint at ramainstitutetech.com/verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 10-Day Production Sprint Ledger with Hand-Drawn Stopwatch ── */}
      <div className="border border-[var(--border)] bg-white mb-10 md:mb-14 lg:mb-16">
        <div className="border-b border-[var(--border)] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--bg-subtle)]">
          <div className="flex items-center gap-3">
            <HandDrawnStopwatchSketch className="w-7 h-7 text-[var(--text)] shrink-0" />
            <div>
              <span className="font-montserrat font-bold text-[0.75rem] text-[var(--text)] uppercase tracking-[0.16em]">
                Production Velocity · 10-Day Sprint Breakdown
              </span>
              <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">
                Linear engineering ledger from architecture to public production release
              </p>
            </div>
          </div>
          <span className="font-mono text-[0.6875rem] text-[var(--text)] font-semibold tabular-nums border border-[var(--text)] px-2 py-0.5 bg-white">
            Sprint Complete · Zero Delays
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[var(--border)]">
          {sprintStages.map((s) => (
            <div key={s.days} className="p-6 md:p-7 flex flex-col justify-between hover:bg-[var(--bg-subtle)] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[0.75rem] font-bold text-[var(--text)] uppercase tracking-wider">
                    {s.days}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-none bg-[var(--text)]" />
                </div>
                <p className="font-montserrat font-bold text-[0.9375rem] text-[var(--text)] mb-2">
                  {s.phase}
                </p>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.7]">
                  {s.detail}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--border)] font-mono text-[0.6875rem] text-[var(--text-3)]">
                ✓ Verified Phase
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Transformation Cards (Before / After / Result with Hand-Drawn Stamp) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] mb-10 md:mb-14 lg:mb-16">

        {/* Before */}
        <div className="bg-[#F7F5F2] p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-montserrat font-semibold text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.18em] border border-[var(--border)] px-2.5 py-1">
                Before
              </span>
              <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">Prior Workflow</span>
            </div>
            <p className="font-montserrat font-bold text-[1.125rem] md:text-[1.25rem] text-[var(--text)] mb-3 leading-snug">
              Manual paperwork &amp; operational friction
            </p>
            <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.8]">
              Marksheets prepared manually on office sheets, slow physical verification, unorganized batch rosters, and dependency on third-party test platforms.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            {[
              "Manual marks calculation",
              "Slow physical verification",
              "Heavy recurring SaaS costs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-none border border-[var(--text-3)] shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[var(--text-3)]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="bg-white p-6 md:p-10 flex flex-col justify-between border-x-0 md:border-x-2 border-[var(--text)]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-montserrat font-semibold text-[0.625rem] text-white uppercase tracking-[0.18em] bg-[var(--text)] px-2.5 py-1">
                Engineered
              </span>
              <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">Custom Build</span>
            </div>
            <p className="font-montserrat font-bold text-[1.125rem] md:text-[1.25rem] text-[var(--text)] mb-3 leading-snug">
              Unified custom coaching software
            </p>
            <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.8]">
              Custom-engineered portal with integrated student verification, dynamic marksheet generators, online mock examination, and instant admin control.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            {[
              "Automated 1-click marksheet",
              "Public QR code verification",
              "Full non-tech CMS control",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-none bg-[var(--text)] shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[var(--text)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Result with Hand-Drawn Stamp */}
        <div className="bg-[#111111] p-6 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Subtle Hand-Drawn Stamp placed in top right */}
          <div className="absolute right-4 top-4 opacity-30 pointer-events-none">
            <HandDrawnStamp label="10 DAYS" sub="SHIPPED" className="w-24 h-24 text-white" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-montserrat font-semibold text-[0.625rem] text-black uppercase tracking-[0.18em] bg-white px-2.5 py-1">
                Result
              </span>
              <span className="font-montserrat text-[0.6875rem] text-white/40">Verified</span>
            </div>
            <p className="font-montserrat font-bold text-[1.75rem] md:text-[2.25rem] text-white leading-tight mb-3">
              10 Days Deployed
            </p>
            <p className="font-montserrat text-[0.8125rem] text-white/60 leading-[1.7]">
              Production release completed within record deadline at high-ROI institute pricing. Zero ongoing 3rd-party software subscriptions.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            {[
              "On-time delivery guarantee met",
              "100% permanent code ownership",
              "Live at ramainstitutetech.com",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-none bg-white/40 shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Deliverables Grid (Engineering Spec Ledger) ── */}
      <div className="mb-10 md:mb-14 lg:mb-16">
        <span className="label-tag block mb-6 md:mb-8">Technical Deliverables Matrix</span>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {modules.map((m) => (
            <div key={m.code} className="grid grid-cols-12 gap-3 py-5 md:py-6">
              <div className="col-span-3 sm:col-span-2 md:col-span-1">
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] font-mono tracking-tight">
                  [{m.code}]
                </span>
              </div>
              <div className="col-span-9 sm:col-span-10 md:col-span-4">
                <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">
                  {m.title}
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 mt-1 md:mt-0">
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.75]">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Links + Hand-Drawn Arrow Hook */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--border)]">
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="https://ramainstitutetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-[0.875rem] text-[var(--text)] border-b-2 border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity duration-150"
          >
            Visit Rama Coaching Center <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
          <Link
            href="https://ramainstitutetech.com/verification"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat text-[0.875rem] text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-150"
          >
            Inspect Verification Engine <ArrowUpRight size={13} strokeWidth={1.75} />
          </Link>
          <Link
            href="https://ramainstitutetech.com/mock-test"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat text-[0.875rem] text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-150"
          >
            View Mock Test Platform <ArrowUpRight size={13} strokeWidth={1.75} />
          </Link>
        </div>

        <div className="flex items-center gap-2 select-none">
          <HandDrawnArrow className="w-7 h-6 text-[var(--text-3)] -rotate-12" />
          <span className="font-mono text-[0.6875rem] text-[var(--text-3)] uppercase tracking-wide">
            100% Code Ownership Transferred
          </span>
        </div>
      </div>

    </article>
  );
}
