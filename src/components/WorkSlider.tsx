import React, { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  Maximize2, 
  Trash2, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  X, 
  Image as ImageIcon,
  ZoomIn
} from "lucide-react";

export interface WorkImageItem {
  id: string;
  url: string;
  title: string;
  category: string;
  details: string;
  isUserUploaded?: boolean;
}

// Default initial high-res work images (including our generated 4:5 showcase images)
const INITIAL_WORK_IMAGES: WorkImageItem[] = [
  {
    id: "work-1",
    url: "/src/assets/images/print_work_catalog_1784716180944.jpg",
    title: "Luxury Catalog & Brochure Printing",
    category: "Offset & Spot UV",
    details: "Gold foil stamping, spot UV varnish on 350gsm silk matte paper stock."
  },
  {
    id: "work-2",
    url: "/src/assets/images/print_work_poster_1784716197333.jpg",
    title: "Industrial Wide-Format Printing",
    category: "CMYK Halftone Press",
    details: "High-speed precision color reproduction with intense cyan, magenta, yellow pigments."
  },
  {
    id: "work-3",
    url: "/src/assets/images/print_work_card_1784716212254.jpg",
    title: "Embossed & Foil Business Cards",
    category: "Die-Cut Specialty",
    details: "Holographic foil edges, deep 3D blind embossing on triple-thick matte black cardstock."
  }
];

