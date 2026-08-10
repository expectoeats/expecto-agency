import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, siteName, siteEmail } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Expecto Digital Agency. Read our terms before engaging our web design, development, and digital services.",
  alternates: { canonical: `${siteUrl}/terms` },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing our website or engaging our services, you agree to be bound by these Terms of Service and all applicable laws.",
      "If you do not agree with any part of these terms, you may not use our services.",
      "These terms apply to all clients, visitors, and users of Expecto Digital Agency.",
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      "Expecto Digital Agency provides website design, web development, mobile app development, CRM/SaaS development, and related digital services.",
      "The scope, timeline, and deliverables for each project are defined in a separate project agreement or proposal shared before work begins.",
      "We reserve the right to refuse service to anyone for any reason at our discretion.",
    ],
  },
  {
    title: "3. Project Agreements & Payments",
    content: [
      "All projects require a written agreement or approved proposal outlining scope, cost, and timeline before work commences.",
      "A minimum advance payment (as specified in the proposal) is required to initiate any project.",
      "Remaining payments are due as per the milestone schedule outlined in the project agreement.",
      "Delayed payments may result in paused work. Projects on hold for more than 30 days may be subject to re-scoping.",
      "All prices are in Indian Rupees (INR) unless explicitly stated otherwise.",
    ],
  },
  {
    title: "4. Revisions & Change Requests",
    content: [
      "Each project includes a defined number of revision rounds as specified in the proposal.",
      "Additional revisions or scope changes beyond the agreed limit will be billed at our standard hourly rate.",
      "Change requests must be submitted in writing via email or our project management channel.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "Upon receipt of full payment, all custom design and code created specifically for your project becomes your property.",
      "We retain the right to display completed work in our portfolio and marketing materials unless you request otherwise in writing.",
      "Third-party assets (fonts, stock images, plugins, libraries) remain subject to their respective licences.",
      "We retain ownership of any proprietary frameworks, tools, or methodologies used in delivering the project.",
    ],
  },
  {
    title: "6. Client Responsibilities",
    content: [
      "You are responsible for providing accurate content, assets, and timely feedback required to complete the project.",
      "Delays caused by late content submission or feedback may affect the agreed delivery timeline.",
      "You warrant that any content, images, or materials you provide do not infringe any third-party intellectual property rights.",
    ],
  },
  {
    title: "7. Delivery & Timelines",
    content: [
      "We commit to the delivery timelines agreed upon in the project proposal.",
      "Timelines are contingent on timely receipt of required content, approvals, and payments from the client.",
      "Force majeure events (natural disasters, internet outages, etc.) may affect timelines without liability on our part.",
    ],
  },
  {
    title: "8. Warranties & Disclaimers",
    content: [
      "We warrant that our work will be performed with reasonable skill and care in accordance with industry standards.",
      "We do not guarantee specific business outcomes, search engine rankings, or revenue results from our services.",
      "Our websites are tested across modern browsers and devices. We are not responsible for issues arising from outdated software.",
      "Services are provided 'as is' to the extent permitted by applicable law.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific project in question.",
      "We are not liable for indirect, incidental, or consequential damages including loss of profits, data, or business opportunities.",
      "We are not responsible for third-party services, hosting providers, or platforms integrated into your project.",
    ],
  },
  {
    title: "10. Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project.",
      "This obligation survives the termination of the project agreement.",
      "We will not disclose your business information to competitors or unrelated third parties.",
    ],
  },
  {
    title: "11. Termination",
    content: [
      "Either party may terminate a project with 14 days' written notice.",
      "In the event of termination, you are liable for payment for all work completed up to the termination date.",
      "Advance payments are non-refundable once work has commenced, unless we are in material breach of the agreement.",
    ],
  },
  {
    title: "12. Governing Law",
    content: [
      "These terms are governed by the laws of India.",
      "Any disputes shall be subject to the exclusive jurisdiction of the courts in Ballia, Uttar Pradesh, India.",
      "We encourage resolving disputes amicably before pursuing legal action.",
    ],
  },
  {
    title: "13. Modifications to Terms",
    content: [
      "We reserve the right to update these Terms of Service at any time.",
      "Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
      "We will notify active clients of material changes via email where reasonably practicable.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] pt-28 pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-12 border-b border-[var(--line-soft)] pb-10">
          <p className="font-syne font-bold text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)] mb-4">
            Legal
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-main)] mb-4">
            Terms of Service
          </h1>
          <p className="font-dm-sans text-sm text-[var(--text-muted)]">
            Effective date: <span className="text-[var(--text-main)]">1 January 2025</span>
            &nbsp;·&nbsp; Last updated: <span className="text-[var(--text-main)]">1 May 2026</span>
          </p>
          <p className="font-dm-sans text-base text-[var(--text-muted)] mt-5 leading-relaxed">
            Please read these Terms of Service carefully before using the services offered by{" "}
            <span className="text-[var(--text-main)]">{siteName}</span>. These terms constitute a
            legally binding agreement between you and us.
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
            14. Contact Us
          </h2>
          <p className="font-dm-sans text-sm text-[var(--text-muted)] leading-relaxed">
            For any questions regarding these Terms of Service, please contact us:
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
          <Link href="/privacy" className="font-syne font-bold text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
