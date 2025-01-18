import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { admissionsInfo, images } from "../../data.js";
import { useMediaQuery } from "react-responsive";

export default function ApplicationProcess() {
  
  const isMobileOrTablet = useMediaQuery({ maxWidth: 767 });

  return (
    <motion.section
      className="py-20 px-6 lg:px-8 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
        Application Process
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-x-12 sm:space-y-0">
        {admissionsInfo.process.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <i className={`fas fa-${step.icon} text-2xl`} />
            </div>

            <p className="text-lg font-semibold text-center mt-2">{step.text}</p>

            {index < admissionsInfo.process.length - 1 && (
              <div className="text-3xl text-blue-600 mt-4">
                <i
                  className={`fas fa-arrow-${
                    isMobileOrTablet ? "down" : "right"
                  } sm:fa-arrow-right md:fa-arrow-right lg:fa-arrow-right`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
