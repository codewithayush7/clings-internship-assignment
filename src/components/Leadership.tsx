"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Shield } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";
import { leadershipData, Leader } from "@/data/siteData";

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet our leadership team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            Guided by proven engineering leaders and digital strategists committed to operational excellence and client success.
          </p>
        </div>

        {/* 3 Leadership Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipData.map((leader: Leader) => (
            <div
              key={leader.name}
              className="group rounded-2xl bg-[#151518] border border-white/10 hover:border-[#EF1B23]/40 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 shadow-2xl"
            >
              {/* Leader Photo */}
              <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-80" />

                {/* Role Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10">
                    <Shield className="w-3 h-3 text-[#EF1B23]" />
                    {leader.role}
                  </span>
                  {leader.linkedin && (
                    <Link
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EF1B23] flex items-center justify-center text-white transition-colors"
                      aria-label={`${leader.name} LinkedIn Profile`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Leader Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mt-1">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Cling Works Pvt Ltd</span>
                  <span>Executive Board</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
