"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const realTestimonials = [
  {
    quote:
      "Expecto ne hamare cafe ki digital presence completely transform kar di. Pehle mahine mein hi table bookings 40% badh gayi. 7-din mein website ready thi — exactly jaise promise kiya tha.",
    author: "Arjun Sharma",
    role: "Owner",
    company: "Pause Cafe — Gorakhpur",
    metric: "+40% Bookings",
  },
  {
    quote:
      "Appointment system seamless hai. Clients naye look se bohot khush hain aur manage karna bhi aasaan ho gaya. Code ownership certificate milna — isse real trust build hua.",
    author: "Priya Srivastava",
    role: "Founder",
    company: "GlowUp Salon — Lucknow",
    metric: "7 Days Delivery",
  },
  {
    quote:
      "7-din ki delivery real thi. Gym ke liye best investment raha. Enquiries 3 guna ho gayi pehle 2 mahine mein. Highly recommend karta hoon.",
    author: "Rohit Verma",
    role: "Director",
    company: "FitZone Gym — Varanasi",
    metric: "3× Enquiries",
  },
  {
    quote:
      "Rama Coaching Center ka complete automated marksheet & mock test portal 10 dino me deliver kiya. Backend bohot reliable hai aur students ka feedback superb raha.",
    author: "Er. S. Rama",
    role: "Director",
    company: "Rama Coaching Center — UP",
    metric: "10 Days Turnaround",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? realTestimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === realTestimonials.length - 1 ? 0 : c + 1));
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="Testimonials">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 md:pb-16 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#8A919B] block mb-3">
              ( CLIENT ENDORSEMENTS )
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1E1E1E]">
              Real results. Real businesses across India.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#E5E7EB] bg-[#F8F9FA] hover:bg-[#EEF0F6] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} className="text-[#1E1E1E]" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-[#E5E7EB] bg-[#F8F9FA] hover:bg-[#EEF0F6] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight size={20} className="text-[#1E1E1E]" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative pt-12 md:pt-16 min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="max-w-4xl">
                <Quote size={40} className="text-[#D0D8E4] mb-8" />
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.3] font-normal text-[#1E1E1E] tracking-tight">
                  “{realTestimonials[current].quote}”
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 mt-10 pt-8 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center font-bold text-sm font-mono">
                      {realTestimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#1E1E1E]">
                        {realTestimonials[current].author}
                      </h4>
                      <p className="font-mono text-xs text-[#5A6271] mt-0.5">
                        {realTestimonials[current].role} • {realTestimonials[current].company}
                      </p>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-mono font-medium text-[#1E1E1E]">
                    {realTestimonials[current].metric}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center gap-2 mt-8">
          {realTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? "w-8 bg-[#1E1E1E]" : "w-2 bg-[#D0D8E4]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