export default function WorkSlider() {
  const [images, setImages] = useState<WorkImageItem[]>(INITIAL_WORK_IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-slide effect when playing
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Handle image upload
  const processFiles = (files: FileList | File[]) => {
    const newItems: WorkImageItem[] = [];
    Array.from(files).forEach((file, idx) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          const newItem: WorkImageItem = {
            id: `upload-${Date.now()}-${idx}`,
            url: result,
            title: file.name.replace(/\.[^/.]+$/, "") || "Custom Printing Project",
            category: "Client Upload",
            details: `Uploaded photo (${(file.size / 1024).toFixed(0)} KB) displayed in 4:5 aspect ratio.`,
            isUserUploaded: true
          };
          setImages((prev) => [...prev, newItem]);
          // Jump to newly uploaded image
          setCurrentIndex((prev) => prev + (idx === 0 ? 1 : 0));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
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
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleDeleteImage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      if (currentIndex >= filtered.length) {
        setCurrentIndex(Math.max(0, filtered.length - 1));
      }
      return filtered;
    });
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <section id="work-showcase" className="py-20 sm:py-28 bg-[#f5f0e6] relative overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 industrial-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0090e7]/10 text-[#0090e7] border border-[#0090e7]/20 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-[#f25c05]" />
                4:5 PORTRAIT RATIO SHOWCASE
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#f25c05]/10 text-[#f25c05] border border-[#f25c05]/20">
                OUR PRINTING WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1b2234] tracking-tight leading-tight">
              Featured Work <span className="text-[#f25c05]">&</span> Custom Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#47536e] max-w-xl mt-3 leading-relaxed">
              Explore our high-precision printing craftsmanship. You can also upload photos of your own work to test how they look in our 4:5 portrait frame!
            </p>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#eae3d5] hover:bg-[#dfd6c5] text-[#1b2234] border border-[#1b2234]/15 transition-all flex items-center gap-2 shadow-sm"
              title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
            >
              {isPlaying ? <Pause className="h-4 w-4 text-[#d81b60]" /> : <Play className="h-4 w-4 text-[#0090e7]" />}
              <span>{isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}</span>
            </button>

            {/* Upload Button */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#f25c05] to-[#d81b60] hover:from-[#d81b60] hover:to-[#0090e7] transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Work Photo</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: The 4:5 Aspect Ratio Photo Slider Frame (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`w-full max-w-[480px] aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-300 group ${
                isDragging 
                  ? "border-[#f25c05] ring-8 ring-[#f25c05]/20 scale-[1.02]" 
                  : "border-[#1b2234]/15 hover:border-[#0090e7]/50"
              }`}
            >
              {/* Main 4:5 Image */}
              {currentImage && (
                <div className="w-full h-full relative bg-[#eae3d5]">
                  <img
                    src={currentImage.url}
                    alt={currentImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2234]/80 via-transparent to-black/20 pointer-events-none" />

                  {/* 4:5 Ratio Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-[#1b2234]/80 backdrop-blur-md border border-white/20 shadow-sm">
                      4 : 5 RATIO
                    </span>
                    {currentImage.isUserUploaded && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-[#f25c05] shadow-sm flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> CUSTOM UPLOAD
                      </span>
                    )}
                  </div>

                  {/* Top Right Controls: Lightbox & Delete */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                    <button
                      onClick={() => setLightboxImage(currentImage.url)}
                      className="p-2 rounded-full bg-black/60 hover:bg-[#0090e7] text-white backdrop-blur-md border border-white/20 transition-all shadow-md"
                      title="Fullscreen Lightbox"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    {currentImage.isUserUploaded && (
                      <button
                        onClick={(e) => handleDeleteImage(currentImage.id, e)}
                        className="p-2 rounded-full bg-black/60 hover:bg-[#d81b60] text-white backdrop-blur-md border border-white/20 transition-all shadow-md"
                        title="Remove uploaded image"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Navigation Arrows on Slide Hover */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-lg"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 hover:bg-[#f25c05] text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 shadow-lg"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Bottom Text Overlay inside the 4:5 frame */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0090e7] bg-[#1b2234]/90 px-2.5 py-0.5 rounded border border-[#0090e7]/30 inline-block mb-2 font-semibold">
                      {currentImage.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight mb-1 text-white drop-shadow-sm">
                      {currentImage.title}
                    </h3>
                    <p className="text-xs text-gray-200 line-clamp-2 font-light opacity-90">
                      {currentImage.details}
                    </p>
                  </div>
                </div>
              )}

              {/* Drag & Drop Hint Overlay when dragging */}
              {isDragging && (
                <div className="absolute inset-0 bg-[#0090e7]/90 backdrop-blur-sm z-40 flex flex-col items-center justify-center text-white p-6 text-center">
                  <Upload className="h-12 w-12 mb-3 animate-bounce" />
                  <p className="font-display font-bold text-lg">Drop your work photo here!</p>
                  <p className="text-xs opacity-90 mt-1">It will be rendered instantly in 4:5 aspect ratio</p>
                </div>
              )}
            </div>

            {/* Slide Index Counter */}
            <div className="flex items-center gap-3 mt-4 text-xs font-mono font-semibold text-[#1b2234]">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <div className="w-24 h-1.5 bg-[#dfd6c5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0090e7] via-[#f25c05] to-[#d81b60] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                />
              </div>
              <span>{String(images.length).padStart(2, "0")} SLIDES</span>
            </div>
          </div>

          {/* Right Column: Slide Details & Thumbnail Track & Drag Drop Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            
            {/* Project Specs Card */}
            <div className="p-6 rounded-2xl bg-[#eae3d5] border border-[#1b2234]/12 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#1b2234]/10 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0090e7] flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4 text-[#f25c05]" />
                  Project Specification
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#f25c05] bg-[#f25c05]/10 px-2.5 py-0.5 rounded-full border border-[#f25c05]/20">
                  4:5 Vertical Format
                </span>
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-[#1b2234]">
                  {currentImage?.title}
                </h4>
                <p className="text-xs text-[#47536e] leading-relaxed mt-1">
                  {currentImage?.details}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] font-mono text-[#2c354a]">
                <div className="bg-[#f5f0e6] p-2.5 rounded-lg border border-[#1b2234]/10">
                  <span className="block text-[9px] text-[#47536e] uppercase">Aspect Ratio</span>
                  <span className="font-bold text-[#1b2234]">4 : 5 (Portrait)</span>
                </div>
                <div className="bg-[#f5f0e6] p-2.5 rounded-lg border border-[#1b2234]/10">
                  <span className="block text-[9px] text-[#47536e] uppercase">Source</span>
                  <span className="font-bold text-[#0090e7]">
                    {currentImage?.isUserUploaded ? "User Uploaded" : "Press Portfolio"}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Carousel Track */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#1b2234] font-semibold">
                <span>Select Work Photo:</span>
                <span className="text-[#f25c05]">{images.length} Photos Available</span>
              </div>

              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-[4/5] w-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentIndex === idx
                        ? "border-[#f25c05] scale-105 shadow-md ring-2 ring-[#f25c05]/30"
                        : "border-[#1b2234]/15 opacity-70 hover:opacity-100 hover:border-[#0090e7]"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-white bg-black/60 px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}

                {/* Quick Add Button in Thumbnail Track */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-[4/5] w-20 shrink-0 rounded-xl border-2 border-dashed border-[#f25c05]/50 bg-[#eae3d5] hover:bg-[#f25c05]/10 text-[#f25c05] flex flex-col items-center justify-center gap-1 transition-all group"
                  title="Upload image"
                >
                  <Plus className="h-5 w-5 group-hover:scale-125 transition-transform" />
                  <span className="text-[9px] font-mono font-bold uppercase">Add Photo</span>
                </button>
              </div>
            </div>

            {/* Drag & Drop Box */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="p-5 rounded-2xl border-2 border-dashed border-[#0090e7]/40 bg-[#eae3d5]/60 hover:bg-[#eae3d5] hover:border-[#0090e7] cursor-pointer transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0090e7]/10 text-[#0090e7] border border-[#0090e7]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0090e7] group-hover:text-white transition-colors">
                <Upload className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-display font-bold text-[#1b2234]">
                  Drag & Drop or Click to Upload Your Work
                </span>
                <span className="text-[11px] text-[#47536e]">
                  Supports JPG, PNG, WEBP. Automatically rendered in 4:5 ratio.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="max-w-2xl max-h-[85vh] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img
              src={lightboxImage}
              alt="Fullscreen Work Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
