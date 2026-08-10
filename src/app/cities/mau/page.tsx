import { Metadata } from "next";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import WebDevCityPage from "@/components/seo/WebDevCityPage";
import { getCitySchema, getFAQSchema, siteUrl } from "@/lib/seo";
import { getCityData } from "@/lib/citiesData";

const city = getCityData("mau")!;

export const metadata: Metadata = {
  title: "Website Design in Mau UP | Textile, Coaching & Business Websites | Expecto | ₹1,999",
  description:
    "Best website design agency in Mau, Uttar Pradesh. Custom websites for textile businesses, coaching institutes, traders & e-commerce starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  keywords: city.targetKeywords,
  alternates: {
    canonical: `${siteUrl}/cities/mau`,
    languages: { "en-IN": `${siteUrl}/cities/mau`, "x-default": `${siteUrl}/cities/mau` },
  },
  openGraph: {
    title: "Website Design in Mau UP | Textile & Coaching Websites | Expecto",
    description: "Custom websites for Mau textile businesses, coaching institutes & traders starting ₹1,999. 7-day delivery.",
    url: `${siteUrl}/cities/mau`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development Mau UP — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design in Mau UP | Expecto Digital Agency",
    description: "Textile, coaching & business websites in Mau from ₹1,999. 7-day delivery.",
    images: [`${siteUrl}/opengraph-image`],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Mau, Uttar Pradesh, India",
    "geo.position": "25.9407;83.5610",
    ICBM: "25.9407, 83.5610",
  },
};

export default function Page() {
  const citySchema = getCitySchema("Mau", "Uttar Pradesh", 25.9407, 83.5610);
  const faqSchema  = getFAQSchema(city.faqs);
  return (
    <>
      <Script id="schema-city-mau" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="schema-faq-mau" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Cities", path: "/cities/mau" },
        { name: "Website Development Mau", path: "/cities/mau" },
      ]} />
      <WebDevCityPage city={city} />
    </>
  );
}
