"use client";

import Image from "next/image";

const principles = [
  { num: "01", title: "Performance", desc: "Fast experiences are part of the product. Slow websites cost businesses real customers." },
  { num: "02", title: "Discoverability", desc: "SEO is considered while building — structure, speed and local signals are built in from day one." },
  { num: "03", title: "Control", desc: "Where appropriate, clients manage their own content without depending on a developer for every update." },
  { num: "04", title: "Experience", desc: "Design decisions should make the product easier to understand and use — clarity over visual novelty." },
  { num: "05", title: "Craft", desc: "Every spacing decision, typography choice and interaction is intentional. The details determine whether a product feels premium or generic." },
];

export default function WhyExpecto() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left: headline + principles */}
        <div className="lg:col-span-6">
          <span className="label-tag block mb-6">Why Expecto</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)] mb-12">
            The details are the difference.
          </h2>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {principles.map((p) => (
              <div key={p.num} className="grid grid-cols-12 gap-4 py-6">
                <div className="col-span-1">
                  <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] tabular-nums">{p.num}</span>
                </div>
                <div className="col-span-4">
                  <p className="font-montserrat font-semibold text-[0.875rem] text-[var(--text)]">{p.title}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.75]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual proof — stacked screenshots */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <Image
              src="/work/coaching/expecto-demo-coaching.webp"
              alt="NEET coaching website design"
              fill
              className="object-cover object-top"
              sizes="(max-width:1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <Image
                src="/work/edu-crm.webp"
                alt="Education CRM — clean interface"
                fill
                className="object-cover object-top"
                sizes="25vw"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] ring-1 ring-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <Image
                src="/work/realestate/realestate-demo.webp"
                alt="Real Estate website — designed with precision"
                fill
                className="object-cover object-top"
                sizes="25vw"
                loading="lazy"
              />
            </div>
          </div>
          <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] text-right">
            Actual Expecto projects
          </p>
        </div>

      </div>
    </div>
  );
}
