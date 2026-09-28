import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import WhyCling from "@/components/WhyCling";
import Technology from "@/components/Technology";
import GlobalPresence from "@/components/GlobalPresence";
import Clients from "@/components/Clients";
import Story from "@/components/Story";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-white flex flex-col selection:bg-[#EF1B23] selection:text-white">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Statistics */}
        <Stats />

        {/* 4. Selected Work */}
        <SelectedWork />

        {/* 5. Services */}
        <Services />

        {/* 6. Why Cling (Value Proposition) */}
        <WhyCling />

        {/* 7. Technology */}
        <Technology />

        {/* 8. Global Presence */}
        <GlobalPresence />

        {/* 9. Clients Marquee */}
        <Clients />

        {/* 10. Company Story & Dynamic Timeline */}
        <Story />

        {/* 11. Leadership */}
        <Leadership />

        {/* 12. Testimonials */}
        <Testimonials />

        {/* 13. Contact CTA Form */}
        <Contact />
      </main>

      {/* 14. Modern Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
