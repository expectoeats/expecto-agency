"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Check, 
  ArrowRight,
  IndianRupee,
  ShieldCheck,
  Zap,
  Eye
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxSection from "@/components/ParallaxSection";
import Link from "next/link";

const comboPackages = [
  {
    name: "Business Launchpad",
    savings: "Save ₹2,000",
    price: "₹5,499",
    features: ["Business Website", "Google Business Setup", "1 month SEO Maintenance", "Professional Email"],
    popular: false
  },
  {
    name: "Growth Kit",
    savings: "Save ₹4,000",
    price: "₹14,999",
    features: ["Custom Web App", "Meta Ads Setup", "Brand Kit", "Priority Support"],
    popular: true
  },
  {
    name: "Content Engine",
    savings: "Save ₹1,500",
    price: "₹3,999/mo",
    features: ["8 Reels / month", "Monthly SEO", "Social Media Graphics", "Strategy Call"],
    popular: false
  },
  {
    name: "SaaS Starter",
    savings: "Save ₹7,000",
    price: "₹34,999",
    features: ["SaaS MVP", "Cloud Infrastructure", "CI/CD Setup", "Admin Dashboard"],
    popular: false
  },
  {
    name: "The Full Suite",
    savings: "Best Value",
    price: "Custom",
    features: ["Web + App + SaaS", "Full Digital Marketing", "Dedicated Manager", "Unlimited Revisions"],
    popular: false
  }
];

const addOns = [
  { name: "Payment Gateway", price: "+₹1,999" },
  { name: "Advanced SEO", price: "+₹1,500" },
  { name: "Custom Branding Pack", price: "+₹3,000" },
  { name: "Order Dashboard", price: "+₹5,000" },
  { name: "Member Portal", price: "+₹4,000" },
  { name: "Automated Booking", price: "+₹2,500" },
  { name: "Digital Gift Cards", price: "+₹1,200" },
  { name: "Merchandise Store", price: "+₹3,500" },
  { name: "Monthly Maintenance", price: "+₹999/mo" },
];

const faqs = [
  {
    q: "How do I pay?",
    a: "We accept UPI, bank transfer, and Razorpay. 50% upfront, 50% on delivery."
  },
  {
    q: "Do you offer EMI?",
    a: "For projects above ₹10,000 we offer a 3-part payment plan at no extra cost."
  },
  {
    q: "Can I get a custom quote?",
    a: "Absolutely. WhatsApp us or fill the contact form and we'll send a detailed proposal within 2 hours."
  },
  {
    q: "Are revisions included?",
    a: "Yes — 3 free revision rounds during build. Post-launch revisions on maintenance plan."
  }
];

