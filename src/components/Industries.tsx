"use client";

import Link from "next/link";
import {
  GraduationCap,
  Building2,
  ShoppingBag,
  Stethoscope,
  Utensils,
  Briefcase,
  Rocket,
  Store,
} from "lucide-react";

const industries = [
  {
    num: "01",
    name: "Education",
    sub: "Coaching · Schools · Institutes",
    desc: "Course pages, results, faculty, admin dashboard and local SEO — built to rank and convert.",
    href: "/niche/coaching-institute",
    Icon: GraduationCap,
    accent: "#111111",
  },
  {
    num: "02",
    name: "Real Estate",
    sub: "Builders · Brokers · Property",
    desc: "Property listings, enquiry pipelines, CRM and builder portfolios that attract serious buyers.",
    href: "/niche/real-estate",
    Icon: Building2,
    accent: "#111111",
  },
  {
    num: "03",
    name: "E-Commerce",
    sub: "Retail · D2C · Marketplaces",
    desc: "Full-featured stores, peer-to-peer marketplaces and product discovery platforms.",
    href: "/niche/ecommerce",
    Icon: ShoppingBag,
    accent: "#111111",
  },
  {
    num: "04",
    name: "Healthcare",
    sub: "Clinics · Hospitals · Doctors",
    desc: "Clean, credible clinic websites with appointment booking, doctor profiles and trust signals.",
    href: "/niche/clinic-doctor",
    Icon: Stethoscope,
    accent: "#111111",
  },
  {
    num: "05",
    name: "Hospitality",
    sub: "Hotels · Restaurants · Cafés",
    desc: "Digital menus, table reservations, hotel bookings and brand-aligned food service websites.",
    href: "/niche/cafe-restaurant",
    Icon: Utensils,
    accent: "#111111",
  },
  {
    num: "06",
    name: "Professional Services",
    sub: "Consultants · Agencies · Firms",
    desc: "Authority-building websites for CA firms, law offices, consultants and service businesses.",
    href: "/services",
    Icon: Briefcase,
    accent: "#111111",
  },
  {
    num: "07",
    name: "Startups",
    sub: "MVPs · SaaS · Digital Products",
    desc: "From idea to production — MVPs, web applications and scalable digital products.",
    href: "/services",
    Icon: Rocket,
    accent: "#111111",
  },
  {
    num: "08",
    name: "Local Businesses",
    sub: "Shops · Services · Regional",
    desc: "Fast, affordable websites for local businesses that need to be found and trusted online.",
    href: "/services",
    Icon: Store,
    accent: "#111111",
  },
];

export default function Industries() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 md:mb-14 lg:mb-16">
        <div className="lg:col-span-5">
          <span className="label-tag block mb-6">Industries</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
            Built for different businesses.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex items-end">
          <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
            Each industry has its own audience, content logic and conversion behaviour. We understand the difference.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {industries.map((ind, i) => (
          <Link
            key={ind.num}
            href={ind.href}
            className="group relative bg-white flex flex-col p-4 md:p-7 lg:p-8 overflow-hidden
                       border border-[var(--border)] hover:border-[var(--text)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200"
          >
            {/* Number — top right, faint */}
            <span className="absolute top-6 right-7 font-montserrat text-[0.625rem] text-[var(--border)] tabular-nums">
              {ind.num}
            </span>

            {/* Icon */}
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-sm border border-[var(--border)] flex items-center justify-center mb-4 md:mb-7
                            bg-[var(--bg-subtle)] group-hover:bg-[var(--text)] group-hover:border-[var(--text)]
                            transition-all duration-200">
              <ind.Icon
                size={16}
                strokeWidth={1.5}
                className="text-[var(--text)] group-hover:text-white transition-colors duration-200"
              />
            </div>

            <p className="font-montserrat font-semibold text-[0.8125rem] md:text-[1rem] text-[var(--text)] leading-tight mb-0.5 md:mb-1">
              {ind.name}
            </p>

            <p className="font-montserrat text-[0.5625rem] md:text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.06em] md:tracking-[0.08em] mb-2 md:mb-4">
              {ind.sub}
            </p>

            {/* Desc — hidden on mobile */}
            <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7] flex-1 hidden md:block">
              {ind.desc}
            </p>

            {/* Arrow */}
            <div className="mt-6 flex items-center gap-1.5">
              <span className="font-montserrat font-medium text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.08em]">
                Explore
              </span>
              <span className="text-[var(--text-3)] group-hover:translate-x-1 inline-block transition-transform duration-150">
                →
              </span>
            </div>

            {/* Bottom accent line — appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent
                            group-hover:bg-[var(--text)] transition-all duration-200" />
          </Link>
        ))}
      </div>

    </div>
  );
}
