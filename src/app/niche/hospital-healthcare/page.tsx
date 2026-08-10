import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hospital & Healthcare Website Design India | Doctor Website | Expecto | Starting ₹2,999",
  description: "Professional hospital, clinic and doctor website design in India starting ₹2,999. Online appointment booking, doctor profiles, patient portal, health blog. Uttar Pradesh, Delhi, Madhya Pradesh. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/hospital-healthcare" },
  keywords: ["hospital website design india", "clinic website design india", "doctor website design india", "hospital website lucknow", "hospital website delhi", "hospital website indore", "hospital website bhopal", "online appointment booking website india", "patient portal development india", "healthcare website india", "diagnostic center website india", "pharmacy website india"],
  openGraph: {
    title: "Hospital & Healthcare Website Design India | Expecto Digital Agency",
    description: "Hospital, clinic and doctor websites with appointment booking starting ₹2,999. UP, Delhi, MP.",
    url: "https://expecto.online/niche/hospital-healthcare",
    type: "website",
  },
};

const faqs = [
  { q: "What should a hospital website include?", a: "A hospital website should have doctor profiles, department listings, online appointment booking, emergency contact, patient testimonials, and health blog." },
  { q: "How much does a hospital website cost in India?", a: "Our hospital websites start at Rs. 2,999 for a basic clinic website. A full hospital website with patient portal and appointment system starts at Rs. 9,999." },
  { q: "Can patients book appointments online?", a: "Yes. We integrate online appointment booking with WhatsApp confirmation, email reminders, and calendar management." },
  { q: "Do you build hospital websites in Lucknow, Delhi, and Indore?", a: "Yes. We serve hospitals and clinics across Uttar Pradesh, Delhi NCR, and Madhya Pradesh." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("Hospital & Healthcare Website Design India", "Professional hospital and clinic website design starting Rs. 2,999 with online appointment booking.", "/niche/hospital-healthcare");

  return (
    <>
      <Script id="schema-faq-hospital" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-hospital" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/hospital-healthcare" }, { name: "Hospital & Healthcare Website", path: "/niche/hospital-healthcare" }]} />
      <NichePageTemplate
        niche="Hospital & Healthcare Website"
        ctaLabel="Get Your Hospital Website"
        demos={["Multi-Specialty Hospital Website", "Single Doctor Clinic Website", "Dental Clinic Website", "Ayurvedic Clinic Website", "Diagnostic Center Website", "Pharmacy Website"]}
        services={["Online appointment booking system", "Doctor profiles & specializations", "Patient portal & health records", "Emergency contact & location map", "Health blog for SEO", "Serving UP, Delhi & MP hospitals"]}
        pricing={["Basic Clinic Website - Rs. 2,999", "Hospital with Booking - Rs. 7,999", "Full Patient Portal - Rs. 19,999"]}
        faqs={faqs}
      />
    </>
  );
}
