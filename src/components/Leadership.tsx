"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Shield } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";
import { leadershipData, Leader } from "@/data/siteData";

export default function Leadership() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveLeaderIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            The executive leadership guiding Cling Info Tech Works Private Limited.
          </p>
        </div>

        {/* 3 Leadership Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leadershipData.map((leader: Leader, index: number) => {
            const isCardActive = activeLeaderIndex === index;

            return (
              <div
                key={leader.name}
                role="button"
                tabIndex={0}
                aria-pressed={isCardActive}
                aria-label={`${leader.name}, ${leader.role} - Tap to view photo in color`}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
                className={`group rounded-2xl bg-[#151518] transition-all duration-300 overflow-hidden flex flex-col shadow-2xl cursor-pointer select-none ${
                  isCardActive
                    ? "border border-[#EF1B23]/60 -translate-y-1"
                    : "border border-white/10 hover:border-[#EF1B23]/40 hover:-translate-y-2"
                }`}
              >
                {/* Leader Photo */}
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className={`object-cover object-top filter transition-all duration-500 ${
                      isCardActive
                        ? "grayscale-0 scale-105"
                        : "grayscale scale-100 md:group-hover:grayscale-0 md:group-hover:scale-105"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-70" />

                  {/* Role Pill Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0B]/85 backdrop-blur-md text-xs font-semibold text-white border border-white/10">
                      <Shield className="w-3 h-3 text-[#EF1B23]" />
                      {leader.role}
                    </span>
                    {leader.linkedin && (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EF1B23] flex items-center justify-center text-white transition-colors"
                        aria-label={`${leader.name} LinkedIn Profile`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Leader Details */}
                <div className="p-6 text-center">
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      isCardActive
                        ? "text-[#EF1B23]"
                        : "text-white group-hover:text-[#EF1B23]"
                    }`}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mt-1">
                    {leader.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
