"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projectsData, Project } from "@/data/siteData";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Productivity & Management",
    "On-Demand Services",
    "Artificial Intelligence",
    "Enterprise ERP",
    "Healthcare & Therapeutics",
    "Web & Management",
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#0A0A0B] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work &amp; Products
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              A company needs to always have done great projects to showcase its skill sets and so do we. Below, we are showcasing some of our works to demonstrate our capabilities in the best realistic ways.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-[#151518] border border-white/10 hover:border-[#EF1B23]/40 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Visual Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} opacity-90`} />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF1B23]" />
                    {project.category}
                  </span>
                </div>

                {/* Preview Thumbnail / Clean Project Fallback */}
                <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#0E0E12] flex items-center justify-center">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center">
                        {/* Subtle abstract UI grid treatment */}
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.25) 1px, transparent 0)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="text-[10px] font-mono tracking-widest text-[#EF1B23] uppercase mb-1">
                            {project.tagline}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                            {project.name}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                      {project.name}
                    </h3>
                    <Link
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#EF1B23] flex items-center justify-center text-neutral-300 group-hover:text-white transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
                      aria-label={`Inquire about ${project.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <p className="mt-1 text-xs font-medium text-[#EF1B23]">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 group/btn"
                    >
                      <span>Inquire About This Solution</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#EF1B23] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA for Projects */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#151518] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Looking for custom software development?</h4>
            <p className="text-sm text-neutral-400 mt-1">
              All design layouts are developed from ground up, meeting the exacting standards you demand.
            </p>
          </div>
          <Link
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EF1B23] hover:bg-[#D4141C] text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition-colors shrink-0 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
