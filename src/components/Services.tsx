"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const realServices = [
  {
    num: "( 001 )",
    title: "Business Websites",
    image: "/service/buisness.webp",
    radius: "rounded-tl-[54px] rounded-br-[54px]",
    short: "Fast, credible high-converting websites engineered to turn visitors into inquiries.",
    deliverables: ["Custom UI", "Next.js Speed", "SEO Ready", "7-Day Sprint"],
    link: "/services",
  },
  {
    num: "( 002 )",
    title: "Web Applications",
    image: "/service/web-app.webp",
    radius: "rounded-tr-[54px] rounded-bl-[54px]",
    short: "Custom web apps, client portals, and SaaS dashboards built for high-performance workflows.",
    deliverables: ["Full-Stack", "Auth & RBAC", "APIs", "Database"],
    link: "/services",
  },
  {
    num: "( 003 )",
    title: "E-Commerce Stores",
    image: "/service/e-comm.webp",
    radius: "rounded-tl-[54px] rounded-br-[54px]",
    short: "Frictionless online stores with fast product browsing, multi-gateway checkout, and sync.",
    deliverables: ["Catalogues", "Razorpay / Stripe", "Cart", "Automated"],
    link: "/niche/ecommerce",
  },
  {
    num: "( 004 )",
    title: "Custom CRM & ERP",
    image: "/service/crm-erp.webp",
    radius: "rounded-tr-[54px] rounded-bl-[54px]",
    short: "Tailored operations software that centralizes data, replaces sheets, and automates pipelines.",
    deliverables: ["Lead Management", "Pipelines", "Role Access", "Analytics"],
    link: "/niche/crm-software",
  },
  {
    num: "( 005 )",
    title: "Mobile App Development",
    image: "/service/app-dev.webp",
    radius: "rounded-tl-[54px] rounded-br-[54px]",
    short: "Cross-platform iOS and Android apps engineered with React Native for native fluid performance.",
    deliverables: ["iOS & Android", "React Native", "Push Alerts", "Offline Sync"],
    link: "/services",
  },
  {
    num: "( 006 )",
    title: "SEO & Growth Marketing",
    image: "/service/seo.webp",
    radius: "rounded-tr-[54px] rounded-bl-[54px]",
    short: "Search engine optimization and local Google ranking systems that place your business at #1.",
    deliverables: ["Google Rank #1", "Local GMB", "Schema SEO", "Lead Inquiries"],
    link: "/services",
  },
  {
    num: "( 007 )",
    title: "Graphic Design & Branding",
    image: "/service/graphic.webp",
    radius: "rounded-tl-[54px] rounded-br-[54px]",
    short: "Brand identities, social media creatives, visual systems, and bespoke marketing collateral.",
    deliverables: ["Brand Identity", "Vector Logos", "Ad Creatives", "Brand Kit"],
    link: "/services",
  },
  {
    num: "( 008 )",
    title: "Video Editing & Production",
    image: "/service/vid.webp",
    radius: "rounded-tr-[54px] rounded-bl-[54px]",
    short: "High-impact brand films, Instagram reels, product showcases, and cinematic commercial production.",
    deliverables: ["Instagram Reels", "Commercials", "Color Grading", "Sound Design"],
    link: "/services",
  },
];

const realStats = [
  { value: "50+", label: "Businesses served across web, apps & custom software." },
  { value: "7 DAYS", label: "Turnaround guarantee in writing for qualified projects." },
  { value: "100%", label: "Code ownership certificate — you own all assets & data." },
  { value: "99%", label: "On-time delivery rate across 50+ deployed client projects." },
];

// Split services into 2 rows of 4
const ROW_1 = realServices.slice(0, 4); // Business, Web Apps, E-Comm, CRM & ERP
const ROW_2 = realServices.slice(4, 8); // Mobile App, SEO, Graphic, Video

// Repeat 4x per block (~4,800px wide) so no screen resolution ever runs out of cards
const BLOCK_1 = [...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1];
const BLOCK_2 = [...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2];

