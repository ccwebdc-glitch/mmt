export interface USPItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  isOnlyGCC?: boolean;
}

export interface TechChapter {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlightSpecs: string[];
  imagePlaceholderDesc: string;
  accentText: string;
}

export interface ComparisonMetric {
  feature: string;
  mmtSpec: string;
  competitorSpec: string;
  isWinner: boolean; // MMT is always the winner, but indicates highlighting
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  size: string;
  description: string;
  imageDesc: string;
  themeColor: string;
}

export interface GlobalLocation {
  city: string;
  region: string;
  lat: number; // percentage coordinate for custom dark map
  lng: number; // percentage coordinate for custom dark map
  isHub?: boolean;
}

// 1. Core Corporate Statistics
export const CORPORATE_STATS = [
  { id: "stat-1", value: "1987", label: "Founded in USA" },
  { id: "stat-2", value: "2005", label: "Serving GCC & MENA" },
  { id: "stat-3", value: "7K SQ FT", label: "DIP Production Facility" },
  { id: "stat-4", value: "Only GCC", label: "Robotic Paint Drum System" },
  { id: "stat-5", value: "4 Years", label: "Fade Resistance Warranty" },
  { id: "stat-6", value: "5 Metres", label: "Seamless Print Capability" }
];

// 2. Timeline Storytelling (About Section)
export const ABOUT_TIMELINE = [
  {
    year: "1987",
    title: "The Birth of Visual Innovation",
    location: "USA",
    description: "MetroMedia Technologies was established in the United States, pioneering the digital imaging revolution with cutting-edge paint-drum technologies that redefined the global outdoor advertising industry."
  },
  {
    year: "2005",
    title: "MENA Expansion & Dubai Gateway",
    location: "Dubai, UAE",
    description: "MMT expanded to Dubai, introducing the only Robotic Paint Drum printing capabilities in the GCC. We established ourselves as the premium visual engineering partner for major developments across the Middle East."
  },
  {
    year: "Global Alliance",
    title: "Global Printing Powerhouse",
    location: "Worldwide",
    description: "Forming a strategic association with Circle Graphics USA and as a proud member of the spectacular MMT Group, we leverage global R&D to engineer all-weather visual displays built to survive the harshest desert climates."
  }
];

// 3. Why MMT - Interactive USPs (incorporating official 8 items)
export const WHY_MMT_USPS: USPItem[] = [
  {
    id: "usp-robotic",
    title: "Proprietary Robotic Paint Drum Technology",
    shortDesc: "Flawless large-format production with exceptional precision.",
    fullDesc: "Our custom-engineered Robotic Paint Drum Printers enable flawless large-format production with exceptional precision, remarkable consistency, and outstanding color reproduction across every print. Unlike conventional systems, our technology is specifically designed for premium outdoor graphics where quality cannot be compromised.",
    iconName: "Cpu",
    isOnlyGCC: true
  },
  {
    id: "usp-acrylic",
    title: "Premium Acrylic Paint Technology",
    shortDesc: "Richer color depth, wider color gamut, and superior visual brilliance.",
    fullDesc: "Our proprietary acrylic paint technology delivers richer color depth, wider color gamut, and superior visual brilliance compared to conventional solvent and UV inks. The result is vibrant, lifelike graphics that retain their impact even under prolonged outdoor exposure.",
    iconName: "Paintbrush",
    isOnlyGCC: true
  },
  {
    id: "usp-climate",
    title: "Engineered for GCC Climate",
    shortDesc: "Withstands extreme heat, UV radiation, dust, and humidity.",
    fullDesc: "Extreme heat, UV radiation, dust, humidity, and desert conditions demand specialized engineering. Our technologies are developed specifically to withstand these environmental challenges while maintaining exceptional performance.",
    iconName: "Sun"
  },
  {
    id: "usp-day-night",
    title: "Superior Day & Night Performance",
    shortDesc: "Outstanding brightness and identical image fidelity.",
    fullDesc: "Our exclusive Double-Sided Backlit Technology ensures outstanding brightness and identical image fidelity throughout both daytime and nighttime viewing. Luxury brands trust MMT because every campaign maintains its intended visual impact around the clock.",
    iconName: "Layers"
  },
  {
    id: "usp-rf-welding",
    title: "Radio Frequency Welding Technology",
    shortDesc: "Virtually invisible joints with exceptional structural strength.",
    fullDesc: "Large-format graphics require seamless execution. Our advanced Radio Frequency Welding Technology produces virtually invisible joints while maintaining exceptional structural strength, resulting in cleaner, more premium visual presentations.",
    iconName: "Zap"
  },
  {
    id: "usp-consistency",
    title: "Consistent Production Quality",
    shortDesc: "Identical accuracy and sharpness from the first print to the last.",
    fullDesc: "From the first print to the thousandth, every output maintains identical color accuracy, sharpness, and production quality. Consistency is engineered into every stage of our manufacturing process.",
    iconName: "Activity"
  },
  {
    id: "usp-materials",
    title: "Premium Materials",
    shortDesc: "Substrates designed for superior durability and image quality.",
    fullDesc: "Every project utilizes carefully selected premium substrates designed for superior durability, image quality, and long-term outdoor performance.",
    iconName: "ShieldCheck"
  },
  {
    id: "usp-trusted",
    title: "Trusted by Global Brands",
    shortDesc: "The choice of luxury fashion houses, automotive and retail leaders.",
    fullDesc: "Our portfolio includes luxury fashion houses, automotive brands, retail leaders, hospitality groups, infrastructure projects, and iconic outdoor advertising campaigns throughout the GCC and MENA region.",
    iconName: "Award"
  }
];

