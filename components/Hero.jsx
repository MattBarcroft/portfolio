import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  // Array of images for the carousel
  const images = [
    {
      src: "/images/doggo.jpg",
      alt: "Doggo",
      credit: "Background photo courtesy of Jon Pemberton 💪",
    },
    {
      src: "/images/doggo2.jpg",
      alt: "Doggo",
      credit: "Background photo courtesy of Jon Pemberton 💪",
    },
    {
      src: "/images/doggo3.jpg",
      alt: "Doggo",
      credit: "Background photo courtesy of Jon Pemberton 💪",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-cover bg-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-6 animate-fade-in">
            MATTHEW BARCROFT
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide animate-slide-up">
            Hello and welcome to my portfolio! Please feel free to take a look
            around and download my CV.
            <br></br>
          </p>
        </div>
        <div className="flex items-center space-x-4 z-10 relative justify-center">
          <button
            onClick={() => window.open("./MatthewBarcroftCV.pdf")}
            className="font-bold rounded-lg text-xl w-80 h-16 bg-[#434343] text-[#ffffff] justify-center"
          >
            DOWNLOAD CV
          </button>
        </div>

        <div className="flex justify-center relative z-10 pt-8">
          <a
            href="#work"
            className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm tracking-wide">VIEW WORK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Carousel Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover  transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
            style={{ zIndex: "0" }}
          />
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/30 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/30 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white shadow-lg scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Credit */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 z-10">
        {currentImage.credit}
      </div>
    </section>
  );
};

export default Hero;
