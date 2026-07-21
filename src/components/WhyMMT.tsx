import React, { useState } from "react";
import { WHY_MMT_USPS } from "../data";
import * as LucideIcons from "lucide-react";

export default function WhyMMT() {
  const [selectedUsp, setSelectedUsp] = useState<string | null>(null);

  // Dynamic icon helper to match strings to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Paintbrush":
        return <LucideIcons.Paintbrush className="h-6 w-6" />;
      case "Cpu":
        return <LucideIcons.Cpu className="h-6 w-6" />;
      case "Zap":
        return <LucideIcons.Zap className="h-6 w-6" />;
      case "Layers":
        return <LucideIcons.Layers className="h-6 w-6" />;
      case "Sun":
        return <LucideIcons.Sun className="h-6 w-6" />;
      case "Activity":
        return <LucideIcons.Activity className="h-6 w-6" />;
      case "ShieldCheck":
        return <LucideIcons.ShieldCheck className="h-6 w-6" />;
      default:
        return <LucideIcons.Award className="h-6 w-6" />;
    }
  };

  return (
    <section id="why-mmt" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden">
      {/* Background radial glows and alignment grids */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full radial-glow opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full radial-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24 text-center items-center" id="why-mmt-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            03 // THE VALUE INITIATIVE
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Why MetroMedia Technologies MENA? <br />
            <span className="text-electric-blue font-medium">
              Because Exceptional Visual Communication is Never Accidental.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-300 font-sans font-light max-w-3xl leading-relaxed text-sm sm:text-base">
            It is engineered. For more than three decades, MMT has developed proprietary technologies and manufacturing processes that consistently outperform conventional printing systems in image quality, durability, and visual impact. Our expertise goes beyond producing graphics—we engineer solutions capable of maintaining exceptional performance under some of the world's most demanding environmental conditions.
          </p>
        </div>

        {/* USP Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="why-mmt-grid">
          {WHY_MMT_USPS.map((usp) => (
            <div
              key={usp.id}
              onClick={() => setSelectedUsp(selectedUsp === usp.id ? null : usp.id)}
              className={`interactive-card-hover group border rounded-3xl p-6 relative overflow-hidden cursor-pointer select-none transition-all duration-300 ${
                selectedUsp === usp.id
                  ? "bg-black border-electric-blue/40 glowing-border-active"
                  : "bg-black/40 border-white/5 hover:border-white/10 hover:bg-black/60"
              }`}
              id={`usp-card-${usp.id}`}
            >
              {/* Subtle top laser glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mmt-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Unique GCC banner indicator */}
              {usp.isOnlyGCC && (
                <span className="absolute top-4 right-4 text-[8px] font-mono font-semibold text-electric-blue bg-electric-blue/10 border border-electric-blue/20 px-2 py-0.5 rounded uppercase tracking-wider">
                  Only in GCC
                </span>
              )}

              {/* Icon Frame */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-5 transition-all ${
                  selectedUsp === usp.id
                    ? "bg-electric-blue/15 border-electric-blue text-electric-blue"
                    : "bg-white/5 border-white/10 text-gray-400 group-hover:border-electric-blue/30 group-hover:text-electric-blue"
                }`}
              >
                {getIconComponent(usp.iconName)}
              </div>

              {/* Title & Short Description */}
              <h3 className="text-base sm:text-lg font-display font-light text-white tracking-wide mb-2 group-hover:text-electric-blue transition-colors">
                {usp.title}
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                {usp.shortDesc}
              </p>

              {/* Expandable Story Detail */}
              <div
                className={`transition-all duration-500 ease-out overflow-hidden ${
                  selectedUsp === usp.id ? "max-h-56 opacity-100 mt-4 pt-4 border-t border-white/5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {usp.fullDesc}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-[9px] text-electric-blue font-mono uppercase tracking-widest">
                  <LucideIcons.ShieldCheck className="h-3.5 w-3.5" /> 4-Year Guarantee Certified
                </div>
              </div>

              {/* Micro interactive hint */}
              <div className="mt-4 flex items-center justify-between text-[9px] font-mono tracking-widest text-gray-500 group-hover:text-electric-blue transition-colors">
                <span>SPEC: MMT-09</span>
                <span>{selectedUsp === usp.id ? "COLLAPSE [-]" : "EXPAND [+]"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Summary Panel */}
        <div className="mt-16 bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6" id="why-mmt-bottom-banner">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-mmt-blue/10 border border-mmt-blue/20 rounded-xl text-electric-blue hidden sm:block">
              <LucideIcons.Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white text-base font-display font-light uppercase tracking-wider">Where Innovation Meets Visual Excellence</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-xl font-light">
                Partner with MetroMedia Technologies MENA and discover why leading brands, agencies, and outdoor media specialists trust us to deliver premium large-format graphics engineered to perform beyond expectations.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto text-center px-8 py-4 bg-mmt-blue text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black rounded-full transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
