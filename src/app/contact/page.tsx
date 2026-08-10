import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact - Start Your Project Today",
  description:
    "Get in touch with Expecto Digital Agency in Ballia, Uttar Pradesh. Affordable websites, apps, and SaaS delivery across India.",
  alternates: { canonical: "https://expecto.online/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <ContactPageClient />
    </>
  );
}
