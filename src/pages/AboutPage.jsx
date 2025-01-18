import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { aboutPageContent, images } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title="ABOUT OUR SCHOOL"
        subtext="Discover the rich history, values, and vision that define Seku I Sheriff School. We are committed to excellence in education and shaping future leaders."
        bgImage={images.image4}
      />
      <div className="">
        {/*MISSION SECTION*/}
        <motion.section
          className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center bg-white  py-20 px-6 lg:px-8 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images.image2}
              alt="Our Mission"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </motion.div>
          <div className="space-y-6 lg:space-y-12 text-center lg:text-left w-full h-full flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutPageContent.mission}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Division One Students */}
              <motion.div
                className="text-center p-4 bg-white rounded-md shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-4xl font-extrabold text-blue-600">120+</h3>
                <p className="text-gray-600 text-sm">Division One Students</p>
              </motion.div>

              {/* Years of Operation */}
              <motion.div
                className="text-center p-4 bg-white rounded-md shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-4xl font-extrabold text-blue-600">25+</h3>
                <p className="text-gray-600 text-sm">Years of Operation</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/*VISION SECTION */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center bg-blue-600  py-20 px-6 lg:px-8 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-white leading-relaxed">
                {aboutPageContent.vision}
              </p>
            </div>
          </div>
          <div>
            <img
              src={images.image2}
              alt="Our Mission"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </motion.section>

        {/*HISTORY*/}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center bg-blue-50 py-20 px-6 lg:px-8 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <img
              src={images.image2}
              alt="Our Mission"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Our History
              </h2>
              <p className="text-lg text-black leading-relaxed">
                {aboutPageContent.history}
              </p>
            </div>
          </div>
        </motion.section>

        {/*FACILITY Section*/}
        <motion.section
          className="px-6 lg:px-8 md:px-6 py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Our Facilities
          </h2>
          <p className="text-lg mb-8 px-20">
            Seku I Sheriff School is proud to offer state-of-the-art facilities,
            meticulously designed to foster an exceptional learning environment.
            Each space is thoughtfully created to provide students with the
            resources and opportunities needed to excel academically, socially,
            and personally:
          </p>

          {/* Grid of Facility Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutPageContent.facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />

                {/* Description always visible on mobile, with a blue background */}
                <div className="absolute bottom-0 w-full bg-blue-600 text-white py-2 px-4 rounded-b-md opacity-100 group-hover:opacity-100 transition-opacity duration-300 sm:block md:hidden">
                  <h3 className="text-xl text-nowrap font-semibold text-center">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-center">{facility.description}</p>
                </div>

                {/* Description visible on hover for large screens */}
                <div className="absolute bottom-0 w-full bg-blue-600 text-white py-2 px-4 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block sm:hidden">
                  <h3 className="text-xl text-nowrap font-semibold text-center">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-center">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
}

export default AboutPage;
