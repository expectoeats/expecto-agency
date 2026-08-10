import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Indore | CRM, SaaS & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Indore, Madhya Pradesh. Custom websites, CRM software, SaaS development, ecommerce stores, startup websites starting ₹1,999. 7-day delivery. Serving Indore, Bhopal, Jabalpur, Gwalior. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/indore" },
  keywords: ["website design indore", "web development indore", "digital agency indore", "crm development indore", "saas development indore", "custom website indore", "ecommerce website indore", "startup website indore", "coaching website indore", "hospital website indore", "affordable website indore madhya pradesh", "website banwao indore"],
  openGraph: {
    title: "Website Design in Indore | CRM, SaaS & Custom Website | Expecto",
    description: "Custom websites, CRM, SaaS starting ₹1,999 in Indore. 7-day delivery guaranteed.",
    url: "https://expecto.online/cities/indore",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-indore" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Indore", "Madhya Pradesh", 22.7196, 75.8577)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/indore" }, { name: "Indore", path: "/cities/indore" }]} />
      <CityPageTemplate city="Indore" />
    </>
  );
}
