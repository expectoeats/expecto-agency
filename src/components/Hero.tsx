"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const heroCards = [
  {
    type: "image",
    src: "/hero/analytics.webp",
    alt: "Google Top 1 Rank Visual",
    radius: "rounded-tl-[80px] rounded-br-[80px]",
  },
  {
    type: "image",
    src: "/hero/google-glass.webp",
    alt: "Modern Interactive UI",
    radius: "rounded-tr-[80px] rounded-bl-[80px]",
  },
  {
    type: "video",
    src: "/hero/card-3.mp4",
    poster: "/hero/analytics.webp",
    alt: "Motion Showreel",
    radius: "rounded-tl-[80px] rounded-br-[80px]",
  },
  {
    type: "image",
    src: "/hero/motion.webp",
    alt: "7-Day Sprint Delivery Guarantee",
    radius: "rounded-tr-[80px] rounded-bl-[80px]",
  },
  {
    type: "image",
    src: "/hero/lock.webp",
    alt: "100% Code Ownership & Security",
    radius: "rounded-tl-[80px] rounded-br-[80px]",
  },
  {
    type: "image",
    src: "/hero/laptop.webp",
    alt: "Scalable Web & Cloud Platforms",
    radius: "rounded-tr-[80px] rounded-bl-[80px]",
  },
];

const letters = ["E", "x", "p", "e", "c", "t"];

export default function Hero() {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const carouselItems = [...heroCards, ...heroCards];

  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-white overflow-hidden" aria-label="Hero">
      {/* Top Meta Bar */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between text-xs font-mono text-[#8A919B] pb-6">
        {/* Left: Time */}
        <div className="flex items-center gap-1.5 tabular-nums">
          <span>(</span>
          <span className="text-[#1E1E1E] font-medium">{time}</span>
          <span>IST )</span>
        </div>

        {/* Center: Location */}
        <div className="hidden sm:block text-center text-[#5A6271] text-xs font-mono">
          Digital agency based in Ballia, Uttar Pradesh.
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-2">
          {[
            { label: "WA", href: "https://wa.me/918707224376" },
            { label: "IG", href: "https://instagram.com/expecto.web" },
            { label: "LI", href: "https://www.linkedin.com/company/expecto-digital-solutions/" },
          ].map((s, i) => (
            <span key={s.label} className="flex items-center gap-2">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E1E1E] transition-colors"
              >
                {s.label}
              </a>
              {i < 2 && <span className="text-[#D0D8E4]">/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Giant "Expecto" Title with Automatic Stagger Wave & Typographically Scaled "O" Logo */}
      <div className="w-full text-center px-4 pt-2 pb-6 md:pb-8 select-none flex items-center justify-center">
        <div className="inline-flex items-baseline justify-center cursor-default select-none">
          {/* Automatic Calm & Rhythmic Letter Wave */}
          {letters.map((char, i) => (
            <motion.span
              key={char + i}
              animate={{
                y: [0, -6, 0, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.2,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[16vw] sm:text-[17vw] md:text-[18vw] leading-[0.86] font-bold tracking-tight text-[#1E1E1E] inline-block font-sans"
            >
              {char}
            </motion.span>
          ))}

          {/* Letter "o" as Rotating Expecto Logo, Sized & Baseline-Aligned with Lowercase "c" & "e" */}
          <span className="inline-block relative w-[0.53em] h-[0.53em] ml-[0.02em] align-baseline text-[16vw] sm:text-[17vw] md:text-[18vw] translate-y-[0.03em]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
              className="relative w-full h-full rounded-full overflow-hidden bg-[#1E1E1E] shadow-xs"
            >
              <Image
                src="/logo.png"
                alt="Expecto O Logo"
                fill
                sizes="(max-width: 768px) 120px, 160px"
                className="object-cover"
                priority
              />
            </motion.div>
          </span>
        </div>
      </div>

      {/* Horizontal Arch Card Slider (Bungee Marquee) */}
      <div className="relative w-full overflow-hidden mt-2">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 36,
            ease: "linear",
          }}
          className="flex items-center gap-4 sm:gap-5 md:gap-6 w-max py-2 px-4 cursor-grab active:cursor-grabbing"
        >
          {carouselItems.map((card, idx) => (
            <div
              key={idx}
              className={`relative flex-none w-[175px] sm:w-[195px] md:w-[215px] lg:w-[230px] h-[440px] sm:h-[480px] md:h-[520px] overflow-hidden bg-[#F0F2F5] shadow-sm hover:scale-[1.02] transition-transform duration-300 ${card.radius}`}
            >
              {card.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={card.poster}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={card.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 200px, 240px"
                  className="object-cover object-center pointer-events-none"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
