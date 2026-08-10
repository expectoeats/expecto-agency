import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Kanpur | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Kanpur, Uttar Pradesh. Custom websites, CRM software, ecommerce stores, coaching websites, hospital websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/kanpur" },
  keywords: ["website design kanpur", "web development kanpur", "digital agency kanpur", "crm development kanpur", "custom website kanpur", "ecommerce website kanpur", "coaching website kanpur", "affordable website kanpur uttar pradesh"],
  openGraph: {
    title: "Website Design in Kanpur | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Kanpur. 7-day delivery guaranteed.",
    url: "https://expecto.online/cities/kanpur",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-kanpur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Kanpur", "Uttar Pradesh", 26.4499, 80.3319)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/kanpur" }, { name: "Kanpur", path: "/cities/kanpur" }]} />
      <CityPageTemplate city="Kanpur" />
    </>
  );
}
