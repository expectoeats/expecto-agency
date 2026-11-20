import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NGO & Trust Website Design India | Donation Website | Expecto |",
  description: "Professional NGO, trust and charity website design in India. Online donation, volunteer registration, project showcase, impact reports. Uttar Pradesh, Delhi, Madhya Pradesh. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/ngo-trust" },
  keywords: ["ngo website design india", "trust website design india", "charity website india", "donation website india", "ngo website lucknow", "ngo website delhi", "ngo website indore", "volunteer registration website india", "social organization website india", "foundation website india"],
  openGraph: {
    title: "NGO & Trust Website Design India | Expecto Digital Agency",
    description: "NGO and trust websites with online donation. UP, Delhi, MP.",
    url: "https://expecto.online/niche/ngo-trust",
    type: "website",
  },
};

const faqs = [
  { q: "What should an NGO website include?", a: "An NGO website should have mission & vision, project showcase, impact numbers, donation button, volunteer registration, team profiles, and contact information." },
  { q: "How much does an NGO website cost in India?", a: "Our NGO websites start at Contact Us for a basic informational website. A full NGO website with donation gateway starts at Contact Us." },
  { q: "Can donors donate online through the website?", a: "Yes. We integrate Razorpay or PayU donation gateway with automatic receipt generation and donor management." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("NGO & Trust Website Design India", "Professional NGO and trust website design starting Contact Us with online donation and volunteer registration.", "/niche/ngo-trust");

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
        pricing={["Basic NGO Website - Contact Us", "NGO with Donation - Contact Us", "Full NGO Portal - Contact Us"]}
        faqs={faqs}
      />
    </>
  );
}
