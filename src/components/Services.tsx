"use client";

import Link from "next/link";
import { ArrowRight, Globe, AppWindow, ShoppingCart, Database, Palette, Search, Pen, Video } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Business Websites",
    short: "Your website is the first thing a potential customer judges your business on.",
    desc: "We design and develop websites that load fast, look credible and are built to convert visitors into enquiries — not just look good in a portfolio.",
    deliverables: ["Custom UI design", "Responsive frontend", "Performance optimisation", "On-page SEO", "CMS integration"],
    link: "/services",
    Icon: Globe,
  },
  {
    num: "02",
    title: "Web Applications",
    short: "Your workflow shouldn't be limited by software that wasn't built for your business.",
    desc: "We build custom web applications — dashboards, portals, platforms and tools — that match exactly how your team works.",
    deliverables: ["Full-stack development", "Authentication & roles", "API integrations", "Admin interfaces", "Scalable architecture"],
    link: "/services",
    Icon: AppWindow,
  },
  {
    num: "03",
    title: "E-Commerce",
    short: "Commerce platforms built around products, customers and transactions.",
    desc: "We build commerce experiences around how customers actually shop — fast product pages, smooth checkout and solid order management.",
    deliverables: ["Product catalogue", "Cart & checkout", "Payment gateway", "Order management", "Mobile-first design"],
    link: "/niche/ecommerce",
    Icon: ShoppingCart,
  },
  {
    num: "04",
    title: "CRM & ERP",
    short: "Manual processes quietly cost growing businesses hours every day.",
    desc: "We build custom CRM and ERP systems that centralise your data, replace spreadsheets and give your team a single place to manage everything.",
    deliverables: ["Lead & customer management", "Pipeline views", "Role-based access", "Reporting dashboards", "Custom modules"],
    link: "/niche/crm-software",
    Icon: Database,
  },
];

const additionalServices = [
  { num: "05", title: "UI/UX Redesign",    desc: "Transform outdated digital experiences into modern, usable products.", Icon: Palette, link: "/services" },
  { num: "06", title: "SEO & Performance", desc: "Technical foundations for discoverability and speed — built in from day one.", Icon: Search, link: "/services" },
  { num: "07", title: "Graphic Design",    desc: "Brand assets, marketing creatives, social content and visual identity.", Icon: Pen, link: "/services" },
  { num: "08", title: "Video Editing",     desc: "Promotional videos, social media reels, product demos and brand films.", Icon: Video, link: "/services" },
];

export default function Services() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-20">
        <div className="lg:col-span-5">
          <span className="label-tag block mb-6">Services</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
            What we build.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-8 flex items-end">
          <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
            Every service is scoped around a real business problem — not a generic package.
          </p>
        </div>
      </div>

      {/* Primary services — mobile: 2-col grid; desktop: horizontal rows */}
      <div className="border-t border-[var(--border)]">

        {/* Mobile 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden py-4">
          {services.map((svc) => (
            <Link key={`m-${svc.num}`} href={svc.link}
              className="border border-[var(--border)] bg-white p-4 flex flex-col gap-3 hover:border-[var(--text)] transition-colors">
              <div className="w-8 h-8 rounded-sm border border-[var(--border)] bg-[var(--bg-subtle)] flex items-center justify-center shrink-0">
                <svc.Icon size={15} strokeWidth={1.5} className="text-[var(--text-3)]" />
              </div>
              <div>
                <p className="font-montserrat font-semibold text-[0.8125rem] text-[var(--text)] leading-snug">{svc.title}</p>
                <p className="font-montserrat text-[0.625rem] text-[var(--text-3)] mt-1 leading-snug">{svc.short}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop rows */}
        {services.map((svc) => (
          <div key={svc.num} className="hidden md:grid grid-cols-1 lg:grid-cols-12 border-b border-[var(--border)] group">
            {/* Number + icon — inline on mobile */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-between lg:justify-start gap-4 pt-6 lg:pt-10 pb-2 lg:pb-10 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
              <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{svc.num}</span>
              <div className="w-9 h-9 rounded-sm border border-[var(--border)] bg-[var(--bg-subtle)] flex items-center justify-center group-hover:bg-[var(--text)] group-hover:border-[var(--text)] transition-all duration-200">
                <svc.Icon size={16} strokeWidth={1.5} className="text-[var(--text-3)] group-hover:text-white transition-colors duration-200" />
              </div>
            </div>

            {/* Title + short */}
            <div className="lg:col-span-3 py-4 lg:py-10 lg:px-8 flex flex-col justify-center">
              <h3 className="font-montserrat font-bold text-[1.0625rem] text-[var(--text)] mb-2 tracking-tight">{svc.title}</h3>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.65]">{svc.short}</p>
            </div>

            {/* Description — hidden on mobile, shown on lg */}
            <div className="hidden lg:flex lg:col-span-4 py-10 px-8 lg:border-l border-[var(--border)] items-center">
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.8]">{svc.desc}</p>
            </div>

            {/* Deliverables + CTA */}
            <div className="lg:col-span-4 py-4 lg:py-10 lg:px-8 lg:border-l border-[var(--border)] flex flex-col justify-between gap-4 border-b lg:border-b-0 border-[var(--border)] pb-6 lg:pb-10">
              <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-2">
                {svc.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--border)] shrink-0" />
                    <span className="font-montserrat text-[0.75rem] text-[var(--text-3)]">{d}</span>
                  </div>
                ))}
              </div>
              <Link href={svc.link} className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] text-[var(--text)] hover:gap-3 transition-all duration-150 w-fit">
                Learn more <ArrowRight size={12} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional services — 2×2 premium grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
        {additionalServices.map((s) => (
          <Link
            key={s.num}
            href={s.link}
            className="bg-white p-7 md:p-8 flex gap-5 group hover:bg-[#F0F0EE] transition-colors duration-150"
          >
            <div className="w-9 h-9 rounded-sm border border-[var(--border)] bg-[var(--bg-subtle)] flex items-center justify-center shrink-0 mt-0.5
                            group-hover:bg-white group-hover:border-[var(--text)] transition-all duration-150">
              <s.Icon size={16} strokeWidth={1.5} className="text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors duration-150" />
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{s.num}</span>
                <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{s.title}</p>
              </div>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.65]">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
