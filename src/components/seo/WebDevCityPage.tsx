"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, MessageCircle, Phone, Trophy, Zap } from "lucide-react";
import type { CityData } from "@/lib/citiesData";

// ── Shared packages — same for every city ────────────────────────────────────
const packages = [
  {
    name: "Starter",
    price: "₹1,999",
    delivery: "7 days",
    highlight: false,
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO included",
      "Contact form & WhatsApp button",
      "Google Analytics setup",
      "Deployment on your domain",
    ],
  },
  {
    name: "Growth",
    price: "₹3,999",
    delivery: "7 days",
    highlight: true,
    features: [
      "Up to 10 pages",
      "Custom UI design",
      "Blog / news section",
      "Schema markup & sitemap",
      "Google Search Console setup",
      "1 month free support",
    ],
  },
  {
    name: "Custom",
    price: "From ₹7,999",
    delivery: "14–21 days",
    highlight: false,
    features: [
      "Unlimited pages",
      "Zero-code admin panel",
      "CRM / ERP integration",
      "E-commerce + payment gateway",
      "API integrations",
      "Priority support",
    ],
  },
];

const valueProps = [
  { icon: Zap,     title: "100/100 PageSpeed",         body: "Built with Next.js — the same framework Fortune 500 companies use. Your site loads in under 1.5 s and scores 100 on Google PageSpeed." },
  { icon: Trophy,  title: "Proven #1 Google Rankings", body: "We took Interface Classes from position 100+ to #1 on Google for 'Best IIT JEE Coaching in Kanpur'. Same architecture, every project." },
  { icon: CheckCircle, title: "Zero-Code Admin Panel", body: "Update your website content, add products, manage leads — without ever calling a developer. You own 100% of your site." },
];

interface Props {
  city: CityData;
}

