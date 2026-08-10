import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Jabalpur | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Jabalpur, Madhya Pradesh. Custom websites, CRM software, coaching websites, hospital websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/jabalpur" },
  keywords: ["website design jabalpur", "web development jabalpur", "digital agency jabalpur", "crm development jabalpur", "coaching website jabalpur", "hospital website jabalpur", "affordable website jabalpur madhya pradesh"],
  openGraph: {
    title: "Website Design in Jabalpur | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching websites starting ₹1,999 in Jabalpur. 7-day delivery.",
    url: "https://expecto.online/cities/jabalpur",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-jabalpur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Jabalpur", "Madhya Pradesh", 23.1815, 79.9864)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/jabalpur" }, { name: "Jabalpur", path: "/cities/jabalpur" }]} />
      <CityPageTemplate city="Jabalpur" />
    </>
  );
}
