import React from "react";
import { Shield, Sparkles, Target, Eye, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24" id="about-section-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            01 // CHAPTER: THE LEGACY
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Engineering Visual Experiences <br />
            <span className="text-electric-blue font-medium">
              Since 1987.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)]" />
        </div>

        {/* 1. Introduction Section - Large Display Callout */}
        <div className="mb-20 pb-16 border-b border-white/5" id="intro-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-electric-blue/80">INTRODUCTION</span>
              <h3 className="text-2xl sm:text-3xl font-display font-light text-white mt-2 leading-tight">
                Engineering Visual Excellence <br />
                <span className="text-gray-400 font-medium">Beyond Conventional Printing</span>
              </h3>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="text-xl sm:text-2xl font-light text-white leading-relaxed">
                "Most outdoor graphics are designed to be seen. <br />
                <span className="text-electric-blue font-medium glowing-text">MMT designs outdoor graphics to be remembered.</span>"
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                For more than three decades, MetroMedia Technologies has pioneered innovations in large-format visual communication by combining engineering excellence with premium production technology. Our expertise extends beyond printing into the science of color consistency, material engineering, precision finishing, and large-scale production.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                Every billboard, unipole, retail display, façade graphic, transit branding solution, and architectural installation is produced using proprietary technologies developed specifically to withstand extreme environmental conditions while maintaining superior image fidelity.
              </p>
              <p className="text-white text-sm sm:text-base font-semibold font-mono tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4 text-electric-blue" /> WHEN BRANDS REQUIRE UNCOMPROMISING VISUAL QUALITY, THEY TRUST MMT.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Main Company Story & Blueprint Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Block: Company Story */}
          <div className="lg:col-span-7 flex flex-col gap-8" id="about-company-story">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-electric-blue bg-mmt-blue/10 px-3 py-1 rounded border border-mmt-blue/20">
                COMPANY STORY
              </span>
            </div>
            
            <div className="text-gray-300 font-sans font-light text-sm sm:text-base leading-relaxed flex flex-col gap-6">
              <p>
                MetroMedia Technologies Inc. (MMT) began its journey in the United States in 1987 with a singular vision—to revolutionize large-format graphics through engineering excellence and technological innovation.
              </p>
              <p>
                At a time when outdoor advertising relied heavily on conventional printing methods, MMT pioneered advanced imaging technologies capable of producing exceptionally large graphics with superior clarity, vibrant colors, and remarkable consistency.
              </p>
              <p>
                This commitment to innovation quickly established MMT as one of the world's leading computer imaging companies and a trusted partner for premium visual communication projects.
              </p>
              <p>
                Recognizing the growing demand for world-class outdoor graphics across the Middle East, MMT expanded into the GCC in 2005 by establishing MetroMedia Technologies MENA in Dubai Investment Park 1.
              </p>
              <p>
                Today, MMT proudly serves clients throughout the GCC and MENA region from its advanced production facility in Dubai, combining decades of international expertise with cutting-edge manufacturing technologies specifically engineered for the region's demanding environmental conditions.
              </p>
              <p className="border-t border-white/5 pt-6 text-xs font-mono text-gray-500 uppercase tracking-widest leading-loose">
                As a proud member of the Spectacular MMT Group and in association with Circle Graphics USA, MMT continues to set new benchmarks in outdoor visual excellence.
              </p>
            </div>
          </div>

          {/* Right Block: Blueprint Visual Card with USA / Dubai Details */}
          <div className="lg:col-span-5" id="about-visual-blueprint">
            <div className="border border-white/10 rounded-2xl bg-black/50 p-6 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Technical Grid Accent */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:12px_12px]" />
              
              <div className="relative z-10 mb-6">
                <span className="text-[10px] text-electric-blue font-mono uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <Sparkles className="h-3 w-3" /> GLOBAL STANDARDS
                </span>
                <h4 className="text-lg font-display font-light text-white tracking-wide">
                  REGIONAL PRECISION
                </h4>
              </div>

              {/* Vector Blueprint */}
              <div className="relative border border-white/5 rounded-xl bg-dark-graphite p-6 h-60 flex flex-col justify-between overflow-hidden relative z-10 mb-6">
                <div className="absolute left-0 right-0 h-[1px] bg-electric-blue/30 shadow-[0_0_8px_rgba(0,229,255,0.6)] animate-pulse" style={{ top: "45%" }} />
                
                <svg viewBox="0 0 400 180" className="w-full h-full opacity-50 text-mmt-blue" fill="none">
                  <circle cx="200" cy="90" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                  <circle cx="200" cy="90" r="30" stroke="var(--color-electric-blue)" strokeWidth="1.5" />
                  <line x1="200" y1="10" x2="200" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="50" y1="90" x2="350" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="200" y1="90" x2="110" y2="35" stroke="var(--color-electric-blue)" strokeWidth="0.5" />
                  <rect x="20" y="20" width="80" height="25" rx="3" stroke="currentColor" strokeWidth="1" />
                  <text x="25" y="35" fill="currentColor" fontSize="7" fontFamily="monospace">FOUNDED: 1987</text>
                  <rect x="300" y="135" width="80" height="25" rx="3" stroke="currentColor" strokeWidth="1" />
                  <text x="305" y="150" fill="var(--color-electric-blue)" fontSize="7" fontFamily="monospace">DUBAI: 2005</text>
                </svg>

                <div className="flex justify-between items-center relative z-10 text-[9px] text-gray-500 font-mono">
                  <span>METROMEDIA USA R&D</span>
                  <span>GCC CALIBRATED</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-xs font-light text-gray-400 relative z-10">
                <div className="flex gap-3">
                  <span className="font-mono text-electric-blue font-semibold shrink-0">01 /</span>
                  <span>Direct association with Circle Graphics USA, the world's premier out-of-home computer imaging network.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-electric-blue font-semibold shrink-0">02 /</span>
                  <span>Spectacular MMT Group member leveraging over 35 years of polymer pigment engineering.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Our Philosophy: Dream. Design. Deliver. */}
        <div className="mb-24" id="about-philosophy">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-electric-blue">THE THREE STAGES</span>
            <h3 className="text-3xl sm:text-4xl font-display font-light text-white mt-2">Our Philosophy</h3>
            <div className="h-[1px] w-12 bg-white/15 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dream */}
            <div className="border border-white/5 bg-black/30 p-8 rounded-2xl flex flex-col justify-between group hover:border-electric-blue/30 transition-all duration-300">
              <div className="mb-6">
                <span className="font-mono text-3xl sm:text-4xl font-light text-electric-blue/30 group-hover:text-electric-blue transition-colors">01</span>
                <h4 className="text-2xl font-display font-light text-white mt-4 mb-3 tracking-wide">Dream.</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Every iconic campaign begins with an ambitious vision. We collaborate with brands, agencies, architects, and media owners to transform ideas into extraordinary visual experiences.
                </p>
              </div>
            </div>

            {/* Design */}
            <div className="border border-white/5 bg-black/30 p-8 rounded-2xl flex flex-col justify-between group hover:border-electric-blue/30 transition-all duration-300">
              <div className="mb-6">
                <span className="font-mono text-3xl sm:text-4xl font-light text-electric-blue/30 group-hover:text-electric-blue transition-colors">02</span>
                <h4 className="text-2xl font-display font-light text-white mt-4 mb-3 tracking-wide">Design.</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Engineering meets creativity through advanced production technologies, premium materials, precision manufacturing, and meticulous quality control.
                </p>
              </div>
            </div>

            {/* Deliver */}
            <div className="border border-white/5 bg-black/30 p-8 rounded-2xl flex flex-col justify-between group hover:border-electric-blue/30 transition-all duration-300">
              <div className="mb-6">
                <span className="font-mono text-3xl sm:text-4xl font-light text-electric-blue/30 group-hover:text-electric-blue transition-colors">03</span>
                <h4 className="text-2xl font-display font-light text-white mt-4 mb-3 tracking-wide">Deliver.</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Every project is manufactured with uncompromising attention to detail, ensuring flawless execution, remarkable durability, and exceptional visual performance from installation through its entire lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Mission & Vision - Twin Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about-mission-vision">
          {/* Mission */}
          <div className="border border-white/5 bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex gap-6 items-start">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-electric-blue shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-electric-blue">CORPORATE DIRECTION</span>
              <h4 className="text-2xl font-display font-light text-white">Our Mission</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                To engineer world-class large-format visual communication solutions that combine innovation, precision, and durability while enabling brands to create unforgettable visual experiences across the GCC and MENA region.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="border border-white/5 bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex gap-6 items-start">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-electric-blue shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-electric-blue">FUTURE HORIZON</span>
              <h4 className="text-2xl font-display font-light text-white">Our Vision</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                To remain the benchmark for premium outdoor graphics by continuously advancing printing technologies, manufacturing excellence, and engineering innovation while delivering uncompromising quality for every project.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
