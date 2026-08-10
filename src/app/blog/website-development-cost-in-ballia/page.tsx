import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { siteUrl, getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development Cost in Ballia UP (2025) — Complete Pricing Guide | Expecto",
  description:
    "Exact cost of website development in Ballia, Uttar Pradesh in 2025. Business websites from ₹1,999, e-commerce from ₹7,999, CRM from ₹9,999. What affects pricing and how to get the best value.",
  keywords: [
    "website development cost in ballia",
    "website banane ka kharcha ballia",
    "website price ballia up",
    "how much does a website cost in ballia",
    "affordable website development ballia",
    "website development charges ballia",
  ],
  alternates: { canonical: `${siteUrl}/blog/website-development-cost-in-ballia` },
  openGraph: {
    title: "Website Development Cost in Ballia UP (2025) — Expecto",
    description: "Business websites from ₹1,999, e-commerce from ₹7,999. Complete pricing breakdown for Ballia.",
    url: `${siteUrl}/blog/website-development-cost-in-ballia`,
    type: "article",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development Cost Ballia 2025" }],
  },
};

const faqs = [
  { q: "Website development in Ballia mein kitna kharcha aata hai?", a: "Ballia mein ek basic business website ₹1,999 se shuru hoti hai. Growth package ₹3,999 mein milta hai aur custom CRM ya e-commerce store ₹7,999 se ₹25,000+ tak ka hota hai. Sabhi packages mein design, development, deployment aur on-page SEO shamil hai." },
  { q: "What is the cost of a coaching institute website in Ballia?", a: "A coaching institute website in Ballia costs between ₹3,999 and ₹8,999 depending on features. This includes course listing pages, batch management, WhatsApp CTAs, enquiry forms and local SEO. Expecto delivers coaching websites in 7 days." },
  { q: "Is ₹1,999 website worth it?", a: "Yes, if your needs are simple — up to 5 pages, contact form, WhatsApp button and basic SEO. For businesses that need a blog, admin panel or more than 5 pages, the ₹3,999 Growth package is the better value." },
];

