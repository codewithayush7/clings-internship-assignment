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
    <section id="why-cling" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Headline (sticky only on desktop) */}
          <div className="lg:col-span-5 static lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-4">
              <span>Why Cling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Making your ideas happen with technology.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              We understand not only our customers well, but also the industry at large. We believe in innovations at their best, focusing on enhancing capability and business growth.
            </p>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Whether integrating back and front office applications or building custom portals, we partner with businesses to deliver solutions meeting the exacting standards you demand.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>All design layouts developed from ground up</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Never using pre-designed templates for your website</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>End-to-end IT services for all business needs</span>
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
