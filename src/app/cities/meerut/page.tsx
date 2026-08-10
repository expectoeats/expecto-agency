import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Meerut | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Meerut, Uttar Pradesh. Custom websites, CRM software, ecommerce stores, coaching websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/meerut" },
  keywords: ["website design meerut", "web development meerut", "digital agency meerut", "crm development meerut", "ecommerce website meerut", "affordable website meerut uttar pradesh"],
  openGraph: {
    title: "Website Design in Meerut | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Meerut. 7-day delivery.",
    url: "https://expecto.online/cities/meerut",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-meerut" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Meerut", "Uttar Pradesh", 28.9845, 77.7064)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/meerut" }, { name: "Meerut", path: "/cities/meerut" }]} />
      <CityPageTemplate city="Meerut" />
    </>
  );
}
