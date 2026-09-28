"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, ShieldCheck, Sparkles, Database, Layers, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EF1B23]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#6366F1]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF1B23] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF1B23]"></span>
              </span>
              <span>Enterprise IT &amp; Digital Product Engineering</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 font-normal">350+ Global Clients</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We build digital products that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF1B23] via-[#FF4D54] to-[#EF1B23]">
                move businesses forward.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              From mission-critical web platforms and native mobile applications to intelligent AI/ML models,
              enterprise ERPs, and bespoke software — we engineer scalable digital solutions that drive measurable business growth.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
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
                <span>Web &amp; Custom Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Mobile (iOS &amp; Android)</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>AI &amp; Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#EF1B23] shrink-0" />
                <span>Enterprise ERPs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Technology & Architecture Visual */}
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
                    <span className="text-xs font-mono text-neutral-400 ml-2">cling-engine // telemetry</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Architecture Service Cards */}
                <div className="mt-4 space-y-3">
                  {/* Card 1: Enterprise ERP Core */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#EF1B23]/10 border border-[#EF1B23]/20 flex items-center justify-center text-[#EF1B23]">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#EF1B23] transition-colors">
                            Enterprise ERP Ecosystem
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            Multi-warehouse • Ledger • Automated Invoicing
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        14.8k ops/s
                      </span>
                    </div>
                  </div>

                  {/* Card 2: AI Neural Vision Engine */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
                            AI Computer Vision &amp; NLP
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            Sub-second surveillance • 98.7% accuracy
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        42ms infer
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Cloud Microservices & Mobile Gateway */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B]/80 border border-white/5 hover:border-[#EF1B23]/40 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                            Cloud API &amp; Mobile Mesh
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono">
                            AWS Distributed Architecture • SSL Grade A+
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        99.98% SLA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Terminal Output Stream */}
                <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-neutral-400 space-y-1">
                  <div className="flex items-center justify-between text-neutral-500">
                    <span>deployment-stream.log</span>
                    <span className="text-neutral-600">v4.2.1-prod</span>
                  </div>
                  <div className="text-neutral-300">
                    <span className="text-[#EF1B23]">✓</span> Cluster nodes synchronized across 12 countries
                  </div>
                  <div className="text-neutral-400">
                    <span className="text-emerald-400">✓</span> 32M+ lines of verified code in production
                  </div>
                  <div className="text-neutral-500">
                    <span className="text-indigo-400">→</span> Ready for next enterprise workload
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A0A0B]/95 border border-[#EF1B23]/40 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#EF1B23] to-[#8A0005] flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Making Your Ideas Happen</div>
                  <div className="text-[10px] text-neutral-400">Zero-template bespoke engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
