"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Unsplash — free to use, semantically relevant
const I_HERO    = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80&auto=format&fit=crop";
const I_PLAN    = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop";
const I_WEB     = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&auto=format&fit=crop";
const I_ECOM    = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop";
const I_APP     = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format&fit=crop";
const I_CRM     = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop";
const I_UX      = "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop";
const I_SEO     = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop";
const I_CODE    = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop";
const I_CREATIVE= "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&auto=format&fit=crop";
const I_PROCESS = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop";
const I_FIT     = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop";

const capabilities = ["Web", "Applications", "E-Commerce", "CRM / ERP", "UI / UX", "SEO", "Software", "Creative"];

const services = [
  {
    num: "01", title: "Website Development", slug: "WEB DEVELOPMENT",
    headline: "Websites that have a job to do.",
    desc: "We build business websites around clarity, performance, SEO and conversion — not around a pre-made template.",
    caps: ["Business Websites","Landing Pages","Corporate Websites","Education Websites","Local Business Websites","SEO-focused Websites"],
    image: I_WEB, imageAlt: "Modern business website on a laptop desk",
    href: "/niche/custom-website",
  },
  {
    num: "02", title: "Web Applications", slug: "WEB APPLICATIONS",
    headline: "When a website isn't enough.",
    desc: "Custom web applications for businesses that need users, workflows, dashboards, permissions or functionality beyond a standard website.",
    caps: ["Dashboards","Portals","Booking Systems","Customer Platforms","Internal Tools","SaaS Products"],
    image: I_APP, imageAlt: "Professional web application workspace on laptop",
    href: "/services",
  },
  {
    num: "03", title: "E-Commerce", slug: "E-COMMERCE",
    headline: "Turn products into a digital business.",
    desc: "E-commerce experiences designed around product discovery, purchasing, management and growth.",
    caps: ["Product Catalogues","Cart & Checkout","Payments","Order Management","Inventory","Admin Management"],
    image: I_ECOM, imageAlt: "Modern e-commerce shopping interface on laptop",
    href: "/niche/ecommerce",
  },
  {
    num: "04", title: "CRM & ERP", slug: "CRM & ERP",
    headline: "Replace scattered work with a system.",
    desc: "Custom business software for managing leads, customers, operations and internal workflows in one place.",
    caps: ["Lead Management","Education CRM","Real Estate CRM","Sales Pipelines","Reporting","Operations"],
    image: I_CRM, imageAlt: "Business management dashboard analytics",
    href: "/niche/crm-software",
  },
  {
    num: "05", title: "UI/UX Redesign", slug: "UI / UX REDESIGN",
    headline: "Keep the product. Fix the experience.",
    desc: "If an existing website feels outdated, slow or fails to convert, we redesign the experience without treating the existing product as disposable.",
    caps: ["Information Architecture","UI Redesign","Mobile Experience","UX Improvements","Performance","Conversion"],
    image: I_UX, imageAlt: "UX designer working with wireframes on a large display",
    href: "/services",
  },
  {
    num: "06", title: "SEO & Performance", slug: "SEO & PERFORMANCE",
    headline: "Visibility starts with the foundation.",
    desc: "Technical and on-page SEO built into the website from the beginning — not added as an afterthought.",
    caps: ["Technical SEO","Metadata","Structured Data","Local SEO","Core Web Vitals","Analytics"],
    image: I_SEO, imageAlt: "Search analytics workspace on laptop",
    href: "/services",
    note: "We optimise for search. We don't sell guaranteed rankings.",
  },
  {
    num: "07", title: "Custom Software", slug: "CUSTOM SOFTWARE",
    headline: "Build the system your workflow actually needs.",
    desc: "When off-the-shelf software doesn't fit the way your business works, we design and develop a custom system around your process.",
    caps: ["Business Management Systems","Internal Tools","Admin Panels","SaaS Products","Custom Dashboards","APIs"],
    image: I_CODE, imageAlt: "Software engineering workspace with code on screen",
    href: "/services",
  },
];

const pricing = [
  { name: "Landing Page",       price: "₹1,999",    time: "3 days",           use: "Single-page for campaigns, promotions or business listings." },
  { name: "Business Website",   price: "₹3,999",    time: "5 days",           use: "Multi-page website for small and growing businesses." },
  { name: "Growth Website",     price: "₹6,999",    time: "7 days",           use: "Larger website with blog, enquiry system and advanced SEO." },
  { name: "E-commerce Starter", price: "₹9,999",    time: "10 days",          use: "Online store with product catalogue, cart and payment integration." },
  { name: "Custom Web App",     price: "₹14,999+",  time: "Scope-dependent",  use: "Custom application, dashboard or business system." },
];

