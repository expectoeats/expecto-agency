"use client";

import React from "react";
import { motion } from "framer-motion";

const highlights = [
  { metric: "+40%", label: "Bookings", quote: "Expecto transformed our cafe's digital presence. Table bookings increased within the first month.", author: "Cafe Client", role: "Hospitality" },
  { metric: "7 Days", label: "Delivered", quote: "The appointment system is seamless. My clients love the new look and it's so much easier to manage.", author: "Salon Owner", role: "Beauty & Wellness" },
  { metric: "3×", label: "Enquiries", quote: "7-day delivery was real and the results are amazing. Best investment for our gym's online presence.", author: "Fitness Studio", role: "Health & Fitness" },
];

const stars = Array(5).fill(null);

export default function Testimonials() {
  return (
    <div className="py-4 bg-transparent">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-tag text-[var(--text-3)] mb-4 block"
            >
              ⭐ Endorsements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-semibold text-3xl sm:text-4xl text-[var(--text)] leading-tight"
            >
              Trusted by{" "}
              <span className="text-[var(--text)]">Founders Across India.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-white border border-[var(--border)] rounded-sm shrink-0">
            <div className="flex gap-0.5">
              {stars.map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[var(--text)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <div className="font-montserrat font-semibold text-sm text-[var(--text)]">5.0 / 5.0</div>
              <div className="font-montserrat text-[9px] text-[var(--text-3)] uppercase tracking-widest">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[var(--border)] p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            >
              {/* Metric */}
              <div className="flex items-start justify-between mb-5">
                <div className="text-3xl font-montserrat font-semibold text-[var(--text)] opacity-20">&ldquo;</div>
                <div className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-sm px-3 py-1.5">
                  <div className="font-montserrat font-semibold text-lg text-[var(--text)] leading-none">{t.metric}</div>
                  <div className="font-montserrat text-[9px] text-[var(--text-3)] uppercase tracking-widest">{t.label}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="font-montserrat text-sm leading-relaxed flex-1 mb-5 text-[var(--text-3)]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <span className="font-montserrat font-semibold text-xs text-[var(--text-2)]">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-montserrat font-medium text-sm text-[var(--text)]">{t.author}</p>
                  <p className="font-montserrat text-xs text-[var(--text-3)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
