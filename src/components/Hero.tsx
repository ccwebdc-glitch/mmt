import React from "react";
import Logo from "./Logo";
import { ArrowDown, Cpu, Paintbrush, Layers, Maximize, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark-graphite pt-32 pb-24 lg:pt-40 lg:pb-32 industrial-grid"
    >
      {/* 1. Cinematic Background Glow Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full radial-glow opacity-60 mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full radial-glow opacity-40 mix-blend-screen" style={{ animationDelay: "2s" }} />
        {/* Subtle diagonal laser sweep line indicating printing precision */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A5CFF_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* 2. Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 w-full relative z-10 flex flex-col items-center justify-between min-h-[calc(100vh-160px)]">
        
        {/* Top spacing / subtle brand label */}
        <div className="text-center mt-4 mb-6" id="hero-top-badge">
          <span className="text-[10px] uppercase tracking-[0.4em] text-electric-blue font-mono bg-mmt-blue/10 px-4 py-2 rounded-full border border-mmt-blue/20">
            METROPOLITAN VISUAL ENGINEERING
          </span>
        </div>

        {/* Hero Central Block */}
        <div className="text-center max-w-4xl flex flex-col items-center flex-grow justify-center py-6">
          
          {/* Subtitle / Serving GCC & MENA */}
          <div className="text-gray-400 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-4" id="hero-service-years">
            Established 1987 USA // Serving GCC & MENA Since 2005
          </div>

          {/* Slogan with beautifully emphasized word DESIGN */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white font-display font-light mb-6">
            Dream.{" "}
            <span className="relative inline-block font-medium text-electric-blue px-2 select-all">
              Design.
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-electric-blue glowing-text opacity-70" />
            </span>{" "}
            Deliver.
          </h1>

          {/* High-End Updated Tagline */}
          <h2 className="text-lg md:text-2xl uppercase tracking-[0.15em] text-white/95 font-display font-light max-w-4xl mb-6">
            Architecting Luxury Visual Experiences Across GCC & MENA Since 2005
          </h2>

          {/* Luxurious descriptive copy meeting contrast mandates */}
          <p className="text-sm md:text-base text-gray-300 font-sans font-light max-w-4xl leading-relaxed mb-10 tracking-wide">
            At MetroMedia Technologies MENA (MMT), we don't simply print graphics—we engineer visual experiences that redefine outdoor advertising. Combining American innovation, proprietary robotic printing technology, premium acrylic paint systems, and precision manufacturing, we create large-format displays that remain exceptionally vibrant under the harsh GCC climate.
            <br /><br />
            From luxury fashion campaigns and iconic retail branding to airport displays, city landmarks, and premium outdoor media, every MMT project is engineered to deliver unmatched brilliance, precision, and longevity—day and night.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto px-4">
            <button
              onClick={() => handleScrollTo("technology")}
              className="px-8 py-4 bg-mmt-blue text-white rounded-full text-xs uppercase tracking-widest font-semibold blue-glow-btn border border-mmt-blue hover:bg-transparent hover:text-white transition-all duration-300"
              id="hero-cta-tech"
            >
              Explore Our Technology
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full text-xs uppercase tracking-widest font-semibold hover:border-electric-blue hover:text-electric-blue transition-all duration-300 glass-panel-light"
              id="hero-cta-projects"
            >
              View Our Projects
            </button>
          </div>

        </div>

        {/* Floating statistics cards section */}
        <div className="w-full mt-12" id="hero-stats-panel">
          <div className="border-t border-b border-white/5 bg-black/40 backdrop-blur-sm py-8 px-6 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/5">
              <div className="flex flex-col items-center text-center p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Origin
                </span>
                <span className="text-2xl md:text-3xl font-display font-light text-white tracking-wider">1987</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Founded in the USA</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4 md:pt-0 p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Region
                </span>
                <span className="text-2xl md:text-3xl font-display font-light text-white tracking-wider">Since 2005</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Serving GCC & MENA</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4 md:pt-0 p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Maximize className="h-3 w-3" /> Facility
                </span>
                <span className="text-2xl md:text-3xl font-display font-light text-white tracking-wider">7000 SQ FT</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Advanced Production Facility</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Cpu className="h-3 w-3" /> System
                </span>
                <span className="text-xl md:text-2xl font-display font-light text-white tracking-wider">Exclusive Tech</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Robotic Paint Drum Printing</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Paintbrush className="h-3 w-3" /> Standards
                </span>
                <span className="text-xl md:text-2xl font-display font-light text-white tracking-wider">Premium Quality</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Double-Sided Backlit Technology</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-electric-blue uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Layers className="h-3 w-3" /> Durability
                </span>
                <span className="text-xl md:text-2xl font-display font-light text-white tracking-wider">Industry Leading</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Fade Resistant Outdoor Graphics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <button
          onClick={() => handleScrollTo("about")}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-electric-blue transition-colors mt-8 group"
          id="scroll-down-hint"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Initiate Walkthrough</span>
          <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}
