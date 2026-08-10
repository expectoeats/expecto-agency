import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Gorakhpur | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Gorakhpur, Uttar Pradesh. Custom websites, CRM software, coaching websites, hospital websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/gorakhpur" },
  keywords: ["website design gorakhpur", "web development gorakhpur", "digital agency gorakhpur", "crm development gorakhpur", "coaching website gorakhpur", "hospital website gorakhpur", "affordable website gorakhpur uttar pradesh"],
  openGraph: {
    title: "Website Design in Gorakhpur | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching websites starting ₹1,999 in Gorakhpur. 7-day delivery.",
    url: "https://expecto.online/cities/gorakhpur",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-gorakhpur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Gorakhpur", "Uttar Pradesh", 26.7606, 83.3732)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/gorakhpur" }, { name: "Gorakhpur", path: "/cities/gorakhpur" }]} />
      <CityPageTemplate city="Gorakhpur" />
    </>
  );
}