const outcomes = [
  { num: "01", label: "Fast",        desc: "Pages should load quickly without unnecessary complexity." },
  { num: "02", label: "Clear",       desc: "Visitors should understand the business and what to do next." },
  { num: "03", label: "Responsive",  desc: "The experience should work naturally across all devices." },
  { num: "04", label: "Search-Ready",desc: "The technical foundation should support search visibility." },
  { num: "05", label: "Manageable",  desc: "Non-technical teams should be able to update content where needed." },
  { num: "06", label: "Scalable",    desc: "The product should leave room for future requirements." },
];

const stack = [
  { cat: "Frontend",     items: ["React","Next.js","TypeScript","Tailwind CSS","HTML / CSS"] },
  { cat: "Backend",      items: ["Node.js","Express.js","PHP"] },
  { cat: "Database",     items: ["MongoDB","PostgreSQL","Firebase","Supabase"] },
  { cat: "Infrastructure",items: ["Vercel","Cloudinary"] },
  { cat: "Design",       items: ["Figma","UI/UX","Graphic Design"] },
];

export default function ServicesPageClient() {
  return (
    <div className="bg-white text-[var(--text)] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-[72px] md:pt-20 border-b border-white/10 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src={I_HERO} alt="" fill className="object-cover object-center" sizes="100vw" priority unoptimized />
          <div className="absolute inset-0 bg-[#0D0D0D]/72" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
          <span className="font-montserrat text-[0.625rem] text-white/50 uppercase tracking-[0.22em] block mb-6">Services / Expecto</span>
          <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white max-w-[680px] mb-6">
            Digital products{" "}
            <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
              built around
            </span>{" "}
            your business.
          </h1>
          {/* Frosted description card */}
          <div className="mb-8 px-5 py-4 rounded-sm border border-white/10 max-w-[520px]"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}>
            <p className="font-montserrat text-white/80 text-[1rem] leading-[1.8]">
              Websites, web applications, e-commerce platforms and business systems — designed, engineered and deployed around what your business actually needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:bg-white/90 transition-colors duration-150">
              Start a Project <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 border border-white/25 text-white font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:border-white/60 hover:bg-white/5 transition-colors duration-150">
              See Our Work
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-0">
            {capabilities.map((c, i) => (
              <span key={c} className="flex items-center">
                <span className="font-montserrat text-[0.6875rem] text-white/35 uppercase tracking-[0.1em]">{c}</span>
                {i < capabilities.length - 1 && <span className="mx-3 text-white/15 text-[0.75rem]">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 / START WITH THE PROBLEM ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="label-tag block mb-5">01 / Starting Point</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-6">
                Start with the problem.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] mb-4">
                A business website, an online store and an internal CRM may all look like "web development" from the outside. They are not the same problem.
              </p>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                We choose the technology, structure and scope around what the business actually needs to accomplish.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.09)]">
              <Image src={I_PLAN} alt="Digital strategy planning workspace" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR BUSINESS NEEDS ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { num:"01", q:"Need a better online presence?", svc:"Websites", desc:"Business websites designed around clarity, performance, search visibility and enquiries.", img:I_WEB, imgAlt:"Modern business website on laptop" },
              { num:"02", q:"Need to sell online?", svc:"E-Commerce", desc:"Digital storefronts built around product discovery, purchasing and management.", img:I_ECOM, imgAlt:"E-commerce shopping interface" },
              { num:"03", q:"Need a digital system?", svc:"Web Applications", desc:"Custom interfaces and systems for workflows, dashboards, portals and business operations.", img:I_APP, imgAlt:"Professional software dashboard workspace" },
              { num:"04", q:"Need to manage the business?", svc:"CRM / ERP", desc:"Systems for leads, customers, operations, reporting and internal workflows.", img:I_CRM, imgAlt:"Business management dashboard" },
            ].map((item) => (
              <div key={item.num} className="bg-white group flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-subtle)]">
                  <Image src={item.img} alt={item.imgAlt} fill className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]" sizes="50vw" loading="lazy" unoptimized />
                </div>
                <div className="p-7 md:p-8 border-t border-[var(--border)] flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{item.num}</span>
                    <span className="font-montserrat font-bold text-[0.625rem] text-[var(--text)] uppercase tracking-[0.12em] border border-[var(--border)] px-2 py-0.5">{item.svc}</span>
                  </div>
                  <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-2 leading-snug">{item.q}</p>
                  <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 / WHAT WE BUILD — SERVICE ROWS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">02 / Capabilities</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">What we build.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">From a focused business website to a custom digital system — the scope changes with the problem.</p>
            </div>
          </div>
          <div className="space-y-0 border-y border-[var(--border)]">
            {services.map((svc, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={svc.num} className={`border-b border-[var(--border)] last:border-b-0 ${flip ? "bg-[var(--bg-subtle)]" : "bg-white"}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${flip ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums border border-[var(--border)] px-2.5 py-1">{svc.num}</span>
                        <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.12em]">{svc.slug}</span>
                      </div>
                      <h3 className="font-montserrat font-bold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.15] tracking-tight text-[var(--text)] mb-4">{svc.headline}</h3>
                      <p className="font-montserrat text-[0.9rem] text-[var(--text-2)] leading-[1.8] mb-5">{svc.desc}</p>
                      {svc.note && <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] border-l-2 border-[var(--border)] pl-3 mb-5 italic">{svc.note}</p>}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {svc.caps.map((c) => (
                          <span key={c} className="font-montserrat text-[0.6875rem] text-[var(--text-3)] border border-[var(--border)] px-2.5 py-1">{c}</span>
                        ))}
                      </div>
                      <Link href={svc.href} className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 w-fit hover:opacity-60 transition-opacity duration-150">
                        Explore {svc.title} <ArrowUpRight size={13} strokeWidth={1.75} />
                      </Link>
                    </div>
                    <div className={`${flip ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative aspect-[16/10] overflow-hidden border-l border-[var(--border)]">
                        <Image src={svc.image} alt={svc.imageAlt} fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative services — compact */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums border border-[var(--border)] px-2.5 py-1 mr-3">08</span>
              <span className="label-tag">DIGITAL CONTENT & CREATIVE</span>
              <h3 className="font-montserrat font-bold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.15] tracking-tight text-[var(--text)] mt-4 mb-4">The product is only part of the digital presence.</h3>
              <p className="font-montserrat text-[0.9rem] text-[var(--text-2)] leading-[1.8] mb-6">Supporting digital products with visual content businesses need to communicate and promote.</p>
              <div className="grid grid-cols-2 gap-2">
                {["Video Editing","Promotional Videos","Graphic Design","Social Media Reels"].map((c) => (
                  <span key={c} className="font-montserrat text-[0.6875rem] text-[var(--text-3)] border border-[var(--border)] bg-white px-3 py-2">{c}</span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image src={I_CREATIVE} alt="Video and creative production workspace" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 / PROCESS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="label-tag block mb-5">03 / Delivery</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-5">Every project starts with a clear foundation.</h2>
              <p className="font-montserrat text-[0.9rem] text-[var(--text-2)] leading-[1.8] mb-8">The quality of the final product depends on the decisions made before development begins.</p>
              <div className="border border-[var(--border)]">
                {[
                  { n:"01", t:"Discovery",    d:"Requirements, goals, users and scope." },
                  { n:"02", t:"Structure",    d:"Information architecture, functionality and content." },
                  { n:"03", t:"Design",       d:"Interface, responsive behaviour and interaction." },
                  { n:"04", t:"Development",  d:"Frontend, backend, integrations and database." },
                  { n:"05", t:"Quality",      d:"Responsive testing, performance and technical checks." },
                  { n:"06", t:"Launch",       d:"Deployment, analytics, handover and support." },
                ].map((s, i) => (
                  <div key={s.n} className={`grid grid-cols-12 gap-3 p-5 ${i < 5 ? "border-b border-[var(--border)]" : ""} bg-white`}>
                    <span className="col-span-1 font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{s.n}</span>
                    <div className="col-span-3"><p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{s.t}</p></div>
                    <div className="col-span-8"><p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.6]">{s.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link href="/process" className="inline-flex items-center gap-2 font-montserrat text-[0.8125rem] font-medium text-[var(--text)] hover:opacity-60 transition-opacity">
                  See Full Process <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.09)]">
              <Image src={I_PROCESS} alt="Product design and planning workspace" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 / OUTCOMES ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="mb-12">
            <span className="label-tag block mb-5">04 / Outcome</span>
            <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">Good digital work should feel simple.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {outcomes.map((o) => (
              <div key={o.num} className="bg-white p-7 md:p-8">
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums block mb-4">{o.num}</span>
                <p className="font-montserrat font-bold text-[1.0625rem] text-[var(--text)] mb-2">{o.label}</p>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 / PRICING ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">05 / Starting Points</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">Choose where to start.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">Every project is different. These starting points help establish direction. Larger products are scoped individually.</p>
            </div>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {pricing.map((p, i) => (
              <div key={p.name} className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center ${i % 2 === 1 ? "bg-[var(--bg-subtle)]" : "bg-white"} px-4`}>
                <div className="md:col-span-3"><p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{p.name}</p></div>
                <div className="md:col-span-2"><p className="font-montserrat font-bold text-[1.125rem] text-[var(--text)]">{p.price}</p></div>
                <div className="md:col-span-2"><p className="font-montserrat text-[0.8125rem] text-[var(--text-3)]">{p.time}</p></div>
                <div className="md:col-span-4"><p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.6]">{p.use}</p></div>
                <div className="md:col-span-1 flex justify-end">
                  <Link href="/contact" className="inline-flex items-center gap-1 font-montserrat text-[0.75rem] font-medium text-[var(--text)] hover:opacity-60 transition-opacity">
                    Discuss <ArrowRight size={11} strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-5">
            <Link href="/pricing" className="inline-flex items-center gap-2 font-montserrat text-[0.8125rem] font-medium text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity">
              View Full Pricing <ArrowUpRight size={13} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDATION CHECKLIST ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="label-tag block mb-5">Project Foundation</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-8">What&apos;s included in the foundation.</h2>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-10">
                {["Discovery & requirements","Responsive design","SEO-ready structure","Performance optimisation","Analytics setup","Search Console","Lead capture","WhatsApp integration","Testing","Deployment","Handover","Post-delivery bug support"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0" />
                    <span className="font-montserrat text-[0.8125rem] text-[var(--text-2)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label-tag block mb-5">What sits outside the standard scope</span>
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mb-5 leading-[1.7]">These are not hidden charges. They are separate requirements that should be scoped and budgeted independently.</p>
              <div className="space-y-2.5">
                {["Domain and hosting cost (typically ₹500–2000/yr)","Paid third-party tools/plugins/licenses","Content writing and photography/videography (can be arranged as add-on)","Logo/brand identity (available as add-on from ₹999)","Advanced SEO retainers and link-building campaigns","Complex custom integrations (ERP, advanced payment workflows)"].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-[var(--border)] last:border-0">
                    <span className="font-montserrat text-[0.75rem] text-[var(--text-3)] mt-0.5 shrink-0">×</span>
                    <span className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.65]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 / TECHNOLOGY ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="label-tag block mb-5">06 / Under the Surface</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-5">Built with the right tools.</h2>
              <p className="font-montserrat text-[0.9rem] text-[var(--text-2)] leading-[1.8] mb-8">Technology is selected around the project — not added to a stack list for the sake of it.</p>
              <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {stack.map((layer) => (
                  <div key={layer.cat} className="grid grid-cols-12 gap-4 py-4 items-baseline">
                    <div className="col-span-4"><span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em]">{layer.cat}</span></div>
                    <div className="col-span-8 flex flex-wrap gap-x-5 gap-y-1">
                      {layer.items.map((item) => <span key={item} className="font-montserrat font-medium text-[0.875rem] text-[var(--text)]">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.09)]">
              <Image src={I_CODE} alt="Software development environment with code" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 / FIT ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="label-tag block mb-5">07 / Fit</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-8">You should talk to Expecto if...</h2>
              <div className="space-y-0 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {["Your current website feels outdated or underperforms.","Your business has grown beyond a basic website.","Your website gets visitors but not enough enquiries.","You need an online store.","You need a custom web application or dashboard.","You are managing leads or operations manually.","You need a stronger SEO foundation.","You want something custom instead of another template."].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3.5 bg-white px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--text)] shrink-0" />
                    <span className="font-montserrat text-[0.875rem] text-[var(--text-2)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[1.125rem] text-[var(--text)] mb-6 mt-14 md:mt-0">We may not be the right fit if...</h3>
              <div className="space-y-0 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {["You are only looking for the cheapest template installation.","You expect guaranteed Google rankings.","You want features added simply to increase the scope.","You need a completely undefined project delivered without requirements.","You are choosing entirely on price without considering quality."].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3.5 px-4">
                    <span className="font-montserrat text-[0.75rem] text-[var(--text-3)] mt-0.5 shrink-0">–</span>
                    <span className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.65]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 relative aspect-[16/9] overflow-hidden border border-[var(--border)] shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
                <Image src={I_FIT} alt="Business planning and decision making" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image src="/pattern.webp" alt="" fill className="object-cover object-center opacity-[0.07]" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="max-w-[720px]">
            <p className="font-montserrat font-bold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] text-white tracking-tight mb-6">Have something worth building?</p>
            <p className="font-montserrat text-[1rem] leading-[1.8] mb-10 max-w-[480px]" style={{ color: "#888888" }}>Tell us what you&apos;re trying to build, improve or fix. We&apos;ll come back with a clear plan.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:bg-white/90 transition-colors duration-150">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 border font-montserrat font-medium text-[0.875rem] px-7 py-4 text-white hover:opacity-80 transition-opacity duration-150" style={{ borderColor: "#333333" }}>
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
