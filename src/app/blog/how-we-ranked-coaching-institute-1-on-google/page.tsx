import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How We Ranked an IIT-JEE Coaching Institute #1 on Google — Full SEO Case Study | Expecto",
  description:
    "The exact SEO strategy that moved Interface Classes, Kanpur from position 100+ to #1 on Google for 'Best IIT JEE Coaching in Kanpur'. Step-by-step breakdown of schema, headings, Core Web Vitals and local signals.",
  keywords: [
    "coaching institute seo case study india",
    "how to rank coaching institute on google",
    "local seo for coaching institute",
    "iit jee coaching website seo",
    "website seo kanpur coaching",
    "rank 1 google coaching institute",
  ],
  alternates: { canonical: `${siteUrl}/blog/how-we-ranked-coaching-institute-1-on-google` },
  openGraph: {
    title: "How We Ranked an IIT-JEE Coaching #1 on Google — Expecto SEO Case Study",
    description: "Full breakdown: schema, H1-H3 structure, Core Web Vitals, and local signals that drove a coaching institute from position 100+ to #1.",
    url: `${siteUrl}/blog/how-we-ranked-coaching-institute-1-on-google`,
    type: "article",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "IIT JEE Coaching SEO Case Study — Expecto" }],
  },
};

const steps = [
  {
    num: "01",
    title: "Semantic Heading Structure (H1 → H2 → H3)",
    body: "The old site had H2s where H1s should be, and H1s used for decorative text. We rebuilt the entire heading hierarchy: one H1 with the primary keyword ('Best IIT JEE Coaching in Kanpur'), H2s for each course/topic, and H3s for supporting details. This alone moved the site from page 10 to page 3 within 2 weeks.",
  },
  {
    num: "02",
    title: "LocalBusiness + EducationalOrganization Schema",
    body: "We implemented JSON-LD schema with @type: ['EducationalOrganization', 'LocalBusiness'], correct geo-coordinates, course listings with Course schema, and an AggregateRating. Google's rich result tester showed all green. This pushed them into the Local 3-Pack within 3 weeks.",
  },
  {
    num: "03",
    title: "Core Web Vitals Overhaul",
    body: "The original site scored 18/100 on PageSpeed. We migrated to Next.js, converted all images to WebP, implemented lazy loading, removed render-blocking scripts, and added immutable cache headers for static assets. Final score: 94/100 mobile, 99/100 desktop.",
  },
  {
    num: "04",
    title: "Location-Specific Content Architecture",
    body: "We created dedicated pages for each coaching branch location in Kanpur (Civil Lines, Kakadeo, Kidwai Nagar) with unique content, local schema, and internal links back to the main page. Each branch page ranked independently and funnelled authority to the main site.",
  },
  {
    num: "05",
    title: "Google Business Profile Alignment",
    body: "The GBP name, address, phone, and categories were inconsistent with the website. We aligned all NAP data, added 20+ photos, seeded Q&A with target keywords, and published GBP posts weekly. The listing moved into the 3-Pack within 30 days.",
  },
  {
    num: "06",
    title: "Internal Linking & Crawl Architecture",
    body: "We mapped every page's relationship and built a hub-and-spoke internal linking structure: the main homepage linked to course pages, course pages linked to batch/fee pages, and every page linked back to the contact/enquiry page. Google crawled the entire site in one pass.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How We Ranked an IIT-JEE Coaching Institute #1 on Google — Full SEO Case Study",
    description: "The exact SEO strategy that moved Interface Classes from position 100+ to #1 on Google.",
    author: { "@type": "Organization", name: "Expecto Digital Agency", url: siteUrl },
    publisher: { "@type": "Organization", name: "Expecto Digital Agency", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    datePublished: "2025-07-10",
    dateModified: "2025-07-10",
    url: `${siteUrl}/blog/how-we-ranked-coaching-institute-1-on-google`,
    mainEntityOfPage: `${siteUrl}/blog/how-we-ranked-coaching-institute-1-on-google`,
  };

  return (
    <>
      <Script id="schema-article-casestudy" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Coaching Institute SEO Case Study", path: "/blog/how-we-ranked-coaching-institute-1-on-google" },
      ]} />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">
        <section className="pt-28 md:pt-36 pb-10 bg-[#0D0D0D]">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.18em] border border-white/15 px-2.5 py-1">SEO Case Study</span>
              <span className="font-montserrat text-[0.625rem] text-white/30">July 2025 · 9 min read</span>
            </div>
            <h1 className="font-montserrat font-semibold text-[clamp(1.625rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mb-5">
              How We Ranked an IIT-JEE Coaching Institute #1 on Google — Full Case Study
            </h1>
            <p className="font-montserrat text-white/60 text-[1rem] leading-[1.8] max-w-2xl">
              Interface Classes, Kanpur · Position 100+ → #1 · Time taken: 6 weeks
            </p>
          </div>
        </section>

        <article className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] space-y-6">

            {/* Result callout */}
            <div className="grid grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] my-8">
              {[
                { v: "100+ → #1", l: "Google Position" },
                { v: "6 weeks",   l: "Time to Rank" },
                { v: "18 → 94",   l: "PageSpeed Score" },
              ].map((s) => (
                <div key={s.l} className="bg-[#111] px-5 py-6 text-center">
                  <p className="font-montserrat font-bold text-[1.5rem] text-white leading-none mb-1">{s.v}</p>
                  <p className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.12em]">{s.l}</p>
                </div>
              ))}
            </div>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              The problem
            </h2>
            <p>
              Interface Classes is a well-established IIT-JEE and NEET coaching institute in Kanpur. They had a website — but it was slow, built on an old template, had no proper SEO structure, and ranked nowhere for any of their target keywords. Competitors with weaker reputations but better SEO were showing up first.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              The 6-step system we used
            </h2>
            <div className="space-y-0 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {steps.map((step) => (
                <div key={step.num} className="grid grid-cols-12 gap-4 py-6">
                  <div className="col-span-1">
                    <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] tabular-nums">{step.num}</span>
                  </div>
                  <div className="col-span-11">
                    <h3 className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] mb-2">{step.title}</h3>
                    <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.8]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              The result — and why it matters for your coaching institute
            </h2>
            <p>
              Interface Classes now holds the #1 position for &ldquo;Best IIT JEE Coaching in Kanpur&rdquo; and several related long-tail keywords. Their enquiry volume increased significantly after ranking. The position has been maintained because the underlying architecture is solid — not a trick that Google will eventually undo.
            </p>
            <p>
              Every website Expecto builds — for coaching institutes in Ballia, Gorakhpur, Varanasi or anywhere in UP — uses this exact same 6-step architecture. It&apos;s not a bolt-on — it&apos;s built in from day one.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-14 border border-[var(--border)] p-8 bg-[var(--bg-subtle)]">
            <p className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-2">
              Want the same result for your coaching institute?
            </p>
            <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mb-5">
              We build SEO-first coaching websites starting ₹3,999 with 7-day delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 bg-[#111] text-white hover:bg-[#333] transition-colors">
                Get a Free Quote
              </Link>
              <Link href="/niche/coaching-institute" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-base)] transition-colors">
                Coaching Institute Websites
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-4">Related reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/website-development-cost-in-ballia" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Website Development Cost in Ballia UP (2025)</Link>
              <Link href="/cities/ballia" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Website Development in Ballia</Link>
              <Link href="/blog/best-cms-for-small-business-india" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Best CMS for Small Business in India (2025)</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
