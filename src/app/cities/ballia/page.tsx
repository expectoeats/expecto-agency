import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Star, Trophy } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  getCitySchema,
  getWebDesignBusinessSchema,
  getFAQSchema,
  siteUrl,
  sitePhone,
} from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Website Development in Ballia | Best Web Designer Ballia UP | Expecto Digital Agency",
  description:
    "Top-rated website development agency in Ballia, Uttar Pradesh. Custom websites, CRM systems, e-commerce stores & admin panels starting ₹1,999. 7-day delivery. Proven #1 Google rankings. Call +91 87072 24376.",
  keywords: [
    "website development in ballia",
    "best web designer in ballia",
    "website developer ballia uttar pradesh",
    "portfolio website developer ballia",
    "web design agency near me in ballia",
    "website design ballia",
    "web development ballia up",
    "digital agency ballia",
    "website company ballia",
    "crm development ballia",
    "ecommerce website ballia",
    "affordable website ballia",
    "coaching website ballia",
    "website banwao ballia",
    "website maker ballia",
    "best digital agency ballia",
    "website design rasra",
    "website design ghazipur",
  ],
  alternates: {
    canonical: `${siteUrl}/cities/ballia`,
    languages: {
      "en-IN": `${siteUrl}/cities/ballia`,
      "x-default": `${siteUrl}/cities/ballia`,
    },
  },
  openGraph: {
    title: "Website Development in Ballia | Best Web Designer Ballia UP | Expecto",
    description:
      "Ballia's most trusted website development agency. High-speed websites, CRM & e-commerce starting ₹1,999. Proven #1 Google rankings for clients.",
    url: `${siteUrl}/cities/ballia`,
    type: "website",
    locale: "en_IN",
    siteName: "Expecto Digital Agency",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Expecto Digital Agency — Website Development in Ballia, UP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development in Ballia | Expecto Digital Agency",
    description: "Ballia's best web design agency. Websites from ₹1,999. 7-day delivery. #1 Google rankings.",
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

const services = [
  { title: "Business Websites", desc: "Professional multi-page websites built with Next.js. Fast, SEO-ready, mobile-first." },
  { title: "Portfolio Websites", desc: "Showcase your work, attract clients and build credibility online in Ballia and beyond." },
  { title: "E-commerce Stores", desc: "Full online stores with payment gateway, inventory and order management." },
  { title: "CRM & Admin Panels", desc: "Custom zero-code dashboards so you manage your business without developer dependency." },
  { title: "Coaching Institute Websites", desc: "SEO-optimised sites with course management, batch listings and WhatsApp CTAs." },
  { title: "Landing Pages", desc: "High-converting single-page sites for ads, launches and lead generation campaigns." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "#1", label: "Google Rankings for Clients" },
  { value: "7 Days", label: "Guaranteed Delivery" },
  { value: "₹1,999", label: "Starting Price" },
];

const serviceAreas = [
  "Ballia", "Rasra", "Bairia", "Bansdih", "Ghazipur",
  "Mau", "Azamgarh", "Deoria", "Varanasi",
];

const faqs = [
  {
    q: "Which is the best website development company in Ballia?",
    a: "Expecto Digital Agency is Ballia's top-rated web development company, with 50+ delivered projects and verified #1 Google rankings for clients like Interface Classes (Kanpur). We build high-speed Next.js websites, CRMs and e-commerce stores starting ₹1,999 with a 7-day delivery guarantee.",
  },
  {
    q: "How much does website development cost in Ballia?",
    a: "Our websites start at ₹1,999 for a professional business website. Portfolio websites from ₹2,499, e-commerce stores from ₹7,999, and custom CRM systems from ₹9,999. All include design, development, deployment and on-page SEO.",
  },
  {
    q: "Do you offer website development services near me in Ballia?",
    a: "Yes. Expecto Digital Agency is based in Ballia, Uttar Pradesh. We serve clients across Ballia district, Rasra, Bairia, Bansdih, Ghazipur and all neighbouring areas. You can meet us in person or work with us 100% online.",
  },
  {
    q: "Can you build a portfolio website for a freelancer in Ballia?",
    a: "Absolutely. We specialise in portfolio websites for photographers, designers, consultants and professionals in Ballia. Your portfolio will be SEO-optimised to rank for your name and profession locally.",
  },
  {
    q: "Do you provide SEO with the website?",
    a: "Yes. Every website we build includes on-page SEO: proper H1–H3 structure, meta tags, schema markup, canonical URLs, sitemap, and Google Business Profile alignment. Advanced local SEO for Ballia is available as an add-on.",
  },
  {
    q: "How fast can you deliver a website in Ballia?",
    a: "Our standard delivery is 7 days for business and portfolio websites. E-commerce and CRM projects take 14–21 days. If we miss the guaranteed deadline, you get 20% cashback — in writing.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BalliaPage() {
  const citySchema = getCitySchema("Ballia", "Uttar Pradesh", 25.7581, 84.1497);
  const wdbSchema = getWebDesignBusinessSchema();
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      {/* ── Structured Data ── */}
      <Script
        id="schema-city-ballia"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <Script
        id="schema-wdb-ballia"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wdbSchema) }}
      />
      <Script
        id="schema-faq-ballia"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Cities", path: "/cities/ballia" },
          { name: "Website Development Ballia", path: "/cities/ballia" },
        ]}
      />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">

        {/* ── HERO ── */}
        <section
          className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#0D0D0D]"
          aria-labelledby="ballia-h1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111] to-[#0D0D0D] pointer-events-none" />
          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

            {/* Geo badge */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} strokeWidth={2} className="text-white/40" />
              <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.2em]">
                Ballia, Uttar Pradesh · expecto.online
              </span>
            </div>

            {/* H1 — primary keyword first, naturally written */}
            <h1
              id="ballia-h1"
              className="font-montserrat font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-white max-w-4xl mb-6"
            >
              Website Development in Ballia —{" "}
              <span className="text-white/60">
                Fast, SEO-Ready & Built to Rank
              </span>
            </h1>

            <p className="font-montserrat text-white/70 text-[1rem] md:text-[1.125rem] leading-[1.8] max-w-2xl mb-8">
              Expecto Digital Agency is Ballia's most trusted web design company. We build
              high-speed Next.js websites, custom CRMs, e-commerce stores and admin panels
              for businesses across Ballia, Rasra, Bairia, Bansdih and Ghazipur — starting
              at just ₹1,999 with a 7-day delivery guarantee.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors"
              >
                Start Your Website <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link
                href={`tel:${sitePhone}`}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-6 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Call +91 87072 24376
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0D0D0D] px-6 py-5">
                  <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] text-white leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="font-montserrat text-[0.6875rem] text-white/40 uppercase tracking-[0.12em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY CALLOUT ── */}
        <section
          className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20"
          aria-labelledby="ballia-proof-h2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)]">

            {/* Rank proof */}
            <div className="lg:col-span-7 bg-[#111] p-8 md:p-12 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Trophy size={18} strokeWidth={1.75} className="text-white/50" />
                <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.18em]">
                  Verified Client Result · Kanpur
                </span>
              </div>

              {/* H2 — secondary keyword placement */}
              <h2
                id="ballia-proof-h2"
                className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-white"
              >
                Why Ballia businesses choose Expecto: our work ranks #1 on Google.
              </h2>

              <p className="font-montserrat text-white/65 text-[0.9375rem] leading-[1.8]">
                Interface Classes — a Kanpur IIT-JEE coaching institute — came to us with an
                outdated, invisible website. We rebuilt it from the ground up: semantic heading
                structure, local schema markup, Core Web Vitals optimisation and location-specific
                content architecture. The result? A jump from position 100+ to{" "}
                <strong className="text-white">#1 on Google</strong> for
                &ldquo;Best IIT JEE Coaching in Kanpur&rdquo; — and it has stayed there.
              </p>

              {/* H3 — supporting keyword */}
              <h3 className="font-montserrat font-semibold text-[0.875rem] text-white/80 uppercase tracking-[0.1em]">
                The same SEO architecture is built into every website we deliver in Ballia.
              </h3>

              <div className="flex flex-col gap-2 mt-2">
                {[
                  "Semantic H1 → H2 → H3 heading structure",
                  "LocalBusiness + WebDesignBusiness schema markup",
                  "Core Web Vitals: LCP, CLS, INP optimised",
                  "Location-specific content & geo-targeting",
                  "Google Business Profile alignment",
                  "Internal linking & crawl architecture",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={14} strokeWidth={2} className="text-white/40 shrink-0 mt-[0.2rem]" />
                    <span className="font-montserrat text-[0.8125rem] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parul University callout */}
            <div className="lg:col-span-5 bg-white p-8 md:p-12 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Star size={16} strokeWidth={1.75} className="text-[var(--text-3)]" />
                <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.18em]">
                  Enterprise Project · Education
                </span>
              </div>

              <h2 className="font-montserrat font-semibold text-[clamp(1.25rem,2vw,1.625rem)] leading-[1.25] text-[var(--text)]">
                Parul University Campus Marketplace — built by Expecto.
              </h2>

              <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8]">
                Swapzy is a peer-to-peer campus marketplace we designed and developed for
                Parul University students — a full-stack product with real-time listings,
                messaging, auth, and admin controls. It handles thousands of student
                transactions daily and is a testament to what Expecto builds beyond
                standard websites.
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                {[
                  "Full-stack Next.js + custom backend",
                  "Real-time listings & in-app messaging",
                  "Admin panel with zero developer dependency",
                  "Deployed to production — live users daily",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--text)] shrink-0 mt-[0.5rem]" />
                    <span className="font-montserrat text-[0.8125rem] text-[var(--text-3)]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity mt-2 self-start"
              >
                See our full portfolio <ArrowRight size={13} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section
          className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-14 md:pb-20"
          aria-labelledby="ballia-services-h2"
        >
          <h2
            id="ballia-services-h2"
            className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3"
          >
            Website & digital services in Ballia
          </h2>
          <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] max-w-2xl mb-10">
            Whether you need a basic business website or a full custom CRM, we deliver
            production-ready digital products for Ballia businesses — fast.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {services.map((svc) => (
              <div key={svc.title} className="bg-[var(--bg-base)] p-7 flex flex-col gap-3 hover:bg-[var(--bg-subtle)] transition-colors">
                <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)]">
                  {svc.title}
                </h3>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ON-PAGE COPY / ABOUT ── */}
        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                {/* H2 — conversion-focused, location-explicit */}
                <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-6">
                  The best web design agency in Ballia, UP — and the results prove it.
                </h2>

                {/* 300-word localised body copy */}
                <div className="font-montserrat text-[0.9375rem] text-[var(--text-3)] leading-[1.85] space-y-4">
                  <p>
                    Businesses in Ballia deserve websites that do more than just exist online —
                    they deserve websites that rank on Google, convert visitors into customers,
                    and run without constant maintenance. That&apos;s exactly what Expecto Digital
                    Agency delivers.
                  </p>
                  <p>
                    We&apos;re a website development agency based in Ballia, Uttar Pradesh, serving
                    local businesses, coaching institutes, restaurants, clinics, real-estate
                    professionals and freelancers across Ballia, Rasra, Bairia, Bansdih and
                    Ghazipur. Every website we build is engineered with Next.js — the same
                    framework used by some of the world&apos;s largest companies — for blazing-fast
                    load times and solid SEO foundations.
                  </p>

                  {/* H3 — supporting keyword */}
                  <h3 className="font-montserrat font-semibold text-[1rem] text-[var(--text)] pt-2">
                    Ranked #1 on Google — for our client, not just ourselves.
                  </h3>
                  <p>
                    Our most cited result: Interface Classes, a competitive IIT-JEE and NEET
                    coaching institute in Kanpur, was buried beyond page 10 on Google when they
                    came to us. We redesigned their website, rewired the entire SEO architecture —
                    schema markup, heading hierarchy, local signals, internal linking — and
                    optimised every Core Web Vital. Within weeks, they moved to{" "}
                    <strong className="text-[var(--text)]">#1 on Google for "Best IIT JEE Coaching in Kanpur"</strong>.
                    They&apos;ve held that rank ever since.
                  </p>

                  {/* H3 — product range */}
                  <h3 className="font-montserrat font-semibold text-[1rem] text-[var(--text)] pt-2">
                    Beyond websites: custom platforms that scale.
                  </h3>
                  <p>
                    We also built Swapzy — a fully custom campus marketplace for Parul University
                    students — with real-time listings, in-app messaging and a zero-code admin
                    panel. It handles thousands of daily transactions. This is the calibre of
                    development work that Ballia businesses can now access locally.
                  </p>
                  <p>
                    Whether you need a ₹1,999 business website delivered in 7 days or a
                    full-stack CRM built from scratch, Expecto is the web design agency in
                    Ballia that delivers on its promises — in writing, with a cashback guarantee.
                  </p>
                </div>
              </div>

              {/* Sidebar — service areas + internal links */}
              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="border border-[var(--border)] p-7 mb-6">
                  <h3 className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)] uppercase tracking-[0.12em] mb-5">
                    Service Areas
                  </h3>
                  <ul className="space-y-2">
                    {serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <MapPin size={12} strokeWidth={2} className="text-[var(--text-3)] shrink-0" />
                        <span className="font-montserrat text-[0.8125rem] text-[var(--text-3)]">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[var(--border)] p-7">
                  <h3 className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)] uppercase tracking-[0.12em] mb-5">
                    Explore More
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Website Development Ballia →", href: "/website-development-ballia" },
                      { label: "Portfolio Website Developer Ballia →", href: "/portfolio-website-developer-ballia" },
                      { label: "Our Pricing", href: "/pricing" },
                      { label: "Services", href: "/services" },
                      { label: "Our Work", href: "/work" },
                      { label: "Contact Us", href: "/contact" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-montserrat text-[0.8125rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="border-t border-[var(--border)]"
          aria-labelledby="ballia-faq-h2"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <h2
              id="ballia-faq-h2"
              className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-10"
            >
              Frequently asked questions — website development in Ballia
            </h2>
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((faq) => (
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

        {/* ── CTA FOOTER ── */}
        <section className="border-t border-[var(--border)] bg-[#0D0D0D]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20 text-center">
            <h2 className="font-montserrat font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-white mb-4">
              Ready to get your website built in Ballia?
            </h2>
            <p className="font-montserrat text-white/60 text-[0.9375rem] leading-[1.8] max-w-xl mx-auto mb-8">
              Call us, WhatsApp us, or fill in the contact form. We respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 bg-white text-[#111] hover:bg-white/90 transition-colors"
              >
                Start a Project <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link
                href={`tel:${sitePhone}`}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[0.875rem] px-8 py-3.5 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                +91 87072 24376
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