export default function WebDevCityPage({ city }: Props) {
  const waHref = `https://wa.me/918707224376?text=${city.whatsappText}`;
  const telHref = "tel:+918707224376";
  const slug = city.slug;

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text)]">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-28 md:pt-36 pb-14 md:pb-20 bg-[#0D0D0D]"
        aria-labelledby={`wd-${slug}-h1`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={13} strokeWidth={2} className="text-white/35" />
            <span className="font-montserrat text-[0.625rem] text-white/35 uppercase tracking-[0.2em]">
              Expecto Digital Agency · {city.cityName}, {city.stateShort}
            </span>
          </div>

          <h1
            id={`wd-${slug}-h1`}
            className="font-montserrat font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-white max-w-4xl mb-5"
          >
            {city.heroTitle}
          </h1>

          <p className="font-montserrat text-white/65 text-[1rem] md:text-[1.125rem] leading-[1.8] max-w-2xl mb-10">
            {city.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors"
            >
              <MessageCircle size={15} strokeWidth={1.75} />
              WhatsApp Us
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              <Phone size={14} strokeWidth={1.75} />
              +91 87072 24376
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { v: "50+",     l: "Projects Delivered" },
              { v: "#1",      l: "Google Rankings" },
              { v: "7 Days",  l: "Delivery Guarantee" },
              { v: "₹1,999",  l: "Starting Price" },
            ].map((s) => (
              <div key={s.l} className="bg-[#0D0D0D] px-6 py-5">
                <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] text-white leading-none mb-1">{s.v}</p>
                <p className="font-montserrat text-[0.625rem] text-white/35 uppercase tracking-[0.12em]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION GRID ────────────────────────────────────────── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
        <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3">
          Why {city.cityName} businesses choose Expecto
        </h2>
        <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] max-w-2xl mb-10">
          We don&apos;t just build websites — we build websites that rank, load fast, and generate real business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {valueProps.map((vp) => (
            <div key={vp.title} className="bg-[var(--bg-base)] p-8 flex flex-col gap-4 hover:bg-[var(--bg-subtle)] transition-colors">
              <vp.icon size={22} strokeWidth={1.5} className="text-[var(--text)]" />
              <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{vp.title}</h3>
              <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.75]">{vp.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY / PROOF ───────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)]">

            {/* Left — IIT-JEE rank proof */}
            <div className="lg:col-span-7 bg-[#111] p-8 md:p-12 flex flex-col gap-6">
              <span className="font-montserrat text-[0.625rem] text-white/35 uppercase tracking-[0.2em]">
                Verified Client Result · Kanpur
              </span>
              <h2 className="font-montserrat font-semibold text-[clamp(1.25rem,2.5vw,1.875rem)] leading-[1.2] text-white">
                {city.caseStudyIntro}
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="font-montserrat font-bold text-[3rem] text-white leading-none">#1</span>
                <div>
                  <p className="font-montserrat text-[0.875rem] text-white/60 leading-[1.6]">
                    Google rank for &ldquo;Best IIT JEE Coaching in Kanpur&rdquo;
                  </p>
                  <p className="font-montserrat text-[0.75rem] text-white/35 mt-0.5">
                    Moved from position 100+ · Interface Classes · Ongoing
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "Semantic H1 → H2 → H3 heading structure",
                  "LocalBusiness + WebDesignBusiness schema markup",
                  "Core Web Vitals: LCP, CLS, INP all optimised",
                  "Location-specific content & geo-targeting",
                  "Internal linking & crawl architecture",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={13} strokeWidth={2} className="text-white/35 shrink-0" />
                    <span className="font-montserrat text-[0.8125rem] text-white/55">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Swapzy / Parul University */}
            <div className="lg:col-span-5 bg-white p-8 md:p-12 flex flex-col gap-5">
              <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.2em]">
                Enterprise Project · Parul University, Vadodara
              </span>
              <h2 className="font-montserrat font-semibold text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.25] text-[var(--text)]">
                Swapzy — Campus Marketplace for 1,000+ students
              </h2>
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.85]">
                We designed and developed Swapzy — a full-stack peer-to-peer marketplace for Parul University students.
                Real-time listings, in-app messaging, auth flows and a zero-code admin panel.
                1,000+ active users, daily transactions, production-grade infrastructure.
              </p>
              <div className="flex flex-col gap-2 mt-auto">
                {[
                  "Full-stack Next.js + custom backend",
                  "Real-time listings & in-app messaging",
                  "Zero-code admin panel",
                  "1,000+ active users at launch",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0" />
                    <span className="font-montserrat text-[0.8125rem] text-[var(--text-3)]">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity self-start mt-2"
              >
                See full portfolio <ArrowRight size={13} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
          <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3">
            Website & digital services in {city.cityName}
          </h2>
          <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] max-w-2xl mb-10">
            Every service below is delivered with Next.js performance, on-page SEO and a written 7-day deadline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {city.services.map((svc) => (
              <div key={svc.title} className="bg-[var(--bg-base)] p-7 flex flex-col gap-3 hover:bg-[var(--bg-subtle)] transition-colors">
                <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{svc.title}</h3>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
          <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3">
            Website development packages for {city.cityName} businesses
          </h2>
          <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] max-w-2xl mb-10">
            Transparent pricing. No hidden fees. Design, development, deployment and SEO all included.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 flex flex-col gap-5 ${pkg.highlight ? "bg-[#111]" : "bg-[var(--bg-base)]"}`}
              >
                <div>
                  <span className={`font-montserrat text-[0.625rem] uppercase tracking-[0.18em] ${pkg.highlight ? "text-white/40" : "text-[var(--text-3)]"}`}>
                    {pkg.name}
                  </span>
                  <p className={`font-montserrat font-bold text-[2rem] leading-none mt-1 ${pkg.highlight ? "text-white" : "text-[var(--text)]"}`}>
                    {pkg.price}
                  </p>
                  <p className={`font-montserrat text-[0.75rem] mt-1 ${pkg.highlight ? "text-white/40" : "text-[var(--text-3)]"}`}>
                    Delivery: {pkg.delivery}
                  </p>
                </div>
                <ul className="space-y-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle size={13} strokeWidth={2} className={pkg.highlight ? "text-white/50" : "text-[var(--text-3)]"} />
                      <span className={`font-montserrat text-[0.8125rem] ${pkg.highlight ? "text-white/70" : "text-[var(--text-3)]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] px-5 py-3 transition-colors justify-center ${
                    pkg.highlight
                      ? "bg-white text-[#111] hover:bg-white/90"
                      : "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  Get Started <ArrowRight size={13} strokeWidth={1.75} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
          <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-10">
            Frequently asked questions — website development in {city.cityName}
          </h2>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {city.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-[var(--text-3)] group-open:rotate-45 transition-transform shrink-0 text-xl leading-none">+</span>
                </summary>
                <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.8] mt-4 max-w-3xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS + INTERNAL LINKS ────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-4">
                Areas we serve from {city.cityName}
              </p>
              <div className="flex flex-wrap gap-2">
                {[city.cityName, ...city.nearbyAreas].map((area) => (
                  <span key={area} className="inline-flex items-center gap-1.5 font-montserrat text-[0.8125rem] text-[var(--text-3)] border border-[var(--border)] px-3 py-1.5">
                    <MapPin size={11} strokeWidth={2} className="shrink-0" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-4">
                Related pages
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: `${city.cityName} City Hub`, href: `/cities/${slug}` },
                  { label: "All Services", href: "/services" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Our Work", href: "/work" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-montserrat text-[0.8125rem] text-[var(--text-3)] border border-[var(--border)] px-4 py-2 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[#0D0D0D]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20 text-center">
          <h2 className="font-montserrat font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-white mb-4">
            Ready to get your website built in {city.cityName}?
          </h2>
          <p className="font-montserrat text-white/55 text-[0.9375rem] max-w-lg mx-auto mb-8">
            WhatsApp, call, or fill the form. We respond within 2 hours and deliver in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors"
            >
              <MessageCircle size={15} strokeWidth={1.75} />
              WhatsApp Us
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              <Phone size={14} strokeWidth={1.75} />
              +91 87072 24376
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
