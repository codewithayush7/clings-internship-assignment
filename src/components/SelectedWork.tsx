"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Sparkles, CheckCircle2 } from "lucide-react";
import { projectsData, Project } from "@/data/siteData";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Enterprise SaaS", "Healthcare", "Fintech", "Artificial Intelligence", "ERP"];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Enterprise SaaS") return p.category.includes("SaaS") || p.category.includes("Services");
    if (activeFilter === "Healthcare") return p.category.includes("Healthcare");
    if (activeFilter === "Fintech") return p.category.includes("Fintech");
    if (activeFilter === "Artificial Intelligence") return p.category.includes("Intelligence");
    if (activeFilter === "ERP") return p.category.includes("ERP");
    return true;
  });

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Client Work &amp; Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Crafted with engineering depth
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              A curated showcase of real digital products, high-throughput portals, and enterprise systems built by Cling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-[#EF1B23] text-white shadow-md shadow-red-950/40"
                    : "bg-[#151518] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: Project, index: number) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-[#151518] border border-white/10 hover:border-[#EF1B23]/40 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Image / Visual Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} opacity-90`} />

                {/* Subtle visual badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF1B23]" />
                    {project.category}
                  </span>
                </div>

                {project.metrics && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EF1B23]/90 text-white text-[11px] font-bold shadow-md">
                      <Sparkles className="w-3 h-3" />
                      {project.metrics.value}
                    </span>
                  </div>
                )}

                {/* Main Media Preview */}
                <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0B]/80 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                      {project.name}
                    </h3>
                    <Link
                      href="#contact"
                      className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#EF1B23] flex items-center justify-center text-neutral-300 group-hover:text-white transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
                      aria-label={`Inquire about ${project.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <p className="mt-1 text-xs font-medium text-[#EF1B23]">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 group/btn"
                    >
                      <span>Inquire About Similar Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#EF1B23] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-neutral-500">
                      Case #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA for Projects */}
        <div className="mt-16 p-8 rounded-2xl bg-[#151518] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Have a specific custom requirement?</h4>
            <p className="text-sm text-neutral-400 mt-1">
              We have delivered 390+ software applications across 12 countries. Let&apos;s build yours.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EF1B23] hover:bg-[#D4141C] text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition-colors shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
