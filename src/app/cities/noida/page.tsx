import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Noida | CRM, SaaS & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Noida, Uttar Pradesh. Custom websites, CRM software, SaaS development, startup websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/noida" },
  keywords: ["website design noida", "web development noida", "digital agency noida", "crm development noida", "saas development noida", "startup website noida", "ecommerce website noida", "custom website noida uttar pradesh"],
  openGraph: {
    title: "Website Design in Noida | CRM, SaaS & Custom Website | Expecto",
    description: "Custom websites, CRM, SaaS starting ₹1,999 in Noida. 7-day delivery guaranteed.",
    url: "https://expecto.online/cities/noida",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-noida" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Noida", "Uttar Pradesh", 28.5355, 77.3910)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/noida" }, { name: "Noida", path: "/cities/noida" }]} />
      <CityPageTemplate city="Noida" />
    </>
  );
}
