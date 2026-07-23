/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import WhyMMT from "./components/WhyMMT";
import Facility from "./components/Facility";
import DayNightSlider from "./components/DayNightSlider";
import ComparisonTable from "./components/ComparisonTable";
import Portfolio from "./components/Portfolio";
import WorkSlider from "./components/WorkSlider";
import Industries from "./components/Industries";
import GlobalPresence from "./components/GlobalPresence";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Logo from "./components/Logo";
import { ArrowUp, Award, Building2, ShieldCheck } from "lucide-react";

export default function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-[#f5f0e6] text-[#1b2234] min-h-screen flex flex-col justify-between selection:bg-[#0090e7] selection:text-white relative">
      {/* 1. Global Navigation */}
      <Header />

      {/* Elegant Dark Spec: Rail Sidebar on Left (Hidden on mobile/tablet, sticky on desktop) */}
      <div className="hidden xl:flex rail-sidebar">
        <div className="vertical-text">SINCE 2005 &nbsp;&bull;&nbsp; DUBAI GCC MENA</div>
      </div>

      {/* 2. Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Technology />
        <WhyMMT />
        <Facility />
        <DayNightSlider />
        <ComparisonTable />
        <Portfolio />
        <WorkSlider />
        <Industries />
        <GlobalPresence />
        <Faq />
        <ContactForm />
      </main>

      {/* 3. Luxury Corporate Footer */}
      <footer className="bg-charcoal border-t border-white/5 py-16 lg:py-24 relative overflow-hidden" id="mmt-footer">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mmt-blue/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 w-full flex flex-col gap-12">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Brand Logo Info */}
            <div className="flex flex-col gap-4">
              <Logo className="h-10 sm:h-12" />
              <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed mt-2">
                Engineering persistent visual landmarks that dominate high-exposure environments across GCC and MENA since 2005.
              </p>
            </div>

            {/* Quick Navigation Coordinates */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Chapters</span>
                <a href="#about" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">01 Legacy</a>
                <a href="#technology" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">02 Chapters</a>
                <a href="#why-mmt" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">03 USPs</a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Execution</span>
                <a href="#facility" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">04 Facility</a>
                <a href="#day-night" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">05 Simulator</a>
                <a href="#mmt-comparison" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">06 Audit</a>
              </div>

              <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Showcase</span>
                <a href="#projects" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">07 Portfolio</a>
                <a href="#presence" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">08 Presence</a>
                <a href="#contact" className="text-xs text-gray-400 hover:text-electric-blue transition-colors uppercase tracking-wider">09 Inquiry</a>
              </div>
            </div>
          </div>

          {/* Legal / Intellectual Properties */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-[10px] font-mono text-gray-500 tracking-wider">
                © {new Date().getFullYear()} METROMEDIA TECHNOLOGIES MENA (MMT). ALL RIGHTS RESERVED.
              </div>
              <div className="text-[9px] font-mono text-gray-600 leading-none">
                Acrylic Paint Technology, Robotic Paint Drums, and Double-Sided Backlit micro-alignment are proprietary trademarks of MetroMedia Technologies Group.
              </div>
            </div>

            {/* Verification / Certifications Indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
                <ShieldCheck className="h-4 w-4 text-electric-blue" /> ISO 9001:2015
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
                <Award className="h-4 w-4 text-electric-blue" /> GCC-AUTHORIZED
              </div>
              <button
                onClick={handleScrollToTop}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
