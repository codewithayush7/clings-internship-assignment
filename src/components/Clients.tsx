"use client";

import React from "react";
import { Users2, CheckCircle2 } from "lucide-react";
import { verifiedClients } from "@/data/siteData";

export default function Clients() {
  // Split clients into two rows for dynamic marquee
  const row1 = verifiedClients.slice(0, Math.ceil(verifiedClients.length / 2));
  const row2 = verifiedClients.slice(Math.ceil(verifiedClients.length / 2));

  // Duplicate for smooth continuous marquee loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="clients" className="relative py-20 sm:py-28 bg-[#0A0A0B] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
          <Users2 className="w-3.5 h-3.5" />
          <span>Trusted by 350+ Businesses</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Enterprises &amp; fast-growing startups trust Cling
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
          From industrial manufacturers and fintech pioneers to healthcare portals and educational institutions.
        </p>
      </div>

      {/* Marquee Wrapper with side gradient fades */}
      <div className="relative w-full overflow-hidden py-4 space-y-4">
        {/* Left and Right Edge Vignette Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        <div className="animate-marquee-left flex items-center gap-4">
          {marqueeRow1.map((client, idx) => (
            <div
              key={`${client.name}-r1-${idx}`}
              className="px-6 py-4 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-all duration-200 shrink-0 flex items-center gap-3 shadow-md group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EF1B23]/10 border border-[#EF1B23]/20 flex items-center justify-center font-bold text-xs text-[#EF1B23] group-hover:bg-[#EF1B23] group-hover:text-white transition-colors">
                {client.logoText.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-sm font-bold text-white group-hover:text-[#EF1B23] transition-colors block">
                  {client.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono block">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="animate-marquee-right flex items-center gap-4">
          {marqueeRow2.map((client, idx) => (
            <div
              key={`${client.name}-r2-${idx}`}
              className="px-6 py-4 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-all duration-200 shrink-0 flex items-center gap-3 shadow-md group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-neutral-300 group-hover:border-[#EF1B23] group-hover:text-[#EF1B23] transition-colors">
                {client.logoText.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-sm font-bold text-white group-hover:text-[#EF1B23] transition-colors block">
                  {client.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono block">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust reassurance banner */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left pt-6 border-t border-white/5">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start text-xs text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-[#EF1B23] shrink-0" />
            <span>Strict NDA &amp; IP Protection</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start text-xs text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-[#EF1B23] shrink-0" />
            <span>Dedicated Full-Stack Pods</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start text-xs text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-[#EF1B23] shrink-0" />
            <span>Transparent Weekly Milestones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
