import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroContent, images } from "../../data.js";

export default function Hero() {
  return (
    <div>
      <section
        style={{
          height: "600px",
          overflowY: "hidden",
        }}
        className="relative bg-white text-blue-600"
      >
        {/* Video Background */}

        <div className="w-full h-full lg:space-x-20 px-6 lg:px-8 md:px-6 flex flex-col lg:flex-row relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:w-1/2 h-full"
          >
            <img
              className="w-full h-auto object-contain transform scale-x-[-1]"
              src={images.image1}
              alt="student"
            />
          </motion.div>

          <div className="w-full lg:w-full h-full flex flex-col justify-center items-center text-center lg:text-left  pb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[4rem] md:text-6xl lg:text-8xl font-bold leading-none mb-4"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl mb-10"
            >
              {heroContent.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:self-start"
            >
              <Link
                to={heroContent.ctaLink}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300 mb-4"
              >
                {heroContent.ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
