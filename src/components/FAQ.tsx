"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Is the 7-day delivery actually real?",
    a: "Yes — and it is guaranteed in writing. If we miss the deadline on a qualifying project, you receive a 20% cashback. We have delivered 50+ projects on time, with proof to back it up.",
  },
  {
    q: "I hired a freelancer before who disappeared mid-project. How is this different?",
    a: "We understand that concern. Every project comes with a signed agreement, milestone-based payments (no large upfront amounts), and a Code Ownership Certificate on delivery. You are never locked in — the code is yours from day one.",
  },
  {
    q: "Who owns the website and code after delivery?",
    a: "You do — 100%. Every client receives a signed Code Ownership Certificate confirming full rights to source code, design assets, and the database. No lock-in, ever.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Yes. Every website we build is SEO-ready — with proper meta tags, sitemap, schema markup, and Google Business Profile setup included. Advanced SEO is available as an add-on.",
  },
  {
    q: "How much of my time will this take? I am very busy.",
    a: "Very little. A 30-minute discovery call, content shared over WhatsApp — and we handle the rest. You get regular progress updates with no lengthy meetings or back-and-forth.",
  },
  {
    q: "Is the pricing transparent or are there hidden charges?",
    a: "Completely transparent. Your proposal includes a line-by-line breakdown of design, development, deployment, revisions, and any add-ons. No hidden charges — ever. A free quote is delivered within 24 hours.",
  },
];

function AccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`border border-[var(--border)] overflow-hidden transition-all duration-300 bg-white ${isOpen ? "border-[var(--text)]" : "hover:border-[var(--text-2)]"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text)]"
      >
        <span className={`font-montserrat font-medium text-base sm:text-lg leading-snug ${isOpen ? "text-[var(--text)]" : "text-[var(--text)]"}`}>
          {q}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-sm border border-[var(--border)] flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[var(--text)] text-white border-[var(--text)]" : "bg-[var(--bg-subtle)] text-[var(--text-3)]"}`}>
          {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-[var(--border)] font-montserrat text-[var(--text-3)] text-sm sm:text-base leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-4 bg-transparent">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-20">

          {/* Left sticky column */}
          <div className="lg:sticky lg:top-28 h-fit space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-tag text-[var(--text-3)] block"
            >
              <HelpCircle size={13} className="inline-block mr-1.5 -mt-0.5" />
              Common Queries
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-semibold text-3xl sm:text-4xl text-[var(--text)] leading-tight"
            >
              Frequently Asked{" "}
              <span className="text-[var(--text)]">Questions.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-montserrat text-[var(--text-3)] text-base leading-relaxed"
            >
              Essential insights for Indian business owners scaling their digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[var(--border)] rounded-sm p-5"
            >
              <h3 className="font-montserrat font-medium text-base text-[var(--text)] mb-3">Still have questions?</h3>
              <Link
                href="https://wa.me/918707224376"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-sm font-montserrat font-medium text-sm hover:-translate-y-0.5 transition-transform"
              >
                <MessageSquare size={18} strokeWidth={2} />
                WhatsApp Us →
              </Link>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
