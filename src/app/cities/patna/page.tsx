import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Patna | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Patna, Bihar. Custom websites, CRM software, coaching websites, hospital websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/patna" },
  keywords: ["website design patna", "web development patna", "digital agency patna", "crm development patna", "coaching website patna", "hospital website patna", "ecommerce website patna", "affordable website patna bihar"],
  openGraph: {
    title: "Website Design in Patna | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching & hospital websites starting ₹1,999 in Patna. 7-day delivery.",
    url: "https://expecto.online/cities/patna",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-patna" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Patna", "Bihar", 25.5941, 85.1376)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/patna" }, { name: "Patna", path: "/cities/patna" }]} />
      <CityPageTemplate city="Patna" />
    </>
  );
}