// 4. Technology Chapter (Signature storytelling block enriched with official specs)
export const TECH_CHAPTERS: TechChapter[] = [
  {
    id: "acrylic-paint",
    title: "Acrylic Paint Technology",
    tagline: "Richer Colors. Greater Depth. Lasting Brilliance.",
    description: "Conventional solvent and UV inks often struggle under the harsh environmental conditions of the GCC, leading to fading, reduced color intensity, and diminished visual impact over time. MetroMedia Technologies MENA addresses this challenge through its proprietary Acrylic Paint Technology, developed to produce exceptional color richness, superior depth, and remarkable long-term performance. Rather than simply applying surface-level ink, our specialized acrylic paint system creates vibrant, highly saturated graphics capable of maintaining their brilliance under continuous outdoor exposure. The result is visual communication that remains bold, vivid, and impactful throughout its intended lifecycle.",
    highlightSpecs: [
      "Superior Color Gamut: Richer reds, deeper blacks, cleaner whites, and more vibrant gradients.",
      "Three-Dimensional Effect: Pigment depth creates realism, contrast, and visual richness.",
      "Up to 4 Years Fade Resistance: Designed for outdoor environments to withstand extreme GCC sun.",
      "Scratch Resistant Surface: Highly resistant to scratches and easy to maintain without damage."
    ],
    imagePlaceholderDesc: "Specialized acrylic paint system spraying vibrant, highly saturated graphics capable of maintaining brilliance under GCC weather.",
    accentText: "ACRYLIC PAINT SYSTEM"
  },
  {
    id: "robotic-drum",
    title: "Robotic Paint Drum Technology",
    tagline: "Engineering Precision at Gigantic Scale",
    description: "MetroMedia Technologies MENA proudly operates custom-engineered Robotic Paint Drum Printers, representing one of the most advanced large-format production technologies available in the GCC region. Unlike conventional flatbed or roll-to-roll systems, our proprietary drum-based production technology has been developed specifically for oversized outdoor graphics where precision, consistency, and scale are equally important. This technology allows us to manufacture exceptionally large graphics while maintaining remarkable color consistency from edge to edge.",
    highlightSpecs: [
      "Gigantic Scale: Print sizes up to 7m × 14m or 18m in a single manufacturing cycle.",
      "Intelligent Engineering: Computer-controlled movement ensures accurate paint placement.",
      "Edge-to-Edge Uniformity: Consistent pressure, alignment, and color density throughout.",
      "Instant color curing: Rapid color curing technology, while printing, reducing production timeline and fast finishing time."
    ],
    imagePlaceholderDesc: "Custom-engineered Robotic Paint Drum Printers rotating at precise speeds with automated calibration sensors.",
    accentText: "EXCLUSIVE TECHNOLOGY"
  },
  {
    id: "backlit-tech",
    title: "Double-Sided Backlit Technology",
    tagline: "Vibrant by Day. Intense by Night.",
    description: "Our exclusive Double-Sided Backlit Printing Technology has transformed the way premium outdoor media performs. By printing the identical visual file in absolute computer-controlled registration on both the front and back of the substrate, we guarantee perfect color density. Luxury brands choose MMT because their campaigns deserve to look extraordinary—24 hours a day.",
    highlightSpecs: [
      "Simultaneous micro-registration on both front and back.",
      "Zero colour loss or washed-out appearance when backlit at night.",
      "Uniform backlit illumination with balanced light distribution.",
      "Perfect for unipoles, hoardings, airports, and luxury retail."
    ],
    imagePlaceholderDesc: "Double-Sided Backlit display showing perfectly matched daytime color intensity and illuminated night brilliance.",
    accentText: "24-HOUR PERFORMANCE"
  },
  {
    id: "rf-welding",
    title: "Radio Frequency Welding Technology",
    tagline: "Seamless Graphics Without Visible Joints",
    description: "Creating gigantic outdoor advertisements requires joining multiple substrate panels together. MMT utilizes advanced Radio Frequency Welding Technology to create exceptionally strong, virtually invisible seams that maintain both structural integrity and flawless visual continuity. By passing high-frequency electromagnetic energy through the overlap, it fuses the substrate together at a molecular level.",
    highlightSpecs: [
      "Molecular Bonding: Joint becomes virtually invisible, preserving artwork integrity.",
      "Exceptional Structural Strength: Joints are stronger than conventional adhesive bonding.",
      "Backlit Optimization: Eliminates dark seam lines commonly visible with backlighting.",
      "Engineered Durability: Withstands extreme environmental stresses including heat and high wind."
    ],
    imagePlaceholderDesc: "High-frequency Radio Frequency welder fusing vinyl panels cleanly with zero joint lines.",
    accentText: "MOLECULAR FUSION"
  }
];