export default function PricingPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isCompactViewport = window.matchMedia("(max-width: 1024px), (hover: none), (pointer: coarse)").matches;
    if (isCompactViewport) return;

    gsap.registerPlugin(ScrollTrigger);
    
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
          gsap.from(
            section,
            {
              opacity: 0,
              y: 50,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
        
        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const waLink = "https://wa.me/918707224376?text=Hi%20Expecto%20Team%2C%0A%0AI%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20discussing%20a%20project.%0A%0AHere%27s%20a%20quick%20overview%3A%0A%F0%9F%93%8C%20Service%20Needed%3A%20%0A%F0%9F%93%85%20Timeline%3A%20%0A%F0%9F%92%B0%20Budget%20Range%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards";

  return (
    <div ref={containerRef} className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      {/* Page Hero */}
      <section className="relative min-h-[72vh] flex items-center justify-center pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/78" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />
        </div>
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-[0.6875rem] text-white/50 uppercase tracking-[0.18em] mb-10 inline-block border border-white/15 px-4 py-2 rounded-sm"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(8px)" }}
          >
            Investment
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-montserrat font-semibold text-[clamp(1.8rem,6.2vw,4rem)] leading-[1.02] mb-8 md:mb-10 tracking-tight uppercase text-balance text-white"
          >
            VALUE{" "}
            <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
              UNCOMPROMISED.
            </span>
          </motion.h1>
          {/* Frosted description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="inline-block px-6 py-4 rounded-sm border border-white/10 max-w-3xl mx-auto"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}
          >
            <p className="font-montserrat text-base sm:text-xl text-white/75 leading-relaxed">
              Transparent, performance-driven pricing for businesses that demand excellence. No hidden fees. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <ParallaxSection accentColor="var(--border)" variant="horizontal" className="border-t border-[var(--border)]">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: IndianRupee,
                title: "Indicative Pricing", 
                desc: "All prices shown are starting points. Final quote is based on your specific requirements — always shared before we start.",
              },
              { 
                icon: ShieldCheck,
                title: "No Hidden Costs", 
                desc: "What's in your proposal is what you pay. Domain, hosting, add-ons — all listed separately and transparently.",
              },
              { 
                icon: Zap,
                title: "Cashback on Delays", 
                desc: "If we miss the delivery deadline on a qualifying project, you get cashback. It's in writing.",
              }
            ].map((v, i) => (
              <div key={i} className="group p-10 bg-white border border-[var(--border)] rounded-sm hover:border-[var(--text)] transition-all duration-300">
                <div className="w-16 h-16 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                  <v.icon size={32} strokeWidth={1.5} className="text-[var(--text)]" />
                </div>
                <h4 className="font-montserrat font-semibold text-2xl mb-6 text-[var(--text)]">{v.title}</h4>
                <p className="font-montserrat text-[var(--text-3)] text-lg leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Explore Service Pricing CTA */}
      <ParallaxSection accentColor="var(--border)" variant="reveal" className="border-y border-[var(--border)]">
        <div className="container mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-montserrat font-semibold text-3xl md:text-5xl mb-8 text-[var(--text)]">Need granular details?</h2>
          <p className="font-montserrat text-[var(--text-3)] text-xl mb-12 max-w-2xl mx-auto">
            Select a specific service category to see a deep dive into our modular pricing options.
          </p>
          <Link href="/services" className="group relative inline-flex items-center gap-4 bg-[var(--text)] text-white px-12 py-6 rounded-sm font-montserrat font-medium text-xl hover:bg-[#333333] transition-all duration-300">
            VIEW MODULAR PRICING
            <Eye size={24} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </ParallaxSection>

      {/* Combo Packages */}
      <ParallaxSection accentColor="var(--border)" variant="split">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-montserrat font-semibold text-2xl md:text-5xl mb-6 text-balance text-[var(--text)]">High-Impact Bundles</h2>
            <div className="w-16 md:w-24 h-px bg-[var(--border)] mx-auto mb-8" />
            <p className="font-montserrat text-[var(--text-3)] text-lg md:text-xl text-balance">Strategically architected packages for maximum market impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {comboPackages.map((pkg) => (
              <motion.div 
                key={pkg.name}
                whileHover={{ y: -4 }}
                className={`relative p-6 sm:p-8 lg:p-10 rounded-sm border flex flex-col h-full group ${
                  pkg.popular
                    ? "bg-white border-[var(--text)] border-2"
                    : "bg-white border-[var(--border)] hover:border-[var(--text-2)]"
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-10 bg-[var(--text)] text-white px-6 py-2 rounded-b-sm text-[10px] font-montserrat font-medium uppercase tracking-[0.2em] z-10">
                    Recommended
                  </div>
                )}
                
                <div className="mb-12">
                  <h4 className="font-montserrat font-semibold text-2xl mb-2 text-[var(--text)]">{pkg.name}</h4>
                  <div className="text-[10px] sm:text-[12px] font-montserrat font-medium text-[var(--text-2)] uppercase tracking-[0.2em] mb-6 sm:mb-8">{pkg.savings}</div>
                  <div className="font-montserrat font-semibold text-[clamp(1.45rem,3.2vw,2.2rem)] mb-10 md:mb-12 tracking-tight text-[var(--text)]">{pkg.price}</div>
                  
                  <ul className="space-y-4 sm:space-y-6">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors font-montserrat">
                        <Check size={18} strokeWidth={2.5} className="text-[var(--text)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={waLink} 
                  target="_blank" 
                  className={`mt-auto w-full flex items-center justify-center gap-3 py-5 rounded-sm font-montserrat font-medium text-sm uppercase tracking-widest transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[var(--text)] text-white hover:bg-[#333333]"
                      : "bg-[var(--bg-subtle)] text-[var(--text)] hover:bg-[var(--text)] hover:text-white border border-[var(--border)]"
                  }`}
                >
                  Acquire Plan <ArrowRight size={20} strokeWidth={2} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Add-ons Section */}
      <ParallaxSection accentColor="var(--border)" variant="magnetic" className="border-t border-[var(--border)]">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="font-montserrat font-semibold text-3xl md:text-5xl mb-8 leading-tight text-[var(--text)]">Modular <br />Extensions.</h2>
              <p className="font-montserrat text-xl text-[var(--text-3)] leading-relaxed mb-10">
                Enhance your core deployment with high-performance modules designed for specific business needs.
              </p>
              <div className="inline-flex items-center gap-4 p-6 bg-white border border-[var(--border)] rounded-sm">
                <div className="w-12 h-12 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center">
                  <Zap size={24} strokeWidth={2} className="text-[var(--text)]" />
                </div>
                <div className="font-montserrat font-medium text-lg text-[var(--text)]">Custom requests welcome</div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-sm overflow-hidden">
              <div className="divide-y divide-[var(--border)]">
                {addOns.map((addon) => (
                  <div key={addon.name} className="flex justify-between items-center p-8 hover:bg-[var(--bg-subtle)] transition-colors group">
                    <span className="font-montserrat font-medium text-lg text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors">{addon.name}</span>
                    <span className="font-montserrat font-semibold text-xl text-[var(--text)]">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* FAQ Section */}
      <ParallaxSection accentColor="var(--border)" variant="depth">
        <div className="container mx-auto max-w-[900px] px-6">
          <h2 className="font-montserrat font-semibold text-3xl md:text-5xl text-center mb-24 text-[var(--text)]">Precision <br /><span className="text-[var(--text-2)]">Clarified.</span></h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-10 rounded-sm bg-white border border-[var(--border)] hover:border-[var(--text)] transition-all duration-300">
                <h4 className="font-montserrat font-semibold text-2xl mb-6 text-[var(--text)]">{faq.q}</h4>
                <p className="font-montserrat text-lg text-[var(--text-3)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Final CTA */}
      <ParallaxSection accentColor="var(--border)" variant="reveal">
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="bg-white border border-[var(--border)] rounded-sm p-16 md:p-24 text-center">
            <h2 className="font-montserrat font-semibold text-[clamp(1.7rem,5.8vw,3.5rem)] leading-[1.03] mb-12 tracking-tight text-[var(--text)]">SECURE YOUR <br /><span className="text-[var(--text-2)]">QUOTATION.</span></h2>
            <p className="font-montserrat text-xl text-[var(--text-3)] mb-16 max-w-2xl mx-auto leading-relaxed">
              Receive a comprehensive, line-by-line proposal within 2 hours of your initial request.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center gap-4 bg-[var(--text)] text-white px-12 py-6 rounded-sm font-montserrat font-medium text-xl hover:bg-[#333333] transition-all duration-300"
            >
              REQUEST PROPOSAL <ArrowRight size={28} strokeWidth={2} />
            </motion.a>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
