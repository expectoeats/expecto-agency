import { Metadata } from "next";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Real Estate Website Design India | Starting ₹1,999 | Expecto",
  description: "Professional real estate website design in India starting ₹1,999. Property listings, lead generation, SEO-ready. 7-day delivery. Expecto Digital Agency.",
  alternates: { canonical: "https://expecto.online/niche/real-estate" },
  openGraph: { title: "Real Estate Website Design India | Expecto", description: "Real estate websites starting ₹1,999 with property listings and 7-day delivery.", url: "https://expecto.online/niche/real-estate", type: "website" },
};

const demos = [
  "Lead-generation landing page",
  "SEO-optimized service website",
  "WhatsApp-integrated inquiry flow",
  "Mobile-first booking and contact layout",
];

const services = [
  "Niche copywriting and page structure",
  "Fast loading responsive design",
  "WhatsApp and call conversion setup",
  "On-page SEO for local searches",
];

const pricing = [
  "Starter: Rs. 1,999",
  "Growth: Rs. 3,999",
  "Conversion Pro: Rs. 7,999",
];

const faqs = [
  { q: "How fast can you launch?", a: "Most niche sites launch in 7 days with content ready." },
  { q: "Will this rank for local searches?", a: "Yes, we configure local SEO, schema, and metadata." },
  { q: "Can you connect WhatsApp leads?", a: "Yes, every package can include WhatsApp-first CTAs." },
  { q: "Do I own the code and domain?", a: "Yes, you keep full ownership after delivery." },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Niche", path: "/niche/real-estate" },
          { name: "Real Estate Website Design India", path: "/niche/real-estate" },
        ]}
      />
      <NichePageTemplate
        niche="Real Estate Website Design India"
        ctaLabel="Get your real estate website"
        demos={demos}
        services={services}
        pricing={pricing}
        faqs={faqs}
      />
    </>
  );
}
