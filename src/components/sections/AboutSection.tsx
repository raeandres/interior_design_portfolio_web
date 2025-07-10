import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const AboutSection = () => {
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
        SECTOR D creates thoughtful, elegant spaces that balance aesthetics with
        functionality. Our designs reflect your unique style while enhancing how
        you live and work.
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
  );
};

export default AboutSection;
