import React from "react";
import Logo from "./Logo";
import HeroWorkSlider from "./HeroWorkSlider";
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
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark-graphite pt-28 pb-20 lg:pt-36 lg:pb-28 industrial-grid"
    >
      {/* 1. Cinematic Background Glow Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full radial-glow opacity-60 mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full radial-glow opacity-40 mix-blend-screen" style={{ animationDelay: "2s" }} />
        {/* Subtle diagonal laser sweep line indicating printing precision */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0090e7_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* 2. Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 flex flex-col justify-between min-h-[calc(100vh-140px)]">
        
        {/* Top spacing / subtle brand label */}
        <div className="text-center sm:text-left mb-6" id="hero-top-badge">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#0090e7] font-mono bg-[#0090e7]/10 px-4 py-1.5 rounded-full border border-[#0090e7]/20 font-bold inline-block">
            METROPOLITAN VISUAL ENGINEERING
          </span>
        </div>

        {/* Hero Split Grid Layout: Left Content & Right 4:5 Photo Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow py-4">
          
          {/* Left Column: Dream. Design. Deliver. & Copy */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left">
            
            {/* Subtitle / Serving GCC & MENA */}
            <div className="text-[#47536e] font-mono text-xs tracking-[0.2em] uppercase mb-3 font-semibold" id="hero-service-years">
              Established 1987 USA // Serving GCC & MENA Since 2005
            </div>

            {/* Slogan with beautifully emphasized word DESIGN */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none text-[#1b2234] font-display font-light mb-5">
              Dream.{" "}
              <span className="relative inline-block font-semibold text-[#f25c05] px-1 select-all">
                Design.
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#f25c05] glowing-text opacity-80 rounded-full" />
              </span>{" "}
              Deliver.
            </h1>

            {/* Tagline */}
            <h2 className="text-base sm:text-xl lg:text-2xl uppercase tracking-[0.12em] text-[#1b2234] font-display font-medium max-w-2xl mb-4">
              Architecting Luxury Visual Experiences Across GCC & MENA Since 2005
            </h2>

            {/* Descriptive copy */}
            <p className="text-xs sm:text-sm text-[#47536e] font-sans font-normal max-w-2xl leading-relaxed mb-8 tracking-normal">
              At MetroMedia Technologies MENA (MMT), we don't simply print graphics—we engineer visual experiences that redefine outdoor advertising. Combining American innovation, proprietary robotic printing technology, premium acrylic paint systems, and precision manufacturing, we create large-format displays that remain exceptionally vibrant under the harsh GCC climate.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("technology")}
                className="px-7 py-3.5 bg-gradient-to-r from-[#f25c05] to-[#d81b60] text-white rounded-full text-xs uppercase tracking-widest font-semibold hover:from-[#d81b60] hover:to-[#0090e7] transition-all duration-300 shadow-md hover:shadow-lg font-display"
                id="hero-cta-tech"
              >
                Explore Technology
              </button>
              <button
                onClick={() => handleScrollTo("work-showcase")}
                className="px-7 py-3.5 bg-[#eae3d5] text-[#1b2234] border border-[#1b2234]/20 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#1b2234] hover:text-white transition-all duration-300 font-display"
                id="hero-cta-projects"
              >
                Work Album
              </button>
            </div>

          </div>

          {/* Right Column: 4:5 Aspect Ratio Work Photo Slider (Placed directly beside "Dream. Design. Deliver.") */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HeroWorkSlider />
          </div>

        </div>

        {/* Floating statistics cards section */}
        <div className="w-full mt-10" id="hero-stats-panel">
          <div className="border border-[#1b2234]/12 bg-[#eae3d5]/80 backdrop-blur-sm py-6 px-4 sm:px-6 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 divide-y md:divide-y-0 lg:divide-x divide-[#1b2234]/10">
              <div className="flex flex-col items-center text-center p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Clock className="h-3 w-3 text-[#f25c05]" /> Origin
                </span>
                <span className="text-xl md:text-2xl font-display font-bold text-[#1b2234] tracking-wider">1987</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">Founded in USA</span>
              </div>

              <div className="flex flex-col items-center text-center pt-3 md:pt-0 p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Clock className="h-3 w-3 text-[#f25c05]" /> Region
                </span>
                <span className="text-xl md:text-2xl font-display font-bold text-[#1b2234] tracking-wider">Since 2005</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">GCC & MENA</span>
              </div>

              <div className="flex flex-col items-center text-center pt-3 md:pt-0 p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Maximize className="h-3 w-3 text-[#f25c05]" /> Facility
                </span>
                <span className="text-xl md:text-2xl font-display font-bold text-[#1b2234] tracking-wider">7000 SQ FT</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">Production Facility</span>
              </div>

              <div className="flex flex-col items-center text-center pt-3 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Cpu className="h-3 w-3 text-[#f25c05]" /> System
                </span>
                <span className="text-lg md:text-xl font-display font-bold text-[#1b2234] tracking-wider">Exclusive Tech</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">Robotic Paint Drum</span>
              </div>

              <div className="flex flex-col items-center text-center pt-3 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Paintbrush className="h-3 w-3 text-[#f25c05]" /> Quality
                </span>
                <span className="text-lg md:text-xl font-display font-bold text-[#1b2234] tracking-wider">Premium Standard</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">Double-Sided Backlit</span>
              </div>

              <div className="flex flex-col items-center text-center pt-3 lg:pt-0 p-2">
                <span className="font-mono text-[10px] text-[#0090e7] uppercase tracking-widest mb-1 flex items-center gap-1 font-bold">
                  <Layers className="h-3 w-3 text-[#f25c05]" /> Durability
                </span>
                <span className="text-lg md:text-xl font-display font-bold text-[#1b2234] tracking-wider">Fade Resistant</span>
                <span className="text-[10px] text-[#47536e] uppercase tracking-widest mt-0.5">GCC Outdoor Spec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <button
          onClick={() => handleScrollTo("about")}
          className="flex flex-col items-center gap-1 text-[#47536e] hover:text-[#f25c05] transition-colors mt-6 group self-center"
          id="scroll-down-hint"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold">Initiate Walkthrough</span>
          <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}

