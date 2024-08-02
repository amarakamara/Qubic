import React from "react";
import { motion } from "framer-motion";
import WhiteLogo from "../assets/whitelogo.png";

export default function Footer() {
  return (
    <section
      id="footer"
      className="w-full px-2 py-20 mt-4 lg:mt-0 md:mt-0 bg-black text-white flex flex-col lg:flex-row md:flex-col gap-8"
    >
      <div className="w-full lg:w-1/2 md:w-full ">
        <img className="w-40 mb-4 " src={WhiteLogo} alt="logo" />
        <p className="pr-0 lg:pr-20 md:pr-14 text-justify">
          We're a squad of young, innovative, and fearless creators ready to
          supercharge your business with our top-notch web design and
          development services! We're all about crafting digital experiences
          that drive results and leave a lasting impact. Our team is obsessed
          with staying ahead of the curve and pushing boundaries to deliver
          exceptional solutions that meet your unique needs.
        </p>
      </div>
      <div className="w-full lg:w-1/2 md:w-full flex flex-col lg:flex-row md:flex-row gap-4">
        <div className="w-full">
          <h3 className=" mb-4 text-2xl font-black">Quick Links</h3>
          <ul className="">
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Home
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              About
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Services
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Portfolio
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Contact
            </motion.li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className=" mb-4 text-2xl font-black">Services</h3>
          <ul className="">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Landing Page Design</li>
            <li>SEO</li>
            <li>Domain Transfer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
