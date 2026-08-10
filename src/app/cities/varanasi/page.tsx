import { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/seo/CityPageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getCitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Design in Varanasi | CRM, Hotel & Custom Website | Expecto Digital Agency | ₹1,999",
  description: "Best website design agency in Varanasi, Uttar Pradesh. Custom websites, CRM software, hotel websites, travel websites, coaching websites starting ₹1,999. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/cities/varanasi" },
  keywords: ["website design varanasi", "web development varanasi", "digital agency varanasi", "crm development varanasi", "hotel website varanasi", "travel website varanasi", "coaching website varanasi", "affordable website varanasi uttar pradesh", "website banwao varanasi"],
  openGraph: {
    title: "Website Design in Varanasi | CRM & Hotel Website | Expecto",
    description: "Custom websites, CRM, hotel & travel websites starting ₹1,999 in Varanasi. 7-day delivery.",
    url: "https://expecto.online/cities/varanasi",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script id="schema-city-varanasi" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCitySchema("Varanasi", "Uttar Pradesh", 25.3176, 82.9739)) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities/varanasi" }, { name: "Varanasi", path: "/cities/varanasi" }]} />
      <CityPageTemplate city="Varanasi" />
    </>
  );
}
