"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Database, Layers, Activity } from "lucide-react";

export default function Hero() {

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EF1B23]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF1B23] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF1B23]"></span>
              </span>
              <span>End-to-End IT Solutions</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 font-normal">Making Your Ideas Happen!</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We build digital products that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF1B23] via-[#FF4D54] to-[#EF1B23]">
                move businesses forward.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              We are an end-to-end IT solutions provider delivering website development, mobile application development, digital marketing, custom web portals, IT teams for your ideas, and ERP development for all your business needs.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#EF1B23] to-[#C6151C] hover:from-[#FF2A33] hover:to-[#EF1B23] shadow-lg shadow-red-950/50 hover:shadow-red-900/70 hover:-translate-y-0.5 transition-all group focus:outline-none focus:ring-2 focus:ring-[#EF1B23] focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-neutral-200 bg-[#151518] hover:bg-[#1E1E23] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Core Capability Pillars */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Mobile Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>AI / ML Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>ERP Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology & Solutions Capability Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Main Console Box */}
              <div className="relative rounded-2xl bg-[#151518]/90 border border-white/15 p-5 shadow-2xl backdrop-blur-xl">
                {/* Console Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF1B23]/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-neutral-400 ml-2">cling-services // overview</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Architecture Service Cards */}
                <div className="mt-4 space-y-3">
                  {/* Card 1: ERPs */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#EF1B23]/10 border border-[#EF1B23]/20 flex items-center justify-center text-[#EF1B23]">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#EF1B23] transition-colors">
                            ERP Development
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            Front &amp; back office application integration
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        Enterprise
                      </span>
                    </div>
                  </div>

                  {/* Card 2: AI / ML */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
                            AI / ML
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            Surveillance &amp; intelligent automation
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        Intelligent
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Web & Mobile */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                            Web &amp; Mobile Development
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            Ground-up development, never pre-designed templates
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        Custom
                      </span>
                    </div>
                  </div>
                </div>

                {/* Console Log Summary */}
                <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-neutral-400 space-y-1">
                  <div className="flex items-center justify-between text-neutral-500">
                    <span>cling-services // status</span>
                    <span className="text-neutral-500">Established 2019</span>
                  </div>
                  <div className="text-neutral-300">
                    <span className="text-[#EF1B23]">✓</span> Web, Mobile, AI/ML, and ERP solutions
                  </div>
                  <div className="text-neutral-300">
                    <span className="text-emerald-400">✓</span> 350+ clients • 390+ completed projects
                  </div>
                  <div className="text-neutral-400">
                    <span className="text-indigo-400">→</span> Making Your Ideas Happen!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
