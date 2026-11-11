import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import ClientsMarquee from "@/components/ClientsMarquee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CreativeDispatch from "@/components/CreativeDispatch";
import FinalCTA from "@/components/FinalCTA";

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
