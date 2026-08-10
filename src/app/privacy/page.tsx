import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, siteName, siteEmail } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Expecto Digital Agency. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: `${siteUrl}/privacy` },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number) when you fill out our contact or inquiry forms.",
      "Business information you voluntarily provide to help us understand your project requirements.",
      "Technical data such as IP address, browser type, and pages visited — collected automatically via analytics tools to improve our website.",
      "Communication records including emails and messages exchanged with our team.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To respond to your inquiries and provide the services you have requested.",
      "To send project updates, invoices, and relevant communications related to your engagement with us.",
      "To improve our website, services, and user experience based on aggregated analytics data.",
      "To send occasional updates about our services — you may opt out at any time.",
      "To comply with legal obligations and protect our legitimate business interests.",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share data with trusted service providers (e.g., hosting, payment processors) strictly to deliver our services — they are bound by confidentiality agreements.",
      "We may disclose information if required by law, court order, or government authority.",
      "In the event of a business merger or acquisition, your data may be transferred as part of that transaction.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures including SSL encryption, secure servers, and access controls.",
      "Access to your personal data is restricted to authorised team members who need it to perform their duties.",
      "While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    content: [
      "Our website uses cookies to enhance your browsing experience and analyse site traffic.",
      "You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the website.",
      "We use Google Analytics and similar tools to understand how visitors interact with our site. This data is anonymised and aggregated.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to access, correct, or delete the personal information we hold about you.",
      "You may withdraw consent for marketing communications at any time by contacting us.",
      "To exercise any of these rights, please email us at hello@expecto.online.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.",
      "We encourage you to review the privacy policies of any external sites you visit.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our services are not directed at individuals under the age of 18.",
      "We do not knowingly collect personal information from minors. If you believe we have inadvertently done so, please contact us immediately.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] pt-28 pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-12 border-b border-[var(--line-soft)] pb-10">
          <p className="font-syne font-bold text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)] mb-4">
            Legal
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-main)] mb-4">
            Privacy Policy
          </h1>
          <p className="font-dm-sans text-sm text-[var(--text-muted)]">
            Effective date: <span className="text-[var(--text-main)]">1 January 2025</span>
            &nbsp;·&nbsp; Last updated: <span className="text-[var(--text-main)]">1 May 2026</span>
          </p>
          <p className="font-dm-sans text-base text-[var(--text-muted)] mt-5 leading-relaxed">
            {siteName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and the choices you have.
            By using our website or services, you agree to the practices described below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-syne font-bold text-lg text-[var(--text-main)] mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 font-dm-sans text-sm text-[var(--text-muted)] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 p-6 rounded-2xl border border-[var(--line-soft)] bg-[var(--bg-elev)]">
          <h2 className="font-syne font-bold text-base text-[var(--text-main)] mb-2">
            10. Contact Us
          </h2>
          <p className="font-dm-sans text-sm text-[var(--text-muted)] leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, please reach out:
          </p>
          <div className="mt-4 space-y-1">
            <p className="font-dm-sans text-sm text-[var(--text-main)]">{siteName}</p>
            <a href={`mailto:${siteEmail}`} className="font-dm-sans text-sm text-[var(--accent-cyan)] hover:underline">
              {siteEmail}
            </a>
            <p className="font-dm-sans text-sm text-[var(--text-muted)]">Ballia, Uttar Pradesh, India — 277001</p>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10 flex gap-6">
          <Link href="/" className="font-syne font-bold text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            ← Back to Home
          </Link>
          <Link href="/terms" className="font-syne font-bold text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>
    </main>
  );
}
