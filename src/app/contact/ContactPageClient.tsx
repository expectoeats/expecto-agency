"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, ArrowRight, Clock } from "lucide-react";
import FAQ from "@/components/FAQ";

const services = ["Web Development", "App Development", "Software & SaaS", "Digital Marketing", "Brand & Design", "Video Editing", "Other"];
const phoneNumbers = ["+91 87072 24376"];

type ContactFormValues = { name: string; email: string; phone?: string; service?: string; message: string; };

export default function ContactPageClient() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const message = `Hi Expecto Team,\n\n👤 Name: ${data.name}\n📧 Email: ${data.email}\n📱 Phone: ${data.phone || "Not provided"}\n🛠️ Service: ${data.service || "Not specified"}\n📝 Message: ${data.message}\n\nLooking forward to hearing from you.`;
    window.open(`https://wa.me/918707224376?text=${encodeURIComponent(message)}`, "_blank");
  };

  const waLink = "https://wa.me/918707224376?text=Hi%20Expecto%20Team%2C%0AI%20am%20interested%20in%20discussing%20a%20project.";

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#0D0D0D]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/75" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
        </div>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-[0.6875rem] text-white/50 uppercase tracking-[0.18em] mb-6 inline-block border border-white/15 px-4 py-2 rounded-sm"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(8px)" }}>
            💬 Get In Touch
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-balance text-white">
            Start a{" "}
            <span style={{ background:"linear-gradient(105deg,#fff 0%,#fff 30%,#aaa 45%,#eee 50%,#aaa 55%,#fff 70%,#fff 100%)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite" }}>
              Conversation.
            </span>
          </motion.h1>
          {/* Frosted description */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="inline-block px-6 py-4 rounded-sm border border-white/10 max-w-2xl mx-auto"
            style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}>
            <p className="font-montserrat text-base sm:text-lg text-white/75 leading-relaxed">
              The blueprint of your next digital breakthrough starts with a single conversation. Expect a response within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="border-t border-[var(--border)] py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">

            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat font-semibold text-3xl text-[var(--text)] mb-3">Project Specs</h2>
                <p className="font-montserrat text-[var(--text-3)] text-base">Fill out the form and we&apos;ll send a custom proposal within 2 hours.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)]">Full Name *</label>
                    <input {...register("name", { required: true })} className={`form-input ${errors.name ? "border-red-500" : ""}`} placeholder="Your Full Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)]">Email *</label>
                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className={`form-input ${errors.email ? "border-red-500" : ""}`} placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)]">Phone</label>
                    <input {...register("phone")} className="form-input" placeholder="+91 00000 00000" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-svc" className="font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)]">Service</label>
                    <select id="contact-svc" {...register("service")} className="form-input bg-white">
                      <option value="">Select a Service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-montserrat font-medium text-xs uppercase tracking-wider text-[var(--text-2)]">Message *</label>
                  <textarea {...register("message", { required: true })} rows={5} className={`form-input resize-none ${errors.message ? "border-red-500" : ""}`} placeholder="Describe your vision and requirements..." />
                </div>
                <button type="submit" className="btn-black w-full justify-center text-base py-4">
                  Send via WhatsApp <ArrowRight size={18} strokeWidth={2} />
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* Response card */}
              <div className="bg-[var(--text)] border border-[var(--border)] rounded-sm p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center"><Clock size={20} strokeWidth={2} /></div>
                    <span className="font-montserrat font-medium text-xs uppercase tracking-widest opacity-80">Response Time</span>
                  </div>
                  <div className="font-montserrat font-semibold text-2xl sm:text-3xl leading-tight mb-5">
                    Estimated 2 Hour<br />Turnaround.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["24/7 Operations", "Direct Engineering", "Zero Bots"].map(b => (
                      <span key={b} className="bg-white/10 border border-white/20 px-3 py-1 rounded-sm font-montserrat text-[10px] uppercase tracking-widest">{b}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="bg-white border border-[var(--border)] rounded-sm p-6 space-y-5">
                <h3 className="font-montserrat font-medium text-sm uppercase tracking-widest text-[var(--text-2)]">Direct Channels</h3>
                {phoneNumbers.map(num => (
                  <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--text)] group-hover:border-[var(--text)] transition-all">
                        <Phone size={16} strokeWidth={2} className="text-[var(--text-3)] group-hover:text-white" />
                      </div>
                      <span className="font-montserrat font-medium text-sm text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors">{num}</span>
                    </div>
                    <ArrowRight size={16} strokeWidth={2} className="text-[var(--border)] group-hover:text-[var(--text)] transition-colors" />
                  </a>
                ))}

                <div className="pt-4 border-t border-[var(--border)] space-y-4">
                  <a href={waLink} target="_blank" className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-[#25D366]/10 border border-[var(--border)] flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                        <MessageSquare size={16} strokeWidth={2} className="text-[#25D366] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="block font-montserrat font-medium text-sm text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors">WhatsApp</span>
                        <span className="block font-montserrat text-xs text-[var(--text-3)] opacity-60">+91 8707224376</span>
                      </div>
                    </div>
                    <ArrowRight size={16} strokeWidth={2} className="text-[var(--border)] group-hover:text-[#25D366] transition-colors" />
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center">
                      <MapPin size={16} strokeWidth={2} className="text-[var(--text-3)]" />
                    </div>
                    <div>
                      <span className="block font-montserrat font-medium text-sm text-[var(--text-3)]">Ballia, Uttar Pradesh</span>
                      <span className="block font-montserrat text-xs text-[var(--text-3)] opacity-60">India — 277001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[var(--bg-subtle)] border-t border-[var(--border)]">
        <FAQ />
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 border-t border-[var(--border)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-sm overflow-hidden border border-[var(--border)] h-[280px] sm:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57994.45!2d84.1497!3d25.7581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d4061e9a03b2b%3A0x5d9c3abfb3c1f1a0!2sBallia%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, filter: "saturate(0.8)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
