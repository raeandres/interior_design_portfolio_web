import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light text-white">
            Interior Design Solutions
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/vision"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Vision
            </Link>
            <Link
              to="/mission"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Mission
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Quick Actions */}
      <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/gallery">View Gallery</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-white/10 text-white border-white hover:bg-white hover:text-black"
        >
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
