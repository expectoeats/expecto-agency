"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Demo = {
  name: string;
  url: string;
  image: string;
  type: string;
};

type SeoProof = {
  logoUrl: string;
  logoAlt: string;
  rank: string;
  movedFrom: string;
  query: string;
  city: string;
  bullets: string[];
};

type NichePageTemplateProps = {
  niche: string;
  headline?: string;
  subheadline?: string;
  heroLabel?: string;
  services: { title: string; desc: string }[] | string[];
  demos?: Demo[] | string[];
  screenshots?: { src: string; alt: string; caption: string }[];
  pricing: { tier: string; price: string; desc: string; features: string[] }[] | string[];
  faqs: { q: string; a: string }[];
  proofStats?: { value: string; label: string }[];
  seoProof?: SeoProof;
  // legacy props from old template
  ctaLabel?: string;
};

export default function NichePageTemplate({
  niche,
  headline,
  subheadline,
  heroLabel,
  services: servicesProp,
  demos: demosProp = [],
  screenshots = [],
  pricing: pricingProp,
  faqs,
  proofStats = [],
  seoProof,
}: NichePageTemplateProps) {

  // Normalise services — support both old string[] and new object[]
  const services: { title: string; desc: string }[] = servicesProp.map((s) =>
    typeof s === "string" ? { title: s, desc: "" } : s
  );

  // Normalise demos — support both old string[] and new Demo[]
  const demos: Demo[] = (demosProp as (Demo | string)[]).map((d) =>
    typeof d === "string" ? { name: d, url: "#", image: "", type: "" } : d
  ).filter((d) => d.image !== "");

  // Normalise pricing — support both old string[] and new object[]
  const pricing: { tier: string; price: string; desc: string; features: string[] }[] =
    pricingProp.map((p) => {
      if (typeof p === "string") {
        const [tier, ...rest] = p.split(":");
        const price = rest.join(":").trim();
        return { tier: tier.trim(), price, desc: "", features: [] };
      }
      return p;
    });

  const resolvedHeadline = headline ?? `${niche} website design, built right.`;
  const resolvedSubheadline = subheadline ?? `Professional websites and digital products for ${niche.toLowerCase()} businesses.`;
  const resolvedHeroLabel = heroLabel ?? `Industry / ${niche}`;
  return (
    <div className="bg-white text-[var(--text)] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-[72px] md:pt-20 border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="label-tag block mb-5">{resolvedHeroLabel}</span>
              <h1 className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-[var(--text)]">
                {resolvedHeadline}
              </h1>
            </div>
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="font-montserrat text-[var(--text-2)] text-[0.9375rem] leading-[1.8] mt-4 max-w-[500px]">
                {resolvedSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/contact" className="btn-black">
                  Start a Project <ArrowRight size={14} strokeWidth={1.75} />
                </Link>
                <Link href="/work" className="btn-outline">
                  See Our Work
                </Link>
              </div>
            </div>
            {proofStats.length > 0 && (
              <div className="lg:col-span-5 lg:col-start-8 flex items-end justify-end gap-8 pb-1">
                {proofStats.map((s) => (
                  <div key={s.label} className="text-right">
                    <p className="font-montserrat font-bold text-[2rem] leading-none text-[var(--text)]">{s.value}</p>
                    <p className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.1em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Screenshots strip ── */}
      {screenshots.length > 0 && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {screenshots.map((s, i) => (
                <div key={s.alt} className={`flex flex-col ${i === 0 ? "md:col-span-2" : ""}`}>
                  <div className={`relative overflow-hidden border border-[var(--border)] shadow-[0_2px_16px_rgba(0,0,0,0.07)] ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <Image src={s.src} alt={s.alt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 50vw" loading="lazy" />
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="label-tag">{String(i + 1).padStart(2, "0")} / {screenshots.length.toString().padStart(2, "0")}</span>
                    <p className="font-montserrat text-[0.75rem] text-[var(--text-3)]">{s.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SEO Proof Block ── */}
      {seoProof && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)]">

              {/* Dark rank panel */}
              <div className="lg:col-span-7 bg-[#111111] p-8 md:p-12 flex flex-col justify-between gap-8">
                <div>
                  <span className="font-montserrat text-[0.6875rem] text-white/40 uppercase tracking-[0.12em] block mb-6">
                    Google Search Ranking — {seoProof.city}, India
                  </span>
                  <p className="font-montserrat font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.0] text-white tracking-tight mb-2">
                    {seoProof.rank}
                  </p>
                  <p className="font-montserrat text-[1rem] md:text-[1.125rem] text-white/60 leading-[1.6]">
                    &ldquo;{seoProof.query}&rdquo;
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-montserrat text-[0.8125rem] text-white/50 mb-1">Moved from</p>
                    <p className="font-montserrat font-bold text-[1.5rem] text-white/40 leading-none">
                      {seoProof.movedFrom} → <span className="text-white">{seoProof.rank}</span>
                    </p>
                  </div>
                  <Image
                    src={seoProof.logoUrl}
                    alt={seoProof.logoAlt}
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain bg-white p-2 rounded-sm" style={{ width: "auto" }}
                    unoptimized
                  />
                </div>
              </div>

              {/* White explanation panel */}
              <div className="lg:col-span-5 bg-white p-8 md:p-12 flex flex-col justify-center gap-4">
                <span className="label-tag block mb-2">How it was achieved</span>
                {seoProof.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0 mt-[0.45rem]" />
                    <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── Services ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">What&apos;s included</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Built specifically for {niche.toLowerCase()} businesses.
              </h2>
            </div>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {services.map((svc, i) => (
              <div key={svc.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 md:py-7">
                <div className="md:col-span-1">
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-4">
                  <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{svc.title}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demos ── */}
      {demos.length > 0 && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              <div className="lg:col-span-6">
                <span className="label-tag block mb-5">Live demos</span>
                <h2 className="font-montserrat font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                  Explore what we&apos;ve built.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 flex items-end">
                <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
                  Working products — not mockups. Click through and explore the actual experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {demos.map((d) => (
                <div key={d.name} className="group flex flex-col bg-white border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-subtle)]">
                    <Image src={d.image} alt={d.name} fill className="object-cover object-top transition-transform duration-400 group-hover:scale-[1.02]" sizes="(max-width:640px) 100vw, 33vw" loading="lazy" />
                  </div>
                  <div className="p-5 border-t border-[var(--border)]">
                    <span className="label-tag block mb-1.5">{d.type}</span>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{d.name}</p>
                      <Link href={d.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${d.name}`}
                        className="shrink-0 inline-flex items-center gap-1 font-montserrat text-[0.75rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors duration-150">
                        Open <ArrowUpRight size={12} strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Pricing ── */}
      <section className="bg-[var(--bg-subtle)] border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">Pricing</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
                Start with what your business needs.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {pricing.map((p, i) => (
              <div key={p.tier} className={`flex flex-col p-8 md:p-10 ${i === pricing.length - 1 ? "bg-[var(--text)]" : "bg-white"}`}>
                <span className={`font-montserrat text-[0.6875rem] uppercase tracking-[0.1em] block mb-5 ${i === pricing.length - 1 ? "text-white/50" : "text-[var(--text-3)]"}`}>{p.tier}</span>
                <p className={`font-montserrat font-bold text-[2rem] leading-none mb-3 ${i === pricing.length - 1 ? "text-white" : "text-[var(--text)]"}`}>{p.price}</p>
                <p className={`font-montserrat text-[0.8125rem] leading-[1.7] mb-7 ${i === pricing.length - 1 ? "text-white/60" : "text-[var(--text-3)]"}`}>{p.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${i === pricing.length - 1 ? "bg-white/40" : "bg-[var(--text-3)]"}`} />
                      <span className={`font-montserrat text-[0.8125rem] ${i === pricing.length - 1 ? "text-white/70" : "text-[var(--text-3)]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] border px-5 py-3 w-fit transition-colors duration-150 ${i === pricing.length - 1 ? "border-white text-white hover:bg-white hover:text-[var(--text)]" : "border-[var(--border-dark)] text-[var(--text)] hover:bg-[var(--text)] hover:text-white"}`}>
                  Get Started <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>
            ))}
          </div>
          <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] mt-5">
            All packages include design, development, deployment and 30-day support. Custom quotes available.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-5">
              <span className="label-tag block mb-5">FAQ</span>
              <h2 className="font-montserrat font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
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

      {/* ── Final CTA ── */}
      <section className="bg-[#111111]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-white mb-5">
                Ready to build your {niche.toLowerCase()} website?
              </h2>
              <p className="font-montserrat text-[0.9375rem] text-white/50 leading-[1.75] max-w-[480px]">
                Tell us about your business and we&apos;ll come back with a clear plan and honest pricing.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-6 py-4 hover:bg-white/90 transition-colors duration-150">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/work"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-montserrat font-medium text-[0.875rem] px-6 py-4 hover:border-white/50 transition-colors duration-150">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
