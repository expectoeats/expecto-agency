"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", desc: "Across web, app & SaaS" },
  { value: 4,  suffix: "",  label: "Team Members",      desc: "Senior engineers only" },
  { value: 7,  suffix: "",  label: "Days to Delivery",  desc: "Average turnaround" },
  { value: 99, suffix: "%", label: "Client Satisfaction",desc: "Verified & retained" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); }, [inView, value, spring]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  return (
    <div className="py-4 bg-transparent">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="label-tag text-[var(--text-3)]">📊 By The Numbers</span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="border border-[var(--border)] bg-white p-5 sm:p-7 text-center hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="font-montserrat font-semibold text-3xl sm:text-5xl leading-none mb-1 text-[var(--text)]">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="font-montserrat font-medium text-xs uppercase tracking-widest text-[var(--text)] mt-2 mb-1">
                {stat.label}
              </p>
              <p className="font-montserrat text-xs leading-snug text-[var(--text-3)]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
