import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About Expecto Digital Agency | Web Design Team Gurgaon India",
  description:
    "Meet the Expecto team — 4 specialists building websites, apps & SaaS for Indian businesses from Gurgaon, Haryana. Founded by Adarsh Singh. 50+ projects delivered with 100% client satisfaction.",
  alternates: { canonical: "https://expecto.online/about" },
  openGraph: {
    title: "About Expecto Digital Agency | Web Design Team Gurgaon",
    description: "4-person digital agency from Gurgaon building websites, apps & SaaS for Indian businesses. 50+ projects, 7-day delivery.",
    url: "https://expecto.online/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <AboutPageClient />
    </>
  );
}
