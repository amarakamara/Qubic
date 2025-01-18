import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gallery, images } from "../data"; // gallery object with images
import PageHeader from "../components/PageHeader";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = Object.values(gallery);

  return (
    <>
      <Navbar />
      <PageHeader
        title="GALLERY"
        subtext="Explore a visual journey through the life at Seku I Sheriff School. From vibrant student activities to memorable events, our gallery showcases the spirit of our community."
        bgImage={images.image4}
      />

      <div className="px-6 lg:px-8 md:px-6 py-8 text-center">
        <motion.h1
          className="text-4xl font-bold mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A Glimpse into Life at Seku I Sheriff
        </motion.h1>

        <motion.p
          className="text-lg mb-8 px-4 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enjoy browsing through images that capture the vibrant spirit and
          activities of Seku I Sheriff School.
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <motion.img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GalleryPage;
