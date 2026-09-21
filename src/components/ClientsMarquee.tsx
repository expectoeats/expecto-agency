"use client";

import Image from "next/image";

// Featured clients with real logos first, then others
const clients = [
  {
    name: "Rama Coaching Center",
    meta: "Coaching ERP · Marksheet & Mock Tests · 10 Days",
    logo: "https://ramainstitutetech.com/logo.jpeg",
    isExternal: true,
  },
  {
    name: "Interface Classes",
    meta: "Website Redesign · SEO · #1 Google",
    logo: "https://interfaceclasses.com/assets/logo-main.jpeg",
    isExternal: true,
  },
  {
    name: "Swapzy",
    meta: "Student Marketplace · Live Platform",
    logo: "https://www.swapzy.store/_next/image?url=%2Fswapzy-logo.png&w=64&q=75",
    isExternal: true,
  },
  {
    name: "Expecto Eats",
    meta: "Food Ordering Platform",
    logo: "/logo.png",
    isExternal: false,
  },
  {
    name: "Education CRM",
    meta: "CRM · Web Application",
    logo: "/logo.png",
    isExternal: false,
  },
  {
    name: "Real Estate CRM",
    meta: "CRM · Property Management",
    logo: "/logo.png",
    isExternal: false,
  },
  {
    name: "NEET Coaching",
    meta: "Coaching Website",
    logo: "/logo.png",
    isExternal: false,
  },
];

const items = [...clients, ...clients, ...clients];

export default function ClientsMarquee() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg-subtle)] overflow-hidden">

      {/* Top label bar */}
      <div className="border-b border-[var(--border)] px-8 md:px-12 py-3 flex items-center justify-between">
        <span className="label-tag">Selected Work</span>
        <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)]">Real projects · Real businesses</span>
      </div>

      {/* Marquee */}
      <div className="relative py-5">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F7F5, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F7F5, transparent)" }} />

        <div className="flex items-stretch w-max"
          style={{ animation: "marquee 55s linear infinite" }}>
          {items.map((item, i) => (
            <div
              key={`cl-${i}`}
              className="flex items-center gap-3 shrink-0 mx-2 px-5 py-3 bg-white border border-[var(--border)] hover:border-[var(--text)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all duration-150 cursor-default"
            >
              {/* Logo */}
              <div className="w-8 h-8 rounded-sm overflow-hidden flex items-center justify-center shrink-0 bg-white border border-[var(--border)] p-1">
                {item.isExternal ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain opacity-30"
                  />
                )}
              </div>

              {/* Text */}
              <div>
                <p className="font-montserrat font-semibold text-[0.8125rem] text-[var(--text)] whitespace-nowrap leading-tight">
                  {item.name}
                </p>
                <p className="font-montserrat text-[0.625rem] text-[var(--text-3)] whitespace-nowrap mt-0.5">
                  {item.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
