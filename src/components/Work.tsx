"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCardPreview } from "./ProjectCardPreview";

const featuredProjects = [
  {
    title: "Expecto Eats",
    url: "https://expecto-sepia.vercel.app/",
    tag: "SaaS • Food Tech",
    desc: "Cinematic campus food ordering platform with real-time tracking.",
    color: "#FFF3E0",
    accent: "#fb923c",
    category: "food_ordering" as const,
    localImage: "/work/expecto-eats.webp",
  },
  {
    title: "Swapzy",
    url: "https://swapzy.store/",
    tag: "SaaS • Marketplace",
    desc: "Verified peer-to-peer campus marketplace with smart pricing.",
    color: "#E8F5E9",
    accent: "#34d399",
    category: "marketplace" as const,
    localImage: "/work/swapzy.webp",
  },
  {
    title: "Expecto Demo Cafe",
    url: "https://expecto-cafe-demo.vercel.app/",
    tag: "Template • Cafe",
    desc: "Elegant cafe & restaurant website with digital menu.",
    color: "#FFF8E1",
    accent: "#fbbf24",
    category: "cafe" as const,
    localImage: "/work/expecto-demo-cafe.webp",
  },
  {
    title: "Expecto School Demo",
    url: "https://expecto-school-demo.vercel.app/",
    tag: "Template • Education",
    desc: "Modern school website with online admission & gallery.",
    color: "#EDE9FE",
    accent: "#818cf8",
    category: "school" as const,
    localImage: "/work/school/school-demo.webp",
  },
];

export default function Work() {
  return (
    <div className="py-4 bg-transparent">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-tag text-[var(--text-3)] mb-4 block"
            >
              🎨 Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-semibold text-3xl sm:text-4xl text-[var(--text)] leading-tight"
            >
              Proprietary{" "}
              <span className="text-[var(--text)]">Engines.</span>
            </motion.h2>
          </div>
          <Link href="/work" className="btn-outline text-sm px-6 py-3 shrink-0">
            View Portfolio <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* Projects layout: 1 big + 3 small */}
        <div className="flex flex-col gap-4">
          {/* Big featured card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-sm overflow-hidden border border-[var(--border)] bg-white"
            style={{ height: 400 }}
          >
            <ProjectCardPreview
              name={featuredProjects[0].title}
              url={featuredProjects[0].url}
              category={featuredProjects[0].category}
              colorScheme={featuredProjects[0].color}
              accentColor={featuredProjects[0].accent}
              height="100%"
              localImage={featuredProjects[0].localImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-4">
              <div>
                <span className="inline-block bg-white/10 border border-white/20 text-white font-montserrat font-medium text-[10px] uppercase tracking-widest rounded-sm px-3 py-1 mb-2">
                  {featuredProjects[0].tag}
                </span>
                <h3 className="font-montserrat font-semibold text-xl sm:text-2xl text-white">{featuredProjects[0].title}</h3>
                <p className="font-montserrat text-sm text-white/70 max-w-sm mt-1">{featuredProjects[0].desc}</p>
              </div>
              <Link
                href={featuredProjects[0].url}
                target="_blank"
                className="shrink-0 w-11 h-11 rounded-sm bg-white border border-[var(--border)] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
              >
                <ArrowUpRight size={18} strokeWidth={2} className="text-[var(--text)]" />
              </Link>
            </div>
            <div className="absolute top-4 left-4">
              <span className="font-montserrat font-medium text-[10px] uppercase tracking-widest bg-white/90 border border-[var(--border)] text-[var(--text-3)] px-2.5 py-1 rounded-sm">
                01 / {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* 3 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredProjects.slice(1).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.08 }}
                className="group relative rounded-sm overflow-hidden border border-[var(--border)] bg-white"
                style={{ height: 240 }}
              >
                <ProjectCardPreview
                  name={project.title}
                  url={project.url}
                  category={project.category}
                  colorScheme={project.color}
                  accentColor={project.accent}
                  height="100%"
                  localImage={project.localImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                  <div>
                    <span className="inline-block bg-white/10 border border-white/20 text-white font-montserrat font-medium text-[9px] uppercase tracking-widest rounded-sm px-2.5 py-0.5 mb-1">
                      {project.tag}
                    </span>
                    <h3 className="font-montserrat font-semibold text-base text-white">{project.title}</h3>
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="shrink-0 w-9 h-9 rounded-sm bg-white border border-[var(--border)] flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <ArrowUpRight size={14} strokeWidth={2} className="text-[var(--text)]" />
                  </Link>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="font-montserrat font-medium text-[9px] uppercase tracking-widest bg-white/90 border border-[var(--border)] text-[var(--text-3)] px-2 py-0.5 rounded-sm">
                    0{i + 2} / {String(featuredProjects.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
