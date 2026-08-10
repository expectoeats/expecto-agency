import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import { siteUrl, getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Expecto — Digital Agency | Websites, Web Apps & Business Software",
  description:
    "Expecto designs and develops high-performance websites, web applications, e-commerce platforms, CRM systems and custom digital products for businesses across India. Based in Ballia, Uttar Pradesh.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Expecto — Digital Agency | Websites, Web Apps & Business Software",
    description:
      "High-performance websites, web applications, e-commerce platforms, CRM systems and digital products for businesses across India.",
    url: siteUrl,
    type: "website",
  },
};

const homeFaqs = [
  {
    q: "How much does a website cost at Expecto?",
    a: "Our websites start at Rs. 1,999 for a basic business website. Growth packages start at Rs. 3,999 and full custom builds from Rs. 7,999. All prices include design, development, and deployment.",
  },
  {
    q: "Do you really deliver a website in 7 days?",
    a: "Yes. Our 7-day delivery is guaranteed in writing. If we miss the deadline on qualifying projects, you get 20% cashback. We've delivered 50+ projects on time.",
  },
  {
    q: "Who owns the website after delivery?",
    a: "You do — 100%. Every client receives a signed Code Ownership Certificate confirming full rights to source code, design assets, and database. No lock-in.",
  },
  {
    q: "Which cities do you serve?",
    a: "We are based in Ballia, Uttar Pradesh and serve clients across all of India including Delhi NCR, Lucknow, Indore, Jaipur, Pune, Ahmedabad, Patna, Chandigarh, Varanasi, and Bhopal.",
  },
  {
    q: "What types of websites do you build?",
    a: "We build cafe and restaurant websites, coaching institute websites, gym and fitness websites, salon and spa websites, clinic and doctor websites, real estate websites, ecommerce stores, and custom SaaS products.",
  },
  {
    q: "Do you provide SEO with the website?",
    a: "Yes. All websites are built SEO-ready with proper meta tags, sitemaps, schema markup, and Google Business Profile setup. Advanced SEO is available as an add-on.",
  },
];

const homeServices = [
  { name: "Website Design & Development India", desc: "Professional website design starting Rs. 1,999 with 7-day delivery for Indian businesses.", url: "/services" },
  { name: "Mobile App Development India", desc: "React Native iOS and Android app development for Indian businesses.", url: "/services" },
  { name: "Business SaaS Development India", desc: "Custom ERP, CRM, and SaaS product development for Indian companies.", url: "/services" },
  { name: "Cinematic Video Production India", desc: "High-impact social media content and brand films for Indian businesses.", url: "/services" },
];

export default function Home() {
  const faqSchema = getFAQSchema(homeFaqs);
  const serviceSchemas = homeServices.map((s) => getServiceSchema(s.name, s.desc, s.url));

  return (
    <>
      {/* Homepage-specific structured data */}
      <Script
        id="schema-faq-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="lazyOnload"
      />
      {serviceSchemas.map((schema, i) => (
        <Script
          key={`schema-service-${i}`}
          id={`schema-service-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="lazyOnload"
        />
      ))}

      <main className="bg-[var(--bg-base)]">
        <Hero />
        <HomeSections />
      </main>
    </>
  );
}
