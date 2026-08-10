"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    category: "Commerce · Marketplace",
    name: "Swapzy",
    purpose: "Live peer-to-peer student marketplace at Parul University, Vadodara.",
    url: "https://swapzy.store/",
    image: "/work/swapzy.webp",
  },
  {
    category: "Education · Web Application",
    name: "Education CRM",
    purpose: "Lead and student management system built for coaching institutes.",
    url: "https://expecto-edu-crm.vercel.app/",
    image: "/work/edu-crm.webp",
  },
];

const selected = [
  {
    category: "Education · Website",
    name: "Kindergarten Website",
    url: "https://expecto-kindergarten.vercel.app/",
    image: "/work/school/kindergarten.webp",
  },
  {
    category: "Education · Website",
    name: "Kindergarten 02",
    url: "https://expecto-kindergarten2.vercel.app/",
    image: "/work/school/kindergarten2.webp",
  },
  {
    category: "Education · Website",
    name: "NEET Coaching",
    url: "https://expecto-neet-coaching.vercel.app/",
    image: "/work/coaching/expecto-demo-coaching.webp",
  },
  {
    category: "Real Estate · CRM",
    name: "Real Estate CRM",
    url: "https://expecto-real-estate-crm-xxh2.vercel.app/",
    image: "/work/real-estate-crm.webp",
  },
];

export default function DemoLibrary() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
        <div className="lg:col-span-6">
          <span className="label-tag block mb-6">Demo Library</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
            Explore what we can build.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex items-end">
          <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
            Live, working products — not mockups. Click through and explore the actual experience.
          </p>
        </div>
      </div>

      {/* Featured — 2 large */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((d) => (
          <div
            key={d.name}
            className="group flex flex-col bg-white border border-[var(--border)] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-shadow duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 border-t border-[var(--border)]">
              <span className="label-tag block mb-2">{d.category}</span>
              <h3 className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-2">{d.name}</h3>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.6] flex-1 mb-5">{d.purpose}</p>
              <Link
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-montserrat text-[0.8125rem] font-medium text-[var(--text)] hover:opacity-60 transition-opacity duration-150"
              >
                Open Demo <ArrowUpRight size={13} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Selected — 4 smaller */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {selected.map((d) => (
          <div
            key={d.name}
            className="group flex flex-col bg-white border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)] transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
            <div className="p-4 border-t border-[var(--border)]">
              <span className="label-tag block mb-1.5">{d.category}</span>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-montserrat font-medium text-[0.875rem] text-[var(--text)]">{d.name}</h3>
                <Link
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${d.name}`}
                  className="shrink-0 text-[var(--text-3)] hover:text-[var(--text)] transition-colors duration-150"
                >
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
