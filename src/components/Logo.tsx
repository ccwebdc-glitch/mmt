import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-8", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="mmt-logo-container">
      {/* Precision Icon: Interlocking geometric circles and target dots representing large-format precision */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto text-mmt-blue animate-pulse-glow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="mmt-logo-svg"
      >
        {/* Outer drum circle representing Robotic Drum */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="6 3"
          className="opacity-70"
        />
        {/* Inner solid high-precision rings */}
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="50" r="16" stroke="var(--color-electric-blue)" strokeWidth="3" />
        {/* Center dot/target laser pointer */}
        <circle cx="50" cy="50" r="5" fill="var(--color-electric-blue)" />
        {/* Alignment coordinate lines */}
        <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        {/* Corner precision brackets */}
        <path d="M 12 12 L 20 12" stroke="currentColor" strokeWidth="2" />
        <path d="M 12 12 L 12 20" stroke="currentColor" strokeWidth="2" />
        <path d="M 88 12 L 80 12" stroke="currentColor" strokeWidth="2" />
        <path d="M 88 12 L 88 20" stroke="currentColor" strokeWidth="2" />
        <path d="M 12 88 L 20 88" stroke="currentColor" strokeWidth="2" />
        <path d="M 12 88 L 12 80" stroke="currentColor" strokeWidth="2" />
        <path d="M 88 88 L 80 88" stroke="currentColor" strokeWidth="2" />
        <path d="M 88 88 L 88 80" stroke="currentColor" strokeWidth="2" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col tracking-[0.18em]" id="mmt-logo-text">
          <span className="font-display font-medium text-white text-lg sm:text-xl leading-none">
            METROMEDIA
          </span>
          <span className="font-sans font-semibold text-[10px] text-mmt-blue tracking-[0.38em] leading-tight">
            TECHNOLOGIES <span className="text-electric-blue">MENA</span>
          </span>
        </div>
      )}
    </div>
  );
}
