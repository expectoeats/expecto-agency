"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const realFaqs = [
  {
    q: "Is the 7-day delivery actually real?",
    a: "Yes — and it is guaranteed in writing. If we miss the deadline on a qualifying project, you receive a 20% cashback. We have delivered 50+ projects on time, with verified client proof across India.",
  },
  {
    q: "I hired a freelancer before who disappeared mid-project. How is this different?",
    a: "We understand that concern. As a registered digital agency, every project comes with a signed agreement, milestone-based payments (no full upfront lock-in), and a Code Ownership Certificate on delivery.",
  },
  {
    q: "Who owns the website and code after delivery?",
    a: "You do — 100%. Every client receives a signed Code Ownership Certificate confirming full rights to source code, design assets, and the database. No vendor lock-in, ever.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Yes. Every website we build is engineered SEO-ready — with proper meta tags, sitemaps, structured schema markup, and Google Business Profile indexing included from day one.",
  },
  {
    q: "How much of my time will this take? I am very busy.",
    a: "Very little. A quick 30-minute discovery call, assets shared conveniently over WhatsApp, and our engineering team handles the rest. You get clear milestone updates without tedious back-and-forth.",
  },
  {
    q: "Is the pricing transparent or are there hidden charges?",
    a: "Completely transparent. Websites start at Rs. 4,999. Your proposal includes a line-by-line breakdown of design, development, deployment, and revisions. No hidden surprises — ever.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="FAQ">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 md:pb-16 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#8A919B] block mb-3">
              ( FREQUENTLY ASKED QUESTIONS )
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1E1E1E]">
              FAQ.
            </h2>
          </div>

          <span className="font-mono text-xs text-[#8A919B]">
            ( 06 COMMON QUESTIONS )
          </span>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E5E7EB] pt-4">
          {realFaqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="py-6 md:py-8">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-lg md:text-2xl font-medium text-[#1E1E1E] group-hover:opacity-60 transition-opacity">
                    {item.q}
                  </span>

                  <div
                    className={`w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#E5E7EB] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#1E1E1E] text-white rotate-45 border-[#1E1E1E]" : "bg-[#F8F9FA] text-[#1E1E1E] group-hover:bg-[#EEF0F6]"
                    }`}
                  >
                    <Plus size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-[#5A6271] leading-relaxed pt-5 max-w-4xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
