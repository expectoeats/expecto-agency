import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Gurgaon | CRM, SaaS & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Gurgaon, Delhi NCR. Custom websites, CRM software, SaaS development, startup websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/gurgaon" },
  keywords: ["website design gurgaon", "web development gurgaon", "digital agency gurgaon", "crm development gurgaon", "saas development gurgaon", "custom website gurgaon", "startup website gurgaon", "ecommerce website gurgaon", "website design gurugram", "affordable website gurgaon delhi ncr"],
  openGraph: {
    title: "Website Design in Gurgaon | CRM, SaaS & Custom Website | Expecto",
    description: "Custom websites, CRM, SaaS starting ₹1,999 in Gurgaon. 7-day delivery guaranteed.",
    url: "https://expecto.online/cities/gurgaon",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-gurgaon" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Gurgaon", "Haryana", 28.4595, 77.0266)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/gurgaon" }, { name: "Gurgaon", path: "/cities/gurgaon" }]} />
      <CityPageTemplate city="Gurgaon" />
    </>
  );
}
