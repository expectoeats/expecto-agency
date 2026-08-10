import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom CRM Software Development India | CRM for Business | Expecto | Starting ₹9,999",
  description: "Custom CRM software development in India starting ₹9,999. CRM for coaching institutes, real estate, hospitals, salons, gyms, travel agencies. WhatsApp CRM, lead management, sales tracking. Uttar Pradesh, Delhi, Madhya Pradesh. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/crm-software" },
  keywords: ["crm software development india", "custom crm india", "crm for coaching institute india", "crm for real estate india", "crm for hospital india", "crm for salon india", "crm for gym india", "crm development lucknow", "crm development delhi", "crm development indore", "crm development bhopal", "crm development kanpur", "whatsapp crm india", "lead management software india", "sales crm india"],
  openGraph: {
    title: "Custom CRM Software Development India | Expecto Digital Agency",
    description: "Custom CRM for coaching, real estate, hospital, salon, gym starting ₹9,999. WhatsApp CRM, lead management. UP, Delhi, MP.",
    url: "https://expecto.online/niche/crm-software",
    type: "website",
  },
};

const faqs = [
  { q: "What is a CRM and why does my business need it?", a: "A CRM (Customer Relationship Management) system helps you track leads, manage customers, automate follow-ups, and increase sales. Every business with more than 10 customers benefits from a CRM." },
  { q: "How much does custom CRM development cost in India?", a: "Our custom CRM starts at Rs. 9,999 for a basic lead management system. Full-featured CRM with WhatsApp integration, reports, and mobile app starts at Rs. 24,999." },
  { q: "Can you build a CRM for my coaching institute in Lucknow or Kanpur?", a: "Yes. We build CRMs specifically for coaching institutes with features like batch management, fee tracking, student portal, attendance, and WhatsApp notifications." },
  { q: "Do you build WhatsApp CRM?", a: "Yes. We integrate WhatsApp Business API into your CRM so you can send automated messages, follow-ups, and reminders directly from the system." },
  { q: "How long does CRM development take?", a: "A basic CRM takes 7-14 days. A full-featured custom CRM takes 21-30 days depending on requirements." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("Custom CRM Software Development India", "Custom CRM software for Indian businesses starting Rs. 9,999. CRM for coaching, real estate, hospital, salon, gym.", "/niche/crm-software");

  return (
    <>
      <Script id="schema-faq-crm" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-crm" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/crm-software" }, { name: "CRM Software Development", path: "/niche/crm-software" }]} />
      <NichePageTemplate
        niche="CRM Software Development"
        ctaLabel="Get Your Custom CRM"
        demos={["Lead Management CRM", "Coaching Institute CRM", "Real Estate CRM", "Hospital Patient CRM", "Salon Appointment CRM", "WhatsApp CRM Integration"]}
        services={["Custom CRM design & development", "WhatsApp Business API integration", "Lead capture & follow-up automation", "Sales pipeline & reporting dashboard", "Mobile app for CRM (iOS & Android)", "CRM for Uttar Pradesh, Delhi & MP businesses"]}
        pricing={["Basic CRM - Rs. 9,999", "Business CRM - Rs. 19,999", "Enterprise CRM with App - Rs. 39,999"]}
        faqs={faqs}
      />
    </>
  );
}
