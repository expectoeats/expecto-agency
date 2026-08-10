import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Jaipur | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Jaipur, Rajasthan. Custom websites, CRM software, ecommerce stores, hotel websites, coaching websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/jaipur" },
  keywords: ["website design jaipur", "web development jaipur", "digital agency jaipur", "crm development jaipur", "hotel website jaipur", "ecommerce website jaipur", "coaching website jaipur", "affordable website jaipur rajasthan"],
  openGraph: {
    title: "Website Design in Jaipur | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, hotel & ecommerce starting ₹1,999 in Jaipur. 7-day delivery.",
    url: "https://expecto.online/cities/jaipur",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-jaipur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Jaipur", "Rajasthan", 26.9124, 75.7873)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/jaipur" }, { name: "Jaipur", path: "/cities/jaipur" }]} />
      <CityPageTemplate city="Jaipur" />
    </>
  );
}
