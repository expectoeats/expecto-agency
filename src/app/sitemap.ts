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
    // ── Blog ──
    { url: `${BASE}/blog`,                                                               lastModified: NOW, changeFrequency: "weekly",  priority: 0.88 },
    { url: `${BASE}/blog/website-development-cost-in-ballia`,                            lastModified: NOW, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/blog/how-we-ranked-coaching-institute-1-on-google`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/blog/best-cms-for-small-business-india`,                             lastModified: NOW, changeFrequency: "monthly", priority: 0.86 },
    // ── Ballia local SEO cluster — highest priority after homepage ──
    { url: `${BASE}/cities/ballia`,                          lastModified: NOW, changeFrequency: "weekly", priority: 0.98 },
    { url: `${BASE}/website-development-ballia`,             lastModified: NOW, changeFrequency: "weekly", priority: 0.97 },
    { url: `${BASE}/portfolio-website-developer-ballia`,     lastModified: NOW, changeFrequency: "weekly", priority: 0.96 },
    // ── Eastern UP city hubs — rich content pages ──
    { url: `${BASE}/cities/varanasi`,                        lastModified: NOW, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/cities/gorakhpur`,                       lastModified: NOW, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/cities/mau`,                             lastModified: NOW, changeFrequency: "weekly", priority: 0.93 },
    { url: `${BASE}/cities/ghazipur`,                        lastModified: NOW, changeFrequency: "weekly", priority: 0.93 },
    // ── Programmatic /website-development-[city] pages ──
    { url: `${BASE}/website-development-varanasi`,           lastModified: NOW, changeFrequency: "weekly", priority: 0.93 },
    { url: `${BASE}/website-development-gorakhpur`,          lastModified: NOW, changeFrequency: "weekly", priority: 0.93 },
    { url: `${BASE}/website-development-mau`,                lastModified: NOW, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/website-development-ghazipur`,           lastModified: NOW, changeFrequency: "weekly", priority: 0.92 },
  ];

  // ── City pages ────────────────────────────────────────────────────────────
  const cities = [
    // Uttar Pradesh — excluding Eastern UP cluster (handled above with rich pages)
    "lucknow", "kanpur", "agra", "prayagraj",
    "noida", "meerut", "aligarh", "bareilly",
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
