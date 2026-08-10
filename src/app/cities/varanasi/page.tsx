import { Metadata } from "next";
import Script from "next/script";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import WebDevCityPage from "@/components/seo/WebDevCityPage";
import { getCitySchema, getFAQSchema, siteUrl } from "@/lib/seo";
import { getCityData } from "@/lib/citiesData";

const city = getCityData("varanasi")!;

export const metadata: Metadata = {
  title: "Website Design in Varanasi | Hotels, Coaching & CRM | Expecto Digital Agency | ₹1,999",
  description:
    "Best website design agency in Varanasi, Uttar Pradesh. Custom websites, CRM software, hotel websites, travel websites, coaching websites starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
  keywords: city.targetKeywords,
  alternates: {
    canonical: `${siteUrl}/cities/varanasi`,
    languages: { "en-IN": `${siteUrl}/cities/varanasi`, "x-default": `${siteUrl}/cities/varanasi` },
  },
  openGraph: {
    title: "Website Design in Varanasi | Hotels, Coaching & CRM | Expecto",
    description: "Custom websites, CRM, hotel & travel websites starting ₹1,999 in Varanasi. 7-day delivery.",
    url: `${siteUrl}/cities/varanasi`,
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Website Development Varanasi — Expecto Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design in Varanasi | Expecto Digital Agency",
    description: "Custom websites for Varanasi hotels, coaching & businesses. ₹1,999. 7-day delivery.",
    images: [`${siteUrl}/opengraph-image`],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi, Uttar Pradesh, India",
    "geo.position": "25.3176;82.9739",
    ICBM: "25.3176, 82.9739",
  },
};

export default function Page() {
  const citySchema = getCitySchema("Varanasi", "Uttar Pradesh", 25.3176, 82.9739);
  const faqSchema  = getFAQSchema(city.faqs);
  return (
    <>
      <Script id="schema-city-varanasi" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="schema-faq-varanasi" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "Cities", path: "/cities/varanasi" },
        { name: "Website Development Varanasi", path: "/cities/varanasi" },
      ]} />
      <WebDevCityPage city={city} />
    </>
  );
}
