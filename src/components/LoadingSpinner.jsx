import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <motion.div
        className="border-4 border-t-black border-b-brown border-l-champagne border-r-black rounded-full w-12 h-12"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
