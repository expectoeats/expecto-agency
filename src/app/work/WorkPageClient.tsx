"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCardPreview } from "@/components/ProjectCardPreview";

// ── Data ─────────────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    id: "rama-coaching",
    url: "https://ramainstitutetech.com/",
    category: "coaching" as const,
    tag: "ERP • LMS • Marksheet Engine • 10-Day Sprint",
    title: "Rama Coaching Center",
    desc: "Complete coaching management platform with automated marksheet & QR-verified certificate generation, mock test portal, and full CMS. Deployed in 10 days.",
    stack: ["Next.js", "MongoDB", "PDF Engine", "Tailwind CSS"],
    results: [{ label: "Turnaround", val: "10 Days" }, { label: "Core Modules", val: "7+" }],
    color: "#EFF6FF", accent: "#1D4ED8",
    localImage: "/work/rama-banner.png",
  },
  {
    id: "expecto-eats",
    url: "https://expecto-sepia.vercel.app/",
    category: "food_ordering" as const,
    tag: "SaaS • Food Tech • Campus",
    title: "Expecto Eats",
    desc: "Harry Potter-themed campus food ordering platform with 8-stage order flow, UPI verification, and real-time push notifications.",
    stack: ["Next.js", "MongoDB", "Firebase FCM", "Razorpay"],
    results: [{ label: "Orders Growth", val: "142%" }, { label: "Active Users", val: "300+" }],
    color: "#FFF3E0", accent: "#E65100",
    localImage: "/work/expecto-eats.webp",
  },
  {
    id: "swapzy",
    url: "https://swapzy.store/",
    category: "marketplace" as const,
    tag: "SaaS • Marketplace • Campus",
    title: "Swapzy",
    desc: "Verified peer-to-peer campus marketplace with smart pricing zones, purchase codes, and admin dashboard.",
    stack: ["Next.js", "MongoDB", "Cloudinary", "Firebase"],
    results: [{ label: "Active Listings", val: "500+" }, { label: "Verified Users", val: "100%" }],
    color: "#E8F5E9", accent: "#2E7D32",
    localImage: "/work/swapzy.webp",
  },
];

const cafeProjects = [
  { name: "Naitik Steel Restaurant", url: "https://naitik-steel.vercel.app/", desc: "Full restaurant website with digital menu", color: "#FFF3E0", accent: "#E65100", category: "cafe" as const, localImage: "/work/cafe/naitik.webp" },
  { name: "Sangrill Restaurant",     url: "https://sangrill.vercel.app/",     desc: "Modern restaurant with table booking",   color: "#FCE4EC", accent: "#C62828", category: "cafe" as const, localImage: "/work/cafe/sangrill.webp" },
  { name: "Kingslayer",              url: "https://kingslayer-hi.vercel.app/",desc: "Premium dining experience website",      color: "#EDE7F6", accent: "#4527A0", category: "cafe" as const, localImage: "/work/cafe/kingslayer.webp" },
  { name: "JP Restaurant",           url: "https://jp-gamma-eosin.vercel.app/",desc: "Clean restaurant with WhatsApp ordering",color: "#E8F5E9", accent: "#2E7D32", category: "cafe" as const, localImage: "/work/cafe/jp-restro.webp" },
  { name: "Naava SIP Cafe",          url: "https://naavasip.vercel.app/",     desc: "Investment cafe with lead capture",      color: "#FFF8E1", accent: "#F57F17", category: "cafe" as const, localImage: "/work/cafe/naava.webp" },
  { name: "Pause Cafe",              url: "https://pausecafe.vercel.app/",    desc: "Minimal cafe with menu & contact",       color: "#E3F2FD", accent: "#1565C0", category: "cafe" as const, localImage: "/work/cafe/pausecafe.webp" },
  { name: "Cafe Europa",             url: "https://cafe-europa.vercel.app/",  desc: "European cafe with reservation system",  color: "#E0F7FA", accent: "#00695C", category: "cafe" as const, localImage: "/work/cafe/cafe-europa.webp" },
  { name: "Hoppers Restro",          url: "https://hoppers-restro.vercel.app/",desc: "Casual dining with menu integration",   color: "#FBE9E7", accent: "#BF360C", category: "cafe" as const, localImage: "/work/cafe/hoppers.webp" },
  { name: "Expecto Cafe",            url: "https://expecto-cafe-demo.vercel.app/",desc: "Stylish cafe with digital menu",      color: "#FBE9E7", accent: "#BF360C", category: "cafe" as const, localImage: "/work/expecto-demo-cafe.webp" },
];

