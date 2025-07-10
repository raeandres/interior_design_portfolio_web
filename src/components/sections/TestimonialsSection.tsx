import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "SECTOR D transformed our home into a beautiful, functional space that perfectly reflects our style.",
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
        "Working with SECTOR D was a seamless experience from start to finish. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Real Estate Developer",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
