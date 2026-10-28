"use client";

import dynamic from "next/dynamic";

const Stats        = dynamic(() => import("@/components/Stats"),        { ssr: false });
const ClientsMarquee = dynamic(() => import("@/components/ClientsMarquee"), { ssr: false });
const Services     = dynamic(() => import("@/components/Services"),     { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Industries   = dynamic(() => import("@/components/Industries"),   { ssr: false });
const Process      = dynamic(() => import("@/components/Process"),      { ssr: false });
const WhyExpecto   = dynamic(() => import("@/components/WhyExpecto"),   { ssr: false });
const SelectedWork = dynamic(() => import("@/components/SelectedWork"), { ssr: false });
const Pricing      = dynamic(() => import("@/components/Pricing"),      { ssr: false });
const FAQ          = dynamic(() => import("@/components/FAQ"),          { ssr: false });
const StartingPoint = dynamic(() => import("@/components/StartingPoint"), { ssr: false });
const FinalCTA     = dynamic(() => import("@/components/FinalCTA"),     { ssr: false });

function Divider() {
  return <div className="h-px w-full bg-[var(--border)]" />;
}

export default function HomeSections() {
  return (
    <>
      <section aria-label="Stats"><Stats /></section>
      <ClientsMarquee />
      <Divider />
      <section aria-label="Services"><Services /></section>
      <Divider />
      <section aria-label="Testimonials"><Testimonials /></section>
      <Divider />
      <section aria-label="Industries"><Industries /></section>
      <Divider />
      <section aria-label="Process"><Process /></section>
      <Divider />
      <section aria-label="Why Expecto"><WhyExpecto /></section>
      <Divider />
      <SelectedWork />
      <Divider />
      <section aria-label="Pricing"><Pricing /></section>
      <Divider />
      <section aria-label="FAQ"><FAQ /></section>
      <Divider />
      <StartingPoint />
      <FinalCTA />
    </>
  );
}
