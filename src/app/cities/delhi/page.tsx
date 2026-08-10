import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Delhi | CRM, SaaS & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Delhi. Custom websites, CRM software, SaaS development, ecommerce stores, startup websites starting ₹1,999. 7-day delivery. Serving all Delhi areas — South Delhi, North Delhi, East Delhi, West Delhi, Dwarka, Rohini. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/delhi" },
  keywords: ["website design delhi", "web development delhi", "digital agency delhi", "crm development delhi", "saas development delhi", "custom website delhi", "ecommerce website delhi", "startup website delhi", "website design new delhi", "website design south delhi", "website design north delhi", "affordable website delhi"],
  openGraph: {
    title: "Website Design in Delhi | CRM, SaaS & Custom Website | Expecto",
    description: "Custom websites, CRM, SaaS starting ₹1,999 in Delhi. 7-day delivery guaranteed. Serving all Delhi areas.",
    url: "https://expecto.online/cities/delhi",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-delhi" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Delhi", "Delhi", 28.6139, 77.2090)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/delhi" }, { name: "Delhi", path: "/cities/delhi" }]} />
      <CityPageTemplate city="Delhi" />
    </>
  );
}