function ServiceCard({ service, tabIndex }: { service: typeof realServices[0]; tabIndex?: number }) {
  return (
    <div className="w-[170px] sm:w-[260px] md:w-[280px] flex-none">
      <Link href={service.link} className="group/card block" tabIndex={tabIndex}>
        {/* Visual Bungee Arch Card */}
        <div
          className={`relative aspect-square w-full overflow-hidden bg-white border border-[#E5E7EB] shadow-sm hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out ${service.radius}`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="280px"
            className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-[#1E1E1E] border border-white/60 shadow-sm">
            {service.num}
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-[#1E1E1E] group-hover/card:bg-[#1E1E1E] group-hover/card:text-white transition-all duration-300 shadow-sm">
            <ArrowUpRight size={13} className="group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300" />
          </div>
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between bg-white/95 backdrop-blur-md px-3 py-2 rounded-full border border-white/80 shadow-md translate-y-3 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
            <span className="text-[11px] font-semibold tracking-tight text-[#1E1E1E]">Explore Service</span>
            <ArrowUpRight size={12} className="text-[#1E1E1E]" />
          </div>
        </div>
        {/* Title & Pills */}
        <div className="mt-3 px-1">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#1E1E1E] group-hover/card:opacity-70 transition-opacity">
            {service.title}
          </h3>
          <p className="text-[11px] text-[#5A6271] mt-1 leading-relaxed line-clamp-2">
            {service.short}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {service.deliverables.map((item) => (
              <span key={item} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#F6F7F9] text-[#6B7280] border border-[#E5E7EB]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-[#E5E7EB] overflow-hidden" aria-label="Services">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 md:pb-14 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#5A6271] block mb-3">
              ( AGENCY CAPABILITIES )
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1E1E1E]">
              Services.
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-[#5A6271] hidden sm:inline">
              ( 08 CORE SERVICES )
            </span>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity py-2 px-4 rounded-full bg-[#F6F7F9] hover:bg-[#EEF0F6] border border-[#E5E7EB]"
            >
              <span>Explore all services</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Dual-Row Continuous Endless Sliders (Zero End Gap) ── */}
      <div className="flex flex-col gap-6 mt-8 md:mt-10">

        {/* ROW 1 → slides LEFT (Business, Web Apps, E-Comm, CRM & ERP) */}
        <div className="relative w-full overflow-hidden group/row1">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max py-2 animate-[service-marquee-left_55s_linear_infinite] group-hover/row1:[animation-play-state:paused]">
            {/* Block A */}
            <div className="flex items-start gap-5 pr-5 shrink-0">
              {BLOCK_1.map((service, idx) => (
                <ServiceCard key={`r1-a-${service.title}-${idx}`} service={service} />
              ))}
            </div>
            {/* Block B (seamless loop twin) */}
            <div className="flex items-start gap-5 pr-5 shrink-0" aria-hidden="true">
              {BLOCK_1.map((service, idx) => (
                <ServiceCard key={`r1-b-${service.title}-${idx}`} service={service} tabIndex={-1} />
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 → slides RIGHT (Mobile App, SEO, Graphic, Video) */}
        <div className="relative w-full overflow-hidden group/row2">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max py-2 animate-[service-marquee-right_55s_linear_infinite] group-hover/row2:[animation-play-state:paused]">
            {/* Block A */}
            <div className="flex items-start gap-5 pr-5 shrink-0">
              {BLOCK_2.map((service, idx) => (
                <ServiceCard key={`r2-a-${service.title}-${idx}`} service={service} />
              ))}
            </div>
            {/* Block B (seamless loop twin) */}
            <div className="flex items-start gap-5 pr-5 shrink-0" aria-hidden="true">
              {BLOCK_2.map((service, idx) => (
                <ServiceCard key={`r2-b-${service.title}-${idx}`} service={service} tabIndex={-1} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Agency Mission & Verified Stats Strip */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-28">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#5A6271] block mb-3">
            ( DIGITAL AGENCY MISSION )
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E] leading-[1.15]">
            Expecto® is a full-service digital agency building high-performance websites, web apps, and business software across India.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {realStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 md:p-8 rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E1E1E] tabular-nums font-mono mb-4">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-[#5A6271] font-mono leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