const coachingProjects = [
  { name: "Rama Coaching Center", url: "https://ramainstitutetech.com/", desc: "Full coaching ERP with marksheet generator, mock tests & CMS", color: "#EFF6FF", accent: "#1D4ED8", category: "coaching" as const, localImage: "/work/rama-banner.png" },
  { name: "Expecto Coaching",  url: "https://expecto-demo-coaching.vercel.app/", desc: "Modern coaching platform with course management", color: "#E8EAF6", accent: "#283593", category: "coaching" as const, localImage: "/work/coaching/expecto-demo-coaching.webp" },
  { name: "Adroit Academy",    url: "https://adroit-demo.vercel.app/",           desc: "Coaching website with course listings",          color: "#E8EAF6", accent: "#283593", category: "coaching" as const, localImage: "/work/coaching/adroit.webp" },
  { name: "Takshashila IAS",   url: "https://takshashila-ias-md.vercel.app/",    desc: "Premium IAS coaching with batch management",     color: "#FFF3E0", accent: "#BF360C", category: "coaching" as const, localImage: "/work/coaching/takshila.webp" },
  { name: "Sandesh Academy",   url: "https://sandesh-six.vercel.app/",           desc: "Coaching center with faculty showcase",          color: "#E0F2F1", accent: "#00695C", category: "coaching" as const, localImage: "/work/coaching/sandesh.webp" },
  { name: "Evoke Institute",   url: "https://evoke-rho.vercel.app/",             desc: "Modern coaching with online inquiry system",     color: "#F3E5F5", accent: "#6A1B9A", category: "coaching" as const, localImage: "/work/coaching/evoke.webp" },
  { name: "Pitman Institute",  url: "https://pitman.vercel.app/",                desc: "Professional institute with course catalogue",   color: "#E1F5FE", accent: "#0277BD", category: "coaching" as const, localImage: "/work/coaching/prabhat.webp" },
  { name: "Maa Lyart Academy", url: "https://maa-lyart.vercel.app/",             desc: "Education center with admission inquiry",        color: "#FCE4EC", accent: "#880E4F", category: "coaching" as const, localImage: "/work/coaching/maa.webp" },
  { name: "Icon Academy",      url: "https://icon-ten-tawny.vercel.app/",        desc: "Coaching website with results & testimonials",   color: "#F9FBE7", accent: "#558B2F", category: "coaching" as const, localImage: "/work/coaching/icon.webp" },
  { name: "Tiwari Classes",    url: "https://tiwari-delta.vercel.app/",          desc: "Classes website with batch schedule",           color: "#E8F5E9", accent: "#1B5E20", category: "coaching" as const, localImage: "/work/coaching/tiwari.webp" },
];

const travelProjects = [
  { name: "Expecto Travel",      url: "https://expecto-travel-demo.vercel.app/",  desc: "Modern travel agency with tour packages",        color: "#E0F7FA", accent: "#006064", category: "travel" as const, localImage: "/work/cafe/expecto-demo-travel.webp" },
  { name: "Travel Agency Demo",  url: "https://expecto-travel-demo2.vercel.app/", desc: "Premium travel template with booking flow",       color: "#E1F5FE", accent: "#0277BD", category: "travel" as const, localImage: "/work/travel/travel-demo2.webp" },
  { name: "Travel Demo 1",       url: "https://travel-demo3.vercel.app/",         desc: "Travel concept with destination sections",        color: "#E3F2FD", accent: "#1565C0", category: "travel" as const, localImage: "/work/travel/travel-demo3.webp" },
  { name: "Travel Demo 2",       url: "https://travel-demo4.vercel.app/",         desc: "Tour showcase with package highlights",           color: "#E8F5E9", accent: "#2E7D32", category: "travel" as const, localImage: "/work/travel/travel-demo4.webp" },
  { name: "Travel Demo 3",       url: "https://travel-demo5.vercel.app/",         desc: "Visual travel landing with booking journey",      color: "#FFF3E0", accent: "#EF6C00", category: "travel" as const, localImage: "/work/travel/travel-demo5.webp" },
];

