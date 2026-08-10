"use client";

import Image from "next/image";
import Link from "next/link";

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const LiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socials = [
  { href: "https://www.instagram.com/expecto.web", Icon: IgIcon, label: "Instagram" },
  { href: "https://www.linkedin.com/company/expecto-digital-solutions/", Icon: LiIcon, label: "LinkedIn" },
  { href: "https://www.facebook.com/people/Expecto-Web/pfbid02TPuXQSrfzkV2ZcYNjReo7Zg7xTd5qYmEmzJCe2ii2BezC7er9qMUhZidn4e5fl/", Icon: FbIcon, label: "Facebook" },
];

const cols = [
  {
    heading: "Work",
    links: [
      { label: "Portfolio", href: "/work" },
      { label: "Demo Library", href: "/#demos" },
      { label: "Coaching", href: "/niche/coaching-institute" },
      { label: "Real Estate", href: "/niche/real-estate" },
      { label: "Restaurants", href: "/niche/cafe-restaurant" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Website Development", href: "/services" },
      { label: "Web Applications", href: "/services" },
      { label: "E-Commerce", href: "/niche/ecommerce" },
      { label: "CRM & ERP", href: "/niche/crm-software" },
      { label: "UI/UX Redesign", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@expecto.online", href: "mailto:hello@expecto.online" },
      { label: "+91 87072 24376", href: "tel:+918707224376" },
      { label: "WhatsApp", href: "https://wa.me/918707224376" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#0D0D0D" }}>

      {/* ── Top strip — large cinematic statement ── */}
      <div className="border-b border-[#222222] max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Wordmark */}
          <div className="lg:col-span-7">
            <p className="font-montserrat font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-white select-none">
              EXPECTO
            </p>
            <p className="font-montserrat text-[0.8125rem] text-[#666666] tracking-[0.25em] uppercase mt-3">
              Digital Agency · India
            </p>
          </div>

          {/* Right: CTA block */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-montserrat text-[0.9375rem] text-[#888888] leading-[1.75] mb-6">
              Websites, web apps, e-commerce, CRM and digital products for growing businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0D0D0D] font-montserrat font-semibold text-[0.875rem] px-6 py-3.5 hover:bg-white/90 transition-colors duration-150"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Navigation columns ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 border-b border-[#222222]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="font-montserrat font-medium text-[0.6875rem] uppercase tracking-[0.18em] text-[#555555] mb-5">
                {col.heading}
              </p>
              <div className="space-y-3">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block font-montserrat text-[0.8125rem] text-[#888888] hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Business verification ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 border-b border-[#222222]">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-montserrat text-[0.625rem] text-[#444444] uppercase tracking-[0.15em] w-full md:w-auto mb-1 md:mb-0">
            Business Verification
          </p>
          <div className="flex items-center gap-3 flex-wrap">
          {[
            { src: "/certified/iso.png",  alt: "ISO Certified",   label: "ISO"  },
            { src: "/certified/msme.png", alt: "MSME Registered", label: "MSME" },
            { src: "/certified/MCA.png",  alt: "MCA Registered",  label: "MCA"  },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 border border-[#2A2A2A] px-3 py-2" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center shrink-0 p-0.5">
                <Image src={b.src} alt={b.alt} width={24} height={24} className="w-full h-full object-contain" />
              </div>
              <span className="font-montserrat font-medium text-[0.6875rem] text-[#888888] uppercase tracking-[0.1em]">
                {b.label}
              </span>
            </div>
          ))}
          </div>
          <p className="font-montserrat text-[0.5625rem] text-[#444444] w-full md:w-auto mt-1 md:mt-0 md:ml-2">
            Registered under Government of India
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

          {/* Logo + copyright */}
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:opacity-70 transition-opacity duration-150">
              <Image
                src="/logo.png"
                alt="Expecto"
                width={100}
                height={28}
                className="h-7 w-auto object-contain brightness-200 opacity-50"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="font-montserrat text-[0.6875rem] text-[#444444]">
              © 2026 Expecto Digital Agency. All rights reserved.
            </p>
          </div>

          {/* Right: socials + legal */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-[#2A2A2A] flex items-center justify-center text-[#555555] hover:text-white hover:border-[#555555] transition-all duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pl-4 border-l border-[#2A2A2A]">
              <Link href="/privacy" className="font-montserrat text-[0.6875rem] text-[#444444] hover:text-[#888888] transition-colors duration-150 uppercase tracking-[0.1em]">
                Privacy
              </Link>
              <Link href="/terms" className="font-montserrat text-[0.6875rem] text-[#444444] hover:text-[#888888] transition-colors duration-150 uppercase tracking-[0.1em]">
                Terms
              </Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
