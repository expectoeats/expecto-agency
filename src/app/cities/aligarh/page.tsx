import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Aligarh | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Aligarh, Uttar Pradesh. Custom websites, CRM software, coaching websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/aligarh" },
  keywords: ["website design aligarh", "web development aligarh", "digital agency aligarh", "crm development aligarh", "coaching website aligarh", "affordable website aligarh uttar pradesh"],
  openGraph: {
    title: "Website Design in Aligarh | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching websites starting ₹1,999 in Aligarh. 7-day delivery.",
    url: "https://expecto.online/cities/aligarh",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-aligarh" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Aligarh", "Uttar Pradesh", 27.8974, 78.0880)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/aligarh" }, { name: "Aligarh", path: "/cities/aligarh" }]} />
      <CityPageTemplate city="Aligarh" />
    </>
  );
}
