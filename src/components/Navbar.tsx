"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Solutions", href: "/niche/custom-website" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] md:h-20 flex items-center transition-all duration-200 ${
          scrolled
            ? "bg-white border-b border-[var(--border)]"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-8 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-150 flex items-center"
            aria-label="Expecto — Home"
          >
            <Image
              src="/logo.png"
              alt="Expecto"
              width={120}
              height={32}
              className="h-10 w-auto object-contain"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-montserrat text-[14px] transition-colors duration-150 relative group ${
                    active ? "text-[var(--text)] font-medium" : "text-[var(--text-2)] hover:text-[var(--text)] font-normal"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[var(--text)] transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-black text-[13px] px-5 py-3 min-h-0 h-9 flex items-center gap-2">
              Start a Project
              <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-px bg-[var(--text)] block"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-px bg-[var(--text)] block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-px bg-[var(--text)] block"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-16">
              <div className="space-y-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-3 group border-b border-[var(--border)] last:border-0"
                    >
                      <span className="font-montserrat text-[11px] text-[var(--text-3)] w-5 tabular-nums">0{i + 1}</span>
                      <span className="font-montserrat font-700 text-[2rem] tracking-tight text-[var(--text)] group-hover:text-[var(--text-2)] transition-colors duration-150">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-8 border-t border-[var(--border)] space-y-3"
              >
                <a
                  href="mailto:hello@expecto.online"
                  className="block font-montserrat text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                >
                  hello@expecto.online
                </a>
                <a
                  href="tel:+918707224376"
                  className="block font-montserrat text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                >
                  +91 87072 24376
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-black mt-4 w-full justify-center"
                >
                  Start a Project <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
