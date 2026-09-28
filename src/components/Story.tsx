"use client";

import React from "react";
import { BookOpen, Compass, Target, Calendar } from "lucide-react";
import { storyMilestones } from "@/data/siteData";

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Our Foundation &amp; Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A journey as dynamic as our technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Cling InfoTech Works was founded with a singular conviction: enterprises need dedicated technical partners
            who truly understand business models, not just ticket queues.
          </p>
        </div>

        {/* Vision & Mission Elegant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="relative rounded-2xl p-8 sm:p-10 bg-[#151518] border border-white/10 hover:border-[#EF1B23]/40 transition-all shadow-xl group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF1B23]/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#EF1B23]/10 border border-[#EF1B23]/20 flex items-center justify-center text-[#EF1B23] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#EF1B23] transition-colors">
              Our Vision
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              At Cling, our vision is to deliver premier web design, development, and marketing solutions that foster profitable online growth for our clients. We are dedicated to elevating every facet of our practice — architectural excellence, customer service devotion, deep technology integration, and steadfast long-term commitment.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5 text-xs text-neutral-400 font-mono">
              Fostering profitable online scale • Uncompromising craftsmanship
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl p-8 sm:p-10 bg-[#151518] border border-white/10 hover:border-[#EF1B23]/40 transition-all shadow-xl group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              Our Mission
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              We recognize the imperative of staying at the forefront of today&apos;s swiftly evolving digital landscape. We consistently invest in our engineers, refine our agile delivery processes, and embrace cutting-edge technologies to establish ourselves as the most reliable technical partner for businesses aiming to outpace competition.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5 text-xs text-neutral-400 font-mono">
              Agile execution • Cutting-edge technology adoption
            </div>
          </div>
        </div>

        {/* Dynamic Timeline 2019 to Today */}
        <div className="relative pt-6">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-[#EF1B23]" />
            <h3 className="text-xl font-bold text-white">Milestone Progression</h3>
          </div>

          {/* Horizontal / Vertical Stepper */}
          <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {storyMilestones.map((item, idx) => (
              <div key={item.year} className="relative group">
                {/* Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#EF1B23] group-hover:scale-125 group-hover:bg-[#EF1B23] transition-all shadow-md shadow-red-950/60" />

                <div className="p-6 rounded-2xl bg-[#151518] border border-white/5 hover:border-white/15 transition-all shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#EF1B23]/10 border border-[#EF1B23]/30 text-xs font-mono font-bold text-[#EF1B23]">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    </div>
                    {item.metrics && (
                      <span className="text-xs font-mono text-neutral-400">
                        {item.metrics}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
