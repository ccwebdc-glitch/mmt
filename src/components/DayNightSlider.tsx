import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, MoveHorizontal, CheckCircle, Lightbulb } from "lucide-react";

export default function DayNightSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <section id="day-night" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden select-none">
      {/* Background glow filters */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24 text-center items-center" id="day-night-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            05 // SPECIALIZED ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Brilliant by Day. <br />
            <span className="text-electric-blue font-medium">
              Extraordinary by Night.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          
          <p className="text-gray-300 font-sans font-light max-w-4xl leading-relaxed text-sm sm:text-base text-center">
            Outdoor advertising should never lose its impact after sunset. MetroMedia Technologies MENA has developed an exclusive Double-Sided Backlit Printing Technology that delivers identical image brilliance, exceptional colour accuracy, and outstanding visibility during both daytime and nighttime viewing. Unlike conventional backlit graphics that appear dull or washed out after illumination, MMT's proprietary process ensures your campaign remains vibrant around the clock.
          </p>
        </div>

        {/* Section Introduction Detail Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start" id="day-night-intro">
          <div className="lg:col-span-6 bg-black/40 border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl font-display font-light text-white mb-4">
              Reinventing the Way Outdoor Displays Perform
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
              Traditional backlit graphics often face one major challenge. During the day, the advertisement looks bright and vibrant. At night, once internal illumination begins, colours become pale, details disappear, blacks turn grey, and the overall visual quality deteriorates. This compromises the brand experience and reduces campaign effectiveness.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              At MetroMedia Technologies MENA, we engineered a solution specifically to eliminate this problem. Our proprietary Double-Sided Backlit Printing Technology ensures that every display maintains the same premium visual quality, regardless of the time of day.
            </p>
          </div>

          <div className="lg:col-span-6 bg-black/40 border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl font-display font-light text-white mb-4">
              Engineered for 24-Hour Brand Visibility
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
              Every premium backlit graphic produced by MMT is printed on durable UV-treated PVC using a specialized double-sided production process. The front-facing print is carefully optimized for natural daylight viewing, delivering rich colours, exceptional sharpness, and superior image depth.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              A precisely aligned mirrored image is then applied to the reverse side using MMT's proprietary printing methodology. When illuminated from within during the evening, both layers work together to reproduce identical colour intensity, balanced contrast, and remarkable visual clarity.
            </p>
          </div>
        </div>

        {/* Interactive Day/Night Slider Widget */}
        <div className="flex flex-col items-center mb-16" id="slider-workspace">
          
          <div
            ref={containerRef}
            className="w-full max-w-5xl h-[360px] sm:h-[480px] rounded-3xl relative overflow-hidden border border-white/10 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-ew-resize"
            id="slider-container"
          >
            {/* 1. Day Side (Base Layer) */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 to-black h-full w-full">
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                <div className="w-full h-2/3 border-4 border-slate-700/80 rounded-2xl bg-[#030305] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10" />
                  
                  <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-16 bg-[#040406]">
                    <div className="flex flex-col max-w-md">
                      <span className="font-mono text-[9px] text-electric-blue uppercase tracking-widest mb-1">GCC OUTDOOR CAMPAIGN</span>
                      <span className="font-display text-2xl sm:text-4xl text-white font-light tracking-wide leading-tight">Vibrant by Day.</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">MMT Acrylic Paint System // Premium PVC</span>
                    </div>
                    <div className="h-40 w-40 rounded-full border border-white/10 flex items-center justify-center p-4 relative bg-black/40">
                      <Sun className="h-12 w-12 text-yellow-500/80 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-gray-400 font-mono text-xs uppercase tracking-widest">
                  <Sun className="h-4 w-4 text-yellow-500" /> Day View (Direct GCC Sun Exposure)
                </div>
              </div>
            </div>

            {/* 2. Night Side (Reveal Layer) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden h-full z-20 pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 left-0 w-[1000px] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-black h-full w-full">
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                    <div className="w-full h-2/3 border-4 border-slate-900/90 rounded-2xl bg-black overflow-hidden relative shadow-[0_0_40px_rgba(10,92,255,0.4)]">
                      <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-16 bg-[#020203]">
                        <div className="flex flex-col max-w-md">
                          <span className="font-mono text-[9px] text-electric-blue uppercase tracking-widest mb-1">DOUBLE-SIDED REGISTRATION</span>
                          <span className="font-display text-2xl sm:text-4xl text-white font-medium tracking-wide leading-tight glowing-text">Intense by Night.</span>
                          <span className="text-[10px] text-electric-blue uppercase tracking-widest mt-2 font-semibold">ZERO SATURATION LOSS</span>
                        </div>
                        <div className="h-40 w-40 rounded-full border border-electric-blue/30 flex items-center justify-center p-4 relative bg-mmt-blue/10 shadow-[0_0_25px_rgba(0,229,255,0.25)]">
                          <Moon className="h-12 w-12 text-electric-blue animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-electric-blue font-mono text-xs uppercase tracking-widest">
                      <Moon className="h-4 w-4" /> Night View (Backlit Illuminated)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Interactive Vertical Control Bar */}
            <div
              className="absolute inset-y-0 w-[2px] bg-electric-blue z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-black border-2 border-electric-blue flex items-center justify-center cursor-ew-resize pointer-events-auto slider-handle-glow hover:scale-110 transition-transform"
                id="slider-drag-handle"
              >
                <MoveHorizontal className="h-5 w-5 text-electric-blue" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-6 text-gray-400 font-mono text-xs uppercase tracking-widest" id="slider-legend">
            <span className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" /> Drag Handle to Compare Day / Night
            </span>
          </div>
        </div>

        {/* Why It Matters Callout */}
        <div className="border border-white/5 bg-black/40 rounded-2xl p-8 mb-16 text-center" id="why-it-matters">
          <h4 className="text-lg font-display font-light text-white mb-2 uppercase tracking-wider">Why It Matters</h4>
          <p className="text-gray-400 text-sm font-light max-w-4xl mx-auto leading-relaxed">
            Outdoor advertising never sleeps. Your audience encounters your brand throughout the day and long after sunset. Whether displayed on highways, premium retail locations, airports, commercial districts, or landmark city installations, every advertisement should continue delivering maximum visual impact. MMT's Double-Sided Backlit Technology ensures your investment performs continuously—24 hours a day.
          </p>
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12 border-t border-white/5 pt-12" id="backlit-specifications">
          
          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Exceptional Day & Night Performance</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Designed to maintain consistent visual brilliance regardless of lighting conditions.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">No Colour Loss at Night</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Our proprietary production process prevents the washed-out appearance commonly associated with conventional backlit printing.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Uniform Illumination</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Every section of the graphic receives balanced light distribution, eliminating uneven brightness and dark patches.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Superior Image Fidelity</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Fine details, typography, gradients, and photographic imagery remain crisp and accurate both during daylight and nighttime illumination.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Scratch Resistant Surface</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                The finished graphics are highly resistant to scratches and everyday maintenance, ensuring long-term visual quality.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-dark-graphite/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle className="h-5 w-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Designed for Large-Scale</h4>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Perfect for unipoles, hoardings, airports, commercial buildings, retail environments, and landmark outdoor advertising.
              </p>
            </div>
          </div>

        </div>

        {/* Featured Statement */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-2xl sm:text-3xl font-display font-light text-white">
            "One Advertisement. Two Experiences. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400 font-semibold glowing-text">The Same Extraordinary Visual Impact.</span>"
          </p>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-4 block">This is the difference engineering makes.</span>
        </div>

      </div>
    </section>
  );
}
