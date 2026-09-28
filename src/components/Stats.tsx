"use client";

import React, { useEffect, useRef, useState } from "react";
import { Code, Users, Award, Coffee, TrendingUp } from "lucide-react";
import { statisticsData } from "@/data/siteData";

function CounterItem({
  target,
  suffix,
  label,
  sublabel,
  icon: Icon,
}: {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasAnimated, target]);

  return (
    <div
      ref={elementRef}
      className="relative p-6 sm:p-8 rounded-2xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/30 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#EF1B23] group-hover:scale-110 group-hover:bg-[#EF1B23]/10 transition-all">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
          Verified Audit
        </span>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-[#EF1B23]">{suffix}</span>
      </div>

      <h3 className="mt-3 text-base sm:text-lg font-bold text-neutral-200 group-hover:text-white transition-colors">
        {label}
      </h3>
      <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{sublabel}</p>

      {/* Subtle indicator bar on bottom */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#EF1B23]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export default function Stats() {
  const icons = [Code, Users, Award, Coffee];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0A0B] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Numbers backed by real execution
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Real metrics from production software and global client deployments since 2019.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.map((stat, idx) => (
            <CounterItem
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={icons[idx % icons.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
