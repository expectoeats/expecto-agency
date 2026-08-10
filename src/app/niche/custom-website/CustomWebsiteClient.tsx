"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Unsplash — free to use
const IMG_HERO    = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80&auto=format&fit=crop"; // web design on screen
const IMG_CODE    = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop"; // code editor
const IMG_DEVICE  = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format&fit=crop"; // phone + laptop
const IMG_COLLAB  = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop"; // planning / whiteboard
const IMG_RESULT  = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"; // analytics / results

const features = [
  { num: "01", title: "Designed from scratch",      desc: "No templates. Every screen is designed specifically for your business, your audience and your goals." },
  { num: "02", title: "Fast on every device",       desc: "Mobile-first development with optimised assets. Your website loads quickly on any network or device." },
  { num: "03", title: "Built for search",           desc: "Semantic HTML, structured headings, schema markup and local SEO — built into the architecture from day one." },
  { num: "04", title: "Content you can manage",     desc: "Where needed, we build admin systems so your team can update content without depending on a developer." },
  { num: "05", title: "Enquiry & conversion ready", desc: "WhatsApp buttons, contact forms, call CTAs and Google Analytics configured before launch." },
  { num: "06", title: "Full ownership on delivery", desc: "Source code, domain and database belong to your business. No lock-in, no recurring platform fees." },
];

const demos = [
  { name: "NEET Coaching Website", type: "Education", url: "https://expecto-neet-coaching.vercel.app/", image: "/work/coaching/expecto-demo-coaching.webp" },
  { name: "Kindergarten Website",  type: "Education", url: "https://expecto-kindergarten.vercel.app/",  image: "/work/school/kindergarten.webp" },
  { name: "Real Estate Website",   type: "Real Estate",url: "https://expecto-real-estate-crm-xxh2.vercel.app/", image: "/work/realestate/realestate-demo.webp" },
  { name: "Expecto Cafe Demo",     type: "Restaurant", url: "https://expecto-cafe-demo.vercel.app/",    image: "/work/expecto-demo-cafe.webp" },
];

const pricing = [
  {
    tier: "Starter",
    price: "₹3,999",
    desc: "For small businesses that need a clean, fast website with basic information and enquiry flow.",
    features: ["5 custom pages", "Mobile responsive", "WhatsApp CTA", "On-page SEO setup", "Contact form", "30-day support"],
  },
  {
    tier: "Business",
    price: "₹7,999",
    desc: "For growing businesses that need a complete website with multiple sections and conversion focus.",
    features: ["Up to 10 custom pages", "Custom UI design system", "Blog / news section", "Google Analytics", "Schema markup", "60-day support"],
  },
  {
    tier: "Premium",
    price: "₹14,999",
    desc: "For businesses that need a full custom build with admin panel, multiple modules and advanced features.",
    features: ["Unlimited pages", "Custom admin panel", "CMS integration", "Advanced SEO", "Performance audit", "90-day support"],
    highlight: true,
  },
];

type FAQ = { q: string; a: string };

