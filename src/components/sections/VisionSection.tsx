import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
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

  return (
    <motion.section
      className="py-20 container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-4xl mx-auto text-center" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-light mb-8">
          Our Vision
        </h2>
        
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          To be the leading interior design firm that transforms ordinary spaces into 
          extraordinary experiences, where every design tells a unique story and reflects 
          the personality and dreams of those who inhabit it.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-xl font-medium mb-3">Innovation</h3>
          <p className="text-gray-600">
            Pioneering creative solutions that push the boundaries of traditional design
          </p>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-xl font-medium mb-3">Sustainability</h3>
          <p className="text-gray-600">
            Creating beautiful spaces while respecting our environment and future generations
          </p>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💫</span>
          </div>
          <h3 className="text-xl font-medium mb-3">Excellence</h3>
          <p className="text-gray-600">
            Delivering exceptional quality in every project, no matter the size or scope
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VisionSection;
