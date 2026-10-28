"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, CheckCircle } from "lucide-react";

const tabs = ["Starter", "Growth", "Enterprise"];

interface PricingCard {
  name: string;
  price: string;
  delivery?: string;
  popular?: boolean;
  save?: string;
  features: string[];
}

const starterCards: PricingCard[] = [
  {
    name: "Landing Page",
    price: "\u20B94,999",
    delivery: "3 days",
    features: ["1-page custom design", "Mobile responsive", "Contact form + WhatsApp", "Google Maps embed", "SEO-ready meta tags"],
  },
  {
    name: "Business Website",
    price: "\u20B97,999",
    delivery: "7 days",
    popular: true,
    features: ["Up to 5 pages", "Custom UI design", "SEO + sitemap", "WhatsApp integration", "1 month free support"],
  },
  {
    name: "E-Commerce Store",
    price: "\u20B913,999",
    delivery: "12 days",
    features: ["Product catalogue", "Cart & checkout", "Payment gateway", "Order management", "Mobile-first design"],
  },
];

const growthCards: PricingCard[] = [
  {
    name: "Web Application",
    price: "\u20B914,999",
    delivery: "10 days",
    features: ["Full MERN stack", "User auth + roles", "Admin dashboard", "API integrations", "Deployment included"],
  },
  {
    name: "Mobile App",
    price: "\u20B914,999",
    delivery: "15 days",
    popular: true,
    features: ["React Native (iOS + Android)", "Push notifications", "User auth", "App Store upload", "6 weeks support"],
  },
  {
    name: "Marketing Starter Pack",
    price: "\u20B97,999",
    delivery: "5 days",
    features: ["Logo + brand kit", "8 social media creatives", "Content calendar (1 month)", "Instagram/Facebook page setup", "Social profile optimization"],
  },
];

const enterpriseCards: PricingCard[] = [
  {
    name: "CRM / ERP System",
    price: "\u20B914,999",
    delivery: "12 days",
    features: ["Custom modules", "Role-based access", "Workflow automation", "Reporting dashboard", "3rd-party integrations"],
  },
  {
    name: "SaaS MVP",
    price: "\u20B924,999",
    delivery: "21 days",
    popular: true,
    features: ["Multi-tenant architecture", "Subscription billing", "Admin analytics", "Scalable backend", "Launch support"],
  },
  {
    name: "Full Digital Setup",
    price: "\u20B921,999/mo",
    delivery: "Monthly retainer",
    features: ["Website + maintenance", "Social media (8 posts)", "Local SEO", "Monthly report", "WhatsApp priority support"],
  },
];

const pricingData: Record<string, PricingCard[]> = {
  Starter: starterCards,
  Growth: growthCards,
  Enterprise: enterpriseCards,
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("Starter");

  const handleGetStarted = (card: PricingCard) => {
    const message = `Hi Expecto Team,\n\nI'm interested in the "${card.name}" plan from your ${activeTab} services.\n\nPrice: ${card.price}\nDelivery: ${card.delivery || "Contact for timeline"}\n\nI'd like to discuss this further.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918707224376?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const currentCards = pricingData[activeTab];

  return (
    <section id="pricing" className="py-20 lg:py-[120px] bg-[var(--bg-subtle)]">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="label-tag text-[var(--text-3)]">
              Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-semibold text-3xl md:text-5xl text-[var(--text)] mb-6 leading-tight"
          >
            Transparent Pricing. No Surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-montserrat text-[var(--text-3)] text-base md:text-lg px-4"
          >
            Every quote includes a line-by-line breakdown. No hidden charges. No surprise billings. Ever.
          </motion.p>
        </div>

        {/* Guarantee badge strip */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 border border-[var(--border)] rounded-sm text-[0.75rem] font-montserrat text-[var(--text-3)]">
            <span className="inline-flex items-center gap-1.5"><CheckCircle size={13} className="text-[var(--text)]" /> 7-Day Delivery Guaranteed</span>
            <span className="text-[var(--border)]">·</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle size={13} className="text-[var(--text)]" /> 100% Code Ownership</span>
            <span className="text-[var(--border)]">·</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle size={13} className="text-[var(--text)]" /> Free Quote in 24 Hours</span>
          </div>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4 no-scrollbar px-4">
          <div className="flex bg-white p-1 rounded-sm border border-[var(--border)] min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 md:px-7 py-2.5 rounded-sm font-montserrat font-medium text-[13px] md:text-[14px] transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[var(--text)] text-white"
                    : "text-[var(--text-3)] hover:text-[var(--text)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {currentCards.map((card) => (
                <div
                  key={card.name}
                  className={`relative p-6 md:p-8 rounded-sm bg-white border transition-all duration-300 ${
                    card.popular
                      ? "border-[var(--text)] border-2"
                      : "border-[var(--border)] hover:border-[var(--text-2)]"
                  }`}
                >
                  {card.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--text)] text-white px-4 py-1 rounded-sm text-[12px] font-montserrat font-medium uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-montserrat font-semibold text-xl text-[var(--text)] mb-2">{card.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="font-montserrat font-semibold text-3xl md:text-[2rem] text-[var(--text)]">{card.price}</span>
                      {card.delivery && (
                        <span className="font-montserrat text-[var(--text-3)] text-sm ml-2">/ {card.delivery}</span>
                      )}
                    </div>
                    {card.save && (
                      <span className="inline-block mt-2 text-[var(--text-2)] font-montserrat font-medium text-sm">
                        {card.save}
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-[15px] text-[var(--text-3)] font-montserrat">
                        <Check size={18} className="text-[var(--text)] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleGetStarted(card)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm font-montserrat font-medium text-[15px] transition-all ${
                      card.popular
                        ? "bg-[var(--text)] text-white hover:bg-[#333333]"
                        : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)]"
                    }`}
                  >
                    Get Started <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <p className="font-montserrat text-[var(--text-3)] text-[13px]">
            * Starting prices. Exact quote within 24 hours — free, no obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
