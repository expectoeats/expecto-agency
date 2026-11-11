"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowUpRight, Phone, Mail, MapPin, MessageSquare, Check } from "lucide-react";

const serviceOptions = [
  "Business Website",
  "Web Application / SaaS",
  "E-Commerce Store",
  "Custom CRM & ERP",
  "Mobile App Development",
  "SEO & Google Ranking",
  "Graphic Design & Branding",
  "Video Editing & Commercials",
];

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
};

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const text = `Hi Expecto Team,\n\nI want to discuss a project with Expecto Digital Agency:\n\n• Name: ${data.name}\n• Email: ${data.email}\n• Phone: ${data.phone || "Not specified"}\n• Service: ${data.service}\n• Budget: ${data.budget || "Standard"}\n• Project Details: ${data.message}\n\nPlease reply with a proposal and timeline.`;
    window.open(`https://wa.me/918707224376?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#1E1E1E] min-h-screen pt-24 md:pt-32">
      {/* ── 01 / HERO HEADER ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#8A919B] block mb-4">
            ( 01 / INITIATE ENGAGEMENT )
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] leading-[1.05] mb-8">
            Let&apos;s build something bold together.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6271] font-mono leading-relaxed max-w-3xl mb-8">
            Tell us about your project, timeline, and commercial objectives. We reply within 24 hours with an actionable architectural roadmap and fixed estimate.
          </p>
        </div>
      </section>

      {/* ── 02 / FORM & DIRECT CHANNELS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 rounded-[32px] bg-[#F8F9FA] border border-[#E5E7EB]">
            <span className="font-mono text-xs text-[#8A919B] block mb-2">
              ( PROJECT INQUIRY FORM )
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1E1E] mb-8">
              Project Specifications
            </h2>

            {submitted ? (
              <div className="p-8 rounded-[20px] bg-white border border-[#E5E7EB] text-center">
                <div className="w-12 h-12 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center mx-auto mb-4">
                  <Check size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">Inquiry Delivered</h3>
                <p className="font-mono text-xs text-[#5A6271] max-w-md mx-auto">
                  Thank you! Your details have opened in WhatsApp and our engineering lead will respond with your preliminary scope shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#1E1E1E] font-medium">Your Name *</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-[14px] bg-white border ${errors.name ? "border-red-500" : "border-[#E5E7EB]"} text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#1E1E1E] font-medium">Email Address *</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-[14px] bg-white border ${errors.email ? "border-red-500" : "border-[#E5E7EB]"} text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#1E1E1E] font-medium">Phone / WhatsApp</label>
                    <input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#E5E7EB] text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#1E1E1E] font-medium">Service Needed *</label>
                    <select
                      {...register("service", { required: true })}
                      className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#E5E7EB] text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#1E1E1E] font-medium">Estimated Budget</label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#E5E7EB] text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors cursor-pointer"
                  >
                    <option value="₹1,999 - ₹5,000 (Sprint Landing Page / Starter)">₹1,999 - ₹5,000 (Sprint Landing Page / Starter)</option>
                    <option value="₹5,000 - ₹15,000 (Business Website / Commerce)">₹5,000 - ₹15,000 (Business Website / Commerce)</option>
                    <option value="₹15,000 - ₹35,000 (Custom Web App / CRM)">₹15,000 - ₹35,000 (Custom Web App / CRM)</option>
                    <option value="₹35,000+ (Full Custom Software & Enterprise)">₹35,000+ (Full Custom Software & Enterprise)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#1E1E1E] font-medium">Project Goals & Brief *</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Tell us what you are trying to build, key features needed, and your target launch date..."
                    className={`w-full px-4 py-3 rounded-[14px] bg-white border ${errors.message ? "border-red-500" : "border-[#E5E7EB]"} text-sm font-mono text-[#1E1E1E] focus:outline-hidden focus:border-[#1E1E1E] transition-colors resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1E1E1E] text-white text-xs font-mono font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Submit Inquiry via Direct WhatsApp</span>
                  <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#8A919B] block mb-2">
              ( DIRECT CONTACT DETAILS )
            </span>

            {/* Visual 3D Communication Arch Card */}
            <div className="relative aspect-[16/10] w-full rounded-tl-[40px] rounded-br-[40px] overflow-hidden bg-white border border-[#E5E7EB] shadow-sm">
              <Image
                src="/pages/communication.webp"
                alt="Direct Agency Communication"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0">
                  <MessageSquare size={14} />
                </div>
                <h3 className="font-bold text-[#1E1E1E]">WhatsApp Fast Track</h3>
              </div>
              <p className="font-mono text-xs text-[#5A6271] mb-4">
                Chat directly with our founding engineering team for immediate quotes and quick feasibility answers.
              </p>
              <a
                href="https://wa.me/918707224376?text=Hi%20Expecto%20Team%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-70 transition-opacity"
              >
                <span>+91 87072 24376</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="p-6 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0">
                  <Phone size={14} />
                </div>
                <h3 className="font-bold text-[#1E1E1E]">Phone Support</h3>
              </div>
              <p className="font-mono text-xs text-[#5A6271] mb-4">
                Available Monday to Saturday, 10:00 AM – 8:00 PM IST for project consultations.
              </p>
              <a
                href="tel:+918707224376"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1E1E1E] hover:opacity-70 transition-opacity"
              >
                <span>Call +91 87072 24376</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="p-6 rounded-[24px] bg-[#F8F9FA] border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </div>
                <h3 className="font-bold text-[#1E1E1E]">Agency Headquarters</h3>
              </div>
              <p className="font-mono text-xs text-[#5A6271] leading-relaxed mb-3">
                Expecto Digital Solutions<br />
                Ballia, Uttar Pradesh, India — 277001
              </p>
              <span className="font-mono text-[11px] text-[#8A919B]">
                ( Serving clients across India & globally )
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
