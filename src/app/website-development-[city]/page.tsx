import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getAllCitySlugs, getCityData } from "@/lib/citiesData";
import { siteUrl, sitePhone, getFAQSchema, getBreadcrumbSchema } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import WebDevCityPage from "@/components/seo/WebDevCityPage";

// ─── SSG: pre-render all 5 city pages at build time ──────────────────────────
export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityData(citySlug);
  if (!city) return { title: "Not Found" };

  const canonical = `${siteUrl}/website-development-${city.slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.targetKeywords,
    alternates: {
      canonical,
      languages: { "en-IN": canonical, "x-default": canonical },
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      type: "website",
      locale: "en_IN",
      siteName: "Expecto Digital Agency",
      images: [{
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Website Development in ${city.cityName} — Expecto Digital Agency`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Website Development in ${city.cityName} | Expecto`,
      description: city.metaDescription,
      images: [`${siteUrl}/opengraph-image`],
      creator: "@expecto_online",
      site: "@expecto_online",
    },
    other: {
      "geo.region": "IN-UP",
      "geo.placename": `${city.cityName}, Uttar Pradesh, India`,
      "geo.position": `${city.geo.lat};${city.geo.lng}`,
      ICBM: `${city.geo.lat}, ${city.geo.lng}`,
    },
  };
}

// ─── LocalBusiness / WebDesignBusiness Schema ─────────────────────────────────
function getCityWebDesignSchema(city: NonNullable<ReturnType<typeof getCityData>>) {
  return {
    "@context": "https://schema.org",
    "@type": ["WebDesignBusiness", "LocalBusiness"],
    "@id": `${siteUrl}/website-development-${city.slug}#webdesignbusiness`,
    name: `Expecto Digital Agency - Website Development ${city.cityName}`,
    url: `${siteUrl}/website-development-${city.slug}`,
    telephone: sitePhone,
    email: "hello@expecto.online",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    image: `${siteUrl}/logo.png`,
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png`, width: 512, height: 512 },
    description: city.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.cityName,
      addressRegion: city.state,
      postalCode: city.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${city.geo.lat},${city.geo.lng}`,
    areaServed: [
      { "@type": "City", name: city.cityName, containedInPlace: { "@type": "State", name: city.state } },
      ...city.nearbyAreas.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: { "@type": "State", name: city.state },
      })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Website Development Services — ${city.cityName}`,
      itemListElement: [
        {
          "@type": "Offer",
          name: `Website Development in ${city.cityName}`,
          description: `Professional website development in ${city.cityName}, ${city.state} starting ₹1,999 with 7-day delivery.`,
          price: "1999",
          priceCurrency: "INR",
          itemOffered: {
            "@type": "Service",
            name: `Website Development ${city.cityName}`,
            serviceType: "Web Development",
            areaServed: { "@type": "City", name: city.cityName },
          },
        },
        {
          "@type": "Offer",
          name: `Custom CRM Development ${city.cityName}`,
          description: `Custom CRM and admin panel development for ${city.cityName} businesses.`,
          itemOffered: {
            "@type": "Service",
            name: `CRM Development ${city.cityName}`,
            serviceType: "Software Development",
            areaServed: { "@type": "City", name: city.cityName },
          },
        },
        {
          "@type": "Offer",
          name: `E-commerce Website ${city.cityName}`,
          description: `Full-featured online store with payment gateway for ${city.cityName} businesses.`,
          itemOffered: {
            "@type": "Service",
            name: `E-commerce Website ${city.cityName}`,
            serviceType: "E-commerce Development",
            areaServed: { "@type": "City", name: city.cityName },
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/expecto.online",
      "https://www.linkedin.com/company/expecto-online",
      "https://expecto.online",
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function Page(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city: citySlug } = await params;
  const city = getCityData(citySlug);
  if (!city) notFound();

  const wdbSchema  = getCityWebDesignSchema(city);
  const faqSchema  = getFAQSchema(city.faqs);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home",                                        path: "/" },
    { name: `Website Development ${city.cityName}`,       path: `/website-development-${city.slug}` },
  ]);

  return (
    <>
      {/* ── Structured Data ── */}
      <Script
        id={`schema-wdb-${city.slug}`}
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wdbSchema) }}
      />
      <Script
        id={`schema-faq-${city.slug}`}
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`schema-breadcrumb-${city.slug}`}
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BreadcrumbJsonLd items={[
        { name: "Home",                                  path: "/" },
        { name: `Website Development ${city.cityName}`, path: `/website-development-${city.slug}` },
      ]} />

      <WebDevCityPage city={city} />
    </>
  );
}
