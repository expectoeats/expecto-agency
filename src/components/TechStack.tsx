"use client";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML / CSS",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PHP",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Vercel",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Cloudinary",  logo: "https://res.cloudinary.com/demo/image/upload/c_fit,f_auto,q_auto/docs/cloudinary_icon_transparent.png" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "UI/UX Design",logo: null },
      { name: "Graphic Design", logo: null },
    ],
  },
  {
    category: "Video & Creative",
    items: [
      { name: "Video Editing",         logo: null },
      { name: "Promotional Videos",    logo: null },
      { name: "Social Media Reels",    logo: null },
    ],
  },
];

// Fallback icon — initials in a colored box
function InitialBadge({ name }: { name: string }) {
  const abbr = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <span className="font-montserrat font-bold text-[0.6rem] text-[var(--text-3)] leading-none">{abbr}</span>
  );
}

export default function TechStack() {
  return (
    <div className="max-w-[1360px] mx-auto px-8 md:px-12 py-20 md:py-28">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 md:mb-16">
        <div className="lg:col-span-5">
          <span className="label-tag block mb-6">Technology & Capabilities</span>
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tight text-[var(--text)]">
            Under the surface.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex items-end">
          <p className="font-montserrat text-[0.875rem] text-[var(--text-3)] leading-[1.7]">
            A deliberate stack — chosen for performance, maintainability and real project requirements.
          </p>
        </div>
      </div>

      {/* Stack rows */}
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {stack.map((layer) => (
          <div key={layer.category} className="grid grid-cols-1 md:grid-cols-12 gap-0 py-6 md:py-7">

            {/* Category */}
            <div className="md:col-span-3 flex items-start mb-4 md:mb-0">
              <span className="font-montserrat text-[0.6875rem] text-[var(--text-3)] uppercase tracking-[0.12em]">
                {layer.category}
              </span>
            </div>

            {/* Tech pills with logo */}
            <div className="md:col-span-9 flex flex-wrap gap-3">
              {layer.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 border border-[var(--border)] bg-white px-3.5 py-2 hover:border-[var(--text)] hover:bg-[var(--bg-subtle)] transition-all duration-150"
                >
                  {/* Logo */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {tech.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <InitialBadge name={tech.name} />
                    )}
                  </div>
                  <span className="font-montserrat font-medium text-[0.8125rem] text-[var(--text)] whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <p className="mt-8 font-montserrat text-[0.8125rem] text-[var(--text-3)] leading-[1.7] max-w-[540px]">
        Expecto covers the full product surface — frontend and backend engineering, design, video and business systems.
      </p>

    </div>
  );
}
