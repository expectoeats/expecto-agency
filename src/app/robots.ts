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
      // Block AI training crawlers — prevents content scraping
      { userAgent: "GPTBot",          disallow: "/" },
      { userAgent: "ChatGPT-User",    disallow: "/" },
      { userAgent: "CCBot",           disallow: "/" },
      { userAgent: "anthropic-ai",    disallow: "/" },
      { userAgent: "Claude-Web",      disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Omgilibot",       disallow: "/" },
      { userAgent: "FacebookBot",     disallow: "/" },
    ],
    sitemap: "https://expecto.online/sitemap.xml",
    host: "https://expecto.online",
  };
}
