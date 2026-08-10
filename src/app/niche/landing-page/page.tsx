import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Landing Page Design India | High-Converting Landing Pages | Expecto | Starting ₹1,999",
  description: "High-converting landing page design in India starting ₹1,999. Lead generation landing pages, product launch pages, ad landing pages for Google Ads and Meta Ads. Uttar Pradesh, Delhi, Madhya Pradesh. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/landing-page" },
  keywords: ["landing page design india", "landing page development india", "high converting landing page india", "lead generation landing page india", "google ads landing page india", "meta ads landing page india", "product launch page india", "landing page lucknow", "landing page delhi", "landing page indore", "conversion optimized landing page india"],
  openGraph: {
    title: "Landing Page Design India | High-Converting | Expecto Digital Agency",
    description: "High-converting landing pages starting ₹1,999. Lead generation, Google Ads, Meta Ads. UP, Delhi, MP.",
    url: "https://expecto.online/niche/landing-page",
    type: "website",
  },
};

const faqs = [
  { q: "What is a landing page?", a: "A landing page is a single-purpose web page designed to convert visitors into leads or customers. It has one clear call-to-action like 'Call Now', 'WhatsApp Us', or 'Book Free Demo'." },
  { q: "How much does a landing page cost in India?", a: "Our landing pages start at Rs. 1,999 for a basic lead generation page. A high-converting landing page with A/B testing setup starts at Rs. 3,999." },
  { q: "How fast can you deliver a landing page?", a: "We deliver landing pages in 3-5 days. Urgent landing pages can be delivered in 24-48 hours." },
  { q: "Will the landing page work with Google Ads and Meta Ads?", a: "Yes. We build landing pages optimized for Google Ads and Meta Ads with fast loading speed, conversion tracking, and WhatsApp integration." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("Landing Page Design India", "High-converting landing page design starting Rs. 1,999 for Google Ads, Meta Ads, and lead generation.", "/niche/landing-page");

  return (
    <>
      <Script id="schema-faq-landing" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-landing" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/landing-page" }, { name: "Landing Page Design", path: "/niche/landing-page" }]} />
      <NichePageTemplate
        niche="Landing Page Design"
        ctaLabel="Get Your Landing Page"
        demos={["Lead Generation Landing Page", "Google Ads Landing Page", "Meta Ads Landing Page", "Product Launch Page", "Coaching Admission Page", "Event Registration Page"]}
        services={["Conversion-optimized single page design", "WhatsApp & call CTA integration", "Google Ads & Meta Ads compatibility", "Fast loading — under 2 seconds", "Lead capture form with CRM integration", "Serving UP, Delhi & MP businesses"]}
        pricing={["Basic Landing Page - Rs. 1,999", "High-Converting Page - Rs. 3,999", "Landing Page + CRM - Rs. 7,999"]}
        faqs={faqs}
      />
    </>
  );
}
