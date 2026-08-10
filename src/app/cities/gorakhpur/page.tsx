import { Metadata } from "next";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import WebDevCityPage from "@/components/seo/WebDevCityPage";
import { getCitySchema, getFAQSchema, siteUrl } from "@/lib/seo";
import { getCityData } from "@/lib/citiesData";

const city = getCityData("gorakhpur")!;

export const metadata: Metadata = {
  title: "Website Design in Gorakhpur | Coaching, Hospital & CRM | Expecto Digital Agency | ₹1,999",
  description:
    "Best website design agency in Gorakhpur, Uttar Pradesh. Custom websites, CRM software, coaching websites, hospital websites, ecommerce stores starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  keywords: city.targetKeywords,
  alternates: {
    canonical: `${siteUrl}/cities/gorakhpur`,
    languages: { "en-IN": `${siteUrl}/cities/gorakhpur`, "x-default": `${siteUrl}/cities/gorakhpur` },
  },
  openGraph: {
    title: "Website Design in Gorakhpur | Coaching, Hospital & CRM | Expecto",
    description: "Custom websites, CRM, coaching & hospital websites starting ₹1,999 in Gorakhpur. 7-day delivery.",
    url: `${siteUrl}/cities/gorakhpur`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development Gorakhpur — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design in Gorakhpur | Expecto Digital Agency",
    description: "Custom websites for Gorakhpur coaching, hospitals & businesses. ₹1,999. 7-day delivery.",
    images: [`${siteUrl}/opengraph-image`],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Gorakhpur, Uttar Pradesh, India",
    "geo.position": "26.7606;83.3732",
    ICBM: "26.7606, 83.3732",
  },
};

export default function Page() {
  const citySchema = getCitySchema("Gorakhpur", "Uttar Pradesh", 26.7606, 83.3732);
  const faqSchema  = getFAQSchema(city.faqs);
  return (
    <>
      <Script id="schema-city-gorakhpur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="schema-faq-gorakhpur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Cities", path: "/cities/gorakhpur" },
        { name: "Website Development Gorakhpur", path: "/cities/gorakhpur" },
      ]} />
      <WebDevCityPage city={city} />
    </>
  );
}
