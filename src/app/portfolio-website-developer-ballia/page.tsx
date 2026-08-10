import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getWebDesignBusinessSchema, getFAQSchema, siteUrl, sitePhone } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Portfolio Website Developer in Ballia UP | Expecto Digital Agency",
  description:
    "Looking for a portfolio website developer in Ballia, Uttar Pradesh? Expecto builds stunning, SEO-optimised portfolio websites for freelancers, photographers, designers & professionals. Starting ₹2,499. Call +91 87072 24376.",
  keywords: [
    "portfolio website developer ballia",
    "portfolio website design ballia",
    "portfolio website ballia up",
    "best web designer in ballia",
    "web design agency near me in ballia",
    "personal website developer ballia",
    "freelancer website ballia",
    "photographer website ballia",
    "designer portfolio website ballia",
    "professional website ballia uttar pradesh",
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio-website-developer-ballia`,
    languages: {
      "en-IN": `${siteUrl}/portfolio-website-developer-ballia`,
      "x-default": `${siteUrl}/portfolio-website-developer-ballia`,
    },
  },
  openGraph: {
    title: "Portfolio Website Developer in Ballia UP | Expecto Digital Agency",
    description:
      "Stunning, SEO-optimised portfolio websites for Ballia professionals, freelancers & creatives. Starting ₹2,499 with 7-day delivery.",
    url: `${siteUrl}/portfolio-website-developer-ballia`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Portfolio Website Developer Ballia — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Website Developer Ballia | Expecto",
    description: "Portfolio websites for Ballia professionals starting ₹2,499. SEO-ready, fast, beautiful.",
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

const portfolioTypes = [
  { title: "Photographer Portfolio", desc: "Full-screen galleries, lazy-loaded WebP images, contact forms and enquiry-capture CTAs." },
  { title: "Freelancer Portfolio", desc: "Skills, services, case studies and a testimonials section that builds instant trust." },
  { title: "Graphic Designer Portfolio", desc: "Visual-first layouts with project case studies, process walkthroughs and client logos." },
  { title: "Architect & Interior Designer", desc: "Project galleries, before/after sliders and enquiry forms optimised for high-value clients." },
  { title: "Consultant & Coach", desc: "Authority-building layouts with bio, credentials, speaking topics and booking CTAs." },
  { title: "Student & Fresh Graduate", desc: "Lean, professional portfolio to land jobs and freelance gigs. Skills + projects + contact." },
];

const included = [
  "Custom UI design — not a template",
  "Mobile-first, fully responsive",
  "On-page SEO (your name + profession + Ballia)",
  "Schema markup for Person / Professional",
  "Fast load — Next.js, WebP images, CDN",
  "Contact form + WhatsApp integration",
  "Google Analytics & Search Console setup",
  "Deployment on your domain",
  "1 month of free support",
];

const faqs = [
  {
    q: "What is a portfolio website and do I need one in Ballia?",
    a: "A portfolio website is your personal online presence — it showcases your work, skills and services. If you're a freelancer, photographer, designer, consultant or fresh graduate in Ballia, a portfolio website helps you get discovered on Google and build credibility with potential clients.",
  },
  {
    q: "How much does a portfolio website cost in Ballia?",
    a: "Our portfolio websites start at ₹2,499. This includes custom design, development, on-page SEO, WhatsApp integration and deployment. We also handle your domain and hosting setup.",
  },
  {
    q: "Will my portfolio website rank on Google in Ballia?",
    a: "Yes. Every portfolio website we build includes on-page SEO optimised for your name, profession and location (Ballia, UP). We've taken client websites from invisible to #1 on Google — the same techniques are applied to every project.",
  },
  {
    q: "Can you update my portfolio website later?",
    a: "Yes. We either build you a simple admin panel to self-update, or you can send us updates and we'll apply them. The first month of changes is free. After that, updates are available on a pay-per-change basis.",
  },
  {
    q: "How long does it take to build a portfolio website in Ballia?",
    a: "Typically 5–7 days from the time you provide your content (photos, bio, project details). We handle everything else.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PortfolioWebsiteDeveloperBalliaPage() {
  const wdbSchema = getWebDesignBusinessSchema();
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <Script id="schema-wdb-pf-ballia" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wdbSchema) }} />
      <Script id="schema-faq-pf-ballia" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Portfolio Website Developer Ballia", path: "/portfolio-website-developer-ballia" },
      ]} />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">

        {/* ── HERO ── */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20 bg-[#0D0D0D]" aria-labelledby="pf-ballia-h1">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.2em] block mb-5">
              Expecto Digital Agency · Ballia, UP
            </span>
            <h1
              id="pf-ballia-h1"
              className="font-montserrat font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-white max-w-4xl mb-5"
            >
              Portfolio Website Developer in Ballia, UP
            </h1>
            <p className="font-montserrat text-white/65 text-[1rem] md:text-[1.125rem] leading-[1.8] max-w-2xl mb-8">
              Your portfolio is your first impression. We build custom, SEO-optimised portfolio
              websites for freelancers, photographers, designers and professionals in Ballia
              and across Uttar Pradesh — starting at ₹2,499 with 7-day delivery.
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

        {/* ── PORTFOLIO TYPES ── */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20" aria-labelledby="pf-ballia-types-h2">
          <h2
            id="pf-ballia-types-h2"
            className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-3"
          >
            Portfolio websites we build in Ballia
          </h2>
          <p className="font-montserrat text-[var(--text-3)] text-[0.9375rem] leading-[1.8] max-w-2xl mb-10">
            Every portfolio is custom-designed for your profession and optimised to rank
            when people search for your name or skill in Ballia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {portfolioTypes.map((pt) => (
              <div key={pt.title} className="bg-[var(--bg-base)] p-7 hover:bg-[var(--bg-subtle)] transition-colors">
                <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-2">{pt.title}</h3>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7]">{pt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-6">
                  Everything included in your portfolio website
                </h2>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={14} strokeWidth={2} className="text-[var(--text-3)] shrink-0" />
                      <span className="font-montserrat text-[0.875rem] text-[var(--text-3)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 border border-[var(--border)] p-8">
                {/* H3 — conversion closer */}
                <h3 className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-4">
                  Why Expecto is the best web designer in Ballia for portfolio websites
                </h3>
                <div className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.85] space-y-4">
                  <p>
                    We&apos;re not a template shop. Every portfolio we build starts with a blank
                    canvas and is designed around your profession, your personality and the
                    clients you want to attract.
                  </p>
                  <p>
                    More importantly, we build for search. Your portfolio will be optimised
                    to rank when someone in Ballia Googles your name, your skill, or your
                    profession. We&apos;ve taken complete unknowns to the top of Google for
                    their local searches — it&apos;s what we do.
                  </p>
                  <p>
                    Starting at ₹2,499 with a 7-day turnaround, there&apos;s no reason to
                    stay invisible online. Call or WhatsApp us today.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity mt-6"
                >
                  Start your portfolio website <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
            <h2 className="font-montserrat font-semibold text-[clamp(1.375rem,2.5vw,2rem)] leading-[1.2] text-[var(--text)] mb-10">
              Questions about portfolio website development in Ballia
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
                { label: "Website Development Ballia", href: "/website-development-ballia" },
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
              Ready for a portfolio website in Ballia?
            </h2>
            <p className="font-montserrat text-white/55 text-[0.9375rem] max-w-lg mx-auto mb-8">
              Starting ₹2,499. Delivered in 7 days. SEO-optimised for Ballia.
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
