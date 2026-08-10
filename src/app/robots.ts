import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        // Allow Google's image bot full access
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://expecto.online/sitemap.xml",
    host: "https://expecto.online",
  };
}
