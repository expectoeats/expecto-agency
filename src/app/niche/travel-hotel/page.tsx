import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Travel Agency & Hotel Website Design India | Booking Website | Expecto | Starting ₹2,999",
  description: "Professional travel agency and hotel website design in India starting ₹2,999. Online booking, tour packages, room booking, payment gateway. Agra, Varanasi, Mathura, Ujjain, Delhi. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/travel-hotel" },
  keywords: ["travel agency website india", "hotel website design india", "tour operator website india", "hotel website agra", "hotel website varanasi", "hotel website mathura", "hotel website ujjain", "travel website delhi", "online booking website india", "homestay website india", "resort website india", "tour package website india"],
  openGraph: {
    title: "Travel Agency & Hotel Website Design India | Expecto Digital Agency",
    description: "Travel and hotel websites with online booking starting ₹2,999. Agra, Varanasi, Mathura, Ujjain, Delhi.",
    url: "https://expecto.online/niche/travel-hotel",
    type: "website",
  },
};

const faqs = [
  { q: "What features does a hotel website need?", a: "A hotel website needs room listings with photos, online booking with payment, location map, reviews, amenities, and contact information." },
  { q: "How much does a hotel website cost in India?", a: "Our hotel websites start at Rs. 2,999 for a basic informational website. A full booking website with payment gateway starts at Rs. 7,999." },
  { q: "Do you build travel websites for Agra, Varanasi, and Mathura?", a: "Yes. We specialize in travel and hotel websites for tourist destinations including Agra, Varanasi, Mathura, Vrindavan, Ujjain, and other pilgrimage and tourist cities." },
  { q: "Can tourists book tours directly from the website?", a: "Yes. We integrate online booking with payment gateway, WhatsApp confirmation, and automated email receipts." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("Travel Agency & Hotel Website Design India", "Professional travel and hotel website design starting Rs. 2,999 with online booking and payment gateway.", "/niche/travel-hotel");

  return (
    <>
      <Script id="schema-faq-travel" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-travel" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/travel-hotel" }, { name: "Travel & Hotel Website", path: "/niche/travel-hotel" }]} />
      <NichePageTemplate
        niche="Travel Agency & Hotel Website"
        ctaLabel="Get Your Travel Website"
        demos={["Hotel Booking Website", "Tour Package Website", "Travel Agency Website", "Homestay Website", "Resort Website", "Pilgrimage Tour Website"]}
        services={["Online room & tour booking", "Payment gateway integration", "Tour package listings with photos", "WhatsApp booking confirmation", "Google Maps & location integration", "Serving Agra, Varanasi, Mathura, Ujjain, Delhi"]}
        pricing={["Basic Travel Website - Rs. 2,999", "Booking Website - Rs. 6,999", "Full Travel Portal - Rs. 14,999"]}
        faqs={faqs}
      />
    </>
  );
}
