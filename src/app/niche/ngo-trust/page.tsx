import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NGO & Trust Website Design India | Donation Website | Expecto | Starting ₹1,999",
  description: "Professional NGO, trust and charity website design in India starting ₹1,999. Online donation, volunteer registration, project showcase, impact reports. Uttar Pradesh, Delhi, Madhya Pradesh. 7-day delivery. Call +91 62024 79470.",
  alternates: { canonical: "https://expecto.online/niche/ngo-trust" },
  keywords: ["ngo website design india", "trust website design india", "charity website india", "donation website india", "ngo website lucknow", "ngo website delhi", "ngo website indore", "volunteer registration website india", "social organization website india", "foundation website india"],
  openGraph: {
    title: "NGO & Trust Website Design India | Expecto Digital Agency",
    description: "NGO and trust websites with online donation starting ₹1,999. UP, Delhi, MP.",
    url: "https://expecto.online/niche/ngo-trust",
    type: "website",
  },
};

const faqs = [
  { q: "What should an NGO website include?", a: "An NGO website should have mission & vision, project showcase, impact numbers, donation button, volunteer registration, team profiles, and contact information." },
  { q: "How much does an NGO website cost in India?", a: "Our NGO websites start at Rs. 1,999 for a basic informational website. A full NGO website with donation gateway starts at Rs. 4,999." },
  { q: "Can donors donate online through the website?", a: "Yes. We integrate Razorpay or PayU donation gateway with automatic receipt generation and donor management." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("NGO & Trust Website Design India", "Professional NGO and trust website design starting Rs. 1,999 with online donation and volunteer registration.", "/niche/ngo-trust");

  return (
    <>
      <Script id="schema-faq-ngo" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-ngo" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/ngo-trust" }, { name: "NGO & Trust Website", path: "/niche/ngo-trust" }]} />
      <NichePageTemplate
        niche="NGO & Trust Website"
        ctaLabel="Get Your NGO Website"
        demos={["NGO Information Website", "Charity Donation Website", "Foundation Website", "Religious Trust Website", "Social Welfare Website", "Volunteer Portal"]}
        services={["Online donation with payment gateway", "Volunteer registration form", "Project & impact showcase", "Annual report & gallery", "SEO for NGO searches", "Serving UP, Delhi & MP NGOs"]}
        pricing={["Basic NGO Website - Rs. 1,999", "NGO with Donation - Rs. 4,999", "Full NGO Portal - Rs. 9,999"]}
        faqs={faqs}
      />
    </>
  );
}
