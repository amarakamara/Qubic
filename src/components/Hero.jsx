import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import HeroImage from "../assets/hero-image.png";
import Marquee from "./Marquee";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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

export default function Hero() {
  return (
    <motion.section
      variants={sectionContainerVariant}
      initial="hidden"
      animate="show"
      id="home"
      className="hero mt-[30px] py-10 relative w-full overflow-hidden"
    >
      <motion.div
        variants={itemsVariants}
        className="w-full flex justify-between"
      >
        <p className="p-1 w-2/3 lg:w-1/3 md:w-1/2 font-thin">
          Congratulations, you’re now interacting with an agency that will
          change the way customers see your business.
        </p>
      </motion.div>
      <motion.div variants={itemsVariants} className="w-full flex flex-col">
        <h1 className="header-1 font-black qubic  lg:whitespace-nowrap leading-none ">
          QUBIC
        </h1>
        <h1 className="header-2 font-black studios  leading-none">STUDIO</h1>
      </motion.div>
      <motion.div
        variants={itemsVariants}
        className="w-full flex justify-between relative bottom-0 mt-20 z-20"
      >
        <p className="p-2 w-1/2 lg:w-1/3 md:w-1/2 font-thin">
          Great services that would take your business to another height. Don’t
          miss out! Start growing with us.
        </p>
        <div className="w-auto h-auto z-20">
          <ul className="flex w-full h-auto justify-end gap-5 bg-glossy p-2 rounded ">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
