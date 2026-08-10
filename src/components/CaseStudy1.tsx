"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const deliverables = [
  { num: "01", title: "UI Redesign",         desc: "Every screen rethought from the visitor's perspective. Clear hierarchy, fast visual communication." },
  { num: "02", title: "Performance",          desc: "Faster load times, optimised assets and clean code. Core Web Vitals considered from day one." },
  { num: "03", title: "SEO Architecture",     desc: "Heading structure, schema markup, local signals and page speed — built in, not patched on." },
  { num: "04", title: "Admin Dashboard",      desc: "Non-technical content management. The institute team updates the website without developer involvement." },
  { num: "05", title: "Course Management",    desc: "Add, edit and archive courses, batches and faculty without touching code." },
  { num: "06", title: "Search Visibility",    desc: "Ranks at the top for relevant local coaching searches. Verified and ongoing." },
];

export default function CaseStudy1() {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Label + logo */}
      <div className="flex items-center gap-4 mb-10">
        <span className="label-tag">Case Study / Education</span>
        <div className="h-px flex-1 bg-[var(--border)]" />
        <Image
          src="https://interfaceclasses.com/assets/logo-main.jpeg"
          alt="Interface Classes"
          width={140}
          height={36}
          className="h-9 w-auto object-contain grayscale opacity-80 bg-white p-1.5 rounded-sm" style={{ width: "auto" }}
          unoptimized
        />
      </div>

      {/* Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 md:mb-16">
        <div className="lg:col-span-9">
          <h2 className="font-montserrat font-semibold text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.15] tracking-tight text-[var(--text)]">
            From an outdated website to a high-performing digital presence.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-1 mt-2">
          <p className="font-montserrat text-[var(--text-2)] text-[0.9375rem] leading-[1.8]">
            Interface Classes already had a website — but its UI, performance, content management and search visibility were all weak. Expecto redesigned the entire digital product from the ground up.
          </p>
        </div>
      </div>

      {/* ── SEO Rank Highlight ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)] mb-10 md:mb-14 lg:mb-16">

        {/* Left: rank proof */}
        <div className="lg:col-span-7 bg-[#111111] p-6 md:p-10 flex flex-col justify-between gap-6 md:gap-8">
          <div>
            {/* Google SEO icon + label */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shrink-0">
                <Image
                  src="https://png.pngtree.com/png-vector/20230817/ourlarge/pngtree-google-seo-icon-vector-png-image_9183334.png"
                  alt="Google SEO"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.1em]">
                Google Ranking · Kanpur
              </span>
            </div>

            <p className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.0] text-white tracking-tight mb-2">
              #1 Rank
            </p>
            <p className="font-montserrat text-[0.875rem] md:text-[1.125rem] text-white/60 leading-[1.6]">
              &ldquo;Best IIT JEE Coaching in Kanpur&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-montserrat text-[0.75rem] text-white/60 mb-0.5">Moved from</p>
              <p className="font-montserrat font-bold text-[1.25rem] text-white/40 leading-none">
                100+ → <span className="text-white">#1</span>
              </p>
            </div>
            {/* Logo — smaller on mobile */}
            <div className="bg-white rounded px-3 py-1.5 md:px-4 md:py-2.5 flex items-center justify-center">
              <Image
                src="https://interfaceclasses.com/assets/logo-main.jpeg"
                alt="Interface Classes"
                width={180}
                height={48}
                className="h-8 md:h-12 w-auto object-contain" style={{ width: "auto" }}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right: what drove the result hidden on mobile */}
        <div className="hidden md:flex lg:col-span-5 bg-white p-8 md:p-10 flex-col justify-center gap-5">
          <span className="label-tag block">How it was achieved</span>
          {[
            "Semantic heading structure (H1→H2→H3)",
            "Schema markup for LocalBusiness & Course",
            "Core Web Vitals — LCP, CLS, FID optimised",
            "Location-specific content architecture",
            "Google Business Profile setup & alignment",
            "Internal linking & crawl structure",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0 mt-[0.45rem]" />
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Transformation cards — simplified on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] mb-10 md:mb-14 lg:mb-16">

        <div className="bg-[#F7F5F2] p-5 md:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <span className="font-montserrat font-semibold text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.18em] border border-[var(--border)] px-2.5 py-1">Before</span>
            <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">2023</span>
          </div>
          <p className="font-montserrat font-bold text-[1rem] md:text-[1.25rem] text-[var(--text)] mb-2 md:mb-4 leading-snug">Outdated &amp; invisible</p>
          <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.8] hidden md:block">Generic template. No SEO structure. Non-editable content. Slow on mobile.</p>
          <div className="mt-3 md:mt-6 flex flex-col gap-1.5">
            {["No search ranking","Poor mobile UX","No content control"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-[var(--text-3)] shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[var(--text-3)]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 md:p-10 flex flex-col border-x-0 md:border-x-2 border-[var(--text)]">
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <span className="font-montserrat font-semibold text-[0.625rem] text-white uppercase tracking-[0.18em] bg-[var(--text)] px-2.5 py-1">After</span>
            <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">2024</span>
          </div>
          <p className="font-montserrat font-bold text-[1rem] md:text-[1.25rem] text-[var(--text)] mb-2 md:mb-4 leading-snug">Redesigned &amp; ranking</p>
          <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.8] hidden md:block">Custom UI, fast load, admin panel, local SEO, WhatsApp integration.</p>
          <div className="mt-3 md:mt-6 flex flex-col gap-1.5">
            {["Custom UI","Admin dashboard","WhatsApp CTAs"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text)] shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[var(--text)]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] p-5 md:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <span className="font-montserrat font-semibold text-[0.625rem] text-black uppercase tracking-[0.18em] bg-white px-2.5 py-1">Result</span>
            <span className="font-montserrat text-[0.6875rem] text-white/40">Verified</span>
          </div>
          <p className="font-montserrat font-bold text-[1.5rem] md:text-[2.5rem] text-white leading-none mb-2">#1 Google</p>
          <p className="font-montserrat text-[0.8125rem] text-white/50 leading-[1.7] hidden md:block">Ranks for &ldquo;Best IIT JEE Coaching in Kanpur&rdquo; and related searches.</p>
          <div className="mt-3 md:mt-6 flex flex-col gap-1.5">
            {["#1 local rank","NEET & JEE","Ongoing"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/30 shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* What was delivered — heading only on mobile */}
      <div className="mb-10 md:mb-14 lg:mb-16">
        <span className="label-tag block mb-5 md:mb-8">What was delivered</span>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {deliverables.map((d) => (
            <div key={d.num} className="grid grid-cols-12 md:grid-cols-12 gap-3 py-4 md:py-6">
              <div className="col-span-1">
                <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{d.num}</span>
              </div>
              <div className="col-span-11 md:col-span-3">
                <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{d.title}</p>
              </div>
              {/* Hide description on mobile */}
              <div className="hidden md:block md:col-span-8">
                <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="https://interfaceclasses.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity duration-150"
        >
          Visit Interface Classes <ArrowUpRight size={13} strokeWidth={1.75} />
        </Link>
        <Link
          href="/niche/coaching-institute"
          className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors duration-150"
        >
          See all coaching work →
        </Link>
      </div>

    </article>
  );
}
