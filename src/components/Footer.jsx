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
          We are a dynamic team of forward-thinking innovators, passionate about
          revolutionizing your business through cutting-edge AI automation
          solutions. Specializing in AI voice agents, chatbots, and expert
          consultation, we help service-based businesses streamline their
          customer care processes and enhance efficiency. Our mission is to
          deliver smart, tailored automation that not only meets your unique
          needs but also drives tangible results and sets your business apart.
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
              Contact
            </motion.li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className=" mb-4 text-2xl font-black">Services</h3>
          <ul className="">
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              AI Voice Agents
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              AI Chatbots
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              AI Automation Consulting
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Custom Automation Workflows
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              Customer Care Automation
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
