import { Metadata } from "next";
import Script from "next/script";
import CustomWebsiteClient from "./CustomWebsiteClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Website Development India | Expecto Digital Agency",
  description: "100% custom-designed websites for businesses across India. No templates, no page builders — built from scratch around your business. Starting ₹3,999 with 7-day delivery.",
  alternates: { canonical: "https://expecto.online/niche/custom-website" },
  openGraph: {
    title: "Custom Website Development India | Expecto Digital Agency",
    description: "100% custom-designed websites starting ₹3,999. No templates. 7-day delivery.",
    url: "https://expecto.online/niche/custom-website",
    type: "website",
  },
};

const faqs = [
  { q: "What is a custom website?", a: "A custom website is designed and developed from scratch specifically for your business — no templates, no page builders. Every element is unique to your brand." },
  { q: "How much does a custom website cost?", a: "Custom websites start at ₹3,999 for a 5-page business website. Complex builds with custom features start from ₹9,999." },
  { q: "Do you build custom websites across India?", a: "Yes. We serve clients across Uttar Pradesh (Lucknow, Kanpur, Agra, Varanasi, Noida), Delhi NCR and Madhya Pradesh (Indore, Bhopal, Jabalpur)." },
  { q: "How is a custom website better than a template?", a: "Custom websites load faster, rank better on Google, look unique and are built exactly for your business. Template websites are generic and often slow." },
  { q: "Do I own the code?", a: "Yes. You receive 100% ownership of the source code, design files and database according to the agreed project terms." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema(
    "Custom Website Development India",
    "100% custom website design and development for Indian businesses starting ₹3,999 with 7-day delivery.",
    "/niche/custom-website"
  );

  return (
    <>
      <Script id="schema-faq-custom" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-custom" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/niche/custom-website" },
        { name: "Custom Website Development", path: "/niche/custom-website" },
      ]} />
      <CustomWebsiteClient faqs={faqs} />
    </>
  );
}
