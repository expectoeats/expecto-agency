import type { Metadata } from "next";
import { Inter, Chivo_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  fullKeywordList,
  siteUrl,
  siteName,
  getOrganizationSchema,
  getWebSiteSchema,
  getLocalBusinessSchema,
  getWebDesignBusinessSchema,
  getSiteLinksSearchBoxSchema,
} from "@/lib/seo";

// Variable fonts — no weight array needed (prevents Turbopack font query errors)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Expecto Digital Agency — Websites, Web Apps & Business Software",
    template: "%s | Expecto",
  },
  description:
    "Expecto designs and develops high-performance websites, web applications, e-commerce platforms, CRM systems and custom digital products for businesses across India.",
  keywords: fullKeywordList,
  authors: [{ name: "Expecto Digital Agency", url: siteUrl }],
  creator: "Expecto Digital Agency",
  publisher: "Expecto Digital Agency",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: "Expecto Digital Agency | Website Design India Starting Rs. 1,999",
    description:
      "India's fast digital agency. Websites, apps and SaaS starting Rs. 1,999 with 7-day delivery.",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Expecto Digital Agency", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expecto Digital Agency | Website Design India Starting Rs. 1,999",
    description: "India's fast digital agency. Websites, apps and SaaS starting Rs. 1,999 with 7-day delivery.",
    images: [`${siteUrl}/opengraph-image`],
    creator: "@expecto_online",
    site: "@expecto_online",
  },
  verification: {
    google: "6zxn93rWAxCldNrnSq0SfYdK0CFgyCv7bFQsw_GlB9I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: siteName,
  appleWebApp: {
    capable: true,
    title: "Expecto",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ballia, Uttar Pradesh, India",
    "geo.position": "25.7581;84.1497",
    ICBM: "25.7581, 84.1497",
    "og:locale:alternate": "hi_IN",
    "theme-color": "#FFFFFF",
    "color-scheme": "light",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = getOrganizationSchema();
  const webSchema = getWebSiteSchema();
  const localSchema = getLocalBusinessSchema();
  const wdbSchema = getWebDesignBusinessSchema();
  const slsSchema = getSiteLinksSearchBoxSchema();

  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} ${chivoMono.variable}`}>
      <head>
        {/* Explicit viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* High-priority direct static LCP image preload for instant 0ms paint */}
        <link
          rel="preload"
          as="image"
          href="/hero/analytics.webp"
          fetchPriority="high"
        />
      </head>
      <body className="bg-white text-[var(--text)] antialiased">
        <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} strategy="lazyOnload" />
        <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }} strategy="lazyOnload" />
        <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} strategy="lazyOnload" />
        <Script id="schema-webdesignbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wdbSchema) }} strategy="lazyOnload" />
        <Script id="schema-sitelinks-searchbox" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(slsSchema) }} strategy="lazyOnload" />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
