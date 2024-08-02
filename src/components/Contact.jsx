import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ContactImage from "../assets/prism.png";
import ContactForm from "./ContactForm";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact(props) {
  const { setShowPopUp, setPopUpMessage } = props;
  const contactRef = useRef(null);

  const scrollYProgress = useScroll({
    target: contactRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  return (
    <motion.section
      transition={{
        staggerChildren: 0.25,
      }}
      ref={contactRef}
      id="contact"
      className="section relative w-full overflow-clip px-2 flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-2"
        name="DM US NOW"
      />
      <motion.div className="flex flex-col lg:flex-row md:flex-row">
        <motion.div className="w-full lg:w-1/2 md:w-1/2  text-justify flex flex-col gap-10 justify-center text-3xl">
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <ContactForm
              setShowPopUp={setShowPopUp}
              setPopUpMessage={setPopUpMessage}
            />
          </motion.div>
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="w-full flex flex-col gap-6 text-xl"
          >
            <p>info@marketwavesmedia.com</p>
            <ul className="flex w-full h-auto justify-start gap-5">
              <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Facebook />
              </motion.li>
              <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Twitter />
              </motion.li>
              <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Linkedin />
              </motion.li>
              <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Instagram />
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="hidden lg:block md:block w-full lg:w-1/2 md:w-1/2">
          <motion.img
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="grayscale "
            src={ContactImage}
            alt="robot"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