// 5. MMT vs Others Table Data (incorporating client corrections)
export const COMPARISON_TABLE: ComparisonMetric[] = [
  { feature: "Printing Technology", mmtSpec: "Custom Robotic Paint Drum Printers", competitorSpec: "Standard digital inkjet printers", isWinner: true },
  { feature: "Paint / Ink System", mmtSpec: "Premium Acrylic Paint Technology", competitorSpec: "Standard solvent or UV inks", isWinner: true },
  { feature: "Maximum Print Size (Seamless)", mmtSpec: "Up to 7m × 14m or 18m in a single cycle", competitorSpec: "Standard rolls (usually up to 3.2m or 5m)", isWinner: true },
  { feature: "Outdoor Longevity (Direct GCC Sun)", mmtSpec: "Highly fade resistant (Up to 4 years warranty)", competitorSpec: "Rapid fading & degradation within 12-18 months", isWinner: true },
  { feature: "Daytime Visual Quality", mmtSpec: "Exceptional color richness, depth, & 3D visual effect", competitorSpec: "Flat, low-depth appearance, standard saturation", isWinner: true },
  { feature: "Nighttime Backlit Performance", mmtSpec: "Double-Sided Backlit (100% color & contrast preservation)", competitorSpec: "Dull, washed-out, grey blacks when illuminated", isWinner: true },
  { feature: "Substrate Joining Technology", mmtSpec: "Advanced Radio Frequency (RF) Welding (Virtually invisible molecular bonds)", competitorSpec: "Heat-welding or adhesive tape (Creates dark visible lines)", isWinner: true },
  { feature: "Durability & Wind Load Resistance", mmtSpec: "Extremely durable, tear-proof, high-tension premium substrates", competitorSpec: "Standard PVC, prone to warping or stretching under wind loads", isWinner: true }
];

