"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";

const allServices = [
  {
    num: "( 001 )",
    title: "Business Websites",
    image: "/service/buisness.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
    short: "Fast, credible high-converting websites engineered to turn visitors into inquiries.",
    desc: "We design and build bespoke business websites focused on brand credibility, sub-second load times, and clear inquiry conversion — never generic off-the-shelf templates.",
    deliverables: ["Custom UI Design", "Next.js Speed & Core Web Vitals", "On-Page Schema & SEO", "7-Day Sprint Guarantee", "CMS / Admin Panel"],
    link: "/niche/custom-website",
  },
  {
    num: "( 002 )",
    title: "Web Applications",
    image: "/service/web-app.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
    short: "Custom web apps, client portals, and SaaS dashboards built for high-performance workflows.",
    desc: "When a static website isn't enough, we engineer scalable full-stack applications with user authentication, role-based access control, complex workflows, and responsive real-time dashboards.",
    deliverables: ["Full-Stack Architecture", "Next.js & TypeScript", "Auth & RBAC Security", "API & Third-Party Integrations", "Database Architecture"],
    link: "/services",
  },
  {
    num: "( 003 )",
    title: "E-Commerce Stores",
    image: "/service/e-comm.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
    short: "Frictionless online stores with fast product browsing, multi-gateway checkout, and sync.",
    desc: "Digital storefronts built for maximum sales conversion. Fast catalog search, fluid shopping cart, automated order notifications, and Indian payment gateways like Razorpay & Cashfree.",
    deliverables: ["Product Catalogues", "Razorpay / Stripe Gateway", "Cart & 1-Click Checkout", "Inventory & Order Tracking", "Automated WhatsApp Alerts"],
    link: "/niche/ecommerce",
  },
  {
    num: "( 004 )",
    title: "Custom CRM & ERP",
    image: "/service/crm-erp.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
    short: "Tailored operations software that centralizes data, replaces sheets, and automates pipelines.",
    desc: "Stop running your business on scattered Excel sheets and WhatsApp chats. We build bespoke CRM and ERP systems customized to your exact team hierarchy and sales pipelines.",
    deliverables: ["Lead Management System", "Automated Follow-ups", "Custom Role Permissions", "Executive Analytics Reports", "WhatsApp API Automation"],
    link: "/niche/crm-software",
  },
  {
    num: "( 005 )",
    title: "Mobile App Development",
    image: "/service/app-dev.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
    short: "Cross-platform iOS and Android apps engineered with React Native for fluid native performance.",
    desc: "We build high-performance mobile applications with native device integrations, push notifications, offline storage, and delightful fluid gesture animations.",
    deliverables: ["iOS & Android Builds", "React Native Architecture", "Push Notification Engine", "Offline First Sync", "App Store & Play Store Launch"],
    link: "/services",
  },
  {
    num: "( 006 )",
    title: "SEO & Growth Marketing",
    image: "/service/seo.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
    short: "Search engine optimization and local Google ranking systems that place your business at #1.",
    desc: "Technical SEO, rich snippet schema, and Google Business Profile optimization engineered to dominate local search queries and attract high-intent commercial buyer leads.",
    deliverables: ["Google Rank #1 Systems", "Local GMB Optimization", "Semantic Schema Markup", "High-Intent Inquiries", "Core Web Vitals Audit"],
    link: "/services",
  },
  {
    num: "( 007 )",
    title: "Graphic Design & Branding",
    image: "/service/graphic.webp",
    radius: "rounded-tl-[48px] rounded-br-[48px]",
    short: "Brand identities, social media creatives, visual systems, and bespoke marketing collateral.",
    desc: "From vector logo design and typography kits to high-conversion advertising creatives and product packaging, we forge visual identities that demand respect.",
    deliverables: ["Brand Identity & Guidelines", "Vector Logos & Typography", "Ad Creatives for Meta/Google", "Brand Style Guide Book", "Print & Packaging Files"],
    link: "/services",
  },
  {
    num: "( 008 )",
    title: "Video Editing & Production",
    image: "/service/vid.webp",
    radius: "rounded-tr-[48px] rounded-bl-[48px]",
    short: "High-impact brand films, Instagram reels, product showcases, and cinematic commercials.",
    desc: "Engaging commercial edits, vertical reels for viral social growth, motion graphics, and audio mastering designed to capture viewer retention within the first 3 seconds.",
    deliverables: ["Viral Instagram Reels", "Cinematic Commercials", "Motion Graphics & VFX", "Sound Design & SFX", "Color Grading Mastery"],
    link: "/services",
  },
];

