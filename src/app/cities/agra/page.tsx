import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Agra | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Agra, Uttar Pradesh. Custom websites, CRM software, hotel websites, travel websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/agra" },
  keywords: ["website design agra", "web development agra", "digital agency agra", "crm development agra", "hotel website agra", "travel website agra", "ecommerce website agra", "affordable website agra uttar pradesh"],
  openGraph: {
    title: "Website Design in Agra | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, hotel & travel websites starting ₹1,999 in Agra. 7-day delivery.",
    url: "https://expecto.online/cities/agra",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-agra" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Agra", "Uttar Pradesh", 27.1767, 78.0081)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/agra" }, { name: "Agra", path: "/cities/agra" }]} />
      <CityPageTemplate city="Agra" />
    </>
  );
}