// 6. Premium Portfolio Projects
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "The Sheikh Zayed Road Mega Hoopla",
    category: "Billboards",
    location: "Dubai, UAE",
    size: "18m × 54m Megastructure",
    description: "An ultra-premium corporate installation engineered to dominate Dubai's main arterial highway. Utilizing MMT Acrylic Paint and double-sided backlit tech, it remains vividly saturated under harsh day glare and intense by night.",
    imageDesc: "Bespoke dark mockup of a luxury automotive brand displayed on a gigantic highway billboard, glowing with subtle neon blue highlights.",
    themeColor: "from-blue-900/40 to-black"
  },
  {
    id: "proj-2",
    title: "Al Maktoum International Airport Gateway",
    category: "Airports",
    location: "Dubai World Central",
    size: "5m × 120m Continuous Terminal Graphics",
    description: "A continuous, seamless indoor-outdoor architectural graphic lining the executive private terminal. Designed with flawless UV technology to display high-luxury watchmaker details with microscopic clarity.",
    imageDesc: "Luxury airport terminal interior featuring a seamless, beautifully backlit horizontal brand wrap under sleek architectural ceilings.",
    themeColor: "from-slate-900/40 to-black"
  },
  {
    id: "proj-3",
    title: "The Galleria Mall Elite Brand Takeover",
    category: "Mall Branding",
    location: "Abu Dhabi, UAE",
    size: "Over 2,400 Sq Ft Total Canvas",
    description: "High-luxury fashion boutique facade branding using scratch-resistant material. Color density remains perfectly uniform across multiple distinct lightboxes and fabric panels.",
    imageDesc: "Stunning night view of a premium mall entrance with highly saturated, high-contrast visual displays of luxurious jewelry collections.",
    themeColor: "from-cyan-950/30 to-black"
  },
  {
    id: "proj-4",
    title: "Riyadh Boulevard Architectural Mega-Wrap",
    category: "Architectural Graphics",
    location: "Riyadh, Saudi Arabia",
    size: "80m Height Vertical Facade Wrap",
    description: "A monumental high-tension vinyl facade wrap joined using Radio Frequency Welding. This structural marvel survived extreme desert windstorms and intense UV exposure while maintaining elite brand fidelity.",
    imageDesc: "Sleek, futuristic skyscraper in Riyadh wrapped with an elegant black-and-silver creative graphic glowing in the evening twilight.",
    themeColor: "from-indigo-950/30 to-black"
  },
  {
    id: "proj-5",
    title: "Luxury Yachting Brand Fleet Wrap",
    category: "Vehicle Branding",
    location: "Dubai Marina, UAE",
    size: "Marine-Grade All-Weather Vehicle Graphics",
    description: "Bespoke high-performance acrylic wraps engineered for extreme salinity, moisture, and intense UV exposure. Custom color matching ensures perfect brand conformity.",
    imageDesc: "Superyacht cruising near Dubai Marina, decorated with an elegant metallic blue high-performance wrap with zero fade.",
    themeColor: "from-sky-950/40 to-black"
  },
  {
    id: "proj-6",
    title: "High-End Retail Boulevard Hoardings",
    category: "Retail Branding",
    location: "Doha, Qatar",
    size: "350 Metres Continuous Exterior Screen",
    description: "Exterior pedestrian-level hoardings protecting and branding a new premier fashion district. Features high scratch resistance and flawless micro-fine detail alignment.",
    imageDesc: "Elegant outdoor shopping promenade showing clean, luxury visual panels outlining upcoming elite retail stores.",
    themeColor: "from-blue-950/30 to-black"
  }
];

// 7. Global Connection Points (GCC/MENA Map coordinates based on Dubai hub)
export const MAP_LOCATIONS: GlobalLocation[] = [
  { city: "Dubai", region: "UAE (Global Headquarters & Hub)", lat: 58, lng: 55, isHub: true },
  { city: "Riyadh", region: "Saudi Arabia", lat: 55, lng: 45 },
  { city: "Doha", region: "Qatar", lat: 53, lng: 51 },
  { city: "Abu Dhabi", region: "UAE", lat: 60, lng: 53 },
  { city: "Muscat", region: "Oman", lat: 65, lng: 62 },
  { city: "Manama", region: "Bahrain", lat: 48, lng: 50 },
  { city: "Kuwait City", region: "Kuwait", lat: 41, lng: 46 },
  { city: "Amman", region: "Jordan", lat: 38, lng: 28 },
  { city: "Cairo", region: "Egypt", lat: 42, lng: 18 },
  { city: "Beirut", region: "Lebanon", lat: 31, lng: 27 },
  { city: "Casablanca", region: "Morocco", lat: 43, lng: 4 },
  { city: "Valletta", region: "Malta", lat: 28, lng: 11 }
];
