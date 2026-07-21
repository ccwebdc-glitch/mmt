import React, { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../data";
import { ArrowUpRight, Grid, MapPin, Maximize2, Tag } from "lucide-react";

const CATEGORIES = ["All", "Billboards", "Airports", "Retail", "Architectural", "Vehicles"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => {
        if (activeCategory === "Billboards") return p.category === "Billboards";
        if (activeCategory === "Airports") return p.category === "Airports";
        if (activeCategory === "Retail") return p.category === "Mall Branding" || p.category === "Retail Branding";
        if (activeCategory === "Architectural") return p.category === "Architectural Graphics";
        if (activeCategory === "Vehicles") return p.category === "Vehicle Branding";
        return true;
      });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full radial-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24" id="portfolio-header">
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
              07 // THE PORTFOLIO MASTERWORKS
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
              Grand scale installations. <br />
              <span className="text-electric-blue font-medium">
                Our Physical Footprint.
              </span>
            </h2>
            <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(10,92,255,0.8)]" />
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 lg:mt-0" id="portfolio-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-mmt-blue text-white shadow-[0_0_15px_rgba(10,92,255,0.3)] font-semibold border border-mmt-blue"
                    : "bg-black/40 text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-gallery-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl overflow-hidden bg-black/60 border border-white/5 flex flex-col justify-between h-[450px] relative transition-all duration-500 hover:border-electric-blue/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              id={`portfolio-card-${proj.id}`}
            >
              {/* Image Frame with dynamic visual description background */}
              <div className="h-2/3 w-full bg-dark-graphite relative overflow-hidden border-b border-white/5 flex items-center justify-center p-8">
                {/* Simulated luxury dark overlay & mesh lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A5CFF_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${proj.themeColor} opacity-20 mix-blend-screen group-hover:scale-105 transition-transform duration-700`} />
                
                {/* Outlined Graphic/Mock icon symbolizing large scale installation */}
                <div className="text-center relative z-20 max-w-xs transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-electric-blue/70 mb-4 group-hover:border-electric-blue group-hover:text-electric-blue transition-colors">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <div className="text-xs text-gray-300 font-light italic leading-relaxed">
                    "{proj.imageDesc}"
                  </div>
                </div>

                {/* Micro tech specs overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-widest bg-black/60 border border-white/10 px-2.5 py-1 rounded-full text-electric-blue">
                    {proj.size}
                  </span>
                </div>
              </div>

              {/* Card Meta Content Details */}
              <div className="h-1/3 p-6 flex flex-col justify-between relative z-20 bg-[#0A0A0C]" id={`portfolio-card-details-${proj.id}`}>
                <div>
                  <div className="flex items-center justify-between text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-1.5">
                    <span className="flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5 text-mmt-blue" /> {proj.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {proj.location}
                    </span>
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-display font-light tracking-wide group-hover:text-electric-blue transition-colors">
                    {proj.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <p className="text-[11px] text-gray-400 font-light leading-normal max-w-[80%]">
                    {proj.description}
                  </p>
                  <button className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/10 transition-all shrink-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Bottom Section */}
        <div className="mt-16 text-center" id="portfolio-bottom-action">
          <p className="text-gray-400 text-sm font-light mb-6">
            Seeking custom dimensions, extreme-altitude hoardings, or bespoke airport graphics?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mmt-blue text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-transparent border border-mmt-blue hover:text-white transition-all duration-300"
          >
            Inquire About Custom Fabrication
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
