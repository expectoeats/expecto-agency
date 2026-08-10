"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const tabs = ["Web", "Apps", "Software", "Video", "Design", "Marketing", "Combos"];

interface PricingCard {
  name: string;
  price: string;
  delivery?: string;
  popular?: boolean;
  save?: string;
  features: string[];
}

const webCards: PricingCard[] = [
  {
    name: "Landing Page",
    price: "\u20B91,999",
    delivery: "3 days",
    features: ["1-page design", "Mobile responsive", "Contact form", "WhatsApp integration"],
  },
  {
    name: "Business Website",
    price: "\u20B93,999",
    delivery: "5 days",
    popular: true,
    features: ["Up to 5 pages", "SEO-ready", "Google Maps embed", "WhatsApp ordering"],
  },
  {
    name: "Custom Web App",
    price: "\u20B914,999",
    delivery: "8 days",
    features: ["Full MERN stack", "Admin dashboard", "Auth system", "API integrations"],
  },
];

const videoCards: PricingCard[] = [
  {
    name: "Reels Starter",
    price: "\u20B9499",
    delivery: "2 days",
    features: ["Up to 3 short reels", "Captions + transitions", "Trending music sync", "1 revision included"],
  },
  {
    name: "YouTube Editing Pro",
    price: "\u20B91,999",
    delivery: "3 days",
    popular: true,
    features: ["1 long-form video edit", "Hook + pacing optimization", "B-roll & SFX", "Custom thumbnail text style"],
  },
  {
    name: "Motion Graphics Pack",
    price: "\u20B94,999",
    delivery: "5 days",
    features: ["Brand intro/outro", "Kinetic typography", "Lower thirds & callouts", "Export in social formats"],
  },
];

const softwareCards: PricingCard[] = [
  {
    name: "Internal Tool",
    price: "\u20B97,999",
    delivery: "7 days",
    features: ["Custom dashboard", "Role-based access", "Basic reporting", "Deployment support"],
  },
  {
    name: "Business Automation Suite",
    price: "\u20B914,999",
    delivery: "12 days",
    popular: true,
    features: ["Workflow automation", "CRM modules", "Notifications", "3rd-party integrations"],
  },
  {
    name: "SaaS MVP Build",
    price: "\u20B929,999",
    delivery: "21 days",
    features: ["Multi-tenant architecture", "Subscription setup", "Admin analytics", "Scalable backend"],
  },
];

const designCards: PricingCard[] = [
  {
    name: "Logo Starter",
    price: "\u20B9699",
    delivery: "2 days",
    features: ["2 logo concepts", "Color palette", "PNG + SVG files", "1 revision included"],
  },
  {
    name: "Brand Identity Kit",
    price: "\u20B91,999",
    delivery: "4 days",
    popular: true,
    features: ["Logo system", "Typography pairing", "Brand guidelines", "Social profile kit"],
  },
  {
    name: "UI/UX Design Pack",
    price: "\u20B94,999",
    delivery: "6 days",
    features: ["Wireframes + mockups", "Design system basics", "Prototype flow", "Handoff-ready screens"],
  },
];

const marketingCards: PricingCard[] = [
  {
    name: "Local SEO Boost",
    price: "\u20B9799",
    delivery: "3 days",
    features: ["Google Business optimization", "Keyword setup", "On-page fixes", "Performance checklist"],
  },
  {
    name: "Social Growth Plan",
    price: "\u20B92,999/mo",
    delivery: "Monthly",
    popular: true,
    features: ["Content calendar", "8 creatives per month", "Caption + hashtag strategy", "Monthly insights report"],
  },
  {
    name: "Performance Ads Sprint",
    price: "\u20B95,999/mo",
    delivery: "Monthly",
    features: ["Meta/Google ad setup", "Audience targeting", "A/B testing", "Weekly optimization"],
  },
];

const pricingData: Record<string, PricingCard[]> = {
  Web: webCards,
  Apps: [
    {
      name: "Simple App",
      price: "\u20B912,999",
      delivery: "10 days",
      features: ["React Native", "Single platform", "Core features", "Firebase integration"],
    },
    {
      name: "Full App",
      price: "\u20B924,999",
      delivery: "15 days",
      popular: true,
      features: ["Both iOS & Android", "User auth", "Push notifications", "App Store upload"],
    },
    {
      name: "Enterprise App",
      price: "\u20B949,999",
      delivery: "30 days",
      features: ["Custom backend", "Payment gateway", "Complex logic", "Maintenance plan"],
    },
  ],
  Software: softwareCards,
  Video: videoCards,
  Design: designCards,
  Marketing: marketingCards,
  Combos: [
    {
      name: "Starter Pack",
      price: "\u20B92,499",
      save: "Save \u20B9998",
      features: ["Landing Page", "Logo Design", "2 Reels/Videos"],
    },
    {
      name: "Local Biz 360",
      price: "\u20B95,999/mo",
      save: "Save \u20B91,948",
      popular: true,
      features: ["Website Maintenance", "Brand Kit", "4 Reels/mo", "Local SEO"],
    },
    {
      name: "Full Stack Startup",
      price: "\u20B924,999",
      save: "Save \u20B98,948",
      features: ["SaaS MVP", "Brand Kit", "Pitch Deck", "Launch Support"],
    },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("Web");

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
            * Indicative pricing. Final quote after discovery call.
          </p>
        </div>
      </div>
    </section>
  );
}