const realEstateProjects = [
  { name: "Real Estate Demo",   url: "https://expecto-realestate-demo2.vercel.app/",       desc: "Real estate platform with listings & lead capture", color: "#F3E5F5", accent: "#6A1B9A", category: "real_estate" as const, localImage: "/work/realestate/realeastate-demo2.webp" },
  { name: "Luxury Real Estate", url: "https://realestate-seven-phi-18.vercel.app/",        desc: "Premium real estate with property filtering",       color: "#E8F5E9", accent: "#2E7D32", category: "real_estate" as const, localImage: "/work/realestate/realestate-demo.webp" },
  { name: "Real Estate Agency", url: "https://real-estate-agency-website-beta.vercel.app/",desc: "Full-featured agency with listings & lead gen",     color: "#E3F2FD", accent: "#1565C0", category: "real_estate" as const, localImage: "/work/realestate/realestate-demo3.webp" },
  { name: "Real Estate Demo 4", url: "https://real-estate-demo4.vercel.app/",              desc: "Real estate website with showcase & lead gen",      color: "#e6f3fdff", accent: "#43586fff", category: "real_estate" as const, localImage: "/work/realestate/realestate-demo4.webp" },
];

const schoolProjects = [
  { name: "Expecto School Demo", url: "https://expecto-school-demo.vercel.app/", desc: "Modern school website with online admission, gallery, and notice board.", color: "#EDE9FE", accent: "#818cf8", category: "school" as const, localImage: "/work/school/school-demo.webp" },
];

// ── Types ─────────────────────────────────────────────────────────────────────

type ProjectItem = {
  name?: string;
  title?: string;
  url: string;
  desc: string;
  color: string;
  accent: string;
  category: "cafe" | "coaching" | "food_ordering" | "marketplace" | "travel" | "real_estate" | "school";
  category_label?: string;
  localImage: string;
};

// ── Grid card ─────────────────────────────────────────────────────────────────

