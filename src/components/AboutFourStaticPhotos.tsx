import React, { useState } from "react";
import { ZoomIn, Trash2, X } from "lucide-react";

export interface StaticPhoto {
  id: string;
  url: string;
  title?: string;
  subtitle?: string;
  isUserUploaded?: boolean;
}

const INITIAL_4_STATIC_PHOTOS: StaticPhoto[] = [
  {
    id: "photo-1",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784721434/mmt-8_hhkty5.jpg",
  },
  {
    id: "photo-2",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784721434/mmt-10_arwyc1.jpg",
  },
  {
    id: "photo-3",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784721433/mmt-9_fqwl2r.jpg",
  },
  {
    id: "photo-4",
    url: "https://res.cloudinary.com/juhfehwi/image/upload/v1784721433/mmt-11_zhcejz.jpg",
  },
];

export default function AboutFourStaticPhotos() {
  const [photos, setPhotos] = useState<StaticPhoto[]>(INITIAL_4_STATIC_PHOTOS);
  const [lightboxData, setLightboxData] = useState<StaticPhoto | null>(null);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full" id="about-4-static-photos">
      {/* 4 Static Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {photos.slice(0, 4).map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setLightboxData(photo)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-xl cursor-pointer transition-all duration-500 hover:border-[#0090e7] hover:shadow-[0_10px_30px_rgba(0,144,231,0.3)] hover:-translate-y-1 p-2 flex items-center justify-center"
          >
            <img
              src={photo.url}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Subtle Hover Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Index Badge */}
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 border border-white/20 text-[10px] font-mono font-bold text-electric-blue backdrop-blur-md">
              0{index + 1}
            </div>

            {/* Delete button if uploaded */}
            {photo.isUserUploaded && (
              <button
                onClick={(e) => handleDelete(photo.id, e)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 hover:bg-[#d81b60] text-white border border-white/20 backdrop-blur-md transition-all z-20"
                title="Delete Photo"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}

            {/* Zoom Icon Button */}
            <div className="absolute bottom-3 right-3 z-10">
              <div className="p-1.5 rounded-full bg-black/70 group-hover:bg-[#0090e7] text-white border border-white/20 backdrop-blur-md transition-all shrink-0">
                <ZoomIn className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div
          onClick={() => setLightboxData(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setLightboxData(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#d81b60] text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black cursor-default"
          >
            <img
              src={lightboxData.url}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 rounded-xl p-3 px-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-display font-medium text-white">
                  {lightboxData.title || "Metromedia Technologies Work Showcase"}
                </h4>
                {lightboxData.subtitle && (
                  <p className="text-xs font-mono text-electric-blue">
                    {lightboxData.subtitle}
                  </p>
                )}
              </div>
              <span className="text-xs font-mono text-gray-400">
                MetroMedia Technologies
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
