import React, { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  Trash2, 
  Play, 
  Pause, 
  ZoomIn, 
  X, 
  Sparkles,
  Image as ImageIcon
} from "lucide-react";

export interface AboutWorkImage {
  id: string;
  url: string;
  title?: string;
  isUserUploaded?: boolean;
}

const DEFAULT_ABOUT_WORK_IMAGES: AboutWorkImage[] = [
  {
    id: "about-work-1",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-2_god51p.jpg",
    title: "Large Format Outdoor Branding",
  },
  {
    id: "about-work-2",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-3_b1df37.jpg",
    title: "Precision Print Technology",
  },
  {
    id: "about-work-3",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716873/mmt-4_f5gpqa.jpg",
    title: "Architectural & Façade Graphics",
  },
  {
    id: "about-work-4",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716872/mmt-5_uqjnhs.jpg",
    title: "High Fidelity OOH Installations",
  },
  {
    id: "about-work-5",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784716837/mmt-1_q6gru2.jpg",
    title: "Dubai Production Facility",
  },
  {
    id: "about-work-6",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784719525/mmt-7_w981ck.jpg",
    title: "Metromedia Technologies Showcase",
  }
];

export default function AboutWorkSlider() {
  const [images, setImages] = useState<AboutWorkImage[]>(DEFAULT_ABOUT_WORK_IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newImages: AboutWorkImage[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const imageUrl = URL.createObjectURL(file);
      newImages.push({
        id: `uploaded-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        url: imageUrl,
        title: file.name.replace(/\.[^/.]+$/, ""),
        isUserUploaded: true,
      });
    });

    if (newImages.length > 0) {
      setImages((prev) => [...prev, ...newImages]);
      setCurrentIndex(images.length); // Jump to first uploaded
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
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
    <div className="w-full mb-16" id="about-work-photo-slider">
      {/* Top Header Row with Title & Upload Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue">
            <ImageIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-mono uppercase tracking-widest text-electric-blue font-semibold flex items-center gap-2">
            MMT WORK GALLERY & SHOWCASE
            <span className="text-gray-400 font-normal text-xs font-sans">({images.length} Photos)</span>
          </h3>
        </div>

        {/* Upload Button */}
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/*"
            multiple
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#f25c05] to-[#d81b60] hover:from-[#d81b60] hover:to-[#0090e7] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/40 hover:scale-105 active:scale-95"
            title="Upload your own work photos"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Upload Work Photo</span>
          </button>
        </div>
      </div>

      {/* 16:9 Aspect Ratio Frame with Drag & Drop */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full aspect-[16/9] relative rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group ${
          isDragging 
            ? "border-[#0090e7] ring-4 ring-[#0090e7]/30 scale-[1.01]" 
            : "border-white/15 hover:border-[#0090e7]/60"
        }`}
      >
        {activeImage ? (
          <div className="w-full h-full relative">
            <img
              src={activeImage.url}
              alt={activeImage.title || "MMT Visual Work Showcase"}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Bottom Title Badge */}
            <div className="absolute bottom-4 left-4 right-20 z-20 flex flex-col gap-1 pointer-events-none">
              {activeImage.title && (
                <span className="text-sm sm:text-base font-display font-medium text-white drop-shadow-md tracking-wide">
                  {activeImage.title}
                </span>
              )}
              <span className="text-[11px] font-mono text-electric-blue/90 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-[#f25c05]" />
                Metromedia Technologies Work Showcase
              </span>
            </div>

            {/* Top Right Controls: Zoom & Delete */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => setLightboxUrl(activeImage.url)}
                className="p-2 rounded-full bg-black/70 hover:bg-[#0090e7] text-white backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-110"
                title="Fullscreen Lightbox"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              {activeImage.isUserUploaded && (
                <button
                  onClick={(e) => handleDelete(activeImage.id, e)}
                  className="p-2 rounded-full bg-black/70 hover:bg-[#d81b60] text-white backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-110"
                  title="Remove uploaded image"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Left & Right Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-6 text-center">
            <ImageIcon className="h-12 w-12 text-gray-600 mb-3" />
            <p className="text-sm font-mono text-gray-300">No images available</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 px-4 py-2 rounded-full text-xs font-mono text-white bg-electric-blue hover:bg-electric-blue/80 transition-all"
            >
              Upload Work Photo
            </button>
          </div>
        )}

        {/* Drag & Drop Hover Overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-[#0090e7]/90 backdrop-blur-md z-40 flex flex-col items-center justify-center text-white p-6 text-center">
            <Upload className="h-12 w-12 mb-3 animate-bounce text-white" />
            <p className="font-display font-bold text-lg">Drop Your Work Photo Here</p>
            <p className="text-xs opacity-90 font-mono mt-1">Supports PNG, JPG, WEBP formats</p>
          </div>
        )}
      </div>

      {/* Controls Bar Below Frame */}
      <div className="w-full mt-3 flex items-center justify-between gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 px-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all text-xs flex items-center gap-2 font-mono"
          title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
        >
          {isPlaying ? (
            <>
              <Pause className="h-3.5 w-3.5 text-[#d81b60]" />
              <span className="text-xs text-gray-300">Pause</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 text-[#0090e7]" />
              <span className="text-xs text-gray-300">Play</span>
            </>
          )}
        </button>

        {/* Thumbnail Indicators */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 max-w-[60%]">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#f25c05]"
                  : "w-2.5 bg-white/20 hover:bg-[#0090e7]"
              }`}
              title={img.title || `Photo ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter Badge */}
        <div className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
          <span className="text-electric-blue font-bold">{currentIndex + 1}</span> / {images.length}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxUrl && (
        <div 
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setLightboxUrl(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#d81b60] text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black cursor-default"
          >
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
