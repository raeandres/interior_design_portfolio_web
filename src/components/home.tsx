import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import {
  AboutSection,
  ServicesSection,
  GallerySection,
  ContactSection,
  TestimonialsSection,
} from "./sections";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-3xl font-light tracking-wider text-gray-900 hover:text-gray-700 transition-colors duration-300"
            >
              SECTOR D
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="flex space-x-12">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="relative text-gray-700 hover:text-gray-900 transition-colors duration-300 text-lg font-light group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100/50"
            >
              <motion.ul
                className="container mx-auto px-6 py-6 space-y-1"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={link.path}
                      className="block px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 text-lg font-light rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section with Carousel */}
      <section className="pt-16">
        <HeroCarousel />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="py-16">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-3xl font-light mb-6 tracking-wider">
                    SECTOR D
                  </h3>
                  <div className="w-16 h-0.5 bg-white mb-6"></div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                    Transforming spaces into extraordinary experiences through
                    thoughtful design, exceptional craftsmanship, and
                    personalized service.
                  </p>
                  <div className="flex space-x-6">
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                      Portfolio
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-xl font-light mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-light group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-xl font-light mb-6">Contact</h4>
                <address className="text-gray-300 not-italic space-y-3">
                  <div className="text-lg font-light">
                    <p>123 Design Avenue</p>
                    <p>New York, NY 10001</p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <p className="text-gray-400">
                      <span className="text-white">Email:</span>{" "}
                      info@sectord.com
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white">Phone:</span> (555) 123-4567
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                      Get In Touch
                    </Link>
                  </div>
                </address>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="border-t border-gray-800 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} SECTOR D. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
