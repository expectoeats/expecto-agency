import { Metadata } from "next";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import WebDevCityPage from "@/components/seo/WebDevCityPage";
import { getCitySchema, getFAQSchema, siteUrl } from "@/lib/seo";
import { getCityData } from "@/lib/citiesData";

const city = getCityData("ghazipur")!;

export const metadata: Metadata = {
  title: "Website Design in Ghazipur UP | Coaching, Business & CRM | Expecto | ₹1,999",
  description:
    "Best website design agency in Ghazipur, Uttar Pradesh. Custom websites for coaching institutes, businesses, clinics & e-commerce starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  keywords: city.targetKeywords,
  alternates: {
    canonical: `${siteUrl}/cities/ghazipur`,
    languages: { "en-IN": `${siteUrl}/cities/ghazipur`, "x-default": `${siteUrl}/cities/ghazipur` },
  },
  openGraph: {
    title: "Website Design in Ghazipur UP | Coaching & Business Websites | Expecto",
    description: "Custom websites for Ghazipur coaching, businesses & clinics starting ₹1,999. 7-day delivery.",
    url: `${siteUrl}/cities/ghazipur`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development Ghazipur UP — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design in Ghazipur UP | Expecto Digital Agency",
    description: "Coaching, business & clinic websites in Ghazipur from ₹1,999. 7-day delivery.",
    images: [`${siteUrl}/opengraph-image`],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ghazipur, Uttar Pradesh, India",
    "geo.position": "25.5783;83.5833",
    ICBM: "25.5783, 83.5833",
  },
};

export default function Page() {
  const citySchema = getCitySchema("Ghazipur", "Uttar Pradesh", 25.5783, 83.5833);
  const faqSchema  = getFAQSchema(city.faqs);
  return (
    <>
      <Script id="schema-city-ghazipur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="schema-faq-ghazipur" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Cities", path: "/cities/ghazipur" },
        { name: "Website Development Ghazipur", path: "/cities/ghazipur" },
      ]} />
      <WebDevCityPage city={city} />
    </>
  );
}
