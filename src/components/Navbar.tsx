"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { index: "( _01 )", name: "Home", href: "/" },
  { index: "( _02 )", name: "Services", href: "/services" },
  { index: "( _03 )", name: "About", href: "/about" },
  { index: "( _04 )", name: "Process", href: "/process" },
  { index: "( _05 )", name: "Pricing", href: "/pricing" },
  { index: "( _06 )", name: "Blog", href: "/blog" },
  { index: "( _07 )", name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            : "py-5 bg-white/70 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Expecto Home"
          >
            <div className="relative w-7 h-7 rounded-md overflow-hidden shrink-0 border border-[#E5E7EB]">
              <Image
                src="/logo.png"
                alt="Expecto Logo"
                fill
                sizes="28px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold tracking-tight text-[17px] text-[#1E1E1E] group-hover:opacity-80 transition-opacity">
                Expecto®
              </span>
              <span className="text-[11px] font-mono text-[#5A6271]">
                ( AGENCY )
              </span>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity py-1.5 px-3.5 rounded-full border border-[#E5E7EB] hover:border-[#1E1E1E]"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="w-11 h-11 rounded-full flex flex-col items-center justify-center gap-[5px] bg-[#F6F7F9] hover:bg-[#EEF0F6] transition-colors cursor-pointer border border-[#E5E7EB]"
            >
              <span
                className={`w-5 h-[2px] bg-[#1E1E1E] rounded-full block transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-[#1E1E1E] rounded-full block transition-opacity duration-150 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-[#1E1E1E] rounded-full block transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[990] bg-white/95 backdrop-blur-xl flex flex-col justify-between pt-28 pb-10 px-6 md:px-16 overflow-y-auto transition-all duration-300 ease-out ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!open}
      >
        <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center">
          <nav className="flex flex-col gap-2 md:gap-3 py-6" aria-label="Overlay Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-baseline gap-4 md:gap-8 py-2 md:py-3 border-b border-[#F0F2F5] transition-all"
                  >
                    <span className="font-mono text-xs md:text-sm text-[#5A6271] tabular-nums min-w-[50px]">
                      {link.index}
                    </span>
                    <span
                      className={`text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight transition-all duration-200 ${
                        isActive
                          ? "text-[#1E1E1E]"
                          : "text-[#1E1E1E] group-hover:translate-x-2 group-hover:opacity-60"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Bar Info */}
        <div className="w-full max-w-[1400px] mx-auto pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#5A6271] block mb-1">
              ( DIRECT INQUIRY )
            </span>
            <a
              href="mailto:hello@expecto.online"
              tabIndex={open ? 0 : -1}
              className="text-base md:text-lg font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity underline decoration-[#E5E7EB] underline-offset-4"
            >
              hello@expecto.online
            </a>
            <span className="text-xs font-mono text-[#5A6271] block mt-1">
              +91 87072 24376
            </span>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#5A6271] mr-2">
              ( CONNECT )
            </span>
            {[
              { label: "WA", href: "https://wa.me/918707224376" },
              { label: "IG", href: "https://instagram.com/expecto.web" },
              { label: "LI", href: "https://www.linkedin.com/company/expecto-digital-solutions/" },
              { label: "FB", href: "https://www.facebook.com/people/Expecto-Web/pfbid02TPuXQSrfzkV2ZcYNjReo7Zg7xTd5qYmEmzJCe2ii2BezC7er9qMUhZidn4e5fl/" },
            ].map((s, i) => (
              <span key={s.label} className="flex items-center gap-3">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity"
                >
                  {s.label}
                </a>
                {i < 3 && <span className="text-xs font-mono text-[#D0D8E4]">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
