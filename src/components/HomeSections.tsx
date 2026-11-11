"use client";

import dynamic from "next/dynamic";

const SelectedWork     = dynamic(() => import("@/components/SelectedWork"),     { ssr: true });
const Services         = dynamic(() => import("@/components/Services"),         { ssr: true });
const ClientsMarquee   = dynamic(() => import("@/components/ClientsMarquee"),   { ssr: false });
const Testimonials     = dynamic(() => import("@/components/Testimonials"),     { ssr: false });
const FAQ              = dynamic(() => import("@/components/FAQ"),              { ssr: true });
const CreativeDispatch = dynamic(() => import("@/components/CreativeDispatch"), { ssr: true });
const FinalCTA         = dynamic(() => import("@/components/FinalCTA"),         { ssr: true });

export default function HomeSections() {
  return (
    <div className="bg-white">
      {/* 1. Latest Projects */}
      <SelectedWork />

      {/* 2. Services & Metrics */}
      <Services />

      {/* 3. Trusted By Marquee */}
      <ClientsMarquee />

      {/* 4. Testimonials Slider */}
      <Testimonials />

      {/* 5. FAQ Accordion */}
      <FAQ />

      {/* 6. Creative Dispatch (Blog) */}
      <CreativeDispatch />

      {/* 7. CTA & Newsletter */}
      <FinalCTA />
    </div>
  );
}
