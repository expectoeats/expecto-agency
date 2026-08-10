"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudy2() {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Label + logo */}
      <div className="flex items-center gap-4 mb-8">
        <span className="label-tag">Case Study / Marketplace</span>
        <div className="h-px flex-1 bg-[var(--border)]" />
        <Image
          src="https://www.swapzy.store/_next/image?url=%2Fswapzy-logo.png&w=64&q=75"
          alt="Swapzy"
          width={80}
          height={32}
          className="h-8 w-auto object-contain" style={{ width: "auto" }}
          unoptimized
        />
      </div>

      {/* Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
        <div className="lg:col-span-9">
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.08] tracking-tight text-[var(--text)]">
            A marketplace built for a real university ecosystem.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-1 mt-2">
          <p className="font-montserrat text-[var(--text-2)] text-[0.9375rem] leading-[1.75]">
            Swapzy is a student marketplace live at Parul University, Vadodara. Students buy, sell and rent items within the campus — a real product used by real people.
          </p>
        </div>
      </div>

      {/* Main screenshot — large */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.09)] mb-px">
        <Image
          src="/work/swapzy.webp"
          alt="Swapzy marketplace"
          fill
          className="object-cover object-top"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      {/* Two-col below main image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border-x border-b border-[var(--border)] mb-14">
        {/* Features */}
        <div className="bg-white p-8 md:p-10">
          <span className="label-tag block mb-6">Product Features</span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {[
              "Buy, Sell & Rent",
              "Verified Accounts",
              "Product Discovery",
              "Listing Management",
              "User Dashboards",
              "Mobile-first Design",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0" />
                <span className="font-montserrat text-[0.8125rem] text-[var(--text-2)]">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Context */}
        <div className="bg-[var(--bg-subtle)] p-8 md:p-10 flex flex-col gap-6">
          <div>
            <span className="label-tag block mb-2">Platform Context</span>
            <p className="font-montserrat font-semibold text-[1.125rem] text-[var(--text)] leading-snug">
              Live at Parul University, Vadodara
            </p>
            <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mt-2 leading-[1.7]">
              Not a concept. Not a demo. A real product deployed in a real university campus environment.
            </p>
          </div>
          <div className="flex gap-8 mt-auto">
            <div>
              <p className="font-montserrat font-bold text-[1.75rem] text-[var(--text)] leading-none">Live</p>
              <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em] mt-1">Status</p>
            </div>
            <div>
              <p className="font-montserrat font-bold text-[1.75rem] text-[var(--text)] leading-none">Full Stack</p>
              <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em] mt-1">Engineering</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="https://swapzy.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity duration-150"
      >
        Open Swapzy <ArrowUpRight size={13} strokeWidth={1.75} />
      </Link>

    </article>
  );
}
