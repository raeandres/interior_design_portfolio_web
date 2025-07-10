import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

interface HeroCarouselProps {
  images?: string[];
  autoPlayInterval?: number;
}

const HeroCarousel = ({
  images = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80",
  ],
  autoPlayInterval = 6000,
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

  const heroContent = [
    {
      title: "Luxury Redefined",
      subtitle: "Where elegance meets functionality",
      description:
        "Creating sophisticated spaces that reflect your unique vision and elevate your everyday experience.",
    },
    {
      title: "Timeless Design",
      subtitle: "Crafted for generations",
      description:
        "Our designs transcend trends, focusing on enduring beauty and personalized luxury that stands the test of time.",
    },
    {
      title: "Bespoke Interiors",
      subtitle: "Tailored to perfection",
      description:
        "Every detail is carefully curated to tell your story and create environments that inspire and delight.",
    },
    {
      title: "Exceptional Craftsmanship",
      subtitle: "Uncompromising quality",
      description:
        "We partner with master artisans and use only the finest materials to bring your vision to life.",
    },
    {
      title: "Transformative Spaces",
      subtitle: "Beyond expectations",
      description:
        "Discover how thoughtful design can transform not just your space, but the way you live and feel within it.",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main carousel */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wide">
              SECTOR D
            </h1>
            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-light mb-4 text-white"
          >
            {heroContent[currentIndex].title}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-6 italic"
          >
            {heroContent[currentIndex].subtitle}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {heroContent[currentIndex].description}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Link to="/gallery">View Portfolio</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 z-20 rounded-full h-14 w-14 border border-white/20 transition-all duration-300 hover:scale-110"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 z-20 rounded-full h-14 w-14 border border-white/20 transition-all duration-300 hover:scale-110"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Indicator dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              currentIndex === index
                ? "w-12 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
