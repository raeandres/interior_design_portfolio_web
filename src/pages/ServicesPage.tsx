import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Home,
  Building2,
  Lightbulb,
  Palette,
  Ruler,
  Users,
  CheckCircle,
  Clock,
  Award,
  Heart,
} from "lucide-react";

const ServicesPage = () => {
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
        duration: 0.6,
      },
    },
  };

  const mainServices = [
    {
      number: "01",
      title: "Full Interior Design",
      subtitle: "New builds, renovations, or empty spaces",
      description:
        "We handle the complete design process from concept development to final rendered design perspectives. Every decision is made with care to ensure your space is functional, balanced, and visually cohesive.",
      features: [
        "Complete design process from concept to completion",
        "Concept development and mood boards",
        "3D renderings and design perspectives",
        "Material and furniture selection",
        "Project management and coordination",
        "Final styling and installation",
      ],
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      icon: Home,
      bestFor: "New builds, renovations, or empty spaces",
    },
    {
      number: "02",
      title: "Interior Styling and Refresh",
      subtitle: "Existing spaces that need refinement",
      description:
        "We work with what you have and enhance it, replacing or layering in furniture, textiles, lighting, and accessories to elevate the mood and overall flow. Perfect for homeowners or hosts who want a soft transformation.",
      features: [
        "Work with existing elements and enhance them",
        "Furniture replacement and layering",
        "Textile and lighting updates",
        "Accessory curation and placement",
        "Mood and flow enhancement",
        "Soft transformation approach",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      icon: Palette,
      bestFor: "Existing spaces that need refinement",
    },
    {
      number: "03",
      title: "Short-Term Rental Design",
      subtitle: "Airbnb or boutique stay owners",
      description:
        "We design beautiful, guest-friendly spaces that stand out in listings while remaining functional and easy to maintain. We combine hospitality strategy with timeless design to help your property perform visually and financially.",
      features: [
        "Guest-friendly and functional design",
        "Listing-worthy visual appeal",
        "Easy maintenance considerations",
        "Hospitality strategy integration",
        "Timeless design approach",
        "Visual and financial performance optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      icon: Building2,
      bestFor: "Airbnb or boutique stay owners",
    },
    {
      number: "04",
      title: "Creative Direction and Visual Strategy",
      subtitle: "Developers, creatives, and lifestyle brands",
      description:
        "We translate your brand values into spatial experiences. From moodboards to design guidelines, we build a visual direction that aligns with your goals, audience, and brand personality.",
      features: [
        "Brand values translation into spatial experiences",
        "Moodboard development",
        "Design guidelines creation",
        "Visual direction alignment",
        "Audience and goal consideration",
        "Brand personality integration",
      ],
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      icon: Lightbulb,
      bestFor: "Developers, creatives, and lifestyle brands",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We begin with an in-depth consultation to understand your vision, lifestyle, and project goals.",
      icon: Heart,
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our team creates detailed concepts, mood boards, and 3D renderings to bring your vision to life.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Development",
      description:
        "We source materials, coordinate with contractors, and manage every aspect of the project timeline.",
      icon: Ruler,
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Final installation, styling, and reveal of your transformed space, ready for you to enjoy.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-2xl font-light tracking-wider">
            SECTOR D
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 text-gray-900"
            variants={itemVariants}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="w-32 h-0.5 bg-gray-900 mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We help clients create calm, well-designed spaces that feel
              intentional without being over designed.
            </p>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Every project is a collaboration rooted in clarity, function, and
              quiet sophistication.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Comprehensive Design Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each service is carefully crafted to meet your unique needs and
              exceed your expectations
            </p>
          </motion.div>

          <div className="space-y-32">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Image */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <motion.div
                      className="relative group overflow-hidden rounded-3xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-gray-900 font-medium">
                          {service.price}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-8 ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start space-x-6">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-light text-gray-900">
                              {service.number}
                            </span>
                          </div>
                          <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <div className="mb-4">
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                              Best for:
                            </span>
                            <p className="text-lg text-gray-700 mt-1">
                              {service.bestFor}
                            </p>
                          </div>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-gray-900 mb-4">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg"
                    >
                      <Link
                        to="/contact"
                        className="flex items-center space-x-2"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and a
              seamless experience from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <IconComponent className="w-12 h-12 text-gray-900" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Why Choose SECTOR D
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Proven Excellence",
                description:
                  "Over a decade of creating award-winning interior spaces that exceed client expectations.",
                icon: Award,
              },
              {
                title: "Timely Delivery",
                description:
                  "We respect your time and consistently deliver projects on schedule without compromising quality.",
                icon: Clock,
              },
              {
                title: "Personalized Approach",
                description:
                  "Every project is unique. We tailor our services to match your specific vision and requirements.",
                icon: Heart,
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Begin Your Design Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let's create something extraordinary together. Contact us today to
              discuss your project and discover how SECTOR D can transform your
              space.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full text-lg"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg"
              >
                <Link to="/gallery">View Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
