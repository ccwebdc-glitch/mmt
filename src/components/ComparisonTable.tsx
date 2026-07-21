import React, { useState } from "react";
import { COMPARISON_TABLE } from "../data";
import { Trophy, Info, X, ShieldAlert, BadgeCheck } from "lucide-react";

export default function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section id="mmt-comparison" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background visual borders and glows */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mmt-blue/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24 text-center items-center" id="comparison-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            06 // COMPARATIVE ANALYSIS
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Choosing Engineering <br />
            <span className="text-electric-blue font-medium">
              Over Ordinary Printing.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-400 font-sans font-light max-w-3xl leading-relaxed text-sm sm:text-base text-center">
            Selecting the right partner for your outdoor visual communication is critical. This table provides a direct comparison between MetroMedia Technologies MENA's premium engineering standards and the options commonly available through conventional printing companies.
          </p>
        </div>

        {/* Luxury Interactive Comparison Table */}
        <div className="w-full overflow-x-auto rounded-3xl border border-white/5 bg-dark-graphite/40 backdrop-blur-sm p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]" id="comparison-table-wrapper">
          <table className="w-full text-left border-collapse min-w-[700px]">
            
            {/* Table Head */}
            <thead>
              <tr className="border-b border-white/10 pb-6">
                <th className="py-5 px-6 text-xs uppercase tracking-[0.2em] font-mono text-gray-500 font-semibold w-1/4">
                  Engineering Metric
                </th>
                <th className="py-5 px-6 text-xs uppercase tracking-[0.2em] font-mono text-electric-blue font-semibold w-1/2">
                  MMT System Standard
                </th>
                <th className="py-5 px-6 text-xs uppercase tracking-[0.2em] font-mono text-gray-500 font-semibold w-1/4">
                  Conventional Competitors
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/5">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr
                  key={idx}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`transition-colors duration-200 relative group ${
                    hoveredRow === idx ? "bg-black/50" : "bg-transparent"
                  }`}
                  id={`comparison-row-${idx}`}
                >
                  {/* Metric Title */}
                  <td className="py-5 px-6 text-xs sm:text-sm font-display font-medium text-white tracking-wide transition-colors duration-200 group-hover:text-electric-blue">
                    {row.feature}
                  </td>

                  {/* MMT Standard specifications with winner highlight */}
                  <td className="py-5 px-6 text-xs sm:text-sm text-white font-light tracking-wide">
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded bg-electric-blue/10 border border-electric-blue/20 text-electric-blue shrink-0">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-gray-100 group-hover:text-white transition-colors">
                        {row.mmtSpec}
                      </span>
                    </div>
                  </td>

                  {/* Competitor Standard specifications */}
                  <td className="py-5 px-6 text-xs sm:text-sm text-gray-500 font-light tracking-wide group-hover:text-gray-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-red-500/50 shrink-0" />
                      <span>{row.competitorSpec}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footnote and certifications */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-gray-500 font-mono text-[10px] tracking-widest uppercase" id="comparison-footer">
          <span>* Specifications are certified by our in-house ISO 9001 laboratories</span>
          <span className="flex items-center gap-1.5 text-electric-blue">
            <Trophy className="h-3.5 w-3.5 animate-pulse" /> 100% Engineering Superiority Assured
          </span>
        </div>

      </div>
    </section>
  );
}
