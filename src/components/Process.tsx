"use client";

import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Start with the problem",
    desc: "What is the business trying to improve? We ask the questions that get to the real objective — not just 'we need a website' but why, for whom, and what success looks like.",
    image: "/work/coaching/expecto-demo-coaching.webp",
    imageAlt: "Understanding the business problem",
  },
  {
    num: "02",
    title: "Find the right structure",
    desc: "What pages, flows, features and systems are actually necessary? We map the content architecture before touching design. Everything that doesn't serve the user gets removed.",
    image: "/work/realestate/realestate-demo.webp",
    imageAlt: "Information architecture and structure",
  },
  {
    num: "03",
    title: "Build the experience",
    desc: "Design and development happen together. Typography, spacing, hierarchy and interaction are considered alongside the technical implementation — not as a separate phase.",
    image: "/work/edu-crm.webp",
    imageAlt: "Design and development",
  },
  {
    num: "04",
    title: "Make it usable",
    desc: "Performance, mobile behaviour, SEO and content management are verified before launch — not fixed after. The product needs to work for real users on real devices.",
    image: "/work/swapzy.webp",
    imageAlt: "Performance and usability testing",
  },
  {
    num: "05",
    title: "Hand over something you can actually use",
    desc: "The final product should be maintainable without us. Where appropriate, we build admin systems so clients can manage content independently. Full handover documentation is included.",
    image: "/work/coaching/expecto-demo-coaching.webp",
    imageAlt: "Handover and documentation",
  },
];

export default function Process() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-20">
        <div className="lg:col-span-7">
          <span className="label-tag block mb-6">Process</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
            From business problem to digital product.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex items-end">
          <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
            Not a generic agency process. This is what actually happens on every project.
          </p>
        </div>
      </div>

      {/* Steps — alternating layout */}
      <div className="space-y-px bg-[var(--border)] border border-[var(--border)]">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`bg-white flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            {/* Text */}
            <div className="lg:w-5/12 flex flex-col justify-center p-8 md:p-12">
              <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums block mb-5">{step.num}</span>
              <h3 className="font-montserrat font-semibold text-[1.125rem] md:text-[1.25rem] text-[var(--text)] leading-[1.3] mb-4">
                {step.title}
              </h3>
              <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.75]">{step.desc}</p>
            </div>

            {/* Image */}
            <div className="lg:w-7/12 relative aspect-video lg:aspect-auto lg:min-h-[260px] overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border)] ring-1 ring-[var(--border)]">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
