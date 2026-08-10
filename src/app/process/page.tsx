import { Metadata } from "next";
import ProcessPageClient from "./ProcessPageClient";

export const metadata: Metadata = {
  title: "Our Process | Expecto Digital Agency",
  description:
    "How Expecto builds digital products — from understanding the business problem to delivery. A transparent, step-by-step process for websites, web apps and business systems.",
  alternates: { canonical: "https://expecto.online/process" },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
