import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { siteUrl, getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best CMS for Small Business in India (2025) — Next.js vs WordPress vs Webflow | Expecto",
  description:
    "Which CMS gives Indian small businesses the best value in 2025? We compare Next.js, WordPress and Webflow on speed, cost, SEO, admin ease and long-term ROI.",
  keywords: [
    "best cms for small business india",
    "nextjs vs wordpress india",
    "best website platform india 2025",
    "wordpress vs webflow india",
    "best website builder india small business",
    "cms for coaching institute india",
  ],
  alternates: { canonical: `${siteUrl}/blog/best-cms-for-small-business-india` },
  openGraph: {
    title: "Best CMS for Small Business India (2025) — Next.js vs WordPress vs Webflow",
    description: "Speed, cost, SEO and admin ease compared for Indian small businesses. Which platform actually wins?",
    url: `${siteUrl}/blog/best-cms-for-small-business-india`,
    type: "article",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Best CMS for Small Business India 2025" }],
  },
};

const faqs = [
  { q: "Is WordPress good for small business websites in India?", a: "WordPress is fine for basic content sites, but it requires regular plugin updates, is slower than modern frameworks, and needs security maintenance. For Indian businesses that want speed, SEO performance and a custom admin panel, Next.js is a better long-term choice." },
  { q: "Is Next.js good for small businesses?", a: "Yes — especially if you're working with a developer (like Expecto) who builds custom admin panels so you can update content without code. Next.js sites score 95–100 on PageSpeed, rank better on Google, and have lower maintenance costs over time." },
  { q: "What is the best CMS for a coaching institute in India?", a: "For coaching institutes in India, we recommend a custom Next.js website with a tailored admin panel. This gives you complete control over course listings, batch management and content without the security risks and plugin bloat of WordPress." },
];

