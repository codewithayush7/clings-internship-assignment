"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { companyContact } from "@/data/siteData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Direct Support Actions"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip Badge */}
      <div
        className={`mr-3 px-3 py-1.5 rounded-xl bg-[#151518] border border-white/10 shadow-2xl text-xs text-white whitespace-nowrap transition-all duration-200 pointer-events-none ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="font-semibold block text-emerald-400">Chat on WhatsApp</span>
        <span className="text-[10px] text-neutral-400 font-mono">+91 8264469132</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={companyContact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Cling InfoTech (+91 8264469132)"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/80 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        {/* Local WhatsApp icon or fallback SVG */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        </div>
      </a>
    </aside>
  );
}
