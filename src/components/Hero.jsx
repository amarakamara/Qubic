import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import HeroImage from "../assets/hero-image.png";
import Button from "./Button";

const sectionContainerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 1,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const itemsVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Hero(props) {
  const { setShowQuote, setShowCalendar } = props;

  const handleOpenCalendar = () => {
    setShowCalendar(true);
  };
  const handleOpenQuote = () => {
    setShowQuote(true);
  };
  return (
    <motion.section
      variants={sectionContainerVariant}
      initial="hidden"
      animate="show"
      id="home"
      className="px-4 pb-20  relative w-full overflow-hidden"
    >
      <motion.div
        variants={itemsVariants}
        className="relative w-full flex flex-col lg:flex-row items-center mt-10"
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center lg:justify-start lg:items-start  lg:relative lg:top-auto lg:left-auto lg:w-auto lg:h-auto">
          <img
            src={HeroImage}
            alt="AI Powered Service"
            className="lg:w-[40rem] lg:h-[40rem] object-cover lg:object-none opacity-20 lg:opacity-100 relative left-0"
          />
        </div>
        <div className="relative z-10 text-center lg:text-left flex-1 flex flex-col justify-center bg-opacity-80">
          <p className="py-4 font-thin mb-6 max-w-lg mx-auto lg:mx-0">
            Effortless Operations and Customer Care for Service-Based
            Businesses—Powered by AI.
          </p>
          <h1 className="text-5xl flex flex-col lg:text-6xl font-black leading-tight">
            Let AI Handle Routine Tasks—So You Can Focus on Growth
          </h1>
          <p className="py-4 font-thin my-6 max-w-lg mx-auto lg:mx-0">
            AI Solutions for Service Businesses: Streamline processes, enhance
            customer experiences, and scale effortlessly.
          </p>

          <div className="flex flex-row space-x-4 justify-center lg:justify-start">
            <Button
              onClick={handleOpenQuote}
              borderColor="border-black"
              name="Start Automating Now"
              width="w-fit"
              height="h-auto"
            />

            <Button
              onClick={handleOpenCalendar}
              borderColor="border-black"
              name="Free Consultation"
              height="h-auto"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