export default function CustomWebsiteClient({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="bg-white text-[var(--text)] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-[72px] md:pt-20 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={IMG_HERO} alt="Custom website design" fill className="object-cover object-center" sizes="100vw" priority unoptimized />
          <div className="absolute inset-0 bg-[#0D0D0D]/75 md:bg-[#0D0D0D]/70" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
          <span className="label-tag block mb-6 lg:hidden">Solutions / Custom Website Development</span>
          <span className="font-montserrat text-[0.625rem] text-white/50 uppercase tracking-[0.2em] block mb-6 hidden lg:block">Solutions / Custom Website Development</span>
          <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white max-w-[700px] mb-6">
            A website built <span className="shimmer-text-light">specifically</span> for your business.
          </h1>
          <p className="font-montserrat text-white/70 text-[1rem] leading-[1.8] max-w-[520px] mb-8">
            No templates. No page builders. Every screen is designed around how your customers behave and what your business needs to communicate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/contact?type=new-website" className="inline-flex items-center gap-2 bg-[#111111] lg:bg-white text-white lg:text-[#111111] font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:opacity-90 transition-opacity">
              Start Your Website <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
            <Link href="#demos" className="inline-flex items-center gap-2 border border-[var(--border)] border-white/30 text-white font-montserrat font-medium text-[0.875rem] px-6 py-3.5 hover:opacity-80 transition-opacity">
              See Live Examples
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {["Starting ₹3,999", "7-Day Delivery", "Full Ownership", "No Templates"].map((tag) => (
              <span key={tag} className="font-montserrat text-[0.75rem] text-[var(--text-3)] text-white/40 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[var(--text-3)] lg:bg-white/40" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CUSTOM ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">Why custom?</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-5">
                Template websites look like template websites.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] mb-4">
                Most businesses use the same 10 templates. Your competitors are using the same layout as you. Visitors notice — even when they can't explain why.
              </p>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                A custom website is built for one purpose: making your business look and work exactly the way it should. It loads faster, ranks better and converts visitors more effectively than a template ever could.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
                <Image src={IMG_CODE} alt="Custom code development" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">What&apos;s included</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Every custom website includes.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {features.map((f) => (
              <div key={f.num} className="bg-white p-7 md:p-8 hover:bg-[var(--bg-subtle)] transition-colors duration-150">
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums block mb-4">{f.num}</span>
                <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-2">{f.title}</p>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE SECTION ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <span className="label-tag block mb-5">Mobile-first</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-5">
                Over 70% of your visitors are on mobile.
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85]">
                Every custom website we build is designed for mobile first. Not squeezed into a phone screen after the fact — actually designed to look and work perfectly on any device from the start.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-1 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
                <Image src={IMG_DEVICE} alt="Mobile responsive design" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE DEMOS ── */}
      <section id="demos" className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-6">
              <span className="label-tag block mb-5">Live demos</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Explore what we&apos;ve built.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                Working products — not mockups. Click through and explore the actual experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {demos.map((d) => (
              <div key={d.name} className="group flex flex-col bg-white border border-[var(--border)] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-subtle)]">
                  <Image src={d.image} alt={d.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" sizes="50vw" loading="lazy" />
                </div>
                <div className="p-5 border-t border-[var(--border)] flex items-center justify-between gap-4">
                  <div>
                    <span className="label-tag block mb-1">{d.type}</span>
                    <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{d.name}</p>
                  </div>
                  <Link href={d.url} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 font-montserrat text-[0.8125rem] font-medium text-[var(--text)] hover:opacity-60 transition-opacity">
                    Open <ArrowUpRight size={13} strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">Pricing</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Start with what your business needs.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                All packages include design, development, deployment and 30-day support. Custom quotes available.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {pricing.map((p) => (
              <div key={p.tier} className={`flex flex-col p-8 md:p-10 ${p.highlight ? "bg-[var(--text)]" : "bg-white"}`}>
                <span className={`font-montserrat text-[0.625rem] uppercase tracking-[0.15em] block mb-5 ${p.highlight ? "text-white/40" : "text-[var(--text-3)]"}`}>{p.tier}</span>
                <p className={`font-montserrat font-bold text-[2.25rem] leading-none mb-3 ${p.highlight ? "text-white" : "text-[var(--text)]"}`}>{p.price}</p>
                <p className={`font-montserrat text-[0.8125rem] leading-[1.7] mb-7 ${p.highlight ? "text-white/60" : "text-[var(--text-3)]"}`}>{p.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${p.highlight ? "bg-white/40" : "bg-[var(--text-3)]"}`} />
                      <span className={`font-montserrat text-[0.8125rem] ${p.highlight ? "text-white/70" : "text-[var(--text-3)]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact?type=new-website"
                  className={`inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] border px-5 py-3 w-fit transition-colors duration-150 ${p.highlight ? "border-white text-white hover:bg-white hover:text-[var(--text)]" : "border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-white"}`}>
                  Get Started <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">How it works</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-8">
                From brief to live website in 7 days.
              </h2>
              <div className="space-y-px border border-[var(--border)]">
                {[
                  { step:"01", label:"Discovery Call",    desc:"We understand your business, audience and goals." },
                  { step:"02", label:"Design",            desc:"Custom UI designed around your brand and visitors." },
                  { step:"03", label:"Development",       desc:"Frontend built for speed, SEO and mobile." },
                  { step:"04", label:"Review & Launch",   desc:"You approve, we deploy. Full handover included." },
                ].map((s, i) => (
                  <div key={s.step} className={`grid grid-cols-12 gap-3 p-5 bg-white ${i < 3 ? "border-b border-[var(--border)]" : ""}`}>
                    <span className="col-span-1 font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{s.step}</span>
                    <div className="col-span-4"><p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{s.label}</p></div>
                    <div className="col-span-7"><p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.6]">{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
                <Image src={IMG_COLLAB} alt="Planning and collaboration" fill className="object-cover object-center" sizes="50vw" loading="lazy" unoptimized />
                <div className="absolute inset-0 bg-[var(--text)]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">FAQ</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Common questions.
              </h2>
            </div>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqs.map((faq) => (
              <div key={faq.q} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 md:py-7">
                <div className="md:col-span-5">
                  <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] leading-snug">{faq.q}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">{faq.a}</p>
                </div>
              </div>
            ))}
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
            <p className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-white tracking-tight mb-6">
              Ready to build your custom website?
            </p>
            <p className="font-montserrat text-[1rem] text-white/50 leading-[1.8] mb-10 max-w-[480px]">
              Tell us about your business and we&apos;ll come back with a clear plan and honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact?type=new-website"
                className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:bg-white/90 transition-colors duration-150">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:border-white/50 transition-colors duration-150">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
