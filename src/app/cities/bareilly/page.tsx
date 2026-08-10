import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Bareilly | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Bareilly, Uttar Pradesh. Custom websites, CRM software, coaching websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/bareilly" },
  keywords: ["website design bareilly", "web development bareilly", "digital agency bareilly", "crm development bareilly", "coaching website bareilly", "affordable website bareilly uttar pradesh"],
  openGraph: {
    title: "Website Design in Bareilly | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching websites starting ₹1,999 in Bareilly. 7-day delivery.",
    url: "https://expecto.online/cities/bareilly",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-bareilly" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Bareilly", "Uttar Pradesh", 28.3670, 79.4304)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/bareilly" }, { name: "Bareilly", path: "/cities/bareilly" }]} />
      <CityPageTemplate city="Bareilly" />
    </>
  );
}
