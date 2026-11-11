import Image from "next/image";

const clientLogos = [
  {
    name: "INTERFACE CLASSES",
    type: "#1 on Google",
    logo: "/clients/interface.jpeg",
  },
  {
    name: "RAMA COACHING",
    type: "Coaching ERP",
    logo: "/clients/rama.jpeg",
  },
  {
    name: "KALA SAMPUTAH",
    type: "Live Art Store",
    isTextOnly: true,
  },
  {
    name: "SWAPZY",
    type: "Live Marketplace",
    logo: "/clients/swapzy.png",
  },
  {
    name: "EXPECTO EATS",
    type: "Food Ordering SaaS",
  },
  {
    name: "PAUSE CAFE",
    type: "Hospitality Web",
  },
  {
    name: "GLOWUP SALON",
    type: "Booking Engine",
  },
  {
    name: "FITZONE GYM",
    type: "Fitness Platform",
  },
];

export default function ClientsMarquee() {
  // 2 sets of 8 (16 items) doubled to 32 for a perfectly seamless 0% -> -50% loop
  const base = [...clientLogos, ...clientLogos];
  const repeated = [...base, ...base];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-t border-[#E5E7EB] overflow-hidden" aria-label="Clients">
      <div className="w-full max-w-[1400px] mx-auto text-center mb-12">
        <span className="font-mono text-xs text-[#5A6271] block mb-2">
          ( TRUSTED BY 50+ BUSINESSES )
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#1E1E1E]">
          Trusted by growing businesses and founders across India.
        </h2>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden group">
        {/* Left / Right gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-6 sm:gap-8 w-max py-4 animate-[marquee_55s_linear_infinite] group-hover:[animation-play-state:paused]">
          {repeated.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-4 py-2.5 px-5 sm:py-3 sm:px-6 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#1E1E1E] hover:bg-white transition-all duration-200 cursor-default shrink-0 shadow-xs"
            >
              <span
                className={
                  client.isTextOnly
                    ? "font-sans text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#1E1E1E] uppercase"
                    : "font-mono text-xs sm:text-sm font-bold tracking-wider text-[#1E1E1E]"
                }
              >
                {client.name}
              </span>

              {client.logo && (
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-white border border-[#E5E7EB] shrink-0 shadow-xs flex items-center justify-center p-1">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <span className="font-mono text-[10px] text-[#5A6271] uppercase border-l border-[#E5E7EB] pl-3">
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
