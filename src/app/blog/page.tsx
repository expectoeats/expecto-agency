import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Website Development Tips, SEO & Digital Growth | Expecto Digital Agency",
  description:
    "Practical guides on website development costs, local SEO, and digital growth for Indian businesses — by Expecto Digital Agency, Ballia UP.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Blog | Expecto Digital Agency",
    description: "Website development tips, SEO guides and digital growth insights for Indian businesses.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

const posts = [
  {
    slug: "website-development-cost-in-ballia",
    title: "Website Development Cost in Ballia, UP (2025) — Complete Pricing Guide",
    excerpt: "Exact pricing for every type of website in Ballia — from a ₹1,999 business site to a ₹50,000 custom CRM. No fluff, just numbers.",
    date: "2025-07-01",
    readTime: "6 min read",
    tag: "Pricing",
  },
  {
    slug: "how-we-ranked-coaching-institute-1-on-google",
    title: "How We Ranked an IIT-JEE Coaching Institute #1 on Google — Full Case Study",
    excerpt: "A behind-the-scenes breakdown of the exact SEO architecture that moved Interface Classes from position 100+ to #1 on Google for 'Best IIT JEE Coaching in Kanpur'.",
    date: "2025-07-10",
    readTime: "9 min read",
    tag: "SEO Case Study",
  },
  {
    slug: "best-cms-for-small-business-india",
    title: "Best CMS for Small Business Websites in India (2025) — Next.js vs WordPress vs Webflow",
    excerpt: "Which platform actually gives Indian small businesses the best ROI? We compare speed, cost, SEO, and admin ease across the top 3 options.",
    date: "2025-07-18",
    readTime: "8 min read",
    tag: "Web Development",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <main className="bg-[var(--bg-base)] text-[var(--text)]">

        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20 bg-[#0D0D0D]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <span className="font-montserrat text-[0.625rem] text-white/40 uppercase tracking-[0.2em] block mb-4">
              Expecto Digital Agency · Blog
            </span>
            <h1 className="font-montserrat font-semibold text-[clamp(1.875rem,4vw,3rem)] leading-[1.12] tracking-tight text-white max-w-3xl mb-4">
              Website development tips & SEO guides for Indian businesses.
            </h1>
            <p className="font-montserrat text-white/60 text-[1rem] leading-[1.8] max-w-xl">
              Practical, no-fluff articles on building websites, ranking on Google, and growing your business online — from our team in Ballia, UP.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 hover:bg-[var(--bg-subtle)] px-2 -mx-2 transition-colors"
              >
                <div className="md:col-span-2 flex items-start gap-3 md:flex-col md:gap-1">
                  <span className="font-montserrat text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.15em] border border-[var(--border)] px-2.5 py-1 shrink-0">
                    {post.tag}
                  </span>
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] md:mt-1">{post.date}</span>
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-montserrat font-semibold text-[1rem] md:text-[1.125rem] text-[var(--text)] leading-[1.3] mb-2 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <span className="inline-flex items-center gap-1.5 font-montserrat text-[0.8125rem] text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors">
                    Read <ArrowRight size={13} strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
