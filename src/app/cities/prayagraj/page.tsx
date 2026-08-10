import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Prayagraj Allahabad | CRM & Custom Website | Expecto | ₹1,999",
  description: "Best website design agency in Prayagraj (Allahabad), Uttar Pradesh. Custom websites, CRM software, coaching websites, hospital websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/prayagraj" },
  keywords: ["website design prayagraj", "website design allahabad", "web development prayagraj", "digital agency prayagraj", "crm development prayagraj", "coaching website prayagraj", "affordable website prayagraj uttar pradesh"],
  openGraph: {
    title: "Website Design in Prayagraj | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching websites starting ₹1,999 in Prayagraj. 7-day delivery.",
    url: "https://expecto.online/cities/prayagraj",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-prayagraj" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Prayagraj", "Uttar Pradesh", 25.4358, 81.8463)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/prayagraj" }, { name: "Prayagraj", path: "/cities/prayagraj" }]} />
      <CityPageTemplate city="Prayagraj" />
    </>
  );
}
