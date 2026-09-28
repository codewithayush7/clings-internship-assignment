"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users2 } from "lucide-react";
import { verifiedClients, Client } from "@/data/siteData";

function ClientCard({ client }: { client: Client }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="px-5 py-3 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-all duration-200 shrink-0 flex items-center gap-3 shadow-md group">
      <div className="w-10 h-10 relative rounded-lg bg-white/5 p-1 flex items-center justify-center overflow-hidden shrink-0">
        {!imageError ? (
          <Image
            src={client.imageURL}
            alt={client.name}
            width={40}
            height={40}
            className="object-contain max-h-8 max-w-8 filter brightness-90 group-hover:brightness-100 transition-all"
            onError={() => setImageError(true)}
            unoptimized={client.imageURL.startsWith("http")}
          />
        ) : (
          <span className="text-xs font-bold text-[#EF1B23]">
            {client.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <div>
        <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#EF1B23] transition-colors block whitespace-nowrap">
          {client.name}
        </span>
      </div>
    </div>
  );
}

export default function Clients() {
  const row1 = verifiedClients.slice(0, Math.ceil(verifiedClients.length / 2));
  const row2 = verifiedClients.slice(Math.ceil(verifiedClients.length / 2));

  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="clients" className="relative py-20 sm:py-28 bg-[#0A0A0B] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-3">
          <Users2 className="w-3.5 h-3.5" />
          <span>Our Diverse Clientele</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Our Clients
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-normal">
          When we say &ldquo;Making your idea happen!&rdquo;, we mean it. Same is shown by the list of our clients. We are helping every possible Entrepreneur, to build/innovate their ideas.
        </p>
      </div>

      {/* Marquee Wrapper with side gradient fades */}
      <div className="relative w-full overflow-hidden py-4 space-y-4">
        {/* Left and Right Edge Vignette Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        <div className="animate-marquee-left flex items-center gap-4">
          {marqueeRow1.map((client, idx) => (
            <ClientCard key={`${client.name}-r1-${idx}`} client={client} />
          ))}
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="animate-marquee-right flex items-center gap-4">
          {marqueeRow2.map((client, idx) => (
            <ClientCard key={`${client.name}-r2-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
