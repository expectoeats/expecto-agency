"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Rocket } from "lucide-react";

const services = [
  "High-Performance Business Websites",
  "Conversion-Optimised Landing Pages",
  "Scalable E-commerce Architecture",
  "Industry-Specific Digital Assets",
  "On-Page SEO & Speed Engineering",
  "Cloud Deployment & Security",
];

export default function CityPageTemplate({ city }: { city: string }) {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 label-tag text-[var(--text-3)] mb-6">
            <MapPin size={14} strokeWidth={2} /> Regional Operations: {city}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-balance text-[var(--text)]">
            Dominate the Digital Frontier in{" "}
            <span className="text-[var(--text)]">{city}.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="font-montserrat text-base sm:text-xl text-[var(--text-3)] max-w-2xl mx-auto leading-relaxed mb-8">
            The premium web engineering team for {city}&apos;s most ambitious businesses. We ship world-class digital assets in 7 days or less.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-black text-base px-8 py-4 w-full sm:w-auto justify-center">
              Start Your Project <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <Link href="/pricing" className="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-24 border-t border-[var(--border)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="label-tag text-[var(--text-3)] mb-4 block">🛠️ Services</span>
                <h2 className="font-montserrat font-semibold text-3xl sm:text-4xl text-[var(--text)] leading-tight">
                  Elite Solutions for <span className="text-[var(--text)]">{city}.</span>
                </h2>
              </div>
              <div className="space-y-3">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 bg-white border border-[var(--border)] rounded-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform group"
                  >
                    <CheckCircle size={20} strokeWidth={2} className="text-[var(--text)] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-montserrat font-medium text-sm text-[var(--text)]">{svc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-[var(--text)] border border-[var(--border)] rounded-sm p-10 sm:p-14 flex flex-col justify-center overflow-hidden">
                <Rocket size={48} strokeWidth={1.5} className="text-white/30 mb-6" />
                <div className="font-montserrat font-semibold text-5xl sm:text-6xl text-white mb-3">7D</div>
                <h3 className="font-montserrat font-medium text-2xl text-white mb-4">Guaranteed Deployment.</h3>
                <p className="font-montserrat text-white/70 text-base leading-relaxed mb-8">
                  Our sprint methodology delivers high-performance digital products to {city} businesses with unmatched velocity.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 font-montserrat font-medium text-sm uppercase tracking-widest hover:text-white hover:gap-4 transition-all">
                  Start Your Sprint <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[var(--bg-subtle)] border-t border-[var(--border)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-white border border-[var(--border)] rounded-sm p-10 sm:p-16 text-center">
            <h2 className="font-montserrat font-semibold text-3xl sm:text-5xl text-[var(--text)] mb-5 leading-tight">
              Ready to <span className="text-[var(--text)]">Ascend?</span>
            </h2>
            <p className="font-montserrat text-[var(--text-3)] text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join the ranks of {city}&apos;s most technologically advanced businesses.
            </p>
            <Link href="/contact" className="btn-black text-base px-10 py-4">
              Start Your Project <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
