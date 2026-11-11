"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const realArticles = [
  {
    title: "How We Ranked a Coaching Institute #1 on Google in 45 Days",
    date: "Case Study",
    category: "SEO & Growth",
    image: "/work/interface-classes.webp",
    slug: "/blog/how-we-ranked-coaching-institute-1-on-google",
  },
  {
    title: "Website Development Cost in Ballia & UP: Complete 2026 Guide",
    date: "Pricing Guide",
    category: "Web Development",
    image: "/work/rama-coaching.webp",
    slug: "/blog/website-development-cost-in-ballia",
  },
  {
    title: "Best CMS for Small Businesses in India: WordPress vs Next.js vs Custom",
    date: "Tech Insight",
    category: "Engineering",
    image: "/work/kala-samputah.webp",
    slug: "/blog/best-cms-for-small-business-india",
  },
];

export default function CreativeDispatch() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="Blog & Insights">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 md:pb-16 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#8A919B] block mb-3">
              ( AGENCY INSIGHTS & CASE STUDIES )
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1E1E1E]">
              Articles & guides.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity py-2 px-4 rounded-full bg-[#F6F7F9] hover:bg-[#EEF0F6] border border-[#E5E7EB]"
          >
            <span>Visit all articles</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-12">
          {realArticles.map((art, i) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={art.slug} className="group block">
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#F6F7F9] border border-[#E5E7EB] mb-5">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8A919B] mb-2.5">
                  <span>{art.date}</span>
                  <span className="uppercase">{art.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1E1E1E] group-hover:opacity-60 transition-opacity leading-snug flex items-start justify-between gap-2">
                  <span>{art.title}</span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#1E1E1E]"
                  />
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
