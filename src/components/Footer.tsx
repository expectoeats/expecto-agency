"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="Footer">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#E5E7EB]">
          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Footer Navigation">
            {[
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Process", href: "/process" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#5A6271] hover:text-[#1E1E1E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
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
        </div>

        {/* Bottom Metadata & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#5A6271]">
          <div className="flex items-center gap-2">
            <span>( ©2026 Expecto Digital Agency )</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Ballia, Uttar Pradesh, India</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 text-[#1E1E1E] hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
