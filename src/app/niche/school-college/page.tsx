import { Metadata } from "next";
import Script from "next/script";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "School & College Website Design India | Student Portal | Expecto | Starting ₹2,999",
  description: "Professional school and college website design in India starting ₹2,999. Student portal, online admission, fee payment, notice board, gallery. Uttar Pradesh, Delhi, Madhya Pradesh. 7-day delivery. Call +91 87072 24376.",
  alternates: { canonical: "https://expecto.online/niche/school-college" },
  keywords: ["school website design india", "college website design india", "university website design india", "school website lucknow", "school website delhi", "school website indore", "school website bhopal", "student portal development india", "online admission website india", "educational institute website india"],
  openGraph: {
    title: "School & College Website Design India | Expecto Digital Agency",
    description: "School and college websites with student portal, online admission starting ₹2,999. UP, Delhi, MP.",
    url: "https://expecto.online/niche/school-college",
    type: "website",
  },
};

const faqs = [
  { q: "What features should a school website have?", a: "A school website should have online admission form, fee payment, notice board, gallery, timetable, staff directory, and contact information." },
  { q: "How much does a school website cost in India?", a: "Our school websites start at Rs. 2,999 for a basic informational website. A full school management portal with student login starts at Rs. 9,999." },
  { q: "Do you build school websites in UP, Delhi, and MP?", a: "Yes. We have built school and college websites across Lucknow, Kanpur, Delhi, Noida, Indore, Bhopal, and Jabalpur." },
  { q: "Can parents track their child's progress online?", a: "Yes. We can build a parent portal where parents can check attendance, marks, fee status, and receive notifications." },
];

export default function Page() {
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema("School & College Website Design India", "Professional school and college website design starting Rs. 2,999 with student portal and online admission.", "/niche/school-college");

  return (
    <>
      <Script id="schema-faq-school" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-service-school" type="application/ld+json" strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/niche/school-college" }, { name: "School & College Website", path: "/niche/school-college" }]} />
      <NichePageTemplate
        niche="School & College Website"
        ctaLabel="Get Your School Website"
        demos={["School Information Website", "College Admission Portal", "University Website", "Coaching Institute Website", "Online Learning Portal", "Student Management System"]}
        services={["Online admission & enquiry form", "Student & parent portal", "Fee payment integration", "Notice board & gallery", "SEO for local school searches", "Serving UP, Delhi & MP schools"]}
        pricing={["Basic School Website - Rs. 2,999", "School with Portal - Rs. 7,999", "Full Management System - Rs. 19,999"]}
        faqs={faqs}
      />
    </>
  );
}
