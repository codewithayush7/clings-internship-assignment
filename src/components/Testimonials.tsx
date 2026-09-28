"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData, Testimonial } from "@/data/siteData";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Testimonials
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Your Voice, Our Pride! Dive into the heartfelt accounts of our valued patrons. From life-changing experiences to exceptional service, their stories illuminate the essence of our commitment. Join our family of satisfied customers and witness firsthand the transformative power of our offerings. Your satisfaction is our greatest achievement!
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-xl bg-[#151518] hover:bg-[#1E1E23] border border-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-xl bg-[#151518] hover:bg-[#1E1E23] border border-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#151518] to-[#121215] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden mb-12">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF1B23]/5 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Client Avatar and Meta */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#EF1B23]/40 shadow-xl mb-4 bg-[#151518] flex items-center justify-center">
                {current.image ? (
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1E1E24] to-[#121215] flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-neutral-200 tracking-wider font-mono">
                    {getInitials(current.name)}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white">{current.name}</h3>
              {current.role && (
                <p className="text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mt-0.5">
                  {current.role} {current.company && `— ${current.company}`}
                </p>
              )}
            </div>

            {/* Right: Testimonial Quote */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="relative">
                <MessageSquareQuote className="w-12 h-12 text-[#EF1B23]/20 mb-4" />
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-neutral-100 font-medium leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>
                  {currentIndex + 1} of {testimonialsData.length}
                </span>
                <span className="text-neutral-400">
                  Cling Info Tech Testimonial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Preview Selector Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
          {testimonialsData.map((item: Testimonial, idx: number) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`p-2 rounded-xl border text-left transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-white/10 border-[#EF1B23] shadow-md shadow-red-950/40"
                    : "bg-[#151518] border-white/5 hover:border-white/15"
                }`}
              >
                <div className="w-6 h-6 relative rounded-md overflow-hidden shrink-0 border border-white/10 bg-[#1A1A1E] flex items-center justify-center">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : (
                    <span className="text-[10px] font-bold text-neutral-300 font-mono">
                      {getInitials(item.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-white block truncate">
                    {item.name.split(" ")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
