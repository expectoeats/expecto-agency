import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Ghaziabad | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Ghaziabad, Delhi NCR. Custom websites, CRM software, ecommerce stores, startup websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/ghaziabad" },
  keywords: ["website design ghaziabad", "web development ghaziabad", "digital agency ghaziabad", "crm development ghaziabad", "ecommerce website ghaziabad", "affordable website ghaziabad delhi ncr"],
  openGraph: {
    title: "Website Design in Ghaziabad | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Ghaziabad. 7-day delivery.",
    url: "https://expecto.online/cities/ghaziabad",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-ghaziabad" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Ghaziabad", "Uttar Pradesh", 28.6692, 77.4538)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/ghaziabad" }, { name: "Ghaziabad", path: "/cities/ghaziabad" }]} />
      <CityPageTemplate city="Ghaziabad" />
    </>
  );
}
