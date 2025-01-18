import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { aboutSnippet, images } from "../../data.js";

export default function AboutSnippetSection() {
  return (
    <div>
      {/* About Snippet */}
      <section className="bg-blue-50 text-blue-600 py-20 px-6 lg:px-8 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={aboutSnippet.image}
              alt="About Us"
              className="w-full lg:w-full h-auto mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-8 lg:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {aboutSnippet.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl mb-6 leading-relaxed text-black"
            >
              {aboutSnippet.content}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={aboutSnippet.link}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
