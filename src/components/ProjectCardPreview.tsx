"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectCardPreviewProps {
  name: string;
  url: string;
  category: 'cafe' | 'coaching' | 'food_ordering' | 'marketplace' | 'travel' | 'real_estate' | 'school';
  colorScheme: string;
  accentColor: string;
  height?: string;
  localImage?: string;
}

export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({
  name,
  url,
  category,
  colorScheme,
  accentColor,
  height = "200px",
  localImage,
}) => {
  const [screenshotError, setScreenshotError] = useState(false);
  const [screenshotLoaded, setScreenshotLoaded] = useState(false);

  const domain = url.replace('https://', '').replace('http://', '').replace(/\/$/, '');
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=900`;

  return (
    <div 
      className="relative w-full overflow-hidden flex flex-col group/preview bg-white"
      style={{ height }}
    >
      {/* Browser Frame Top */}
      <div className="h-9 sm:h-10 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 bg-[var(--bg-subtle)] border-b border-[var(--border)] shrink-0 relative z-30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-inner" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-inner" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-inner" />
        </div>
        <div className="flex-1 max-w-[170px] sm:max-w-[200px] h-6 bg-white border border-[var(--border)] rounded-sm mx-auto flex items-center justify-center">
          <span className="text-[9px] sm:text-[10px] text-[var(--text-3)] font-mono truncate px-2 sm:px-3 tracking-wider">
            {domain}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden bg-white">

        {/* LOCAL IMAGE — shown first if provided */}
        {localImage ? (
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Image
              src={localImage}
              alt={name}
              fill
              className="object-cover object-top transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover/preview:scale-105 group-hover/preview:-translate-y-[5%]"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 z-20" />
          </div>
        ) : !screenshotError ? (
          /* FALLBACK — WordPress screenshot */
          <div className="absolute inset-0 z-10 overflow-hidden">
            <img
              src={screenshotUrl}
              alt={name}
              className={`w-full h-full object-cover object-top transition-all duration-1000 ease-[0.16,1,0.3,1] ${
                screenshotLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-xl'
              } group-hover/preview:scale-105 group-hover/preview:translate-y-[-5%]`}
              onLoad={() => setScreenshotLoaded(true)}
              onError={() => setScreenshotError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 z-20" />
          </div>
        ) : (
          /* PLACEHOLDER */
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-subtle)] z-10">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-sm bg-white mx-auto flex items-center justify-center border border-[var(--border)]">
                <span className="font-montserrat font-semibold text-xl text-[var(--text-2)]">{name.charAt(0)}</span>
              </div>
              <p className="font-montserrat font-medium text-xs uppercase tracking-widest text-[var(--text-3)]">{name}</p>
            </div>
          </div>
        )}

        {/* Floating Category Tag */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
          <div className="px-3 sm:px-4 py-1.5 backdrop-blur-md bg-white/80 border border-[var(--border)] rounded-sm transition-transform duration-500 group-hover/preview:scale-105">
            <span className="font-montserrat font-medium text-[9px] uppercase tracking-[0.2em] text-[var(--text-2)]">{category.replace('_', ' ')}</span>
          </div>
        </div>
      </div>

      {/* Internal "Live" Indicator */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-montserrat font-medium text-[8px] uppercase tracking-widest text-emerald-500">Live Status</span>
        </div>
      </div>
    </div>
  );
};
