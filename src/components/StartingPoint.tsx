"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const options = [
  {
    num: "01",
    heading: "I need a new website",
    desc: "For businesses starting online or replacing an existing presence that no longer works.",
    cta: "Start with a Website",
    href: "/contact?type=new-website",
    bgImage: "/work/school/kindergarten.webp",
    bgAlt: "Kindergarten website design",
  },
  {
    num: "02",
    heading: "I have a website that needs work",
    desc: "Redesign, speed, SEO, mobile issues or low conversion — we diagnose and fix the real problem.",
    cta: "Redesign My Website",
    href: "/contact?type=redesign",
    bgImage: "/work/coaching/expecto-demo-coaching.webp",
    bgAlt: "Coaching website redesign",
  },
  {
    num: "03",
    heading: "I need software",
    desc: "CRM, ERP, marketplace, dashboard or a custom application built around your actual workflow.",
    cta: "Discuss a Product",
    href: "/contact?type=software",
    bgImage: "/work/edu-crm.webp",
    bgAlt: "Education CRM software",
  },
];

export default function StartingPoint() {
  return (
    <section aria-label="Where to start" className="bg-[var(--bg-subtle)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-6">
            <span className="label-tag block mb-6">Where should we start?</span>
            <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
              Tell us where you are.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {options.map((opt) => (
            <div key={opt.num} className="relative bg-white overflow-hidden flex flex-col group">

              {/* Background image — bottom portion of card */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none select-none">
                <Image
                  src={opt.bgImage}
                  alt={opt.bgAlt}
                  fill
                  className="object-cover object-top opacity-[0.09]"
                  sizes="33vw"
                  loading="lazy"
                />
                {/* Fade from top */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/20" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col flex-1">
                <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums block mb-6">{opt.num}</span>
                <h3 className="font-montserrat font-semibold text-[1.0625rem] text-[var(--text)] leading-[1.3] mb-4">{opt.heading}</h3>
                <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7] flex-1 mb-10">{opt.desc}</p>
                <Link
                  href={opt.href}
                  className="inline-flex items-center gap-2 font-montserrat font-medium text-[0.8125rem] text-[var(--text)] border-b border-[var(--text)] pb-0.5 w-fit hover:gap-3 transition-all duration-150"
                >
                  {opt.cta} <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
