"use client";

import dynamic from "next/dynamic";

const SelectedWork   = dynamic(() => import("@/components/SelectedWork"),   { ssr: false });
const ClientsMarquee = dynamic(() => import("@/components/ClientsMarquee"), { ssr: false });
const TechMarquee    = dynamic(() => import("@/components/TechMarquee"),    { ssr: false });
const CaseStudy1     = dynamic(() => import("@/components/CaseStudy1"),     { ssr: false });
const CaseStudy2     = dynamic(() => import("@/components/CaseStudy2"),     { ssr: false });
const Services       = dynamic(() => import("@/components/Services"),       { ssr: false });
const DemoLibrary    = dynamic(() => import("@/components/DemoLibrary"),    { ssr: false });
const Industries     = dynamic(() => import("@/components/Industries"),     { ssr: false });
const WhyExpecto     = dynamic(() => import("@/components/WhyExpecto"),     { ssr: false });
const Process        = dynamic(() => import("@/components/Process"),        { ssr: false });
const StartingPoint  = dynamic(() => import("@/components/StartingPoint"),  { ssr: false });
const Contact        = dynamic(() => import("@/components/Contact"),        { ssr: false });
const FinalCTA       = dynamic(() => import("@/components/FinalCTA"),       { ssr: false });

function Divider() {
  return <div className="h-px w-full bg-[var(--border)]" />;
}

export default function HomeSections() {
  return (
    <>
      <SelectedWork />
      <ClientsMarquee />

      <section aria-label="Case Study: Interface Classes"><CaseStudy1 /></section>
      <Divider />
      <section aria-label="Case Study: Swapzy"><CaseStudy2 /></section>
      <Divider />
      <section aria-label="Services"><Services /></section>
      <Divider />
      <section aria-label="Demo Library"><DemoLibrary /></section>
      <Divider />
      <section aria-label="Industries"><Industries /></section>
      <Divider />
      <section aria-label="Why Expecto"><WhyExpecto /></section>
      <Divider />
      <section aria-label="Process"><Process /></section>
      <Divider />

      {/* Tech stack marquee — replaces the TechStack table */}
      <TechMarquee />

      <Divider />
      <StartingPoint />
      <Divider />
      <section aria-label="Contact"><Contact /></section>
      <FinalCTA />
    </>
  );
}
