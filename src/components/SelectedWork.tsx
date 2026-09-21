"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    logo: "https://ramainstitutetech.com/logo.jpeg",
    name: "Rama Coaching Center",
    tags: ["Coaching ERP", "Marksheet Engine", "Mock Tests"],
    desc: "Complete coaching management platform with automated marksheet & certificate generation, mock test portal, and full CMS. Deployed in 10 days.",
    stat: "10 Days",
    statLabel: "Turnaround Time",
    bgImage: "/work/rama-banner.png",
    href: "https://ramainstitutetech.com/",
    category: "Education / Fatehpur UP",
  },
  {
    logo: "https://interfaceclasses.com/assets/logo-main.jpeg",
    name: "Interface Classes",
    tags: ["Website Redesign", "SEO", "CMS"],
    desc: "Coaching institute redesigned from the ground up. Now ranks #1 for relevant local searches in Kanpur.",
    stat: "#1",
    statLabel: "Local Search Rank",
    bgImage: "/work/coaching/expecto-demo-coaching.webp",
    href: "/niche/coaching-institute",
    category: "Education / Kanpur",
  },
  {
    logo: "https://www.swapzy.store/_next/image?url=%2Fswapzy-logo.png&w=64&q=75",
    name: "Swapzy",
    tags: ["Marketplace", "Web Application"],
    desc: "Live student marketplace built for Parul University, Vadodara. Real product, real users.",
    stat: "Live",
    statLabel: "Platform Status",
    bgImage: "/work/swapzy.webp",
    href: "https://swapzy.store/",
    category: "Commerce / Vadodara",
  },
];

export default function SelectedWork() {
  return (
    <section aria-label="Selected Work" className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14">

        {/* Header row */}
        <div className="flex items-center gap-5 mb-8">
          <span className="label-tag">Selected Work</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.12em]">
            3 projects · Verified
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative bg-white border-2 border-[var(--text)] overflow-hidden block
                         shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#111111]
                         hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
            >
              {/* Background project screenshot — faint */}
              <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none">
                <Image
                  src={p.bgImage}
                  alt=""
                  fill
                  className="object-cover object-left opacity-[0.08]"
                  sizes="20vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-7 md:p-8">

                {/* Top row: logo + stat */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center h-10">
                    <div className="bg-white p-2 rounded-sm border border-[var(--border)]">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={140}
                        height={36}
                        className="h-9 w-auto object-contain object-left"
                        style={{ width: "auto" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-right shrink-0 flex flex-col items-end gap-1">
                    {/* Google SEO icon — only for the #1 ranked project */}
                    {p.stat === "#1" && (
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-[var(--border)] flex items-center justify-center bg-white mb-1">
                        <Image
                          src="https://png.pngtree.com/png-vector/20230817/ourlarge/pngtree-google-seo-icon-vector-png-image_9183334.png"
                          alt="Google SEO ranking"
                          width={44}
                          height={44}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <p className="font-montserrat font-bold text-[2rem] leading-none text-[var(--text)]">{p.stat}</p>
                    <p className="font-montserrat text-[0.625rem] text-[var(--text-3)] uppercase tracking-[0.12em]">{p.statLabel}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--border)] mb-5" />

                {/* Name + category */}
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <p className="font-montserrat font-semibold text-[1rem] text-[var(--text)]">{p.name}</p>
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] shrink-0">{p.category}</span>
                </div>

                {/* Desc */}
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-2)] leading-[1.65] mb-5 max-w-[340px]">
                  {p.desc}
                </p>

                {/* Tags + arrow */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-montserrat text-[0.625rem] text-[var(--text)] uppercase tracking-[0.08em] border border-[var(--text)] px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="shrink-0 text-[var(--text-3)] group-hover:text-[var(--text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
