import { Metadata } from "next";
import NichePageTemplate from "@/components/seo/NichePageTemplate";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Coaching Institute Website Design India | Expecto Digital Agency",
  description: "Professional coaching institute website design in India. Student portal, batch management, SEO-ready, admin dashboard. Real projects delivered. Ranked #1 for IIT JEE Coaching in Kanpur. Expecto Digital Agency.",
  alternates: { canonical: "https://expecto.online/niche/coaching-institute" },
  openGraph: {
    title: "Coaching Institute Website Design India | Expecto",
    description: "Coaching institute websites with student portal, SEO and admin dashboard. Ranked #1 for IIT JEE Coaching in Kanpur.",
    url: "https://expecto.online/niche/coaching-institute",
    type: "website",
  },
};

const services = [
  {
    title: "Website Design & Development",
    desc: "A fully custom coaching website designed around how students and parents evaluate institutes — with results, faculty, courses and enquiry flow front and centre.",
  },
  {
    title: "Student & Course Management",
    desc: "Admin dashboard to manage batches, courses, fees, faculty and results without needing a developer for every update.",
  },
  {
    title: "Local SEO Architecture",
    desc: "Built to rank for searches like 'Best IIT JEE Coaching in [City]'. Proper heading structure, schema markup, page speed and Google Business Profile setup.",
  },
  {
    title: "Performance Optimisation",
    desc: "Fast loading on mobile networks, optimised images and clean code. Speed is part of the design — not an afterthought.",
  },
  {
    title: "WhatsApp & Enquiry Integration",
    desc: "Direct WhatsApp enquiry buttons, lead capture forms and callback requests — so students contact you immediately.",
  },
  {
    title: "Results & Faculty Showcase",
    desc: "Structured pages for displaying toppers, rank holders, faculty profiles and testimonials that build trust with prospective students.",
  },
];

const demos = [
  {
    name: "NEET Coaching Website",
    type: "Education · Website",
    url: "https://expecto-neet-coaching.vercel.app/",
    image: "/work/coaching/expecto-demo-coaching.webp",
  },
  {
    name: "Education CRM",
    type: "Education · Web Application",
    url: "https://expecto-edu-crm.vercel.app/",
    image: "/work/edu-crm.webp",
  },
  {
    name: "Kindergarten Website",
    type: "Education · Website",
    url: "https://expecto-kindergarten.vercel.app/",
    image: "/work/school/kindergarten.webp",
  },
];

const screenshots = [
  {
    src: "/work/coaching/expecto-demo-coaching.webp",
    alt: "NEET coaching website demo",
    caption: "Coaching website with results, courses and faculty — built for conversion.",
  },
  {
    src: "/work/school/kindergarten.webp",
    alt: "Kindergarten school website",
    caption: "Education website with admissions flow and clear hierarchy.",
  },
  {
    src: "/work/edu-crm.webp",
    alt: "Education CRM dashboard",
    caption: "Lead and student management system for institutes.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "₹1,999",
    desc: "For coaching institutes that need a clean, fast website with basic course information and enquiry flow.",
    features: [
      "Custom homepage design",
      "Courses & batches page",
      "Faculty section",
      "WhatsApp enquiry button",
      "On-page SEO setup",
      "Mobile responsive",
    ],
  },
  {
    tier: "Growth",
    price: "₹3,999",
    desc: "For growing institutes that need a complete website with results, admissions and multiple pages.",
    features: [
      "Everything in Starter",
      "Results / toppers page",
      "Admissions page",
      "Google Maps integration",
      "Schema markup",
      "30-day support",
    ],
  },
  {
    tier: "Complete",
    price: "₹7,999",
    desc: "For institutes that need a full digital system — website, admin panel and student management.",
    features: [
      "Everything in Growth",
      "Custom admin dashboard",
      "Course & batch management",
      "Faculty management",
      "Enquiry management",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "Will my coaching website rank on Google?",
    a: "Yes. We build with local SEO from day one — proper heading structure, schema markup, location pages, page speed and Google Business Profile setup. Interface Classes now ranks at the top for 'Best IIT JEE Coaching in Kanpur'.",
  },
  {
    q: "Can I update the website myself after delivery?",
    a: "On the Complete package, yes — you get a custom admin panel to update courses, batches, faculty, results and enquiries without touching code.",
  },
  {
    q: "How long does it take to build?",
    a: "Starter and Growth packages are typically delivered in 5–7 working days with content provided. The Complete package with admin panel takes 10–14 days.",
  },
  {
    q: "Do you have experience with coaching institutes specifically?",
    a: "Yes. We've designed and built websites for multiple coaching institutes including Interface Classes, Kanpur — which now ranks #1 for relevant local searches.",
  },
  {
    q: "Can you add a WhatsApp enquiry button?",
    a: "Yes, every package includes WhatsApp-first CTAs. Students can contact you directly with one tap.",
  },
];

const proofStats = [
  { value: "#1", label: "Local Search Rank" },
  { value: "7 Days", label: "Avg. Delivery" },
];

const seoProof = {
  logoUrl: "https://interfaceclasses.com/assets/logo-main.jpeg",
  logoAlt: "Interface Classes",
  rank: "#1 Rank",
  movedFrom: "100+",
  query: "Best IIT JEE Coaching in Kanpur",
  city: "Kanpur",
  bullets: [
    "Semantic heading structure (H1 → H2 → H3)",
    "Schema markup for LocalBusiness & Course",
    "Core Web Vitals — LCP, CLS, FID optimised",
    "Location-specific content architecture",
    "Google Business Profile setup & alignment",
    "Internal linking & crawl structure",
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/niche/coaching-institute" },
          { name: "Coaching Institute Website Design", path: "/niche/coaching-institute" },
        ]}
      />
      <NichePageTemplate
        niche="Coaching Institute"
        headline="Coaching institute websites designed to rank and convert."
        subheadline="We design and develop coaching websites with SEO architecture, admin dashboards and structured content — so students find you and choose you."
        heroLabel="Education / Coaching Institutes"
        services={services}
        demos={demos}
        screenshots={screenshots}
        pricing={pricing}
        faqs={faqs}
        proofStats={proofStats}
        seoProof={seoProof}
      />
    </>
  );
}
