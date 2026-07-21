import React, { useState } from "react";
import { ShoppingBag, Car, Building2, Plane, Sparkles, Megaphone, CheckCircle2 } from "lucide-react";

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const INDUSTRIES_DATA = [
    {
      title: "Luxury Retail & Branding",
      icon: <ShoppingBag className="h-6 w-6" />,
      tagline: "High-Fashion Facades. Premium Lightboxes. Shop-in-Shop Displays. Exquisite Finishes.",
      description: "For premium luxury fashion brands and high-end retailers, visual communication is an extension of the brand experience. Every detail must reflect sophistication, precision, and quality. Our Acrylic Paint Technology and Double-Sided Backlit Displays ensure that brand colours are reproduced with flawless accuracy and that displays remain exceptionally vibrant, both day and night, in luxury malls and shopping districts.",
      deliverables: ["High-Fashion Facades", "Premium Lightboxes", "Shop-in-Shop Displays", "Exquisite Finishes"]
    },
    {
      title: "Automotive",
      icon: <Car className="h-6 w-6" />,
      tagline: "High-Impact Showroom Graphics. Dynamic Outdoor Billboard Campaigns. Launch Displays.",
      description: "Automotive marketing relies on high-impact visual imagery that captures the performance, design, and status of premium vehicles. Our custom Robotic Printing Systems deliver gigantic, high-contrast displays that capture the fine details, metallic sheens, and vibrant colours of automotive designs, creating powerful landmarks that demand attention along major highways.",
      deliverables: ["High-Impact Showroom Graphics", "Dynamic Outdoor Campaigns", "Launch Displays", "Metallic/Saturated Finishes"]
    },
    {
      title: "Property Development",
      icon: <Building2 className="h-6 w-6" />,
      tagline: "Elite Construction Hoardings. Skyscraper Graphics. Development Signage. Show-Flat Visuals.",
      description: "Real estate giants require outdoor displays that convey the prestige, scale, and luxury of their upcoming residential and commercial landmarks. Our high-strength PVC substrates and Radio Frequency Welding Technology enable the creation of massive, seamless construction hoardings and vertical wraps that maintain outstanding visual quality throughout multi-year development cycles.",
      deliverables: ["Elite Construction Hoardings", "Skyscraper Graphics", "Development Signage", "Show-Flat Visuals"]
    },
    {
      title: "Airports & Transportation",
      icon: <Plane className="h-6 w-6" />,
      tagline: "Large-Format Terminal Wraps. Premium Lightbox Displays. Dynamic Corridor Graphics.",
      description: "Airports are high-exposure gateways where brands communicate with a continuous flow of affluent global travelers. Our production facility is certified to manufacture highly durable, fire-retardant, and scratch-resistant airport displays that deliver exceptional detail, uniform illumination, and absolute visual consistency across premium concourses and terminal gateways.",
      deliverables: ["Large-Format Terminal Wraps", "Premium Lightbox Displays", "Dynamic Corridor Graphics", "Fire-Retardant Media"]
    },
    {
      title: "Entertainment & Leisure",
      icon: <Sparkles className="h-6 w-6" />,
      tagline: "Immersive Exhibition Backdrops. Concert Displays. Theme Park Graphics. Boulevard Wraps.",
      description: "High-profile entertainment districts and leisure destinations demand dynamic, large-scale visual environments that create unforgettable memories. MMT's high-speed production capacity and robust materials allow us to manufacture durable, weather-resistant graphics that sustain continuous foot traffic, public exposure, and changing weather conditions.",
      deliverables: ["Immersive Backdrops", "Concert Displays", "Theme Park Graphics", "Boulevard Wraps"]
    },
    {
      title: "Outdoor Media Companies",
      icon: <Megaphone className="h-6 w-6" />,
      tagline: "High-Exposure Billboards. Landmark Unipoles. Uncompromised Campaign Longevity.",
      description: "For leading outdoor advertising operators, campaign durability, ease of installation, and structural integrity are as critical as visual quality. Our 4 Years Fade Resistance Warranty and premium double-sided prints ensure that outdoor media assets maintain peak visual performance for the entire campaign duration, maximizing return on investment.",
      deliverables: ["High-Exposure Billboards", "Landmark Unipoles", "Campaign Longevity Guarantee", "High-Tension Systems"]
    }
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full radial-glow opacity-15 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mmt-blue/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-20" id="industries-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            08 // TARGETED SECTORS
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Engineered for Excellence <br />
            <span className="text-electric-blue font-medium">
              Across Diverse Sectors.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-300 font-sans font-light max-w-4xl leading-relaxed text-sm sm:text-base">
            At MetroMedia Technologies MENA, we understand that every industry has unique requirements, brand standards, and target audiences. Our advanced technology suite, premium materials, and custom engineering approach enable us to deliver tailored visual solutions that address the specific needs of diverse sectors across the GCC and MENA region.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="industries-grid">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-dark-graphite/30 border border-white/5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-electric-blue/20 hover:bg-black/40 relative overflow-hidden group"
              id={`industry-card-${idx}`}
            >
              {/* Subtle top bar glowing light */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mmt-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-electric-blue group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all">
                    {ind.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-light text-white tracking-wide group-hover:text-electric-blue transition-colors">
                    {ind.title}
                  </h3>
                </div>

                {/* Deliverables / Tags */}
                <p className="text-xs font-mono text-electric-blue/80 tracking-wide uppercase mb-6 border-l-2 border-electric-blue/40 pl-3 leading-relaxed">
                  {ind.tagline}
                </p>

                {/* Main Body */}
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-8">
                  {ind.description}
                </p>
              </div>

              {/* Specs deliverables bullets */}
              <div className="border-t border-white/5 pt-6 grid grid-cols-2 gap-3" id={`industry-specs-${idx}`}>
                {ind.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-electric-blue shrink-0" />
                    <span className="text-[11px] sm:text-xs text-gray-300 font-mono tracking-wide">
                      {del}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