const comparison = [
  { feature: "PageSpeed Score",      nextjs: "95–100/100", wordpress: "40–70/100", webflow: "70–85/100" },
  { feature: "Monthly Cost",         nextjs: "₹0 (Vercel free)", wordpress: "₹500–2,000/mo", webflow: "₹1,500–4,000/mo" },
  { feature: "SEO Capability",       nextjs: "Excellent",  wordpress: "Good (with plugins)", webflow: "Good" },
  { feature: "Admin/Content Update", nextjs: "Custom panel",wordpress: "Easy (built-in)", webflow: "Easy (built-in)" },
  { feature: "Design Flexibility",   nextjs: "100% custom", wordpress: "Template-based", webflow: "Visual, limited" },
  { feature: "Security",             nextjs: "Excellent (no DB exposed)", wordpress: "Needs maintenance", webflow: "Good (hosted)" },
  { feature: "Long-term Cost",       nextjs: "Low",        wordpress: "Medium (plugins, hosting)", webflow: "High (subscription)" },
  { feature: "Best for",             nextjs: "Fast, SEO-first sites", wordpress: "Blogs, basic sites", webflow: "Design-heavy sites" },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best CMS for Small Business in India (2025) — Next.js vs WordPress vs Webflow",
    description: "Comparison of Next.js, WordPress and Webflow for Indian small businesses on speed, cost, SEO and admin ease.",
    author: { "@type": "Organization", name: "Expecto Digital Agency", url: siteUrl },
    publisher: { "@type": "Organization", name: "Expecto Digital Agency", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    datePublished: "2025-07-18",
    dateModified: "2025-07-18",
    url: `${siteUrl}/blog/best-cms-for-small-business-india`,
    mainEntityOfPage: `${siteUrl}/blog/best-cms-for-small-business-india`,
  };

  return (
    <>
      <Script id="schema-article-cms" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq-cms" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Best CMS for Small Business India", path: "/blog/best-cms-for-small-business-india" },
      ]} />

      <main className="bg-[var(--bg-base)] text-[var(--text)]">
        <section className="pt-28 md:pt-36 pb-10 bg-[#0D0D0D]">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.18em] border border-white/15 px-2.5 py-1">Web Development</span>
              <span className="font-montserrat text-[0.625rem] text-white/30">July 2025 · 8 min read</span>
            </div>
            <h1 className="font-montserrat font-semibold text-[clamp(1.625rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mb-5">
              Best CMS for Small Business Websites in India (2025) — Next.js vs WordPress vs Webflow
            </h1>
            <p className="font-montserrat text-white/60 text-[1rem] leading-[1.8] max-w-2xl">
              Which platform actually gives Indian small businesses the best ROI? We compare on the things that matter.
            </p>
          </div>
        </section>

        <article className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div className="font-montserrat text-[0.9375rem] text-[var(--text-2)] leading-[1.85] space-y-6">

            <p>
              If you&apos;re building a website for your small business in India in 2025, you&apos;ve probably heard three names: WordPress, Webflow, and Next.js. Each has its advocates. Here&apos;s an honest comparison from a team that has built on all three.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              Head-to-head comparison
            </h2>
            <div className="overflow-x-auto border border-[var(--border)]">
              <table className="w-full text-[0.8125rem]">
                <thead className="bg-[#111] text-white">
                  <tr>
                    <th className="font-montserrat font-semibold text-left px-4 py-3 text-[0.75rem] uppercase tracking-[0.1em]">Feature</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-3 text-[0.75rem] uppercase tracking-[0.1em]">Next.js</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-3 text-[0.75rem] uppercase tracking-[0.1em]">WordPress</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-3 text-[0.75rem] uppercase tracking-[0.1em]">Webflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-[var(--bg-base)]" : "bg-[var(--bg-subtle)]"}>
                      <td className="px-4 py-3 font-montserrat font-medium text-[var(--text)]">{row.feature}</td>
                      <td className="px-4 py-3 text-[var(--text-3)]">{row.nextjs}</td>
                      <td className="px-4 py-3 text-[var(--text-3)]">{row.wordpress}</td>
                      <td className="px-4 py-3 text-[var(--text-3)]">{row.webflow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              Why we build with Next.js (and why it matters for your rankings)
            </h2>
            <p>
              PageSpeed is now a direct Google ranking factor. A WordPress site with 5 plugins averages 45–60/100 on mobile. A Next.js site built by us averages 94–99/100. That difference translates directly into higher rankings — especially in competitive local searches in cities like Ballia, Varanasi, Gorakhpur and Kanpur where the gap between a well-built and poorly-built site is the entire difference between page 1 and page 3.
            </p>
            <p>
              The one valid criticism of Next.js for small businesses is: &ldquo;I can&apos;t update it myself.&rdquo; That&apos;s why every Expecto website includes a custom admin panel. You update your content — no code needed, no developer calls, no WordPress dashboard to learn.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              When WordPress is the right choice
            </h2>
            <p>
              If you need a high-volume blog, are already familiar with WordPress, or need a very specific plugin ecosystem, WordPress can work. Just budget for: a fast hosting plan (₹1,000–2,000/month minimum for decent speed), regular plugin updates, and a security plugin. The &ldquo;free&rdquo; cost of WordPress isn&apos;t actually free.
            </p>

            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-8 mb-2">
              Our verdict for Indian small businesses
            </h2>
            <p>
              For most Indian small businesses — coaching institutes, clinics, restaurants, traders, retail — Next.js with a custom admin panel is the better long-term choice. Faster, cheaper to run, better SEO, and you own 100% of the code.
            </p>

            {/* FAQ */}
            <h2 className="font-montserrat font-semibold text-[1.25rem] text-[var(--text)] mt-10 mb-4">Common questions</h2>
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

          <div className="mt-14 border border-[var(--border)] p-8 bg-[var(--bg-subtle)]">
            <p className="font-montserrat font-semibold text-[1rem] text-[var(--text)] mb-2">Want a Next.js website for your business?</p>
            <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] mb-5">Starting ₹1,999. 7-day delivery. Custom admin panel included in most packages.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 bg-[#111] text-white hover:bg-[#333] transition-colors">
                Get a Free Quote
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.875rem] px-5 py-2.5 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-base)] transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] uppercase tracking-[0.15em] mb-4">Related reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/website-development-cost-in-ballia" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ Website Development Cost in Ballia UP (2025)</Link>
              <Link href="/blog/how-we-ranked-coaching-institute-1-on-google" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ How We Ranked an IIT-JEE Coaching #1 on Google</Link>
              <Link href="/services" className="font-montserrat text-[0.875rem] text-[var(--text-3)] hover:text-[var(--text)] transition-colors">→ All Services</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
