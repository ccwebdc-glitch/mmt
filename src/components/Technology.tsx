import React, { useState } from "react";
import { TECH_CHAPTERS } from "../data";
import { ShieldCheck, Cpu, Layers, Zap, Info, Shield, CheckCircle, Flame, MessageSquare, ArrowRight } from "lucide-react";

export default function Technology() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-dark-graphite/50 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          id="tech-chapter-container"
        >
          {/* Subtle water-mark of chapter number */}
          <div className="absolute -right-16 -bottom-16 text-[240px] font-display font-bold text-white/[0.01] leading-none select-none pointer-events-none">
            0{activeChapterIndex + 1}
          </div>

          {/* Left Block: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between relative z-10" id="tech-narrative-block">
            <div>
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

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-8 max-w-2xl">
                {activeChapter.description}
              </p>
            </div>

            {/* Premium Bullet Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" id="tech-highlight-specs">
              {activeChapter.highlightSpecs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
                  <CheckCircle className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-200 font-light leading-snug">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Dynamic Schematic Visualization */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-10" id="tech-visualization-block">
            <div className="border border-white/5 bg-black/60 rounded-2xl p-6 h-full flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A5CFF_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Custom Blueprint Diagram per Chapter */}
              <div className="flex-grow flex items-center justify-center py-6 relative">
                {activeChapterIndex === 0 && (
                  /* Acrylic Paint Tech Visualization */
                  <div className="w-full text-center relative">
                    <div className="absolute -inset-10 bg-radial-gradient from-mmt-blue/20 to-transparent blur-xl" />
                    <svg viewBox="0 0 200 120" className="w-48 h-auto mx-auto text-electric-blue" fill="none">
                      <rect x="10" y="80" width="180" height="15" rx="2" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="1" />
                      <rect x="10" y="60" width="180" height="18" rx="2" fill="rgba(0,229,255,0.15)" stroke="var(--color-electric-blue)" strokeWidth="1.5" strokeDasharray="3 1" />
                      <circle cx="100" cy="15" r="10" stroke="#FFD700" strokeWidth="1" />
                      <line x1="100" y1="30" x2="100" y2="45" stroke="#FFD700" strokeWidth="1" />
                      <line x1="85" y1="20" x2="70" y2="30" stroke="#FFD700" strokeWidth="1" />
                      <line x1="115" y1="20" x2="130" y2="30" stroke="#FFD700" strokeWidth="1" />
                      <path d="M 50 50 Q 55 45 60 50" stroke="var(--color-electric-blue)" strokeWidth="1.5" fill="none" />
                      <path d="M 100 50 Q 105 45 110 50" stroke="var(--color-electric-blue)" strokeWidth="1.5" fill="none" />
                      <path d="M 150 50 Q 155 45 160 50" stroke="var(--color-electric-blue)" strokeWidth="1.5" fill="none" />
                      <text x="100" y="110" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace" letterSpacing="1">ACRYLIC RESIN COATING</text>
                    </svg>
                  </div>
                )}

                {activeChapterIndex === 1 && (
                  /* Robotic Drum Technology Visualization */
                  <div className="w-full text-center">
                    <svg viewBox="0 0 200 120" className="w-48 h-auto mx-auto text-mmt-blue" fill="none">
                      <circle cx="100" cy="60" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                      <circle cx="100" cy="60" r="35" stroke="var(--color-electric-blue)" strokeWidth="1" />
                      <circle cx="100" cy="60" r="5" fill="currentColor" />
                      <line x1="100" y1="5" x2="100" y2="15" stroke="var(--color-electric-blue)" strokeWidth="1.5" />
                      <line x1="55" y1="60" x2="45" y2="60" stroke="var(--color-electric-blue)" strokeWidth="1.5" />
                      <path d="M 95 10 L 105 10 L 100 22 Z" fill="var(--color-electric-blue)" />
                      <circle cx="100" cy="30" r="2" fill="var(--color-electric-blue)" className="animate-ping" />
                      <text x="100" y="115" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace" letterSpacing="1">ROBOTECH STEP SYSTEM</text>
                    </svg>
                  </div>
                )}

                {activeChapterIndex === 2 && (
                  /* Double-Sided Backlit Visualization */
                  <div className="w-full text-center">
                    <svg viewBox="0 0 200 120" className="w-48 h-auto mx-auto text-electric-blue" fill="none">
                      <rect x="20" y="45" width="25" height="30" rx="2" fill="rgba(10, 92, 255, 0.2)" stroke="var(--color-mmt-blue)" />
                      <rect x="155" y="45" width="25" height="30" rx="2" fill="rgba(10, 92, 255, 0.2)" stroke="var(--color-mmt-blue)" />
                      <line x1="100" y1="10" x2="100" y2="110" stroke="currentColor" strokeWidth="3" />
                      <line x1="45" y1="60" x2="98" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="155" y1="60" x2="102" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="100" cy="60" r="6" fill="var(--color-electric-blue)" className="animate-pulse" />
                      <text x="100" y="115" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace" letterSpacing="1">100% REGISTRATION ALIGN</text>
                    </svg>
                  </div>
                )}

                {activeChapterIndex === 3 && (
                  /* RF Welding Visualization */
                  <div className="w-full text-center">
                    <svg viewBox="0 0 200 120" className="w-48 h-auto mx-auto text-mmt-blue" fill="none">
                      <line x1="15" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="3" />
                      <line x1="90" y1="62" x2="185" y2="62" stroke="currentColor" strokeWidth="3" />
                      <rect x="90" y="58" width="20" height="16" fill="rgba(0, 229, 255, 0.2)" stroke="var(--color-electric-blue)" strokeWidth="1" />
                      <path d="M 93 54 Q 96 46 100 54 Q 104 46 107 54" stroke="var(--color-electric-blue)" strokeWidth="1.5" fill="none" />
                      <text x="100" y="115" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace" letterSpacing="1">RF MOLECULAR FUSION</text>
                    </svg>
                  </div>
                )}
              </div>

              {/* Descriptions & Specs of visual */}
              <div className="border-t border-white/5 pt-4">
                <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">
                  Blueprint Metadata
                </div>
                <div className="text-xs text-gray-300 font-light italic leading-snug">
                  {activeChapter.imagePlaceholderDesc}
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
        <div className="mt-24 border border-white/10 rounded-3xl bg-gradient-to-br from-dark-graphite/60 via-black to-dark-graphite/30 p-8 sm:p-16 relative overflow-hidden" id="tech-cta-panel">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-mono text-electric-blue uppercase tracking-widest block mb-3">
              ENGINEERING EXCELLENCE
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight leading-tight mb-6">
              Experience the Technology Behind <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Every Landmark Campaign.</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-8">
              Every billboard. Every luxury retail display. Every architectural installation. Every premium outdoor media campaign begins with engineering excellence inside MetroMedia Technologies MENA. Partner with us and discover why leading brands across the GCC and MENA trust our technology to deliver extraordinary visual experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-electric-blue hover:bg-electric-blue/90 text-black font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,229,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.4)]"
              >
                Explore Our Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300"
              >
                Speak with Our Experts <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
