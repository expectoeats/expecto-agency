import { Metadata } from "next";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Gym & Fitness Website Design India | Starting ₹1,999 | Expecto",
  description: "Professional gym and fitness website design in India starting ₹1,999. Online membership, class schedules, trainer profiles, SEO-ready. 7-day delivery. Expecto Digital Agency.",
  alternates: { canonical: "https://expecto.online/niche/gym-fitness" },
  openGraph: { title: "Gym & Fitness Website Design India | Expecto", description: "Gym and fitness websites starting ₹1,999 with online membership and 7-day delivery.", url: "https://expecto.online/niche/gym-fitness", type: "website" },
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
          { name: "Niche", path: "/niche/gym-fitness" },
          { name: "Gym and Fitness Website Design India", path: "/niche/gym-fitness" },
        ]}
      />
      <NichePageTemplate
        niche="Gym and Fitness Website Design India"
        ctaLabel="Get your gym website"
        demos={demos}
        services={services}
        pricing={pricing}
        faqs={faqs}
      />
    </>
  );
}
