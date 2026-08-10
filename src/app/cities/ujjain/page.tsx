import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Ujjain | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Ujjain, Madhya Pradesh. Custom websites, CRM software, hotel websites, travel websites, temple trust websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/ujjain" },
  keywords: ["website design ujjain", "web development ujjain", "digital agency ujjain", "hotel website ujjain", "travel website ujjain", "temple website ujjain", "affordable website ujjain madhya pradesh"],
  openGraph: {
    title: "Website Design in Ujjain | CRM & Custom Website | Expecto",
    description: "Custom websites, hotel & travel websites starting ₹1,999 in Ujjain. 7-day delivery.",
    url: "https://expecto.online/cities/ujjain",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-ujjain" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Ujjain", "Madhya Pradesh", 23.1765, 75.7885)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/ujjain" }, { name: "Ujjain", path: "/cities/ujjain" }]} />
      <CityPageTemplate city="Ujjain" />
    </>
  );
}
