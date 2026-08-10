import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Faridabad | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Faridabad, Delhi NCR. Custom websites, CRM software, ecommerce stores, business websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/faridabad" },
  keywords: ["website design faridabad", "web development faridabad", "digital agency faridabad", "crm development faridabad", "ecommerce website faridabad", "affordable website faridabad delhi ncr"],
  openGraph: {
    title: "Website Design in Faridabad | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Faridabad. 7-day delivery.",
    url: "https://expecto.online/cities/faridabad",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-faridabad" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Faridabad", "Haryana", 28.4089, 77.3178)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/faridabad" }, { name: "Faridabad", path: "/cities/faridabad" }]} />
      <CityPageTemplate city="Faridabad" />
    </>
  );
}
