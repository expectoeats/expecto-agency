import { Metadata } from "next";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Cafe & Restaurant Website Design India | Starting ₹1,999 | Expecto",
  description: "Professional cafe and restaurant website design in India starting ₹1,999. Digital menu, WhatsApp ordering, table booking, SEO-ready. 7-day delivery. Expecto Digital Agency, Ballia.",
  alternates: { canonical: "https://expecto.online/niche/cafe-restaurant" },
  openGraph: { title: "Cafe & Restaurant Website Design India | Expecto", description: "Cafe and restaurant websites starting ₹1,999 with digital menu, WhatsApp ordering and 7-day delivery.", url: "https://expecto.online/niche/cafe-restaurant", type: "website" },
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
          { name: "Niche", path: "/niche/cafe-restaurant" },
          { name: "Cafe and Restaurant Website Design India", path: "/niche/cafe-restaurant" },
        ]}
      />
      <NichePageTemplate
        niche="Cafe and Restaurant Website Design India"
        ctaLabel="Get your cafe website"
        demos={demos}
        services={services}
        pricing={pricing}
        faqs={faqs}
      />
    </>
  );
}
