import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { testimonials, images } from "../../data.js";

export default function TestimonialsSection() {
  return (
    <div>
      <section className="py-20">
        <div className="px-6 lg:px-8 md:px-6">
          <h2 className="text-3xl md:text-4xl text-blue-600 text-center font-bold mb-10">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-blue-700">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
