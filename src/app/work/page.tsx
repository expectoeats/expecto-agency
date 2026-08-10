import { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Our Work - Projects and Case Studies",
  description: "See real projects by Expecto for cafes, startups, and growth-focused businesses.",
  alternates: { canonical: "https://expecto.online/work" },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]} />
      <WorkPageClient />
    </>
  );
}
