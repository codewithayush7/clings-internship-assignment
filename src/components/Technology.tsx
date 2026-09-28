"use client";

import React, { useState } from "react";
import {
  Terminal,
  Code2,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Zap,
  Database,
  Eye,
  Sparkles,
  Layers3,
  Box,
} from "lucide-react";
import { techStackData, TechItem } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Code2,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Zap,
  Database,
  Eye,
  Sparkles,
  Layers3,
  Box,
};

export default function Technology() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    "All",
    "Web & Frontend",
    "Mobile Platforms",
    "Backend & Data",
    "AI & Solutions",
  ];

  const filtered = techStackData.filter((item) => {
    if (activeTab === "All") return true;
    return item.category === activeTab;
  });

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <Layers3 className="w-3.5 h-3.5" />
            <span>Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Technology Focus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            Technologies and capabilities reflected across Cling&apos;s web, mobile, AI, and enterprise solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-[#EF1B23] text-white shadow-md shadow-red-950/40"
                  : "bg-[#151518] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((tech: TechItem) => {
            const Icon = iconMap[tech.iconName] || Code2;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-all duration-200 hover:-translate-y-1 shadow-md group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#EF1B23] group-hover:scale-110 group-hover:bg-[#EF1B23] group-hover:text-white transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                    {tech.category}
                  </span>
                  <p className="mt-1.5 text-xs text-neutral-300 leading-snug">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#151518] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#EF1B23] shrink-0" />
            <span>
              All design layouts are developed from ground up, meeting the exacting standards you demand.
            </span>
          </div>
          <span className="text-neutral-400 font-mono shrink-0">
            Making Your Ideas Happen!
          </span>
        </div>
      </div>
    </section>
  );
}
