"use client";

import React from "react";
import { Layers, Target, ShieldCheck, Handshake, CheckCircle } from "lucide-react";
import { whyClingData, ValueProp } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Target,
  ShieldCheck,
  Handshake,
};

export default function WhyCling() {
  return (
    <section id="why-cling" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Headline */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-4">
              <span>Why Cling InfoTech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineered for velocity, scale, and longevity.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Most software projects fail not because of coding mistakes, but due to misalignment between engineering execution and commercial objectives.
            </p>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              We structure our engineering sprints around business leverage, ensuring that every deployment delivers tangible operational value, user adoption, and ROI.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Zero template shortcuts — 100% custom architectures</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Transparent sprints with weekly staging releases</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Dedicated tech leads with direct Slack/Teams integration</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Value Proposition Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyClingData.map((prop: ValueProp, index: number) => {
              const Icon = iconMap[prop.iconName] || Layers;
              return (
                <div
                  key={prop.id}
                  className="p-7 rounded-2xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#EF1B23] group-hover:bg-[#EF1B23] group-hover:text-white transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      Principle 0{index + 1}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-400 mt-0.5">
                      {prop.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
