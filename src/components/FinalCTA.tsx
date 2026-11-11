"use client";

import { useState } from "react";
import { ArrowUpRight, Send, Check, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-white border-t border-[#E5E7EB]" aria-label="Contact & Newsletter">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Agency Inquiry */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-[#5A6271] block mb-4">
              ( START A PROJECT )
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1E1E1E] leading-[1.12] mb-8">
              Ready to get your website or custom business software live in 7 days?
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <a
                href="mailto:hello@expecto.online"
                className="group inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-[#1E1E1E] hover:opacity-60 transition-opacity border-b-2 border-[#1E1E1E] pb-1"
              >
                <span>hello@expecto.online</span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <Link
                href="https://wa.me/918707224376"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white hover:bg-[#333333] transition-colors px-6 py-3.5 rounded-full font-medium text-sm font-mono"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Consult</span>
              </Link>
            </div>

            <p className="font-mono text-xs text-[#5A6271] mt-6">
              Phone: +91 87072 24376 • Guaranteed turnaround in writing with 20% cashback policy.
            </p>
          </div>

          {/* Right Column: Newsletter Box */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <span className="font-mono text-xs text-[#5A6271] block mb-2">
                ( AGENCY UPDATES )
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1E1E1E] mb-2">
                Join our newsletter
              </h3>

              <p className="text-sm text-[#5A6271] mb-6">
                Curated insights on web performance, software architecture, and digital growth strategies for Indian founders.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#1E1E1E] flex items-center gap-2">
                  <Check size={16} className="text-[#1E1E1E]" />
                  <span>You are subscribed. Welcome to Expecto!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className="flex-1 px-4 py-3.5 rounded-full bg-white border border-[#E5E7EB] focus:border-[#1E1E1E] focus:outline-none text-sm text-[#1E1E1E] placeholder:text-[#5A6271]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1E1E] text-white hover:bg-[#333333] transition-colors text-xs font-mono font-medium shrink-0 cursor-pointer"
                  >
                    <span>SEND</span>
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
