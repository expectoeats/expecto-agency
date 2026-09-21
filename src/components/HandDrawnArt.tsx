import React from "react";

// ── Hand-Drawn Arrow ────────────────────────────────────────────────────────
export function HandDrawnArrow({ className = "w-12 h-12 text-white/70" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Curved body */}
      <path d="M12 22 C 30 10, 65 14, 82 48" />
      {/* Sketchy double-stroke effect */}
      <path d="M14 24 C 32 12, 63 17, 80 50" strokeWidth="1.2" opacity="0.6" />
      {/* Arrowhead */}
      <path d="M68 42 L 83 49 L 81 33" />
      <path d="M70 44 L 83 49 L 83 35" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

// ── Hand-Drawn Marker Circle / Loop ──────────────────────────────────────────
export function HandDrawnCircle({ className = "w-full h-full text-white/40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 15,30 C 12,12 60,6 105,10 C 132,13 138,32 125,48 C 110,60 40,58 18,48 C 8,42 10,25 24,18 C 45,10 95,8 128,20" />
    </svg>
  );
}

// ── Hand-Drawn Underline Squiggle ────────────────────────────────────────────
export function HandDrawnUnderline({ className = "w-full h-3 text-amber-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 4 12 C 45 4, 95 16, 140 8 C 165 4, 185 10, 196 6" />
      <path d="M 12 14 C 55 7, 105 17, 148 10 C 170 7, 188 12, 194 9" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

// ── Hand-Drawn Verified Stamp Badge ─────────────────────────────────────────
export function HandDrawnStamp({
  label = "10-DAY SPRINT",
  sub = "VERIFIED BUILD",
  className = "w-28 h-28 text-neutral-900",
}: {
  label?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer sketchy circle */}
        <circle cx="50" cy="50" r="45" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="41" strokeWidth="1.2" opacity="0.8" />
        {/* Inner ring */}
        <circle cx="50" cy="50" r="34" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
        {/* Hand drawn cross lines */}
        <line x1="20" y1="50" x2="80" y2="50" strokeWidth="1" opacity="0.4" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center rotate-[-6deg] pointer-events-none">
        <span className="font-mono text-[9px] font-bold tracking-wider uppercase leading-none">
          {label}
        </span>
        <span className="font-mono text-[7px] tracking-widest uppercase opacity-75 mt-1 leading-none">
          {sub}
        </span>
      </div>
    </div>
  );
}

// ── Hand-Drawn Marksheet Illustration Art ────────────────────────────────────
export function HandDrawnMarksheetSketch({ className = "w-full h-auto text-neutral-800" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Paper boundary with organic sketch lines */}
      <path d="M 25 15 L 255 13 L 258 185 L 23 188 Z" fill="white" />
      <path d="M 27 18 L 252 16 L 255 182 L 26 185 Z" strokeWidth="0.8" opacity="0.4" />

      {/* Header bar / seal */}
      <path d="M 40 32 L 140 32" strokeWidth="2.5" />
      <path d="M 40 42 L 110 42" strokeWidth="1.5" opacity="0.6" />
      <circle cx="230" cy="35" r="14" strokeWidth="1.5" />
      <circle cx="230" cy="35" r="10" strokeDasharray="2 2" strokeWidth="1" opacity="0.7" />
      <path d="M 226 35 L 229 38 L 235 32" strokeWidth="1.5" />

      {/* Table grid */}
      <line x1="38" y1="62" x2="242" y2="62" strokeWidth="1.5" />
      <line x1="38" y1="84" x2="242" y2="84" strokeWidth="1" opacity="0.7" />
      <line x1="38" y1="106" x2="242" y2="106" strokeWidth="1" opacity="0.7" />
      <line x1="38" y1="128" x2="242" y2="128" strokeWidth="1" opacity="0.7" />
      <line x1="38" y1="150" x2="242" y2="150" strokeWidth="1.5" />

      {/* Table columns */}
      <line x1="120" y1="62" x2="120" y2="150" strokeWidth="1" opacity="0.7" />
      <line x1="180" y1="62" x2="180" y2="150" strokeWidth="1" opacity="0.7" />

      {/* Subject rows lines (simulating text) */}
      <line x1="45" y1="74" x2="95" y2="74" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="96" x2="105" y2="96" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="118" x2="88" y2="118" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="140" x2="100" y2="140" strokeWidth="2" opacity="0.7" />

      {/* Scores & checkmarks */}
      <line x1="140" y1="74" x2="160" y2="74" strokeWidth="2" />
      <line x1="140" y1="96" x2="162" y2="96" strokeWidth="2" />
      <line x1="140" y1="118" x2="158" y2="118" strokeWidth="2" />
      <line x1="140" y1="140" x2="164" y2="140" strokeWidth="2" />

      {/* Grade Stamp (A+) */}
      <rect x="200" y="80" width="32" height="26" rx="2" strokeWidth="1.8" transform="rotate(-6 200 80)" />
      <text
        x="207"
        y="99"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="bold"
        fill="currentColor"
        transform="rotate(-6 200 80)"
      >
        A+
      </text>

      {/* Bottom QR placeholder & signature */}
      <rect x="40" y="158" width="22" height="22" strokeWidth="1.5" />
      <rect x="45" y="163" width="12" height="12" fill="currentColor" opacity="0.7" />
      <path d="M 180 172 C 195 168, 205 178, 220 170 C 228 165, 235 172, 240 168" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

// ── Hand-Drawn Certificate Illustration Art ─────────────────────────────────
export function HandDrawnCertificateSketch({ className = "w-full h-auto text-neutral-800" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Certificate double border */}
      <rect x="18" y="16" width="244" height="168" fill="white" strokeWidth="2" />
      <rect x="25" y="23" width="230" height="154" strokeWidth="1" strokeDasharray="4 2" opacity="0.7" />

      {/* Corner decorative ornaments */}
      <path d="M 28 36 L 36 28 M 252 36 L 244 28 M 28 164 L 36 172 M 252 164 L 244 172" strokeWidth="1.5" />

      {/* Certificate Heading */}
      <path d="M 85 45 L 195 45" strokeWidth="2.5" />
      <path d="M 105 55 L 175 55" strokeWidth="1.5" opacity="0.6" />

      {/* Student Name ribbon */}
      <path d="M 60 85 C 90 82, 190 82, 220 85" strokeWidth="2" />
      <path d="M 70 95 L 210 95" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      {/* Course text lines */}
      <line x1="75" y1="112" x2="205" y2="112" strokeWidth="1.5" opacity="0.7" />
      <line x1="90" y1="124" x2="190" y2="124" strokeWidth="1.5" opacity="0.7" />

      {/* Wax Ribbon Seal with sketch ribbons */}
      <g transform="translate(140, 150)">
        {/* Ribbons */}
        <path d="M -6 10 L -14 28 L -5 24 L 2 28 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 6 10 L 14 28 L 5 24 L -2 28 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        {/* Seal Circle */}
        <circle cx="0" cy="0" r="16" fill="white" stroke="currentColor" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
        <path d="M -5 0 L -1 4 L 6 -3" stroke="currentColor" strokeWidth="1.75" />
      </g>

      {/* Online Verification QR Sketch (Top Right) */}
      <g transform="translate(216, 34)">
        <rect x="0" y="0" width="26" height="26" stroke="currentColor" strokeWidth="1.5" fill="white" />
        <rect x="4" y="4" width="6" height="6" fill="currentColor" />
        <rect x="16" y="4" width="6" height="6" fill="currentColor" />
        <rect x="4" y="16" width="6" height="6" fill="currentColor" />
        <rect x="14" y="14" width="4" height="4" fill="currentColor" />
      </g>
    </svg>
  );
}

// ── Hand-Drawn Stopwatch Speed Sketch ───────────────────────────────────────
export function HandDrawnStopwatchSketch({ className = "w-10 h-10 text-neutral-800" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top pusher */}
      <path d="M 28 8 L 36 8" />
      <path d="M 32 8 L 32 14" />
      <path d="M 44 14 L 49 18" />
      {/* Watch body */}
      <circle cx="32" cy="38" r="22" />
      <circle cx="32" cy="38" r="18" strokeDasharray="3 2" opacity="0.5" />
      {/* Hand pointing to 10 min */}
      <path d="M 32 38 L 42 28" strokeWidth="2.5" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" />
    </svg>
  );
}
