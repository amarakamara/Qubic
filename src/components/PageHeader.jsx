import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtext, bgImage }) {
  return (
    <header
      className="relative text-white py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-85"></div>

      <div className="relative container mx-auto px-6 lg:px-8 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {title}
        </motion.h1>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 px-4 md:px-20 text-lg md:text-xl opacity-90"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </header>
  );
}
