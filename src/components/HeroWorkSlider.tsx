import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Trash2, 
  Play, 
  Pause, 
  CheckCircle2, 
  ZoomIn,
  X
} from "lucide-react";

export interface HeroWorkImage {
  id: string;
  url: string;
  isUserUploaded?: boolean;
}

const DEFAULT_HERO_WORK_IMAGES: HeroWorkImage[] = [
  {
    id: "hero-work-1",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-2_god51p.jpg",
  },
  {
    id: "hero-work-2",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-3_b1df37.jpg",
  },
  {
    id: "hero-work-3",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-4_f5gpqa.jpg",
  },
  {
    id: "hero-work-4",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716872/mmt-5_uqjnhs.jpg",
  },
  {
    id: "hero-work-5",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716837/mmt-1_q6gru2.jpg",
  }
];

export default function HeroWorkSlider() {
  const [images, setImages] = useState<HeroWorkImage[]>(DEFAULT_HERO_WORK_IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      if (currentIndex >= filtered.length) {
        setCurrentIndex(Math.max(0, filtered.length - 1));
      }
      return filtered;
    });
  };

  const activeImage = images[currentIndex] || images[0];

  return (
    <div className="w-full max-w-[420px] mx-auto flex flex-col items-center" id="hero-photo-slider">
      
      {/* 4:5 Aspect Ratio Container Frame */}
      <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1b2234]/20 hover:border-[#0090e7] transition-all duration-300 group bg-[#eae3d5]">
        {activeImage && (
          <div className="w-full h-full relative">
            <img
              src={activeImage.url}
              alt="MetroMedia Work Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2234]/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Right Zoom Controls */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
              <button
                onClick={() => setLightboxUrl(activeImage.url)}
                className="p-1.5 rounded-full bg-black/60 hover:bg-[#0090e7] text-white backdrop-blur-md border border-white/20 transition-all"
                title="Fullscreen Lightbox"
              >
                <ZoomIn className="h-3.5 w-3.5" />
              </button>
              {activeImage.isUserUploaded && (
                <button
                  onClick={(e) => handleDelete(activeImage.id, e)}
                  className="p-1.5 rounded-full bg-black/60 hover:bg-[#d81b60] text-white backdrop-blur-md border border-white/20 transition-all"
                  title="Delete image"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Left & Right Arrow Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Controls & Thumbnail Indicators below the 4:5 frame */}
      <div className="w-full mt-3 flex items-center justify-between gap-2">
        {/* Play / Pause Auto-slide */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 px-3 rounded-full bg-[#eae3d5] hover:bg-[#dfd6c5] text-[#1b2234] border border-[#1b2234]/15 transition-all text-xs flex items-center gap-1.5 font-mono text-[11px]"
          title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5 text-[#d81b60]" /> : <Play className="h-3.5 w-3.5 text-[#0090e7]" />}
          <span className="text-[#1b2234]">{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {/* Thumbnail Dots/Badges */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx
                  ? "w-6 bg-[#f25c05]"
                  : "w-2 bg-[#1b2234]/20 hover:bg-[#0090e7]"
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxUrl(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="max-w-xl max-h-[85vh] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img
              src={lightboxUrl}
              alt="Fullscreen Work Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
