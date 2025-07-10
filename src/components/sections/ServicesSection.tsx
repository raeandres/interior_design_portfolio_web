import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Home,
  Building2,
  Lightbulb,
  Palette,
  Ruler,
  Users,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Design",
      subtitle: "Luxury Living Spaces",
      description:
        "Transform your home into a sanctuary of style and comfort. From intimate apartments to grand estates, we create personalized living environments that reflect your unique taste and lifestyle.",
      features: [
        "Space Planning",
        "Custom Furniture",
        "Color Consultation",
        "Lighting Design",
      ],
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      icon: Home,
    },
    {
      title: "Commercial Design",
      subtitle: "Professional Environments",
      description:
        "Elevate your business with sophisticated commercial interiors that inspire productivity and impress clients. We design spaces that embody your brand identity and enhance workplace culture.",
      features: [
        "Office Planning",
        "Brand Integration",
        "Ergonomic Solutions",
        "Reception Areas",
      ],
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      icon: Building2,
    },
    {
      title: "Design Consultation",
      subtitle: "Expert Guidance",
      description:
        "Get professional insights and direction for your design project. Our comprehensive consultations provide you with the expertise needed to make informed decisions about your space.",
      features: [
        "Design Strategy",
        "Material Selection",
        "Budget Planning",
        "Project Timeline",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      icon: Lightbulb,
    },
  ];

  const additionalServices = [
    {
      title: "Color & Material Consultation",
      description: "Expert guidance on color palettes and material selection",
      icon: Palette,
    },
    {
      title: "Space Planning",
      description: "Optimize your layout for maximum functionality and flow",
      icon: Ruler,
    },
    {
      title: "Project Management",
      description: "Full-service coordination from concept to completion",
      icon: Users,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, SECTOR D delivers exceptional interior
            design solutions that transform spaces into extraordinary
            experiences.
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div
          className="space-y-24 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                  <motion.div
                    className="relative group overflow-hidden rounded-2xl shadow-2xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-500 italic">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300"
                  >
                    <Link
                      to="/services"
                      className="flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Additional Services
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive design solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
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
                  <h4 className="text-xl font-medium mb-3 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a design that exceeds your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full text-lg"
            >
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
