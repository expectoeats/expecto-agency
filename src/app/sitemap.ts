import { MetadataRoute } from "next";

const BASE = "https://expecto.online";
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                    lastModified: NOW, changeFrequency: "weekly",  priority: 1.00 },
    { url: `${BASE}/services`,      lastModified: NOW, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/pricing`,       lastModified: NOW, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/work`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`,         lastModified: NOW, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE}/contact`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.90 },
  ];

  // ── City pages ────────────────────────────────────────────────────────────
  const cities = [
    // Uttar Pradesh
    "lucknow", "kanpur", "agra", "ballia", "varanasi", "prayagraj",
    "gorakhpur", "noida", "meerut", "aligarh", "bareilly",
    // Delhi NCR
    "gurgaon", "delhi", "faridabad", "ghaziabad",
    // Madhya Pradesh
    "indore", "bhopal", "jabalpur", "gwalior", "ujjain",
    // Other
    "jaipur", "chandigarh", "pune", "ahmedabad", "surat", "vadodara", "patna",
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE}/cities/${city}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Niche / service pages ─────────────────────────────────────────────────
  const niches = [
    // Existing
    "cafe-restaurant",
    "gym-fitness",
    "coaching-institute",
    "salon-spa",
    "clinic-doctor",
    "real-estate",
    "ecommerce",
    // New
    "crm-software",
    "custom-website",
    "landing-page",
    "school-college",
    "hospital-healthcare",
    "travel-hotel",
    "ngo-trust",
  ];

  const nichePages: MetadataRoute.Sitemap = niches.map((niche) => ({
    url: `${BASE}/niche/${niche}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...cityPages, ...nichePages];
}
