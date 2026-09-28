"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cpu,
  Database,
  TrendingUp,
  Film,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Layers,
} from "lucide-react";
import { servicesData, Service } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Database,
  TrendingUp,
  Film,
};

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            End-to-End IT Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            We are an end-to-end IT Solutions providing major services such as website development, mobile application development, digital marketing, custom web portal, IT team for your next idea, ERP development, for all your business needs.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service: Service) => {
            const IconComponent = iconMap[service.iconName] || Layers;
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative rounded-2xl p-7 sm:p-8 bg-[#151518] border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl group ${
                  isHovered ? "border-[#EF1B23]/50 shadow-2xl shadow-red-950/20" : "border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#EF1B23] group-hover:bg-[#EF1B23] group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-400">
                    {service.shortDesc}
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Service Scope:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EF1B23] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="mt-8 pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EF1B23] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
