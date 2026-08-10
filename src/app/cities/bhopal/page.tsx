import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Bhopal | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Bhopal, Madhya Pradesh. Custom websites, CRM software, school websites, government websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/bhopal" },
  keywords: ["website design bhopal", "web development bhopal", "digital agency bhopal", "crm development bhopal", "custom website bhopal", "ecommerce website bhopal", "school website bhopal", "government website bhopal", "affordable website bhopal madhya pradesh", "website banwao bhopal"],
  openGraph: {
    title: "Website Design in Bhopal | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, school & government websites starting ₹1,999 in Bhopal. 7-day delivery.",
    url: "https://expecto.online/cities/bhopal",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-bhopal" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Bhopal", "Madhya Pradesh", 23.2599, 77.4126)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/bhopal" }, { name: "Bhopal", path: "/cities/bhopal" }]} />
      <CityPageTemplate city="Bhopal" />
    </>
  );
}
