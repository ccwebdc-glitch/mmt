import React, { useState } from "react";
import { TECH_CHAPTERS } from "../data";
import { ShieldCheck, Cpu, Layers, Zap, Info, Shield, CheckCircle, Flame, MessageSquare, ArrowRight, ZoomIn, X } from "lucide-react";
import roboticStationImg from "../assets/images/robotic_station.png";

export default function Technology() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeChapter = TECH_CHAPTERS[activeChapterIndex];

  // Helper icons for chapter selection
  const getChapterIcon = (id: string) => {
    switch (id) {
      case "acrylic-paint":
        return <Flame className="h-5 w-5" />;
      case "robotic-drum":
        return <Cpu className="h-5 w-5" />;
      case "backlit-tech":
        return <Layers className="h-5 w-5" />;
      case "rf-welding":
        return <Zap className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  return (
    <section id="technology" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mmt-blue/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-20" id="tech-section-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            02 // SIGNATURE TECHNOLOGY SUITE
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Technology That <br />
            <span className="text-electric-blue font-medium">
              Delivers Perfection.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-300 font-sans font-light max-w-4xl leading-relaxed text-sm sm:text-base mb-4">
            Every MMT project begins with engineering—not printing. Our facility combines custom-built Robotic Paint Drum Printers, advanced rapid curing systems, premium acrylic paint formulations, precision-controlled production systems, and specialized finishing techniques to deliver outdoor graphics that outperform conventional digital printing. This integrated manufacturing process ensures every project achieves outstanding color depth, structural integrity, visual consistency, and long-term durability regardless of project size.
          </p>
        </div>

        {/* Introduction Section: More Than Printing. Precision Engineering. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 pb-16 border-b border-white/5 items-center" id="tech-intro-block">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-electric-blue uppercase tracking-widest block mb-2">INTRODUCTION</span>
            <h3 className="text-3xl font-display font-light text-white tracking-wide">
              More Than Printing. <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Precision Engineering.</span>
            </h3>
          </div>
          <div className="lg:col-span-7 text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            <p className="mb-4">
              Creating premium outdoor graphics requires far more than high-resolution printing. It demands a combination of material science, advanced engineering, intelligent automation, and decades of production expertise.
            </p>
            <p className="mb-4">
              At MMT, our technology ecosystem has been developed specifically to meet the demanding environmental conditions of the GCC and MENA region. Every production process—from substrate preparation and color application to finishing and quality inspection—is carefully controlled to ensure exceptional consistency across every project.
            </p>
            <p className="text-white font-medium italic">
              "Our production philosophy is simple: Every graphic should look as extraordinary on installation day as it was envisioned during design."
            </p>
          </div>
        </div>

        {/* Our Technology Ecosystem Section Title */}
        <div className="mb-10 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-display font-light text-white tracking-wide">
            Our Technology <span className="font-semibold text-electric-blue">Ecosystem</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-light mt-1.5">
            Every MMT project is powered by a combination of proprietary technologies designed to produce exceptional results.
          </p>
        </div>

        {/* Chapter Selection Rails */}
        <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-4 mb-12 border-b border-white/5 pb-8" id="tech-chapters-selector">
          {TECH_CHAPTERS.map((chapter, idx) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapterIndex(idx)}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                activeChapterIndex === idx
                  ? "bg-dark-graphite border-electric-blue/40 glowing-border-active"
                  : "bg-dark-graphite/40 border-white/5 hover:border-white/10 hover:bg-dark-graphite/60"
              }`}
              id={`chapter-selector-${chapter.id}`}
            >
              <div
                className={`p-2.5 rounded-xl transition-all ${
                  activeChapterIndex === idx
                    ? "bg-electric-blue/10 text-electric-blue"
                    : "bg-white/5 text-gray-400"
                }`}
              >
                {getChapterIcon(chapter.id)}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  CHAPTER 0{idx + 1}
                </span>
                <span className="font-display font-medium text-xs sm:text-sm text-white tracking-wide mt-0.5">
                  {chapter.title}
                </span>
              </div>
              {activeChapterIndex === idx && (
                <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-graphite rotate-45 border-r border-b border-electric-blue/40 hidden lg:block" />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Active Chapter Block */}
        <div
          className="w-full bg-dark-graphite/50 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          id="tech-chapter-container"
        >
          {/* Subtle water-mark of chapter number */}
          <div className="absolute -right-16 -bottom-16 text-[240px] font-display font-bold text-white/[0.01] leading-none select-none pointer-events-none">
            0{activeChapterIndex + 1}
          </div>

          {/* Narrative Copy & Specs Horizontal Layout */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative z-10" id="tech-narrative-block">
            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-electric-blue tracking-widest uppercase bg-electric-blue/10 px-3 py-1 rounded-full border border-electric-blue/20">
                  {activeChapter.accentText}
                </span>
                <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                  SPECIFIED TECHNOLOGY
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-light text-white tracking-wide mb-3">
                {activeChapter.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-electric-blue/80 tracking-wide mb-6">
                {activeChapter.tagline}
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-2xl">
                {activeChapter.description}
              </p>
            </div>

            {/* Premium Bullet Specs Horizontally Positioned */}
            <div className="w-full lg:w-5/12 shrink-0" id="tech-highlight-specs">
              <div className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                Key Technical Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {activeChapter.highlightSpecs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-electric-blue/30 transition-colors">
                    <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200 font-light leading-snug">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Facility & Blueprint Image Showcase Section */}
          <div className="w-full mt-8 pt-8 border-t border-white/10 relative z-10" id="tech-horizontal-image-section">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="group relative w-full rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl cursor-pointer transition-all duration-500 hover:border-electric-blue/60 hover:shadow-[0_10px_35px_rgba(0,229,255,0.25)]"
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0A5CFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-10" />
              
              <div className="relative w-full overflow-hidden bg-black/90 rounded-xl p-2 sm:p-4 flex items-center justify-center min-h-[220px] sm:min-h-[320px] md:min-h-[380px]">
                <img
                  src={roboticStationImg}
                  alt={`${activeChapter.title} Production Facility`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[420px] sm:max-h-[500px] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />

               
                {/* Zoom Interactive Overlay */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-xs font-mono text-white backdrop-blur-md group-hover:bg-electric-blue group-hover:border-electric-blue transition-all shadow-xl">
                  <ZoomIn className="h-4 w-4" />
                  <span>Click to Expand High-Res</span>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Support Infrastructure Horizontal Panel */}
        <div className="mt-16 border-t border-white/5 pt-12" id="tech-support-infrastructure">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-5 rounded-2xl bg-dark-graphite/30 border border-white/5">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Consistent Color Technology
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Advanced color calibration ensures same color is maintained from the 1st print till the 100th print.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-graphite/30 border border-white/5">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Scratch Resistant
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                The chemical bonds of cured acrylic resins withstand scrubbing, high-pressure washing, and direct desert sand impact.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-graphite/30 border border-white/5">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Premium PVC Substrates
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We only print on tear-proof, non-corrosive, high-tension PVC backdrops designed to sustain intense high wind loads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-graphite/30 border border-white/5">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Fade Resistant
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Engineered directly against harsh infrared solar spectrums, maintaining 95%+ color depth after years of direct desert sun.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-graphite/30 border border-white/5">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Massive Printing Capacity
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Our heavy-duty high-speed robotic systems are built to deliver bulk masterworks for city takeovers within record turnaround.
              </p>
            </div>
          </div>
        </div>

        {/* Technology CTA Section */}
        <div className="mt-24 border border-[#E3D8C8] rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#E6DDD0] p-8 sm:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-zinc-900" id="tech-cta-panel">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-radial-gradient from-amber-200/40 via-amber-100/20 to-transparent blur-3xl opacity-80 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-radial-gradient from-stone-300/30 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-mono text-amber-900 uppercase tracking-widest block mb-3 font-semibold">
              ENGINEERING EXCELLENCE
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-light text-zinc-900 tracking-tight leading-tight mb-6">
              Experience the Technology Behind <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-stone-800 to-amber-900">Every Landmark Campaign.</span>
            </h3>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Every billboard. Every luxury retail display. Every architectural installation. Every premium outdoor media campaign begins with engineering excellence inside MetroMedia Technologies MENA. Partner with us and discover why leading brands across the GCC and MENA trust our technology to deliver extraordinary visual experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-stone-100 font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(28,25,23,0.25)] hover:shadow-[0_4px_30px_rgba(28,25,23,0.4)]"
              >
                Explore Our Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-stone-200/80 hover:bg-stone-300/90 text-zinc-900 border border-stone-400/50 font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300"
              >
                Speak with Our Experts <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* High-Resolution Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 border border-white/20"
            title="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={roboticStationImg}
              alt="MMT Acrylic Paint & Printing Facility Station 1 & 2"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl bg-black"
            />
            <div className="mt-4 text-center">
              <h4 className="text-sm sm:text-base font-display font-medium text-white">
                MMT Dual Printing Station Facility
              </h4>
              <p className="text-xs font-mono text-electric-blue mt-1">
                Station 1 & Station 2 Robotic Drum & Acrylic Paint Engineering
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
