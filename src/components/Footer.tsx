"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/components/SocialIcons";
import { companyContact } from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070708] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#EF1B23] to-[#8A0005] p-[1px] shadow-md shadow-red-950/40">
              <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Cling Logo"
                  width={34}
                  height={34}
                  className="object-contain p-1"
                />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                CLING<span className="text-[#EF1B23]">.</span>
              </span>
              <span className="text-xs text-neutral-400">
                Cling Info Tech Works Private Limited
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Link
              href={companyContact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#151518] hover:bg-[#EF1B23] border border-white/10 flex items-center justify-center text-white transition-all shadow-sm"
              aria-label="Cling on LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </Link>
            <Link
              href={companyContact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#151518] hover:bg-[#EF1B23] border border-white/10 flex items-center justify-center text-white transition-all shadow-sm"
              aria-label="Cling on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-[#151518] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Columns Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Company (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              We are an end-to-end IT solutions provider delivering website development, mobile applications, digital marketing, AI/ML, and enterprise ERP architectures designed for sustainable business scale.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-[#EF1B23]" />
                <a href={`tel:${companyContact.phoneRaw}`} className="hover:text-white transition-colors">
                  {companyContact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-[#EF1B23]" />
                <a href={`mailto:${companyContact.email}`} className="hover:text-white transition-colors">
                  {companyContact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Web &amp; Custom Software
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Mobile App Development (iOS &amp; Android)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI, Machine Learning &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Enterprise ERP &amp; Portals
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  3D Animation &amp; Motion Visuals
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Digital Marketing &amp; SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-white transition-colors">
                  Our Story &amp; Timeline
                </Link>
              </li>
              <li>
                <Link href="#leadership" className="hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="#global" className="hover:text-white transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link href="#clients" className="hover:text-white transition-colors">
                  Client Roster
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Office Locations</h4>
            <div className="space-y-3 text-xs leading-relaxed">
              {companyContact.offices.map((office) => (
                <div key={office.city} className="border-l border-white/10 pl-3">
                  <div className="font-semibold text-neutral-200">{office.city}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">{office.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} Cling InfoTech Works Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-neutral-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#contact" className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
