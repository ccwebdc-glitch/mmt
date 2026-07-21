import React, { useState } from "react";
import { MAP_LOCATIONS } from "../data";
import { MapPin, Globe, Share2, Compass } from "lucide-react";

export default function GlobalPresence() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Dubai is our central coordinate hub
  const dubaiCoord = MAP_LOCATIONS.find((loc) => loc.city === "Dubai") || { lat: 58, lng: 55 };

  return (
    <section id="presence" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full radial-glow opacity-15 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 sm:mb-24 items-end" id="presence-header">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
              08 // TERRITORIAL COVERAGE
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
              Global Presence. <br />
              <span className="text-electric-blue font-medium">
                MENA & GCC Dominance.
              </span>
            </h2>
            <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(10,92,255,0.8)]" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 font-sans font-light text-sm sm:text-base leading-relaxed">
              Serving the entire Middle East region since 2005. Our primary engineering facility is positioned strategically in Dubai to guarantee swift, heavy-duty logistics and deployment across all states.
            </p>
          </div>
        </div>

        {/* Custom Visual Map Frame Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="presence-workspace">
          
          {/* Left Block: Interactive Location Feed */}
          <div className="lg:col-span-4 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2" id="presence-feed">
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
              <Compass className="h-3.5 w-3.5 text-electric-blue animate-spin" style={{ animationDuration: "12s" }} /> ACTIVE TRANSMISSION CHANNELS
            </div>

            {MAP_LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                onMouseEnter={() => setHoveredLocation(loc.city)}
                onMouseLeave={() => setHoveredLocation(null)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  hoveredLocation === loc.city
                    ? "bg-dark-graphite border-electric-blue/40 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                    : "bg-dark-graphite/20 border-white/5 hover:border-white/10"
                }`}
                id={`presence-card-${loc.city}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    loc.isHub || hoveredLocation === loc.city
                      ? "bg-electric-blue/10 text-electric-blue"
                      : "bg-white/5 text-gray-500"
                  }`}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-display font-semibold text-white tracking-wide">
                      {loc.city}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {loc.region}
                    </span>
                  </div>
                </div>
                {loc.isHub && (
                  <span className="text-[8px] font-mono text-electric-blue bg-electric-blue/10 border border-electric-blue/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    Global Hub
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right Block: Dynamic Cyber-Vector Map Viewport */}
          <div className="lg:col-span-8" id="presence-cyber-map">
            <div className="border border-white/10 bg-black rounded-3xl p-6 h-[450px] sm:h-[500px] relative overflow-hidden flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              {/* HUD Coordinates overlays */}
              <div className="absolute top-4 left-4 text-electric-blue font-mono text-[8px] uppercase tracking-widest select-none flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" /> MATRIX // MERCATOR-GRID-X01
              </div>
              <div className="absolute top-4 right-4 text-gray-500 font-mono text-[8px] uppercase tracking-widest select-none">
                GCC BROADCAST ACTIVE
              </div>

              {/* The interactive SVG Map Canvas */}
              <div className="flex-grow w-full h-full relative" id="map-svg-container">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none">
                  
                  {/* Subtle matrix coordinates grid backdrop */}
                  <path d="M 0 20 L 100 20 M 0 40 L 100 40 M 0 60 L 100 60 M 0 80 L 100 80 M 20 0 L 20 100 M 40 0 L 40 100 M 60 0 L 60 100 M 80 0 L 80 100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />

                  {/* GCC visual contour layout representation lines */}
                  <path d="M 15 25 Q 35 15 50 25 T 85 45 T 65 85 Z" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3 3" fill="rgba(10,92,255,0.01)" />

                  {/* Draw connection lines from Dubai to other active locations */}
                  {MAP_LOCATIONS.map((loc) => {
                    if (loc.city === "Dubai") return null;

                    const isHighlighted = hoveredLocation === loc.city;
                    return (
                      <g key={`line-${loc.city}`}>
                        {/* Static connecting line */}
                        <line
                          x1={dubaiCoord.lng}
                          y1={dubaiCoord.lat}
                          x2={loc.lng}
                          y2={loc.lat}
                          stroke={isHighlighted ? "var(--color-electric-blue)" : "rgba(10, 92, 255, 0.15)"}
                          strokeWidth={isHighlighted ? "1" : "0.5"}
                          strokeDasharray={isHighlighted ? "0" : "2 2"}
                          className="transition-all duration-300"
                        />
                        {/* Glowing laser tracer ball when hovered */}
                        {isHighlighted && (
                          <circle r="1.5" fill="var(--color-electric-blue)">
                            <animateMotion
                              path={`M ${dubaiCoord.lng} ${dubaiCoord.lat} L ${loc.lng} ${loc.lat}`}
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}

                  {/* Draw the pulsating city beacon nodes */}
                  {MAP_LOCATIONS.map((loc) => {
                    const isHub = loc.isHub;
                    const isHighlighted = hoveredLocation === loc.city;

                    return (
                      <g key={`node-${loc.city}`} className="cursor-pointer" onMouseEnter={() => setHoveredLocation(loc.city)} onMouseLeave={() => setHoveredLocation(null)}>
                        {/* Glowing concentric pulse circle rings */}
                        {(isHub || isHighlighted) && (
                          <circle
                            cx={loc.lng}
                            cy={loc.lat}
                            r={isHub ? "6" : "4"}
                            fill="none"
                            stroke="var(--color-electric-blue)"
                            strokeWidth="0.5"
                            className="animate-ping opacity-30"
                            style={{ animationDuration: isHub ? "2s" : "1.5s" }}
                          />
                        )}

                        {/* Solid beacon points */}
                        <circle
                          cx={loc.lng}
                          cy={loc.lat}
                          r={isHub ? "2.5" : "1.5"}
                          fill={isHub ? "var(--color-electric-blue)" : isHighlighted ? "var(--color-electric-blue)" : "rgba(10, 92, 255, 0.7)"}
                          className="transition-all duration-300"
                        />

                        {/* Text labels for map points */}
                        {(isHub || isHighlighted) && (
                          <text
                            x={loc.lng + 3}
                            y={loc.lat - 1}
                            fill="#FFFFFF"
                            fontSize="2.5"
                            fontFamily="monospace"
                            fontWeight="bold"
                            letterSpacing="0.2"
                            id={`map-label-${loc.city}`}
                          >
                            {loc.city.toUpperCase()}
                          </text>
                        )}
                      </g>
                    );
                  })}

                </svg>
              </div>

              {/* Bottom detail summary map caption */}
              <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-gray-500 font-mono text-[9px] uppercase tracking-widest flex items-center gap-1">
                  <Share2 className="h-3 w-3" /> HUB COORDINATE: 25.0068° N, 55.1500° E (DUBAI DIP)
                </span>
                <span className="text-electric-blue font-mono text-[9px] uppercase tracking-widest font-semibold">
                  12 Markets Connected Globally
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
