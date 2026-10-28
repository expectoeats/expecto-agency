"use client";

import { useForm } from "react-hook-form";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

type FormData = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
};

const projectTypes = ["New Website","Website Redesign","E-Commerce","Web Application","CRM / ERP","Custom Software","Design / Creative","Other"];

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const lines = [
      "Hi Expecto Team,","","I'd like to discuss a project.","",
      `Name: ${data.name}`,`Business: ${data.businessName || "—"}`,
      `Email: ${data.email}`,`Phone: ${data.phone || "—"}`,
      `Project type: ${data.projectType || "—"}`,"",
      "Details:", data.details || "—",
    ];
    window.open(`https://wa.me/918707224376?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-28">

      {/* Section header */}
      <div className="mb-12 md:mb-16">
        <span className="label-tag block mb-5">Contact</span>
        <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
          Tell us what you&apos;re building.
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)]">

        {/* Left — dark info panel */}
        <div className="lg:col-span-4 bg-[#111111] p-8 md:p-10 flex flex-col justify-between gap-10">
          <div>
            <p className="font-montserrat text-[0.9375rem] text-white/60 leading-[1.8] mb-10">
              Tell us about your business, your current website or the product you want to build. We&apos;ll come back with a clear plan.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                { Icon: Mail,   label: "Email",    value: "hello@expecto.online",    href: "mailto:hello@expecto.online" },
                { Icon: Phone,  label: "WhatsApp", value: "+91 87072 24376",         href: "https://wa.me/918707224376" },
                { Icon: MapPin, label: "Location", value: "Ballia, Uttar Pradesh",   href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                    <item.Icon size={15} strokeWidth={1.5} className="text-white/50" />
                  </div>
                  <div>
                    <p className="font-montserrat text-[0.625rem] text-white/30 uppercase tracking-[0.12em] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-montserrat text-[0.9375rem] text-white hover:text-white/70 transition-colors duration-150">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-montserrat text-[0.9375rem] text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust signal */}
          <div className="border-t border-white/10 pt-8">
            <p className="font-montserrat text-[0.75rem] text-white/30 leading-[1.7]">
              2 ghante mein reply guaranteed. Koi automated bot nahi — ek real insaan aapka message padhta hai.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_#111111] md:border md:border-[var(--border)] md:shadow-none">

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918707224376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-montserrat font-semibold text-base py-4 rounded-sm mb-6 hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageSquare size={20} />
            WhatsApp Karo — Instant Reply
          </a>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="font-montserrat text-[0.75rem] text-[var(--text-3)]">ya form bharo</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-name" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">Name *</label>
                <input id="c-name" {...register("name",{required:true})} className="form-input" placeholder="Your full name" autoComplete="name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-biz" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">Business Name</label>
                <input id="c-biz" {...register("businessName")} className="form-input" placeholder="Your business or organisation" autoComplete="organization" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-email" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">Email *</label>
                <input id="c-email" type="email" {...register("email",{required:true})} className="form-input" placeholder="email@example.com" autoComplete="email" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-phone" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">Phone / WhatsApp</label>
                <input id="c-phone" type="tel" {...register("phone")} className="form-input" placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-type" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">What do you need?</label>
              <select id="c-type" {...register("projectType")} className="form-input bg-white">
                <option value="">Select project type</option>
                {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-details" className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.08em] font-medium">Project Details *</label>
              <textarea id="c-details" {...register("details",{required:true})} rows={5} className="form-input resize-none"
                placeholder="Tell us about your business and what you want to build or improve." />
            </div>

            <button type="submit" disabled={isSubmitting}
              className="btn-black w-full justify-center text-[0.9375rem] py-4">
              Send on WhatsApp → <ArrowRight size={15} strokeWidth={1.75} />
            </button>

            <p className="font-montserrat text-[0.75rem] text-[var(--text-3)] text-center">
              WhatsApp par seedha jaata hai. 2 ghante mein reply milega.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