const ProjectGridCard = ({ project, index }: { project: ProjectItem; index: number }) => {
  const displayName = project.name ?? project.title ?? "Project";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group flex flex-col gap-5"
    >
      {/* Card thumbnail */}
      <Link
        href={project.url}
        target="_blank"
        className="block relative overflow-hidden rounded-sm border border-[var(--border)] bg-white hover:-translate-y-0.5 transition-transform duration-300"
      >
        <div className="relative aspect-[16/10]">
          <ProjectCardPreview
            name={displayName}
            url={project.url}
            category={project.category}
            colorScheme={project.color}
            accentColor={project.accent}
            height="100%"
            localImage={project.localImage}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#111111]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-40">
            <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center border border-[var(--border)] scale-75 group-hover:scale-100 transition-transform duration-500">
              <ArrowUpRight size={28} strokeWidth={2} className="text-[var(--text)]" />
            </div>
          </div>
        </div>
      </Link>

      {/* Card info */}
      <div className="px-1 space-y-2">
        <div className="flex items-center gap-3">
          <span className="label-tag text-[var(--text-3)]">
            {project.category_label || project.category.replace("_", " ")}
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <h3 className="font-montserrat font-semibold text-xl sm:text-2xl text-[var(--text)] leading-tight">
          {displayName}
        </h3>
        <p className="font-montserrat text-sm text-[var(--text-3)] leading-relaxed line-clamp-2">
          {project.desc}
        </p>
        <Link
          href={project.url}
          target="_blank"
          className="inline-flex items-center gap-1.5 font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)] hover:text-[var(--text)] hover:gap-3 transition-all"
        >
          Live Site <ArrowRight size={13} strokeWidth={2} />
        </Link>
      </div>
    </motion.div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProjects = [
    ...featuredProjects.map(p => ({ ...p, name: p.title, category_label: "Proprietary" })),
    ...cafeProjects.map(p => ({ ...p, category_label: "Gourmet & Hospitality" })),
    ...coachingProjects.map(p => ({ ...p, category_label: "Academic & Professional" })),
    ...travelProjects.map(p => ({ ...p, category_label: "Travel & Tourism" })),
    ...realEstateProjects.map(p => ({ ...p, category_label: "Real Estate" })),
    ...schoolProjects.map(p => ({ ...p, category_label: "Education & Schools" })),
  ];

  const categories = [
    { id: "all",         label: "All Works",   count: allProjects.length },
    { id: "food_ordering", label: "Proprietary", count: featuredProjects.length + 1 },
    { id: "cafe",        label: "Gourmet",     count: cafeProjects.length },
    { id: "coaching",    label: "Academic",    count: coachingProjects.length },
    { id: "travel",      label: "Travel",      count: travelProjects.length },
    { id: "real_estate", label: "Real Estate", count: realEstateProjects.length },
    { id: "school",      label: "School",      count: schoolProjects.length },
  ];

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/78" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />
        </div>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-[0.6875rem] text-white/50 uppercase tracking-[0.18em] mb-6 inline-block border border-white/15 px-4 py-2 rounded-sm"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(8px)" }}
          >
            🎨 Curated Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 tracking-tight text-balance text-white"
          >
            Our Digital{" "}
            <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
              Masterpieces.
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-block px-6 py-4 rounded-sm border border-white/10 max-w-xl mx-auto"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}
          >
            <p className="font-montserrat text-base sm:text-lg text-white/75 leading-relaxed">
              {allProjects.length}+ production deployments across 6 verticals. Every project ships in 7 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16 pb-8 border-b border-[var(--border)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-sm font-montserrat font-medium text-xs sm:text-sm uppercase tracking-wide border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[var(--text)] text-white border-[var(--text)]"
                    : "bg-white text-[var(--text-3)] border-[var(--border)] hover:border-[var(--text)] hover:text-[var(--text)]"
                }`}
              >
                {cat.label}
                <span className={`w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-semibold ${activeCategory === cat.id ? "bg-white/20 text-white" : "bg-[var(--bg-subtle)] text-[var(--text-3)]"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 sm:gap-y-20"
          >
            {filteredProjects.map((project, i) => (
              <ProjectGridCard key={`${project.url}-${i}`} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[var(--text)] border-y border-[var(--border)] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            {[
              { val: "22+",  label: "Production Deployments" },
              { val: "06",   label: "Active Verticals" },
              { val: "100%", label: "Client Retention" },
              { val: "7 Days", label: "Avg. Build Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-montserrat font-semibold text-2xl sm:text-4xl text-white mb-1">{stat.val}</div>
                <div className="font-montserrat text-xs sm:text-sm text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-[var(--bg-subtle)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-white border border-[var(--border)] rounded-sm p-8 sm:p-14 text-center">
            <span className="label-tag text-[var(--text-3)] mb-6 inline-block">💡 Have a Vision?</span>
            <h2 className="font-montserrat font-semibold text-3xl sm:text-5xl text-[var(--text)] mb-5 leading-tight">
              Let&apos;s Build Your{" "}
              <span className="text-[var(--text)]">Next Breakthrough.</span>
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[var(--text-3)] mb-8 max-w-xl mx-auto leading-relaxed">
              Every project starts with a conversation. Let&apos;s architect your digital future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-black text-base px-8 py-4 w-full sm:w-auto justify-center">
                Start a Project <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <Link href="/pricing" className="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
