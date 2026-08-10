"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const IMG_PLAN  = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop";
const IMG_DESK  = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&auto=format&fit=crop";
const IMG_CODE  = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop";
const IMG_BUILD = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop";
const IMG_SHIP  = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop";

const steps = [
  {
    num: "01", title: "Understand", label: "Business Discovery",
    desc: "We start by understanding what the business actually needs the digital product to accomplish — not just what it should look like. This means asking questions about the audience, the current situation, the goal and what success looks like.",
    deliverables: ["Business requirements brief", "Audience definition", "Technical scope outline", "Project timeline"],
    image: IMG_PLAN, imageAlt: "Planning and strategy",
  },
  {
    num: "02", title: "Structure", label: "Architecture",
    desc: "Before any design or development begins, we map the content architecture and user journeys. Every page earns its place. Every section has a job. Features without a clear purpose are removed from the scope.",
    deliverables: ["Sitemap / page structure", "User flow mapping", "Feature list", "Technical architecture"],
    image: IMG_DESK, imageAlt: "Information architecture",
  },
  {
    num: "03", title: "Build", label: "Design & Development",
    desc: "Design and development happen together. The visual system, typography, spacing and interactions are built alongside the actual frontend and backend code — not handed off as a static file.",
    deliverables: ["UI design system", "Frontend development", "Backend / API development", "Staging environment"],
    image: IMG_BUILD, imageAlt: "Development",
  },
  {
    num: "04", title: "Refine", label: "Testing & Review",
    desc: "Before launch, the product is tested across devices, browsers and screen sizes. Performance, accessibility and SEO fundamentals are verified. Content is reviewed and the client gets time to inspect the build.",
    deliverables: ["Cross-device testing", "Performance audit", "SEO check", "Client review round"],
    image: IMG_CODE, imageAlt: "Testing and refinement",
  },
  {
    num: "05", title: "Deliver", label: "Launch & Handover",
    desc: "The final product is deployed to the live environment. DNS is configured, analytics are set up and the client receives full documentation. Where an admin panel exists, the team is shown how to use it.",
    deliverables: ["Live deployment", "DNS & domain setup", "Analytics configuration", "Full handover documentation"],
    image: IMG_SHIP, imageAlt: "Delivery and handover",
  },
];

export default function ProcessPageClient() {
  return (
    <div className="bg-white text-[var(--text)] min-h-screen">

      {/* Hero */}
      <section className="relative pt-[72px] md:pt-20 border-b border-white/10 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src={IMG_PLAN} alt="" fill className="object-cover object-center" sizes="100vw" priority unoptimized />
          <div className="absolute inset-0 bg-[#0D0D0D]/72" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
          <span className="font-montserrat text-[0.625rem] text-white/50 uppercase tracking-[0.22em] block mb-6">Process / Expecto</span>
          <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white max-w-[700px] mb-6">
            From business problem to{" "}
            <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
              digital product.
            </span>
          </h1>
          {/* Frosted description card */}
          <div className="px-5 py-4 rounded-sm border border-white/10 max-w-[520px]"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}>
            <p className="font-montserrat text-white/80 text-[1rem] leading-[1.8]">
              Not a generic agency framework. This is what actually happens on every Expecto project — from the first conversation to handover.
            </p>
          </div>
        </div>
      </section>

      {/* Steps — explicit alternating layout */}
      {steps.map((step, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={step.num}
            className={`border-b border-[var(--border)] ${flip ? "bg-[var(--bg-subtle)]" : "bg-white"}`}
          >
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Text block */}
                <div className={flip ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums border border-[var(--border)] px-2.5 py-1">
                      {step.num}
                    </span>
                    <span className="label-tag">{step.label}</span>
                  </div>
                  <h2 className="font-montserrat font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-5">
                    {step.title}
                  </h2>
                  <p className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] mb-8">
                    {step.desc}
                  </p>
                  <div className="border-t border-[var(--border)] pt-5">
                    <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em] mb-4">
                      Deliverables
                    </p>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-6">
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[var(--text-3)] shrink-0" />
                          <span className="font-montserrat text-[0.8125rem] text-[var(--text-3)]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image block */}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.09)]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width:1024px) 100vw, 50vw"
                      loading="lazy"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 bg-white/90 border border-[var(--border)] px-3 py-1.5">
                      <span className="font-montserrat font-semibold text-[0.75rem] text-[var(--text)] uppercase tracking-[0.08em]">
                        Phase {step.num} — {step.title}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image src="/pattern.webp" alt="" fill className="object-cover object-center opacity-[0.07]" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="max-w-[720px]">
            <p className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-white tracking-tight mb-6">
              Have something worth building?
            </p>
            <p className="font-montserrat text-[1rem] text-[#888888] leading-[1.8] mb-10 max-w-[480px]">
              Tell us what you&apos;re trying to build, improve or solve. We&apos;ll come back with a clear plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:bg-white/90 transition-colors duration-150">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work"
                className="inline-flex items-center gap-2 border border-[#333333] text-white font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:border-[#555555] transition-colors duration-150">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