const pricingRows = [
  { type: "Basic Business Website",     price: "₹1,999",        delivery: "7 days",    features: "5 pages, SEO, contact form, WhatsApp button" },
  { type: "Growth Business Website",    price: "₹3,999",        delivery: "7 days",    features: "10 pages, blog, Google Analytics, schema markup" },
  { type: "Portfolio Website",          price: "₹2,499",        delivery: "7 days",    features: "Custom UI, SEO, gallery, contact form" },
  { type: "Coaching Institute Website", price: "₹3,999–₹7,999", delivery: "7–10 days", features: "Course management, admissions CTA, local SEO" },
  { type: "Hospital / Clinic Website",  price: "₹3,999–₹6,999", delivery: "7–10 days", features: "Appointment booking, doctor profiles, local SEO" },
  { type: "E-commerce Store",           price: "₹7,999+",       delivery: "14 days",   features: "Product catalog, UPI/card payment, order management" },
  { type: "Custom CRM System",          price: "₹9,999+",       delivery: "21 days",   features: "Lead management, admin panel, reports, WhatsApp integration" },
  { type: "Full Custom Web App",        price: "₹25,000+",      delivery: "30+ days",  features: "Full-stack, database, auth, API, admin panel" },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Website Development Cost in Ballia UP (2025) — Complete Pricing Guide",
    description: "Complete pricing guide for website development in Ballia, Uttar Pradesh — from ₹1,999 business websites to custom CRM systems.",
    author: { "@type": "Organization", name: "Expecto Digital Agency", url: siteUrl },
    publisher: { "@type": "Organization", name: "Expecto Digital Agency", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    datePublished: "2025-07-01",
    dateModified: "2025-07-01",
    url: `${siteUrl}/blog/website-development-cost-in-ballia`,
    mainEntityOfPage: `${siteUrl}/blog/website-development-cost-in-ballia`,
  };

  return (
    <>
      <Script id="schema-article-pricing" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq-pricing" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Website Development Cost Ballia", path: "/blog/website-development-cost-in-ballia" },
      ]} />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">
        <section className="pt-28 md:pt-36 pb-10 bg-[#0D0D0D]">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.18em] border border-white/15 px-2.5 py-1">Pricing</span>
              <span className="font-montserrat text-[0.625rem] text-white/30">July 2025 · 6 min read</span>
            </div>
            <h1 className="font-montserrat font-semibold text-[clamp(1.625rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mb-5">
              Website Development Cost in Ballia, UP (2025) — Complete Pricing Guide
            </h1>
            <p className="font-montserrat text-white/60 text-[1rem] leading-[1.8] max-w-2xl">
              Exact numbers for every type of website. No vague &ldquo;it depends&rdquo; — just real prices from a Ballia-based agency that has built 50+ websites.
            </p>
          </div>
        </section>

        <article className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] space-y-6">

            <p>
              If you&apos;ve been searching for the cost of website development in Ballia and getting either very vague answers or wildly different quotes, this guide is for you. We&apos;re Expecto Digital Agency — based in Ballia, Uttar Pradesh — and we&apos;ve built 50+ websites for businesses across Eastern UP. Here are our exact prices and what drives them.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              Website Development Pricing in Ballia — Quick Reference Table
            </h2>
            <div className="overflow-x-auto border border-[var(--border)]">
              <table className="w-full text-[0.8125rem]">
                <thead className="bg-[#111] text-white">
                  <tr>
                    {["Website Type", "Price", "Delivery", "What's Included"].map((h) => (
                      <th key={h} className="font-montserrat font-semibold text-left px-4 py-3 text-[0.75rem] uppercase tracking-[0.1em]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {pricingRows.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-[var(--bg-base)]" : "bg-[var(--bg-subtle)]"}>
                      <td className="px-4 py-3 font-montserrat font-medium text-[var(--text)]">{row.type}</td>
                      <td className="px-4 py-3 font-montserrat font-bold text-[var(--text)] whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-[var(--text-3)] whitespace-nowrap">{row.delivery}</td>
                      <td className="px-4 py-3 text-[var(--text-3)]">{row.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              What affects the cost of a website in Ballia?
            </h2>
            <p>Three things move the price the most:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                { t: "Number of pages", b: "A 5-page site is faster to build than a 20-page site. More pages = more content, more design, more SEO work." },
                { t: "Custom vs template", b: "A template-based site is faster and cheaper. A custom-designed site built from scratch looks more credible and converts better but costs more." },
                { t: "Admin panel", b: "If you want to update your own content without calling a developer, you need a custom admin panel. This adds ₹2,000–₹5,000 to the base price but saves you money long-term." },
              ].map((item) => (
                <li key={item.t} className="flex gap-3">
                  <span className="font-semibold text-[var(--text)] shrink-0 mt-0.5">→</span>
                  <span><strong className="text-[var(--text)]">{item.t}:</strong> {item.b}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              Why is Expecto's ₹1,999 website not a scam?
            </h2>
            <p>
              Fair question. The ₹1,999 package covers a 5-page business website — Home, About, Services, Gallery, Contact — with custom design (not a pre-built theme), on-page SEO, a WhatsApp button, contact form, and deployment on your domain. It&apos;s fast because we&apos;ve built a repeatable process. It doesn&apos;t include a blog, admin panel, or more than 5 pages. If you need those, the ₹3,999 Growth package is the right choice.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              How much does a coaching institute website cost in Ballia?
            </h2>
            <p>
              Coaching institute websites are our specialty. A well-built coaching website needs course/batch listing pages, an enquiry form, WhatsApp CTAs, faculty profiles, and strong local SEO so it ranks for searches like &ldquo;best coaching in Ballia&rdquo;. Our coaching websites start at ₹3,999 and include all of this. We&apos;ve taken coaching clients to #1 on Google — Interface Classes in Kanpur is our most visible example.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              What about ongoing costs after the website is built?
            </h2>
            <p>
              The one-time development cost is what we charge. After that:
            </p>
            <ul className="space-y-1.5">
              {[
                "Domain: ~₹800–1,200/year (you register this yourself or we handle it)",
                "Hosting: ₹0 if deployed on Vercel free tier (sufficient for most small businesses)",
                "SSL certificate: Free via Let's Encrypt",
                "Maintenance: First month is free. After that, small updates are pay-per-change",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="text-[var(--text-3)] shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-10 mb-4">
              Common questions about website costs in Ballia
            </h2>
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="font-montserrat font-semibold text-[0.9375rem] text-[var(--text)] cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-[var(--text-3)] group-open:rotate-45 transition-transform shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.8] mt-3">{faq.a}</p>
                </details>
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="mt-14 border border-[var(--border)] p-8 bg-[var(--bg-subtle)]">
            <p className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-2">
              Ready to get your website built in Ballia?
            </p>
            <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mb-5">
              Starting ₹1,999. 7-day delivery. Written guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 bg-[#111] text-white hover:bg-[#333] transition-colors">
                Get a Free Quote
              </Link>
              <Link href="/website-development-ballia" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-base)] transition-colors">
                See All Packages
              </Link>
            </div>
          </div>

          {/* Related */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-4">Related reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/how-we-ranked-coaching-institute-1-on-google" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ How We Ranked an IIT-JEE Coaching Institute #1 on Google</Link>
              <Link href="/cities/ballia" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Website Development in Ballia — Full Service Page</Link>
              <Link href="/pricing" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Full Pricing Page</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
