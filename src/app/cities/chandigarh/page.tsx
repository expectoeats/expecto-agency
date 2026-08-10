import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Chandigarh | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Chandigarh. Custom websites, CRM software, ecommerce stores, coaching websites, startup websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/chandigarh" },
  keywords: ["website design chandigarh", "web development chandigarh", "digital agency chandigarh", "crm development chandigarh", "startup website chandigarh", "ecommerce website chandigarh", "affordable website chandigarh punjab haryana"],
  openGraph: {
    title: "Website Design in Chandigarh | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, startup websites starting ₹1,999 in Chandigarh. 7-day delivery.",
    url: "https://expecto.online/cities/chandigarh",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-chandigarh" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Chandigarh", "Chandigarh", 30.7333, 76.7794)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/chandigarh" }, { name: "Chandigarh", path: "/cities/chandigarh" }]} />
      <CityPageTemplate city="Chandigarh" />
    </>
  );
}
