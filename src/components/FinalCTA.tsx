"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const thumbs = [
  { src: "/work/coaching/expecto-demo-coaching.webp", alt: "NEET Coaching Website" },
  { src: "/work/swapzy.webp",                         alt: "Swapzy" },
  { src: "/work/edu-crm.webp",                        alt: "Education CRM" },
  { src: "/work/real-estate-crm.webp",                alt: "Real Estate CRM" },
  { src: "/work/school/kindergarten.webp",            alt: "Kindergarten Website" },
  { src: "/work/school/kindergarten2.webp",           alt: "Kindergarten Website 02" },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#111111] relative overflow-hidden" aria-label="Final call to action">
      {/* Pattern texture — very subtle */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/pattern.webp"
          alt=""
          fill
          className="object-cover object-center opacity-[0.06]"
          sizes="100vw"
        />
      </div>
      <div className="max-w-[1360px] mx-auto px-8 md:px-12 pt-24 md:pt-32 pb-16 md:pb-20">

        <div className="max-w-[860px] mb-16">
          <p className="font-montserrat font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mb-10">
            Ready to get your website <span className="shimmer-text-light">live in 7 days</span>?
          </p>
          <p className="font-montserrat text-[1rem] text-white/50 leading-[1.75] max-w-[440px] mb-10">
            100+ Indian businesses served. Aapki baari ab hai.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link href="https://wa.me/918707224376"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#111111] font-montserrat font-medium text-[0.875rem] px-7 py-4 hover:bg-white/90 transition-colors duration-150">
              WhatsApp Karo — Free Consultation <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Project proof strip */}
        <div className="border-t border-white/10 pt-10">
          <p className="font-montserrat text-[0.6875rem] text-white/30 uppercase tracking-[0.15em] mb-5">Recent builds</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {thumbs.map((t) => (
              <div key={t.alt} className="relative aspect-[16/10] overflow-hidden border border-white/15 ring-1 ring-white/10">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover object-top opacity-60 hover:opacity-90 transition-opacity duration-200"
                  sizes="(max-width:640px) 33vw, 16vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
