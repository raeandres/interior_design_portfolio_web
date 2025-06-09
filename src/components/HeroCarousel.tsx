import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";

interface HeroCarouselProps {
  images?: string[];
  autoPlayInterval?: number;
}

const HeroCarousel = ({
  images = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
    "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=1200&q=80",
  ],
  autoPlayInterval = 5000,
}: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset auto-play timer when manually changing slides
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide, autoPlayInterval, isAutoPlaying]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-black">
      {/* Main carousel */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          Interior Design Solutions
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-center max-w-2xl"
        >
          Transforming spaces into extraordinary experiences
        </motion.p>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-20 rounded-full h-12 w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-20 rounded-full h-12 w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