const pricingPlans = [
  {
    name: "Landing Page",
    price: "₹1,999",
    time: "3 Days Sprint",
    use: "Single-page landing page engineered for Google Ads, Meta Ads, or quick product launches.",
    features: ["Custom UI Design", "100% Mobile Responsive", "Lead Capture Form", "WhatsApp Chat Button", "On-Page SEO Ready"],
  },
  {
    name: "Business Website",
    price: "₹3,999",
    time: "5 Days Sprint",
    use: "Multi-page website for growing businesses, clinics, coaching centers, and service firms.",
    features: ["Up to 5 Pages", "Next.js Speed & Performance", "Google Search Console", "Social Media Integrations", "1 Month Support"],
  },
  {
    name: "Growth & E-Commerce",
    price: "₹6,999",
    time: "7 Days Sprint",
    use: "Advanced website or online store with payment gateway and automated order alerts.",
    features: ["Product Catalog & Cart", "Razorpay Payment Gateway", "Automated WhatsApp Alerts", "Dynamic Admin Dashboard", "Full Code Ownership"],
  },
  {
    name: "Custom Software & ERP",
    price: "₹9,999+",
    time: "Custom Scope",
    use: "Custom web applications, CRM software, role management portals, and SaaS dashboards.",
    features: ["Bespoke Architecture", "Role-Based Access (RBAC)", "Custom API Integrations", "PostgreSQL / MongoDB", "Written SLA Guarantee"],
  },
];

const agencyCommitments = [
  { value: "7 DAYS", label: "Turnaround guarantee in writing for qualified sprints." },
  { value: "100%", label: "Code ownership certificate — you own all assets & data." },
  { value: "50+", label: "Businesses served across web, apps, and custom software." },
  { value: "0 HIDDEN", label: "Transparent milestone billing with no surprise fees." },
];

export default function ServicesPageClient() {
  return (
    <div className="bg-white text-[#1E1E1E] min-h-screen pt-24 md:pt-32">
      {/* ── 01 / HERO HEADER ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#8A919B] block mb-4">
            ( 01 / AGENCY CAPABILITIES )
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] leading-[1.05] mb-8">
            Digital services engineered for high performance.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6271] font-mono leading-relaxed max-w-3xl mb-10">
            Expecto® builds high-speed websites, web applications, custom CRM/ERP platforms, and visual brands for growing businesses across India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1E] text-white text-xs font-mono font-medium hover:bg-black transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F6F7F9] text-[#1E1E1E] text-xs font-mono font-medium border border-[#E5E7EB] hover:bg-[#EEF0F6] transition-colors"
            >
              <span>Explore Pricing Plans</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Agency Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t border-[#E5E7EB]">
          {agencyCommitments.map((c) => (
            <div key={c.label} className="p-5 md:p-6 rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] block mb-2">
                {c.value}
              </span>
              <p className="font-mono text-xs text-[#5A6271] leading-relaxed">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 / DETAILED SERVICES GRID ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#8A919B] block mb-3">
              ( 02 / CORE OFFERINGS )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E]">
              What We Build.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8A919B]">
            ( 08 VERIFIED SPECIALIZATIONS )
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-12">
          {allServices.map((service) => (
            <div
              key={service.title}
              className="p-6 sm:p-8 rounded-[28px] bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#1E1E1E] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Visual Arch Card */}
                <div className={`relative aspect-square sm:aspect-[16/10] w-full overflow-hidden bg-white border border-[#E5E7EB] shadow-sm mb-6 ${service.radius}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#1E1E1E] border border-white/60 shadow-sm">
                    {service.num}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1E1E] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5A6271] font-mono leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 mb-8">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#1E1E1E]">
                      <div className="w-4 h-4 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1E1E1E] group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Proposal for this Service</span>
                  <ArrowRight size={13} />
                </Link>
                <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#1E1E1E] group-hover:bg-[#1E1E1E] group-hover:text-white transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 / TRANSPARENT PRICING PLANS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#8A919B] block mb-3">
            ( 03 / TRANSPARENT PRICING )
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E] mb-4">
            Fixed Scope. Clear Investment.
          </h2>
          <p className="text-sm md:text-base text-[#5A6271] font-mono leading-relaxed">
            No surprise invoices or scope creep. Clear milestone deliverables backed by our written satisfaction and turnaround commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="p-6 md:p-8 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1E1E1E] transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-[#8A919B] uppercase block mb-2">
                  {plan.time}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#1E1E1E] mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold font-mono tracking-tight text-[#1E1E1E] mb-4">
                  {plan.price}
                </div>
                <p className="text-xs text-[#5A6271] font-mono leading-relaxed mb-6">
                  {plan.use}
                </p>
                <ul className="space-y-2 border-t border-[#E5E7EB] pt-6 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs font-mono text-[#1E1E1E]">
                      <span className="text-[#8A919B]">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-white hover:bg-[#1E1E1E] hover:text-white text-xs font-mono font-medium text-[#1E1E1E] border border-[#E5E7EB] text-center transition-colors"
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 / FINAL CALL TO ACTION ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-[#1E1E1E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-white/50 block mb-3">
              ( READY TO BUILD? )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Have a website or custom software to build?
            </h2>
            <p className="font-mono text-sm text-white/70 leading-relaxed">
              Tell us your requirements. We reply within 24 hours with a comprehensive breakdown, realistic scope, and fixed pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#1E1E1E] text-xs font-mono font-bold hover:bg-[#F0F2F5] transition-colors whitespace-nowrap shadow-lg"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
