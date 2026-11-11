import Image from "next/image";
import LiveClock from "@/components/LiveClock";

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
    poster: "/hero/poster.webp",
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
  const carouselItems = [...heroCards, ...heroCards];

  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-white overflow-hidden" aria-label="Hero">
      {/* Top Meta Bar */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between text-xs font-mono text-[#5A6271] pb-6">
        {/* Left: Time */}
        <LiveClock />

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
        <h1 className="inline-flex items-baseline justify-center cursor-default select-none">
          {/* Automatic Calm & Rhythmic Letter Wave */}
          {letters.map((char, i) => (
            <span
              key={char + i}
              style={{ animationDelay: `${i * 0.12}s` }}
              className="text-[16vw] sm:text-[17vw] md:text-[18vw] leading-[0.86] font-bold tracking-tight text-[#1E1E1E] inline-block font-sans animate-[letter-bounce_2.8s_ease-in-out_infinite]"
            >
              {char}
            </span>
          ))}

          {/* Letter "o" as Rotating Expecto Logo, Sized & Baseline-Aligned with Lowercase "c" & "e" */}
          <span className="inline-block relative w-[0.53em] h-[0.53em] ml-[0.02em] align-baseline text-[16vw] sm:text-[17vw] md:text-[18vw] translate-y-[0.03em]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1E1E1E] shadow-xs animate-[spin_24s_linear_infinite]">
              <Image
                src="/logo.png"
                alt="Expecto O Logo"
                fill
                sizes="(max-width: 768px) 120px, 160px"
                className="object-cover"
                priority
              />
            </div>
          </span>
        </h1>
      </div>

      {/* Horizontal Arch Card Slider (CSS Marquee for instant LCP paint) */}
      <div className="relative w-full overflow-hidden mt-2">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-4 sm:gap-5 md:gap-6 w-max py-2 px-4 animate-[marquee_36s_linear_infinite] hover:[animation-play-state:paused] will-change-transform"
          style={{ animationDelay: "1s", animationFillMode: "backwards" }}
        >
          {carouselItems.map((card, idx) => (
            <div
              key={idx}
              aria-hidden={idx >= heroCards.length ? true : undefined}
              className={`relative flex-none w-[130px] sm:w-[195px] md:w-[215px] lg:w-[230px] h-[300px] sm:h-[480px] md:h-[520px] overflow-hidden bg-[#F0F2F5] shadow-sm hover:scale-[1.02] transition-transform duration-300 ${card.radius}`}
            >
              {card.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster={card.poster}
                  aria-hidden="true"
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={card.src} type="video/mp4" />
                  <track kind="captions" />
                </video>
              ) : (
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 195px, 240px"
                  className="object-cover object-center pointer-events-none"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : undefined}
                  fetchPriority={idx === 0 ? "high" : undefined}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
