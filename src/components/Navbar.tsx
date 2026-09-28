"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { navigationData, companyContact } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#EF1B23] rounded-lg p-1"
            aria-label="Cling InfoTech Homepage"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#EF1B23] to-[#8A0005] p-[1px] shadow-md shadow-red-950/50">
              <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Cling Logo"
                  width={36}
                  height={36}
                  className="object-contain p-1 transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                CLING<span className="text-[#EF1B23]">.</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-medium -mt-1">
                InfoTech Works
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigationData.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeDropdown === item.name
                          ? "text-white bg-white/5"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180 text-[#EF1B23]" : "text-neutral-400"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50">
                        <div className="bg-[#151518] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="text-sm font-medium text-white group-hover/item:text-[#EF1B23] transition-colors">
                                {child.name}
                              </div>
                              {child.desc && (
                                <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                                  {child.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3.5 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#EF1B23] to-[#C6151C] hover:from-[#FF2A33] hover:to-[#EF1B23] transition-all shadow-md shadow-red-950/40 hover:shadow-red-900/60 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0B] focus:ring-[#EF1B23]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#0A0A0B]/95 backdrop-blur-xl border-t border-white/10 z-40 overflow-y-auto">
          <div className="px-5 py-6 space-y-6">
            <nav className="flex flex-col space-y-2">
              {navigationData.map((item) => (
                <div key={item.name} className="border-b border-white/5 pb-2">
                  {item.children ? (
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#EF1B23] py-2">
                        {item.name}
                      </div>
                      <div className="pl-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-neutral-300 hover:text-white font-medium"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 text-base font-medium text-neutral-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-white bg-[#EF1B23] hover:bg-[#D4141C] shadow-lg shadow-red-950/60 transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-6 p-4 rounded-xl bg-[#151518] border border-white/5 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2 text-neutral-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#EF1B23]" />
                  <span>Direct Engineering Contact</span>
                </div>
                <p>Phone: {companyContact.phone}</p>
                <p>Email: {companyContact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
