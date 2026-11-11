"use client";

import Link from "next/link";
import { ArrowUpRight, Check, HelpCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Landing Page Sprint",
    price: "₹1,999",
    tagline: "3-Day High-Conversion Sprint",
    desc: "Single-page landing page engineered for Google Ads, Meta Ads, and direct campaign inquiry conversion.",
    features: [
      "Custom UI Design (No generic templates)",
      "Sub-second Next.js load speed",
      "WhatsApp 1-Click floating chat",
      "Lead capture inquiry form",
      "On-page SEO & Schema metadata",
      "100% mobile-responsive layout",
      "7-Day post-launch bug support",
    ],
    popular: false,
    cta: "Start Landing Page",
  },
  {
    name: "Business Website",
    price: "₹3,999",
    tagline: "5-Day Full Company Website",
    desc: "Multi-page bespoke website for growing clinics, academies, legal firms, restaurants, and local businesses.",
    features: [
      "Up to 5 custom-designed pages",
      "Google Search Console & indexing setup",
      "Interactive contact & booking form",
      "Social media & Google Maps integration",
      "Core Web Vitals 95+ score",
      "Full source code ownership",
      "14-Day post-launch support",
    ],
    popular: true,
    cta: "Start Business Website",
  },
  {
    name: "E-Commerce Store",
    price: "₹6,999",
    tagline: "7-Day E-Commerce Launch",
    desc: "Fast digital store with product catalog, cart, Razorpay payment gateway, and automated order alerts.",
    features: [
      "Full product catalog & dynamic cart",
      "Razorpay / Cashfree / Stripe checkout",
      "Automated customer WhatsApp receipts",
      "Simple admin panel to manage products",
      "Inventory tracking & order dashboard",
      "Full code ownership & IP certificate",
      "30-Day dedicated technical support",
    ],
    popular: false,
    cta: "Launch E-Commerce Store",
  },
  {
    name: "Custom Software & ERP",
    price: "₹9,999+",
    tagline: "Milestone-Based Custom Sprint",
    desc: "Bespoke web applications, CRM software, role management portals, and automated business workflows.",
    features: [
      "Full-stack architecture (Next.js, Node, Postgres)",
      "Role-Based Access Control (RBAC)",
      "Lead pipeline & WhatsApp API integration",
      "Custom analytics & reporting dashboard",
      "Written Service Level Agreement (SLA)",
      "100% IP & database ownership",
      "Milestone-based milestone billing",
    ],
    popular: false,
    cta: "Request Architecture Scope",
  },
];

const addOns = [
  { name: "Payment Gateway Integration (Razorpay/Stripe)", price: "₹1,499" },
  { name: "WhatsApp Cloud API Automation", price: "₹1,999" },
  { name: "Local Google Business (GMB) Rank Optimization", price: "₹1,499" },
  { name: "Custom Brand Identity & Vector Logo Kit", price: "₹1,999" },
  { name: "Monthly High-Speed Maintenance & Backups", price: "₹999/mo" },
  { name: "Bespoke Multi-Role Admin Dashboard", price: "₹4,999" },
];

const faqs = [
  {
    q: "How does the 7-day turnaround guarantee work?",
    a: "For qualified sprints (Landing Pages and Business Websites), we commit to a strict delivery date in writing. If we fail to deliver the staging preview on time due to our fault, you receive cashback.",
  },
  {
    q: "Do I truly own 100% of the code?",
    a: "Yes. Unlike agencies that lock you into monthly subscriptions or proprietary site builders, Expecto hands over the full GitHub repository, assets, and deployment keys upon final milestone payment.",
  },
  {
    q: "What is your payment structure?",
    a: "We work on transparent milestone payments: 50% upfront to initiate the sprint, and 50% upon final delivery and client approval before live DNS handover.",
  },
  {
    q: "Can I upgrade my site later into an e-commerce store or app?",
    a: "Absolutely. Because we write clean modular Next.js and React code, your platform can scale from a simple 3-page site into a full-scale e-commerce store or mobile app anytime.",
  },
];

export default function PricingPageClient() {
  return (
    <div className="bg-white text-[#1E1E1E] min-h-screen pt-24 md:pt-32">
      {/* ── 01 / HERO HEADER ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#5A6271] block mb-4">
            ( 01 / TRANSPARENT PRICING )
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] leading-[1.05] mb-8">
            Clear investment. Zero surprise fees.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6271] font-mono leading-relaxed max-w-3xl mb-10">
            Fixed sprint pricing with guaranteed timelines. Full code ownership, sub-second performance, and verified deliverables backed in writing.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1E] text-white text-xs font-mono font-medium hover:bg-black transition-colors"
            >
              <span>Get Custom Quote</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F6F7F9] text-[#1E1E1E] text-xs font-mono font-medium border border-[#E5E7EB] hover:bg-[#EEF0F6] transition-colors"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02 / PRICING TIERS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 sm:p-8 rounded-[28px] border flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-white border-[#1E1E1E] shadow-xl ring-2 ring-[#1E1E1E]/10"
                  : "bg-[#F8F9FA] border-[#E5E7EB] hover:border-[#1E1E1E]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-8 bg-[#1E1E1E] text-white font-mono text-[10px] uppercase font-semibold px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <span className="font-mono text-xs text-[#5A6271] block mb-2">
                  {tier.tagline}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#1E1E1E] mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-mono font-bold tracking-tight text-[#1E1E1E] mb-4">
                  {tier.price}
                </div>
                <p className="text-xs text-[#5A6271] font-mono leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <div className="border-t border-[#E5E7EB] pt-6 mb-8 space-y-2.5">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs font-mono text-[#1E1E1E]">
                      <div className="w-4 h-4 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full text-xs font-mono font-medium text-center transition-colors block ${
                  tier.popular
                    ? "bg-[#1E1E1E] text-white hover:bg-black"
                    : "bg-white text-[#1E1E1E] border border-[#E5E7EB] hover:bg-[#1E1E1E] hover:text-white"
                }`}
              >
                {tier.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 / MODULAR ADD-ONS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#5A6271] block mb-3">
            ( 02 / MODULAR ADD-ONS )
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E] mb-4">
            Custom Add-Ons & Enhancements.
          </h2>
          <p className="font-mono text-sm text-[#5A6271] leading-relaxed">
            Attach any of these high-value extensions to your base project sprint at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((add) => (
            <div
              key={add.name}
              className="p-6 rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-between"
            >
              <span className="text-sm font-medium text-[#1E1E1E] pr-4">
                {add.name}
              </span>
              <span className="font-mono text-sm font-bold text-[#1E1E1E] shrink-0">
                {add.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 / FREQUENTLY ASKED QUESTIONS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#5A6271] block mb-3">
            ( 03 / COMMON INQUIRIES )
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E]">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="p-6 sm:p-8 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle size={16} className="text-[#5A6271]" />
                <h3 className="text-lg font-bold tracking-tight text-[#1E1E1E]">
                  {f.q}
                </h3>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#5A6271] leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 / FINAL CTA ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-[#1E1E1E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-white/50 block mb-3">
              ( CUSTOM SCOPE? )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Need a bespoke enterprise proposal?
            </h2>
            <p className="font-mono text-sm text-white/70 leading-relaxed">
              Message us on WhatsApp or submit your project details. We deliver complete architectural scopes within 2 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#1E1E1E] text-xs font-mono font-bold hover:bg-[#F0F2F5] transition-colors whitespace-nowrap shadow-lg"
          >
            Request Custom Proposal →
          </Link>
        </div>
      </section>
    </div>
  );
}
