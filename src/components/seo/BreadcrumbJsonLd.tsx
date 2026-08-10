import Script from "next/script";
import { getBreadcrumbSchema } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = getBreadcrumbSchema(items);
  const id = `breadcrumb-${items.map((i) => i.path.replace(/\//g, "-")).join("")}`;

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  );
}
