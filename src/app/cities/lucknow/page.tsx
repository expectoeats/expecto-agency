import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Lucknow | CRM, Custom Website & App | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Lucknow, Uttar Pradesh. Custom websites, CRM software, coaching websites, hospital websites, ecommerce stores starting ₹1,999. 7-day delivery. Serving Lucknow, Kanpur, Varanasi, Prayagraj. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/cities/lucknow" },
  keywords: ["website design lucknow", "web development lucknow", "digital agency lucknow", "crm development lucknow", "custom website lucknow", "ecommerce website lucknow", "coaching website lucknow", "hospital website lucknow", "school website lucknow", "affordable website lucknow uttar pradesh", "website banwao lucknow"],
  openGraph: {
    title: "Website Design in Lucknow | CRM & Custom Website | Expecto",
    description: "Custom websites, CRM, coaching & hospital websites starting ₹1,999 in Lucknow. 7-day delivery.",
    url: "https://expecto.online/cities/lucknow",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-lucknow" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Lucknow", "Uttar Pradesh", 26.8467, 80.9462)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/lucknow" }, { name: "Lucknow", path: "/cities/lucknow" }]} />
      <CityPageTemplate city="Lucknow" />
    </>
  );
}
