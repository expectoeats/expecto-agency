import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Ahmedabad | CRM & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Ahmedabad, Gujarat. Custom websites, CRM software, ecommerce stores, startup websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/ahmedabad" },
  keywords: ["website design ahmedabad", "web development ahmedabad", "digital agency ahmedabad", "crm development ahmedabad", "ecommerce website ahmedabad", "startup website ahmedabad", "affordable website ahmedabad gujarat"],
  openGraph: {
    title: "Website Design in Ahmedabad | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, ecommerce starting ₹1,999 in Ahmedabad. 7-day delivery.",
    url: "https://expecto.online/cities/ahmedabad",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-ahmedabad" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Ahmedabad", "Gujarat", 23.0225, 72.5714)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/ahmedabad" }, { name: "Ahmedabad", path: "/cities/ahmedabad" }]} />
      <CityPageTemplate city="Ahmedabad" />
    </>
  );
}
