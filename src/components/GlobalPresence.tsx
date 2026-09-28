"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe2, MapPin, Sparkles } from "lucide-react";
import { verifiedCountries, Country } from "@/data/siteData";

export default function GlobalPresence() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(verifiedCountries[0]);
  const [activeRegion, setActiveRegion] = useState<string>("All");

  const regions = ["All", "Asia Pacific", "Americas", "Europe", "Middle East & Africa"];

  const filteredCountries = verifiedCountries.filter((c) => {
    if (activeRegion === "All") return true;
    return c.region === activeRegion;
  });

  return (
    <section id="global" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our global presence
            </h2>
            <p className="mt-3 text-base text-neutral-300 max-w-xl font-normal">
              Expanding our digital footprint across diverse markets, delivering localized and compliant enterprise solutions in 12+ international destinations.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeRegion === reg
                    ? "bg-[#EF1B23] text-white"
                    : "bg-[#151518] text-neutral-400 hover:text-white border border-white/5"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive World Map & Network Visual */}
        <div className="relative rounded-2xl bg-[#151518] border border-white/10 p-6 sm:p-10 mb-12 shadow-2xl overflow-hidden">
          {/* Subtle World Map SVG Silhouette */}
          <div className="relative w-full aspect-[2.2/1] min-h-[300px] flex items-center justify-center">
            {/* World Map Dot Canvas SVG */}
            <svg
              className="w-full h-full text-neutral-800/60"
              viewBox="0 0 1000 480"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified World Continents Silhouettes */}
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.08)" />
                </pattern>
              </defs>
              <rect width="1000" height="480" fill="url(#dotPattern)" />

              {/* Connecting Network Arcs between India HQ and world centers */}
              <g stroke="#EF1B23" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                {/* Lines radiating from India (~700, 250) */}
                <path d="M 700 250 Q 460 160 220 182" fill="none" />
                <path d="M 700 250 Q 590 190 480 134" fill="none" />
                <path d="M 700 250 Q 660 235 620 220" fill="none" />
                <path d="M 700 250 Q 735 270 770 288" fill="none" />
                <path d="M 700 250 Q 780 305 860 365" fill="none" />
                <path d="M 700 250 Q 625 310 550 374" fill="none" />
              </g>
            </svg>

            {/* Interactive Pins on Map */}
            {verifiedCountries.map((c) => {
              const isSelected = selectedCountry.code === c.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  style={{
                    left: `${c.coords.x}%`,
                    top: `${c.coords.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                  aria-label={`View ${c.name} operations`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-7 h-7 rounded-full bg-[#EF1B23] transition-all duration-300 ${
                        isSelected ? "animate-ping opacity-60" : "opacity-0 group-hover:opacity-40"
                      }`}
                    />
                    {/* Center marker */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isSelected
                          ? "bg-white border-[#EF1B23] scale-125 shadow-lg shadow-red-500/80"
                          : "bg-[#EF1B23] border-[#0A0A0B] group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Tooltip on Hover / Selected */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-all duration-200 ${
                      isSelected ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  >
                    <div className="px-2.5 py-1 rounded-md bg-[#0A0A0B] border border-white/20 text-[11px] font-semibold text-white whitespace-nowrap shadow-xl flex items-center gap-1.5">
                      <span>{c.name}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Location Detail Bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-6 relative rounded overflow-hidden shadow-sm shrink-0 border border-white/20">
                <Image
                  src={selectedCountry.flagUrl}
                  alt={selectedCountry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{selectedCountry.name}</span>
                  <span className="text-xs font-normal text-neutral-400 font-mono">
                    ({selectedCountry.region})
                  </span>
                </div>
                <p className="text-xs text-neutral-300">{selectedCountry.highlight}</p>
              </div>
            </div>

            <div className="text-xs text-neutral-400 flex items-center gap-2 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#EF1B23]" />
              <span>Full Cross-Border Compliance &amp; Time-Zone Overlap</span>
            </div>
          </div>
        </div>

        {/* Compact Country Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredCountries.map((country: Country) => {
            const isSelected = selectedCountry.code === country.code;
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => setSelectedCountry(country)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-white/10 border-[#EF1B23] shadow-md shadow-red-950/40"
                    : "bg-[#151518] border-white/5 hover:border-white/20 hover:bg-[#1E1E23]"
                }`}
              >
                <div className="w-6 h-4 relative rounded overflow-hidden shadow-xs shrink-0 border border-white/10">
                  <Image
                    src={country.flagUrl}
                    alt={`${country.name} flag`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-white block truncate">
                    {country.name}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono block truncate">
                    {country.code}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
