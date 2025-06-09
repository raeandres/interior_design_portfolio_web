import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../components/ui/button";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-wider">
            Interior Design Solutions
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-gray-600 hover:text-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Carousel */}
      <section className="pt-16">
        <HeroCarousel />
      </section>

      {/* Introduction Section */}
      <motion.section
        className="py-20 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          variants={itemVariants}
        >
          Transforming Spaces Into Experiences
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-center mb-12"
          variants={itemVariants}
        >
          Interior Design Solutions creates thoughtful, elegant spaces that
          balance aesthetics with functionality. Our designs reflect your unique
          style while enhancing how you live and work.
        </motion.p>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <Button asChild className="mr-4">
            <Link to="/gallery">View Our Work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Design",
                description:
                  "Creating beautiful, functional living spaces tailored to your lifestyle.",
                image:
                  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
              },
              {
                title: "Commercial Design",
                description:
                  "Designing productive workspaces that reflect your brand identity.",
                image:
                  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
              },
              {
                title: "Consultation",
                description:
                  "Expert advice on colors, materials, and layouts for your space.",
                image:
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" asChild size="sm">
                  <Link to="/services">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Modern Apartment Renovation",
              location: "New York, NY",
              image:
                "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
            },
            {
              title: "Coastal Beach House",
              location: "Malibu, CA",
              image:
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-medium">
                  {project.title}
                </h3>
                <p className="text-white/80">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/gallery">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Interior Design Solutions transformed our home into a beautiful, functional space that perfectly reflects our style.",
                author: "Sarah Johnson",
                role: "Homeowner",
              },
              {
                quote:
                  "The team's attention to detail and creative vision exceeded our expectations. Our office has never looked better.",
                author: "Michael Chen",
                role: "Business Owner",
              },
              {
                quote:
                  "Working with Interior Design Solutions was a seamless experience from start to finish. Highly recommended!",
                author: "Emily Rodriguez",
                role: "Real Estate Developer",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your vision and create a space that inspires you every
            day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">
                Interior Design Solutions
              </h3>
              <p className="text-gray-400">
                Creating beautiful spaces that inspire and delight.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Design Street</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">info@interiordesignsolutions.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Interior Design Solutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
