import type { Metadata } from "next";
import { Montserrat, Ubuntu, JetBrains_Mono } from "next/font/google";
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
} from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
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
    "geo.position": "28.4595;77.0266",
    ICBM: "28.4595, 77.0266",
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

  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${montserrat.variable} ${ubuntu.variable} ${mono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://s.wordpress.com" />
        <link rel="preconnect" href="https://s.wordpress.com" crossOrigin="" />
      </head>
      <body className="bg-white text-[var(--text)] antialiased">
        <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} strategy="lazyOnload" />
        <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }} strategy="lazyOnload" />
        <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} strategy="lazyOnload" />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}


