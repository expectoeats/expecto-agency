"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HandDrawnArrow } from "@/components/HandDrawnArt";

const BG = "/dark-teal.webp";

export default function Hero() {
  return (
    <section className="relative pt-[72px] md:pt-20 overflow-hidden bg-[#0D0D0D]" aria-label="Hero">

      {/* Background image — full bleed, dark overlay everywhere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src={BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Unified dark overlay — same on mobile + desktop */}
        <div className="absolute inset-0 bg-[#0D0D0D]/72" />
        {/* Subtle vignette bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <div className="pt-10 md:pt-24 pb-4">
          <span className="font-montserrat text-[0.625rem] text-white/50 uppercase tracking-[0.22em]">
            Expecto / Digital Agency
          </span>
        </div>

        {/* Heading with frosted-glass background pill */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white">
              Your business deserves a website<br className="hidden sm:block" />
              that{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                actually works
              </span>{" "}
              for you.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 md:mt-12 gap-6 md:gap-8 items-end pb-12 md:pb-24">
          <div className="lg:col-span-5">

            {/* Description — frosted card */}
            <div
              className="mb-7 md:mb-8 px-5 py-4 rounded-sm border border-white/10"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
            >
              <p className="font-montserrat text-white/80 text-[0.9375rem] md:text-[1rem] leading-[1.8]">
                We design and build websites, web apps, CRM systems and digital products that bring in customers, look credible and run without constant maintenance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 transition-colors duration-150
                  bg-white text-[#111111] hover:bg-white/90">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 transition-colors duration-150
                  border border-white/25 text-white hover:border-white/60 hover:bg-white/5">
                Explore Our Work
              </Link>
            </div>

            {/* Hand-drawn launch callout */}
            <div className="mt-6 flex items-center gap-2.5 select-none">
              <HandDrawnArrow className="w-8 h-7 text-white/50 -rotate-12 shrink-0" />
              <Link
                href="https://ramainstitutetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6875rem] text-white/75 hover:text-white tracking-wide border-b border-dashed border-white/40 pb-0.5 transition-colors"
              >
                Latest Release: Rama Coaching Center ERP — Shipped in 10 Days →
              </Link>
            </div>

            <div className="mt-6 md:mt-8">
              <span className="font-montserrat text-[0.75rem] text-white/35 tracking-wide">
                Websites · Web Apps · E-commerce · CRM · ERP · Digital Products
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-start-9 lg:col-span-4 justify-end items-end pb-1">
            <div className="text-right flex flex-col items-end">
              <div className="border border-white/15 bg-white/5 px-3 py-2 rounded-sm mb-3">
                <p className="font-mono text-[0.6875rem] text-white/80 uppercase tracking-widest font-semibold">
                  10-Day Sprint Guarantee
                </p>
                <p className="font-montserrat text-[0.625rem] text-white/40 mt-0.5">
                  Production-ready builds with full code handover
                </p>
              </div>
              <p className="font-montserrat text-[0.6875rem] text-white/40 uppercase tracking-[0.15em] mb-1.5">Based in India</p>
              <p className="font-montserrat text-[0.6875rem] text-white/40 uppercase tracking-[0.15em]">Ballia, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />
      </div>
    </section>
  );
}
