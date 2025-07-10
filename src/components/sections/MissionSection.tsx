import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const values = [
    {
      title: "Client-Centered Approach",
      description: "We listen, understand, and translate your vision into reality with personalized attention to every detail."
    },
    {
      title: "Quality Craftsmanship",
      description: "We partner with skilled artisans and use premium materials to ensure lasting beauty and functionality."
    },
    {
      title: "Timeless Design",
      description: "We create spaces that transcend trends, focusing on enduring elegance and personal style."
    },
    {
      title: "Collaborative Process",
      description: "We work closely with you throughout the journey, ensuring transparency and satisfaction at every step."
    }
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Our Mission
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            To create thoughtfully designed interiors that enhance the way people live, work, 
            and connect with their spaces. We are committed to delivering exceptional design 
            solutions that reflect our clients' unique personalities while maintaining the 
            highest standards of quality, sustainability, and innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light mb-6">
              Our Commitment
            </h3>
            <p className="text-gray-600 italic">
              "Every space has the potential to inspire. Our mission is to unlock that 
              potential and create environments where life's most meaningful moments unfold."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection;
