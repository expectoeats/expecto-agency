"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-5 h-[2px] bg-[#1E1E1E] rounded-full block"
              />
              <motion.span
                animate={open ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="w-5 h-[2px] bg-[#1E1E1E] rounded-full block"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-5 h-[2px] bg-[#1E1E1E] rounded-full block"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu (Bungee Framer Style) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="fixed inset-0 z-[990] bg-white/95 backdrop-blur-xl flex flex-col justify-between pt-28 pb-10 px-6 md:px-16 overflow-y-auto"
          >
            <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center">
              <nav className="flex flex-col gap-2 md:gap-3 py-6" aria-label="Overlay Navigation">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + idx * 0.05,
                        type: "spring",
                        stiffness: 260,
                        damping: 24,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
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
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Bar Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="w-full max-w-[1400px] mx-auto pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <span className="text-xs font-mono text-[#5A6271] block mb-1">
                  ( DIRECT INQUIRY )
                </span>
                <a
                  href="mailto:hello@expecto.online"
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
                      className="text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-60 transition-opacity"
                    >
                      {s.label}
                    </a>
                    {i < 3 && <span className="text-xs font-mono text-[#D0D8E4]">/</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
