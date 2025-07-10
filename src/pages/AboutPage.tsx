import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VisionSection, MissionSection } from "../components/sections";
import { Button } from "../components/ui/button";

const AboutPage = () => {
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
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-2xl font-light tracking-wider">
            SECTOR D
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-20 container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            About SECTOR D
          </h1>

          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            SECTOR D creates thoughtful, elegant spaces that balance aesthetics
            with functionality. Our designs reflect your unique style while
            enhancing how you live and work.
          </p>

          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <Button asChild>
              <Link to="/gallery">View Our Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-light mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded with a passion for transforming spaces into
                  extraordinary experiences, SECTOR D has been at the forefront
                  of innovative design for over a decade. Our journey began with
                  a simple belief: every space has the potential to inspire.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to push the boundaries of traditional
                  design, creating spaces that not only look beautiful but also
                  enhance the way people live, work, and connect with their
                  environments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
                  alt="Interior Design Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Values Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experience",
                description:
                  "Over 10 years of creating exceptional interior spaces",
                icon: "🏆",
              },
              {
                title: "Personalized Service",
                description:
                  "Every project is tailored to your unique vision and needs",
                icon: "👥",
              },
              {
                title: "Quality Assurance",
                description:
                  "We use only the finest materials and work with trusted craftsmen",
                icon: "✨",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your vision and create a space that truly reflects who
            you are.
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
    </div>
  );
};

export default AboutPage;
