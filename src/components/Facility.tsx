import React, { useState } from "react";
import { ShieldCheck, Factory, Box, Layers, Cpu, Compass, Users, CheckCircle } from "lucide-react";

export default function Facility() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const FACILITY_HIGHLIGHTS = [
    {
      title: "Advanced Manufacturing Environment",
      description: "A modern production facility designed for precision, efficiency, and consistent output.",
      icon: <Factory className="h-5 w-5" />
    },
    {
      title: "Custom Robotic Printing Systems",
      description: "Specialized Robotic Paint Drum Printers engineered exclusively for premium large-format production.",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      title: "Large Production Capacity",
      description: "Designed to manufacture oversized graphics without compromising image quality or structural integrity.",
      icon: <Layers className="h-5 w-5" />
    },
    {
      title: "Premium Material Storage",
      description: "Dedicated climate-controlled storage areas ensure substrates, paints, and production materials maintain optimal quality throughout the manufacturing process.",
      icon: <Box className="h-5 w-5" />
    },
    {
      title: "Dedicated Engineering Team",
      description: "Experienced production specialists continuously monitor every stage of manufacturing to ensure every project meets MMT's strict quality standards.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Multi-Level Quality Inspection",
      description: "Every print undergoes rigorous inspection before finishing, packaging, and delivery.",
      icon: <ShieldCheck className="h-5 w-5" />
    }
  ];

  return (
    <section id="facility" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full radial-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full radial-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-20" id="facility-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            04 // THE GIGANTIC SITE
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Our Advanced Production Facility <br />
            <span className="text-electric-blue font-medium">
              Built for Large-Scale Excellence.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-300 font-sans font-light max-w-4xl leading-relaxed text-sm sm:text-base">
            Located in Dubai Investment Park 1, MetroMedia Technologies MENA operates from a state-of-the-art 7,000 sq ft production facility equipped with advanced manufacturing systems designed specifically for premium large-format graphics. Our facility combines world-class machinery, highly skilled engineers, advanced automation, and rigorous quality standards to handle projects ranging from premium retail branding to some of the largest outdoor advertising installations in the region. Every production area has been carefully designed to maximize efficiency while maintaining absolute quality control.
          </p>
        </div>

        {/* Facility Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24" id="facility-highlights-grid">
          {FACILITY_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={index}
              className="bg-dark-graphite/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-electric-blue/30 hover:bg-black/40 transition-all duration-300"
            >
              {/* Top border animation glow */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-mmt-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-electric-blue flex items-center justify-center mb-6 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all">
                {highlight.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-display font-light text-white tracking-wide mb-3 group-hover:text-electric-blue transition-colors">
                {highlight.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Our Facility Makes The Difference Section */}
        <div className="border border-white/10 rounded-3xl bg-dark-graphite/30 p-8 sm:p-12 relative overflow-hidden" id="facility-difference-panel">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-electric-blue">THE MMT EDGE</span>
              <h3 className="text-3xl font-display font-light text-white mt-2 mb-4">
                Why Our Facility <br />
                <span className="font-medium">Makes the Difference</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Unlike conventional print houses, our facility has been engineered specifically for premium outdoor visual communication. Every department works together to ensure absolute excellence.
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-electric-blue font-mono uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4" /> ISO 9001:2015 CERTIFIED SITE
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">Exceptional color accuracy</span>
              </div>
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">Uniform print consistency</span>
              </div>
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">High-speed production</span>
              </div>
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">Superior structural integrity</span>
              </div>
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">Seamless finishing</span>
              </div>
              <div className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-light">Long-lasting outdoor performance</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
