"use client";

const row1 = [
  { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const row2 = [
  { name: "PostgreSQL",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Vercel",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Figma",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "PHP",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Supabase",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
];

// Triplicate for seamless loop
const r1 = [...row1, ...row1, ...row1];
const r2 = [...row2, ...row2, ...row2];

function TechPill({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0 mx-3 px-4 py-2.5 border border-[var(--border)] bg-white hover:border-[var(--text)] transition-colors duration-150 cursor-default">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt={name} width={18} height={18} className="w-[18px] h-[18px] object-contain" loading="lazy" />
      <span className="font-montserrat font-medium text-[0.8125rem] text-[var(--text)] whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="bg-[var(--bg-subtle)] border-y border-[var(--border)] overflow-hidden py-8">

      {/* Header */}
      <div className="max-w-[1360px] mx-auto px-8 md:px-12 mb-6 flex items-center justify-between">
        <span className="label-tag">Technology Stack</span>
        <p className="font-montserrat text-[0.8125rem] text-[var(--text-3)] hidden md:block">
          From frontend to infrastructure — selected for each project.
        </p>
      </div>

      {/* Row 1 — scrolls right */}
      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F7F5, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F7F5, transparent)" }} />
        <div className="flex items-center w-max" style={{ animation: "marquee 25s linear infinite" }}>
          {r1.map((t, i) => <TechPill key={`r1-${i}`} name={t.name} logo={t.logo} />)}
        </div>
      </div>

      {/* Row 2 — scrolls left (reverse) */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F7F5, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F7F5, transparent)" }} />
        <div className="flex items-center w-max" style={{ animation: "marquee 25s linear infinite reverse" }}>
          {r2.map((t, i) => <TechPill key={`r2-${i}`} name={t.name} logo={t.logo} />)}
        </div>
      </div>

    </div>
  );
}
