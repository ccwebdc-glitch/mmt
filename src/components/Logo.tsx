import React from "react";
import logoImg from "./logo.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-8", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`} id="mmt-logo-container">
      {iconOnly ? (
        // If only the icon is requested, we can crop/show the top circular part of the brand logo
        <div className="h-full aspect-square overflow-hidden rounded-md bg-white p-0.5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,71,255,0.15)]">
          <div className="w-[125%] h-[125%] -translate-y-[8%] flex items-center justify-center overflow-hidden">
            <img
              src={logoImg}
              alt="MMT Icon"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      ) : (
        // Full brand logo with matching premium outer styling, clean rounded borders, and crisp rendering
        <div className="h-full flex items-center bg-white rounded-md p-1 border border-white/10 shadow-[0_0_20px_rgba(0,71,255,0.15)] hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:border-electric-blue/30 transition-all duration-300">
          <img
            src={logoImg}
            alt="MetroMedia Technologies MENA"
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}

