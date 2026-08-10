// ─── City Data Config ────────────────────────────────────────────────────────
// Single source of truth for all programmatic /website-development-[city] pages.
// Each city has unique hero copy, keywords, FAQs, and case-study framing.

export interface CityFAQ {
  q: string;
  a: string;
}

export interface CityService {
  title: string;
  desc: string;
}

export interface CityData {
  slug: string;
  cityName: string;
  state: string;
  stateShort: string;
  pincode: string;
  geo: { lat: number; lng: number };
  targetKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  caseStudyIntro: string;
  services: CityService[];
  faqs: CityFAQ[];
  nearbyAreas: string[];
  whatsappText: string;
}

export const citiesData: Record<string, CityData> = {

  // ── BALLIA ────────────────────────────────────────────────────────────────
  ballia: {
    slug: "ballia",
    cityName: "Ballia",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "277001",
    geo: { lat: 25.7581, lng: 84.1497 },
    targetKeywords: [
      "website development in ballia",
      "best web designer in ballia",
      "website developer ballia uttar pradesh",
      "web design agency near me in ballia",
      "coaching institute website ballia",
      "ecommerce website development ballia",
      "affordable website ballia up",
    ],
    metaTitle: "Website Development in Ballia UP | Starting ₹1,999 | Expecto Digital Agency",
    metaDescription:
      "Top-rated website development agency in Ballia, Uttar Pradesh. High-speed Next.js websites, CRM, e-commerce & custom admin panels starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
    heroTitle: "Website Development in Ballia, Uttar Pradesh",
    heroSubtitle:
      "Expecto Digital Agency is Ballia's most trusted web development company. We build high-speed Next.js websites for coaching institutes, traders, clinics, retailers and every local business in Ballia — starting ₹1,999 with a written 7-day delivery guarantee.",
    caseStudyIntro:
      "Ballia businesses trust Expecto because our work ranks — literally. We took Interface Classes, a Kanpur IIT-JEE coaching institute, from position 100+ to #1 on Google with the same Next.js + SEO architecture we bring to every Ballia project.",
    nearbyAreas: ["Rasra", "Bairia", "Bansdih", "Sikandarpur", "Ghazipur", "Mau"],
    whatsappText: "Hi%20Expecto%2C%20I%20need%20a%20website%20in%20Ballia",
    services: [
      { title: "Coaching Institute Websites", desc: "SEO-first websites for IIT-JEE, NEET and civil services coaching institutes in Ballia with course management and WhatsApp CTAs." },
      { title: "Business & Trader Websites", desc: "Fast, credibility-building websites for local shops, wholesalers, and traders in Ballia to attract customers online." },
      { title: "Hospital & Clinic Websites", desc: "Professional doctor and hospital websites with appointment booking and Google Business alignment." },
      { title: "E-commerce Stores", desc: "Full online stores with UPI/card payment gateway for Ballia retailers selling across Eastern UP." },
      { title: "CRM & Admin Panels", desc: "Custom zero-code dashboards so your Ballia business team manages leads, orders and data without developer help." },
      { title: "Portfolio Websites", desc: "Personal websites for Ballia freelancers, photographers, architects and consultants — SEO-optimised for local discovery." },
    ],
    faqs: [
      { q: "Which is the best website development company in Ballia?", a: "Expecto Digital Agency is Ballia's top-rated web development company with 50+ delivered projects, verified #1 Google rankings for clients, and a written 7-day delivery guarantee. We build with Next.js for maximum speed and SEO performance." },
      { q: "How much does website development cost in Ballia?", a: "Our websites start at ₹1,999 for a professional business site. Growth packages are ₹3,999, and custom CRM/e-commerce builds start from ₹7,999. All prices include design, development, deployment and on-page SEO." },
      { q: "Do you serve areas near Ballia like Rasra and Ghazipur?", a: "Yes. We serve all of Ballia district including Rasra, Bairia, Bansdih, Sikandarpur, and neighbouring districts like Ghazipur and Mau. You can meet us in person or work 100% online." },
      { q: "How fast can you deliver a website in Ballia?", a: "Business and portfolio websites in 7 days. E-commerce and CRM systems in 14–21 days. If we miss the deadline, you receive 20% cashback — in writing." },
      { q: "Will my website rank on Google in Ballia?", a: "Every website includes on-page SEO: correct H1–H3 structure, schema markup, canonical URLs, sitemap and Google Business Profile setup. We've taken clients from invisible to #1 — the same architecture applies to your site." },
    ],
  },

  // ── VARANASI ──────────────────────────────────────────────────────────────
  varanasi: {
    slug: "varanasi",
    cityName: "Varanasi",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "221001",
    geo: { lat: 25.3176, lng: 82.9739 },
    targetKeywords: [
      "website development in varanasi",
      "best web designer in varanasi",
      "website developer varanasi uttar pradesh",
      "hotel website development varanasi",
      "coaching institute website varanasi",
      "travel agency website varanasi",
      "ecommerce website development varanasi",
    ],
    metaTitle: "Website Development in Varanasi UP | Hotels, Coaching & Custom Websites | Expecto",
    metaDescription:
      "Best website development agency in Varanasi, Uttar Pradesh. Custom Next.js websites for hotels, travel agencies, coaching institutes & businesses starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
    heroTitle: "Website Development in Varanasi, Uttar Pradesh",
    heroSubtitle:
      "From Ghats to Google — Expecto builds high-speed websites for Varanasi's hotels, travel agencies, coaching institutes, clinics and local businesses. Next.js performance, local SEO, and 7-day delivery starting ₹1,999.",
    caseStudyIntro:
      "Varanasi's tourism and coaching businesses need websites that rank and convert. Our work with Interface Classes in Kanpur — taking them from position 100+ to #1 on Google — uses the exact same Next.js SEO architecture we deploy for every Varanasi project.",
    nearbyAreas: ["Sarnath", "Ramnagar", "Chandauli", "Bhadohi", "Jaunpur", "Mirzapur"],
    whatsappText: "Hi%20Expecto%2C%20I%20need%20a%20website%20in%20Varanasi",
    services: [
      { title: "Hotel & Homestay Websites", desc: "Booking-optimised websites for Varanasi hotels, guesthouses and Ganga-view homestays with Google Hotels integration." },
      { title: "Travel Agency Websites", desc: "Tour package showcases, enquiry forms and WhatsApp booking flows for Varanasi travel operators and pilgrimage tour companies." },
      { title: "Coaching Institute Websites", desc: "SEO-first websites for IAS, NEET and IIT-JEE coaching centres in Varanasi with course management and admission CTAs." },
      { title: "Temple & Religious Trust Websites", desc: "Donation management, event listings and multi-language support for Varanasi temples, ashrams and religious trusts." },
      { title: "E-commerce & Handicraft Stores", desc: "Online stores for Varanasi silk, Banarasi saree and handicraft businesses to sell across India and globally." },
      { title: "Clinic & Hospital Websites", desc: "Patient-first websites with appointment booking and local SEO for Varanasi doctors, clinics and hospitals." },
    ],
    faqs: [
      { q: "Which is the best website development company in Varanasi?", a: "Expecto Digital Agency is a top-rated web development company serving Varanasi with 50+ delivered projects and verified #1 Google rankings for clients. We specialise in hotel, travel, coaching and business websites built with Next.js." },
      { q: "How much does website development cost in Varanasi?", a: "Our websites start at ₹1,999. Hotel and travel websites from ₹3,999. E-commerce stores and CRM systems from ₹7,999. All include design, development, deployment and on-page SEO." },
      { q: "Can you build a hotel website that ranks on Google in Varanasi?", a: "Yes. We build hotel websites with local schema markup, Google Hotels alignment, Core Web Vitals optimisation and location-specific content — everything needed to rank for 'hotels in Varanasi' searches." },
      { q: "Do you serve areas near Varanasi like Sarnath and Chandauli?", a: "Yes. We serve all of Varanasi district including Sarnath, Ramnagar, and neighbouring districts like Chandauli, Bhadohi and Jaunpur." },
      { q: "How fast can you deliver a website in Varanasi?", a: "Business and hotel websites in 7 days. E-commerce and CRM systems in 14–21 days. Written delivery guarantee with 20% cashback if we miss." },
    ],
  },

  // ── GORAKHPUR ─────────────────────────────────────────────────────────────
  gorakhpur: {
    slug: "gorakhpur",
    cityName: "Gorakhpur",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "273001",
    geo: { lat: 26.7606, lng: 83.3732 },
    targetKeywords: [
      "website development in gorakhpur",
      "best web designer in gorakhpur",
      "website developer gorakhpur uttar pradesh",
      "coaching institute website gorakhpur",
      "hospital website development gorakhpur",
      "ecommerce website gorakhpur",
      "crm development gorakhpur",
    ],
    metaTitle: "Website Development in Gorakhpur UP | Coaching, Hospital & Custom Websites | Expecto",
    metaDescription:
      "Best website development agency in Gorakhpur, Uttar Pradesh. Custom Next.js websites for coaching institutes, hospitals, businesses & e-commerce starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
    heroTitle: "Website Development in Gorakhpur, Uttar Pradesh",
    heroSubtitle:
      "Expecto builds high-performance websites for Gorakhpur's coaching institutes, hospitals, retail chains and growing businesses. Next.js speed, local SEO, zero-code admin panels — starting ₹1,999 with 7-day delivery.",
    caseStudyIntro:
      "Gorakhpur has one of Eastern UP's most competitive coaching and healthcare markets. Our proven SEO architecture — the same system that took Interface Classes to #1 on Google in Kanpur — is built into every Gorakhpur website we deliver.",
    nearbyAreas: ["Deoria", "Kushinagar", "Maharajganj", "Basti", "Sant Kabir Nagar", "Azamgarh"],
    whatsappText: "Hi%20Expecto%2C%20I%20need%20a%20website%20in%20Gorakhpur",
    services: [
      { title: "Coaching Institute Websites", desc: "Rank-first websites for IAS, NEET, JEE and defence coaching centres in Gorakhpur with batch management and admission CTAs." },
      { title: "Hospital & Clinic Websites", desc: "Patient-acquisition websites for Gorakhpur hospitals, nursing homes and specialist clinics with appointment booking." },
      { title: "Business & Retail Websites", desc: "Professional websites for Gorakhpur traders, showrooms and retail businesses to generate leads and build online credibility." },
      { title: "E-commerce Stores", desc: "Full online stores with UPI payment gateway for Gorakhpur retailers targeting customers across Purvanchal." },
      { title: "CRM & Lead Management", desc: "Custom CRM systems for coaching institutes and hospitals in Gorakhpur to manage admissions, follow-ups and reports." },
      { title: "School & College Websites", desc: "Admission-focused school and college websites with fee management, notice boards and parent portals for Gorakhpur institutions." },
    ],
    faqs: [
      { q: "Which is the best website development company in Gorakhpur?", a: "Expecto Digital Agency is a leading web development agency serving Gorakhpur with 50+ delivered projects and proven #1 Google rankings for clients. We specialise in coaching, hospital and business websites built with Next.js." },
      { q: "How much does website development cost in Gorakhpur?", a: "Our websites start at ₹1,999 for a business site. Coaching institute and hospital websites from ₹3,999. CRM systems and e-commerce stores from ₹7,999. All include design, development, deployment and SEO." },
      { q: "Can you build a coaching institute website that ranks in Gorakhpur?", a: "Yes. We've taken coaching clients from invisible to #1 on Google using semantic heading structure, local schema markup, Core Web Vitals optimisation and location-specific content architecture." },
      { q: "Do you serve areas near Gorakhpur like Deoria and Kushinagar?", a: "Yes. We serve all of Gorakhpur division including Deoria, Kushinagar, Maharajganj, Basti and neighbouring districts across Purvanchal." },
      { q: "How fast can you deliver a website in Gorakhpur?", a: "Business and coaching websites in 7 days. Hospital portals, CRM and e-commerce in 14–21 days. Written guarantee — 20% cashback if we miss the deadline." },
    ],
  },

  // ── MAU ───────────────────────────────────────────────────────────────────
  mau: {
    slug: "mau",
    cityName: "Mau",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "275101",
    geo: { lat: 25.9407, lng: 83.5610 },
    targetKeywords: [
      "website development in mau",
      "best web designer in mau",
      "website developer mau uttar pradesh",
      "textile business website mau",
      "coaching institute website mau up",
      "ecommerce website mau",
      "affordable website development mau",
    ],
    metaTitle: "Website Development in Mau UP | Textile, Coaching & Business Websites | Expecto",
    metaDescription:
      "Best website development agency in Mau, Uttar Pradesh. Custom Next.js websites for textile businesses, coaching institutes, traders & e-commerce starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
    heroTitle: "Website Development in Mau, Uttar Pradesh",
    heroSubtitle:
      "Expecto builds high-speed websites for Mau's textile exporters, coaching institutes, traders and growing local businesses. Go online, rank on Google, and generate leads — starting ₹1,999 with a 7-day delivery guarantee.",
    caseStudyIntro:
      "Mau's textile and coaching businesses are highly competitive locally but largely absent online. Our SEO system — the same that took Interface Classes to #1 on Google in Kanpur — gives Mau businesses the digital edge their competitors don't have yet.",
    nearbyAreas: ["Azamgarh", "Ballia", "Ghazipur", "Kopaganj", "Ghosi", "Dohrighat"],
    whatsappText: "Hi%20Expecto%2C%20I%20need%20a%20website%20in%20Mau",
    services: [
      { title: "Textile & Exporter Websites", desc: "B2B product catalogues, wholesale enquiry forms and export-focused websites for Mau's saree and fabric industry." },
      { title: "Coaching Institute Websites", desc: "SEO-first websites for IAS, NEET and competitive exam coaching centres in Mau with course listings and WhatsApp admissions." },
      { title: "Trader & Retail Websites", desc: "Professional websites for Mau traders, wholesalers and local shops to build credibility and attract buyers online." },
      { title: "E-commerce Stores", desc: "Online stores for Mau textile and retail businesses to sell across India with UPI and card payment integration." },
      { title: "Business CRM Systems", desc: "Custom CRM for Mau textile exporters and coaching institutes to manage clients, follow-ups and sales pipelines." },
      { title: "School & Institution Websites", desc: "Admission-focused school websites with parent portals, fee management and notice boards for Mau educational institutions." },
    ],
    faqs: [
      { q: "Which is the best website development company in Mau?", a: "Expecto Digital Agency is a leading web development agency serving Mau UP with 50+ delivered projects and proven client Google rankings. We specialise in textile, coaching and business websites built with Next.js." },
      { q: "How much does website development cost in Mau?", a: "Websites start at ₹1,999. Textile B2B and coaching websites from ₹3,999. CRM systems and e-commerce stores from ₹7,999. All include design, development, deployment and on-page SEO." },
      { q: "Can you build a website for a textile business in Mau?", a: "Yes. We build B2B product catalogue websites, wholesale inquiry portals and export-focused sites for Mau's saree and fabric businesses — with WhatsApp order flows and Google rankings built in." },
      { q: "Do you serve areas near Mau like Azamgarh and Ghosi?", a: "Yes. We serve all of Mau district including Ghosi, Kopaganj, Dohrighat and neighbouring districts like Azamgarh, Ballia and Ghazipur." },
      { q: "How fast can you deliver a website in Mau?", a: "Business and catalogue websites in 7 days. E-commerce and CRM systems in 14–21 days. Written delivery guarantee with 20% cashback if we miss." },
    ],
  },

  // ── GHAZIPUR ──────────────────────────────────────────────────────────────
  ghazipur: {
    slug: "ghazipur",
    cityName: "Ghazipur",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "233001",
    geo: { lat: 25.5783, lng: 83.5833 },
    targetKeywords: [
      "website development in ghazipur",
      "best web designer in ghazipur",
      "website developer ghazipur uttar pradesh",
      "coaching institute website ghazipur",
      "business website ghazipur up",
      "ecommerce website ghazipur",
      "affordable website development ghazipur",
    ],
    metaTitle: "Website Development in Ghazipur UP | Coaching, Business & Custom Websites | Expecto",
    metaDescription:
      "Best website development agency in Ghazipur, Uttar Pradesh. Custom Next.js websites for coaching institutes, businesses, clinics & e-commerce starting ₹1,999. 7-day delivery. Call +91 87072 24376.",
    heroTitle: "Website Development in Ghazipur, Uttar Pradesh",
    heroSubtitle:
      "Expecto builds high-speed websites for Ghazipur's coaching institutes, traders, clinics and local businesses. Rank on Google, attract customers, and manage your business online — starting ₹1,999 with 7-day delivery.",
    caseStudyIntro:
      "Ghazipur businesses are underrepresented online — that's your advantage. Our proven SEO architecture that took Interface Classes to #1 on Google in Kanpur is built into every website we deliver in Ghazipur, giving local businesses a head start over competitors who haven't gone digital yet.",
    nearbyAreas: ["Ballia", "Varanasi", "Mau", "Saidpur", "Zamania", "Bhadohi"],
    whatsappText: "Hi%20Expecto%2C%20I%20need%20a%20website%20in%20Ghazipur",
    services: [
      { title: "Coaching Institute Websites", desc: "Rank-first websites for competitive exam coaching centres in Ghazipur with course management, batch listings and WhatsApp admissions." },
      { title: "Business & Trader Websites", desc: "Professional websites for Ghazipur traders, wholesalers and local shops to generate leads and build online credibility." },
      { title: "Clinic & Hospital Websites", desc: "Patient-acquisition websites for Ghazipur doctors and clinics with appointment booking and local SEO." },
      { title: "E-commerce Stores", desc: "Full online stores with UPI payment gateway for Ghazipur retailers targeting customers across Eastern UP." },
      { title: "CRM & Admin Panels", desc: "Custom zero-code dashboards for Ghazipur businesses to manage leads, inventory and customer data independently." },
      { title: "School & College Websites", desc: "Admission-focused school websites with fee portals and notice boards for Ghazipur educational institutions." },
    ],
    faqs: [
      { q: "Which is the best website development company in Ghazipur?", a: "Expecto Digital Agency is a leading web development agency serving Ghazipur with 50+ delivered projects and proven #1 Google rankings for clients. We build with Next.js for maximum speed and local SEO performance." },
      { q: "How much does website development cost in Ghazipur?", a: "Our websites start at ₹1,999 for a professional business site. Coaching and clinic websites from ₹3,999. CRM and e-commerce from ₹7,999. All include design, development, deployment and on-page SEO." },
      { q: "Will my website rank on Google in Ghazipur?", a: "Yes. Every website includes structured on-page SEO: correct heading hierarchy, LocalBusiness schema markup, canonical URLs, sitemap and Google Business Profile setup. Ghazipur has low local SEO competition — early movers dominate fast." },
      { q: "Do you serve areas near Ghazipur like Zamania and Saidpur?", a: "Yes. We serve all of Ghazipur district including Saidpur, Zamania, and neighbouring districts like Ballia, Mau and Varanasi." },
      { q: "How fast can you deliver a website in Ghazipur?", a: "Business and coaching websites in 7 days. E-commerce and CRM systems in 14–21 days. Written guarantee — 20% cashback if we miss the deadline." },
    ],
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Returns all city slugs — used in generateStaticParams */
export function getAllCitySlugs(): string[] {
  return Object.keys(citiesData);
}

/** Safe lookup — returns undefined if slug not found */
export function getCityData(slug: string): CityData | undefined {
  return citiesData[slug];
}
