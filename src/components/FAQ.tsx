"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Is pricing transparent or are there hidden charges?",
    a: "Your proposal includes a line-by-line breakdown of design, development, deployment, revisions, and add-ons. No hidden charges, ever.",
  },
  {
    q: "Who owns the domain and website after delivery?",
    a: "You do — completely. Every client receives a signed Code Ownership Certificate confirming 100% rights to source code, design assets, and database.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer monthly maintenance plans from ₹999/month. WhatsApp support is available 7 days a week.",
  },
  {
    q: "Will my website appear on Google?",
    a: "All our websites are built SEO-ready with proper meta tags, sitemaps, and Google Business Profile setup. Advanced SEO is available as an add-on.",
  },
  {
    q: "What if I need changes in the future?",
    a: "All projects include free revision rounds during build. Post-launch changes are available on maintenance plans or charged transparently per scope.",
  },
  {
    q: "How do I know the 7-day delivery is real?",
    a: "It's in writing. We provide a delivery commitment with cashback protection if qualifying projects are delayed.",
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
              🤔 Common Queries
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
