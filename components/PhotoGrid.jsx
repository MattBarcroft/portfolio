import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import mockPhotos from "../data/photos";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading photos
    const loadPhotos = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Shuffle the photos for random layout
      const shuffledPhotos = [...mockPhotos].sort(() => Math.random() - 0.5);
      setPhotos(shuffledPhotos);
      setLoading(false);
    };

    loadPhotos();
  }, []);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length;
    }

    setSelectedPhoto(photos[newIndex]);
  };

  const getRandomHeight = () => {
    const heights = [250, 300, 350, 400, 450, 500];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  if (loading) {
    return (
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
              PHOTOGRAPHY
            </h2>
            <div className="w-16 h-px bg-white"></div>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
              PHOTOGRAPHY
            </h2>
            <div className="w-16 h-px bg-white"></div>
            <p className="text-gray-400 mt-6 max-w-2xl">
              A collection of my favorite photos from various adventures
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg bg-gray-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl break-inside-avoid mb-4"
                style={{ height: `${getRandomHeight()}px` }}
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300">
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-start"></div>

                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1 drop-shadow-lg">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Photo Details */}
            <div className="mt-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {selectedPhoto.description}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {selectedPhoto.location} • {selectedPhoto.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;
