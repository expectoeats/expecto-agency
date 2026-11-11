"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const realProjects = [
  {
    id: "01",
    name: "Rama Coaching Center",
    date: "10 DAYS",
    category: "Coaching ERP • Marksheet Engine • Mock Tests",
    image: "/work/rama-coaching.webp",
    link: "https://ramainstitutetech.com/",
    desc: "Complete coaching management platform with automated marksheet & certificate generation, mock test portal, and full CMS.",
  },
  {
    id: "02",
    name: "Interface Classes",
    date: "#1 RANK",
    category: "Website Redesign • Local SEO • CMS",
    image: "/work/interface-classes.webp",
    link: "/niche/coaching-institute",
    desc: "Kanpur coaching institute redesigned from the ground up. Now ranks #1 for relevant local searches on Google.",
  },
  {
    id: "03",
    name: "Kala Samputah",
    date: "LIVE STORE",
    category: "Indian Art & Painting • Custom E-Commerce • CMS",
    image: "/work/kala-samputah.webp",
    link: "https://kalasamputah.com/",
    desc: "Curated Indian art and painting selling platform with bespoke gallery layout, high-res canvas previews, and seamless buyer checkout.",
  },
];

export default function SelectedWork() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="Selected Work">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 md:pb-16 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#8A919B] block mb-3">
              ( SELECTED WORK )
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1E1E1E]">
              Latest Projects.
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-[#8A919B]">
              ( 50+ DELIVERED )
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity py-2 px-4 rounded-full bg-[#F6F7F9] hover:bg-[#EEF0F6] border border-[#E5E7EB]"
            >
              <span>Build your project</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-12">
          {realProjects.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block flex flex-col"
              >
                {/* Visual Image Container — 9:16 portrait matches exact design assets */}
                <div className="relative aspect-[9/16] w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-[#F6F7F9] border border-[#E5E7EB] mb-5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#1E1E1E] border border-white/40 shadow-sm">
                    {p.date}
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-baseline justify-between pt-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1E1E1E] group-hover:opacity-60 transition-opacity flex items-center gap-2">
                    {p.name}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#1E1E1E]"
                    />
                  </h3>
                  <span className="font-mono text-xs text-[#8A919B]">
                    {p.id}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#5A6271] mt-1.5 line-clamp-1">
                  {p.category}
                </p>

                <p className="text-sm text-[#5A6271] mt-2 line-clamp-2 leading-relaxed">
                  {p.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
