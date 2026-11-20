import { Metadata } from "next";
import Script from "next/script";
import PricingPageClient from "./PricingPageClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design Pricing India | Starting Transparent Pricing | Expecto",
  description: "Transparent website design pricing in India. Basic website Contact Us, business website Contact Us, ecommerce Contact Us, CRM from Contact Us. No hidden charges. 7-day delivery. Serving UP, Delhi, MP. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/pricing" },
  keywords: [
    "website design price india", "website cost india", "website banane ka kharcha",
    "website kitne mein banti hai", "affordable website price india",
    "website design 1999 india", "website design 3999 india",
    "crm development cost india", "app development cost india",
    "website price uttar pradesh", "website price delhi", "website price madhya pradesh",
  ],
  openGraph: {
    title: "Website Design Pricing India | Starting Expecto",
    description: "Transparent pricing: basic website Contact Us, business Contact Us, ecommerce Contact Us, CRM Contact Us. No hidden charges.",
    url: "https://expecto.online/pricing",
    type: "website",
  },
};

const faqs = [
  { q: "What is the price of a website in India?", a: "At Expecto, a basic business website starts at Contact Us. A full business website with 5-10 pages starts at Contact Us. An ecommerce website starts at Contact Us. All prices include design, development, and deployment." },
  { q: "Are there any hidden charges?", a: "No. Your proposal includes a line-by-line breakdown of every cost. No hidden charges, no surprise bills." },
  { q: "What is included in the website price?", a: "All packages include design, development, mobile responsiveness, basic SEO setup, WhatsApp integration, and deployment. Domain and hosting are separate." },
  { q: "How much does CRM development cost?", a: "Custom CRM development starts at Contact Us for a basic lead management system. Full-featured CRM with WhatsApp integration starts at Contact Us." },
  { q: "Do you offer EMI or installment payment?", a: "Yes. We offer 50% advance and 50% on delivery payment structure for all projects." },
];

export default function PricingPage() {
  return (
    <>
      <Script id="schema-faq-pricing" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <PricingPageClient />
    </>
  );
}
