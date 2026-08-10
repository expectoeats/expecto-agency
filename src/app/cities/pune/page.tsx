import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Pune | CRM, SaaS & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Pune, Maharashtra. Custom websites, CRM software, SaaS development, startup websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/pune" },
  keywords: ["website design pune", "web development pune", "digital agency pune", "crm development pune", "saas development pune", "startup website pune", "ecommerce website pune", "affordable website pune maharashtra"],
  openGraph: {
    title: "Website Design in Pune | CRM, SaaS & Custom Website | Expecto",
    description: "Custom websites, CRM, SaaS starting ₹1,999 in Pune. 7-day delivery guaranteed.",
    url: "https://expecto.online/cities/pune",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-pune" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Pune", "Maharashtra", 18.5204, 73.8567)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/pune" }, { name: "Pune", path: "/cities/pune" }]} />
      <CityPageTemplate city="Pune" />
    </>
  );
}
