import { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import ServicesPageClient from "./ServicesPageClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getServiceSchema, getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Web Development & Digital Product Services | Expecto Digital Agency",
  description: "Expecto builds high-performance websites, web applications, e-commerce platforms, CRM systems and custom digital products for growing businesses across India.",
  alternates: { canonical: "https://expecto.online/services" },
  keywords: [
    "web development services india", "website design india", "app development india",
    "crm development india", "saas development india", "ecommerce website india",
    "custom website india", "landing page india", "digital agency services india",
    "website design uttar pradesh", "website design delhi", "website design madhya pradesh",
  ],
  openGraph: {
    title: "Web Development Services India | Website, App, CRM, SaaS | Expecto",
    description: "Website design from ₹1,999, app development, CRM, SaaS. 7-day delivery. UP, Delhi, MP.",
    url: "https://expecto.online/services",
    type: "website",
  },
};

const serviceSchemas = [
  { name: "Website Design & Development India", desc: "Professional website design starting Rs. 1,999 with 7-day delivery for Indian businesses.", url: "/services" },
  { name: "Custom CRM Software Development India", desc: "Custom CRM for coaching, real estate, hospital, salon, gym starting Rs. 9,999.", url: "/niche/crm-software" },
  { name: "Mobile App Development India", desc: "React Native iOS and Android app development for Indian businesses.", url: "/services" },
  { name: "SaaS Product Development India", desc: "Custom SaaS, ERP, and business software development.", url: "/services" },
  { name: "Ecommerce Website Development India", desc: "Full-featured online store with payment gateway starting Rs. 3,999.", url: "/niche/ecommerce" },
  { name: "Landing Page Design India", desc: "High-converting landing pages for Google Ads and Meta Ads starting Rs. 1,999.", url: "/niche/landing-page" },
];

const faqs = [
  { q: "What services does Expecto Digital Agency offer?", a: "Expecto offers website design, custom CRM development, mobile app development, SaaS products, ecommerce stores, landing pages, and video production for Indian businesses." },
  { q: "How much does website development cost at Expecto?", a: "Website development starts at Rs. 1,999 for a basic business website. Custom websites start at Rs. 3,999. CRM development starts at Rs. 9,999. All prices include design, development, and deployment." },
  { q: "Do you serve businesses in Uttar Pradesh, Delhi, and Madhya Pradesh?", a: "Yes. We serve clients across all of India with a focus on Uttar Pradesh (Lucknow, Kanpur, Agra, Varanasi, Noida), Delhi NCR, and Madhya Pradesh (Indore, Bhopal, Jabalpur, Gwalior)." },
];

export default function ServicesPage() {
  return (
    <>
      {serviceSchemas.map((s, i) => (
        <Script key={i} id={`schema-svc-${i}`} type="application/ld+json" strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(s.name, s.desc, s.url)) }} />
      ))}
      <Script id="schema-faq-services" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <Suspense fallback={null}>
        <ServicesPageClient />
      </Suspense>
    </>
  );
}
