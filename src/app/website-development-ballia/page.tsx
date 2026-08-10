import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getWebDesignBusinessSchema, getFAQSchema, siteUrl, sitePhone } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Website Development in Ballia UP | Starting ₹1,999 | Expecto Digital Agency",
  description:
    "Professional website development in Ballia, Uttar Pradesh. High-speed Next.js websites, e-commerce, CRM & custom web apps starting ₹1,999 with 7-day delivery. Call +91 87072 24376.",
  keywords: [
    "website development in ballia",
    "website developer ballia uttar pradesh",
    "web development ballia up",
    "website company ballia",
    "affordable website development ballia",
    "next.js developer ballia",
    "react developer ballia",
    "custom website development ballia",
    "ecommerce website development ballia",
    "crm development ballia",
  ],
  alternates: {
    canonical: `${siteUrl}/website-development-ballia`,
    languages: {
      "en-IN": `${siteUrl}/website-development-ballia`,
      "x-default": `${siteUrl}/website-development-ballia`,
    },
  },
  openGraph: {
    title: "Website Development in Ballia UP | Starting ₹1,999 | Expecto",
    description:
      "High-speed website development in Ballia starting ₹1,999. Next.js, e-commerce, CRM & custom web apps. 7-day delivery guaranteed.",
    url: `${siteUrl}/website-development-ballia`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development in Ballia — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Ballia | Expecto Digital Agency",
    description: "High-speed websites in Ballia from ₹1,999. 7-day delivery. Call +91 87072 24376.",
    images: [`${siteUrl}/opengraph-image`],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ballia, Uttar Pradesh, India",
    "geo.position": "25.7581;84.1497",
    ICBM: "25.7581, 84.1497",
  },
};

// ─── Page data ────────────────────────────────────────────────────────────────

const packages = [
  {
    name: "Starter",
    price: "₹1,999",
    delivery: "7 days",
    features: ["Up to 5 pages", "Mobile-responsive", "On-page SEO", "Contact form", "WhatsApp button", "Deployment included"],
  },
  {
    name: "Growth",
    price: "₹3,999",
    delivery: "7 days",
    features: ["Up to 10 pages", "Custom UI design", "Blog / news section", "Google Analytics", "Schema markup", "1 month support"],
    highlight: true,
  },
  {
    name: "Custom",
    price: "From ₹7,999",
    delivery: "14–21 days",
    features: ["Unlimited pages", "Custom admin panel", "CRM / ERP integration", "E-commerce store", "API integrations", "Priority support"],
  },
];

const faqs = [
  {
    q: "How much does website development cost in Ballia?",
    a: "Our website development packages start at ₹1,999 for a professional business website. Growth packages are ₹3,999, and custom builds with CRM or e-commerce start from ₹7,999. All packages include design, development, deployment and on-page SEO.",
  },
  {
    q: "How long does website development take in Ballia?",
    a: "Standard business websites are delivered in 7 days. E-commerce stores and custom CRM systems take 14–21 days. We provide a written delivery guarantee — miss it and you get 20% cashback.",
  },
  {
    q: "What technology do you use for website development in Ballia?",
    a: "We build with Next.js and React — the same frameworks used by top global companies. This ensures your website loads fast, scores well on Core Web Vitals, and has a solid SEO foundation from day one.",
  },
  {
    q: "Do you provide website maintenance after development?",
    a: "Yes. All packages include free support for the first month. Long-term maintenance plans are available. We also build websites with admin panels so you can update content yourself without calling a developer.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WebsiteDevelopmentBalliaPage() {
  const wdbSchema = getWebDesignBusinessSchema();
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <Script id="schema-wdb-wd-ballia" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wdbSchema) }} />
      <Script id="schema-faq-wd-ballia" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Website Development Ballia", path: "/website-development-ballia" },
      ]} />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">

        {/* ── HERO ── */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20 bg-[#0D0D0D]" aria-labelledby="wd-ballia-h1">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.2em] block mb-5">
              Expecto Digital Agency · Ballia, UP
            </span>
            <h1
              id="wd-ballia-h1"
              className="font-montserrat font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-white max-w-4xl mb-5"
            >
              Website Development in Ballia, Uttar Pradesh
            </h1>
            <p className="font-montserrat text-white/65 text-[1rem] md:text-[1.125rem] leading-[1.8] max-w-2xl mb-8">
              We build professional, high-speed websites for Ballia businesses — starting at ₹1,999
              with a written 7-day delivery guarantee. Next.js, SEO-ready, mobile-first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors">
                Get a Free Quote <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href={`tel:${sitePhone}`}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors">
                Call +91 87072 24376
              </Link>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20" aria-labelledby="wd-ballia-pricing-h2">
          <h2
            id="wd-ballia-pricing-h2"
            className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3"
          >
            Website development packages for Ballia businesses
          </h2>
          <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] mb-10 max-w-2xl">
            Transparent pricing. No hidden fees. Everything listed above is included — design,
            development, deployment and on-page SEO.
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
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] px-5 py-3 transition-colors justify-center ${
                    pkg.highlight
                      ? "bg-white text-[#111] hover:bg-white/90"
                      : "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  Get Started <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY EXPECTO ── */}
        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-6">
              Why choose Expecto for website development in Ballia?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Local & accountable", body: "We're based in Ballia. You can meet us in person. We're invested in your success — our reputation is built here." },
                { title: "Proven Google rankings", body: "We took Interface Classes from position 100+ to #1 on Google. The same SEO architecture goes into every site we build." },
                { title: "7-day delivery — in writing", body: "Miss the deadline on qualifying projects and you get 20% cashback. No excuses, no delays." },
                { title: "Next.js performance", body: "Built on the same framework as Fortune 500 company websites. Fast, scalable, and SEO-ready by default." },
                { title: "You own 100% of your site", body: "No lock-in. Every client receives a Code Ownership Certificate confirming full rights to source code and design." },
                { title: "Admin panel included", body: "Most packages include a custom admin panel so your team can update content without calling a developer." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">{item.title}</h3>
                  <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.75]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-10">
              Common questions about website development in Ballia
            </h2>
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-[var(--text-3)] group-open:rotate-45 transition-transform shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.8] mt-4 max-w-3xl">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-subtle)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14">
            <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-5">Related pages</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Website Design Ballia — City Hub", href: "/cities/ballia" },
                { label: "Portfolio Website Developer Ballia", href: "/portfolio-website-developer-ballia" },
                { label: "All Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Our Work", href: "/work" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="font-montserrat text-[0.8125rem] text-[var(--text-3)] border border-[var(--border)] px-4 py-2 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-[var(--border)] bg-[#0D0D0D]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20 text-center">
            <h2 className="font-montserrat font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-white mb-4">
              Get your website built in Ballia — starting ₹1,999.
            </h2>
            <p className="font-montserrat text-white/55 text-[0.9375rem] max-w-lg mx-auto mb-8">
              7-day delivery. Written guarantee. 100% ownership. Talk to us today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors">
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href={`tel:${sitePhone}`}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors">
                +91 87072 24376
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
