import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Gwalior | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Gwalior, Madhya Pradesh. Custom websites, CRM software, ecommerce stores, coaching websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/gwalior" },
  keywords: ["website design gwalior", "web development gwalior", "digital agency gwalior", "crm development gwalior", "ecommerce website gwalior", "affordable website gwalior madhya pradesh"],
  openGraph: {
    title: "Website Design in Gwalior | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Gwalior. 7-day delivery.",
    url: "https://expecto.online/cities/gwalior",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-gwalior" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Gwalior", "Madhya Pradesh", 26.2183, 78.1828)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/gwalior" }, { name: "Gwalior", path: "/cities/gwalior" }]} />
      <CityPageTemplate city="Gwalior" />
    </>
  );
}
