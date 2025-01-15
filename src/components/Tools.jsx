import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import zapierLogo from "../assets/zapier-logo.png";
import botpressLogo from "../assets/botpress-logo.png";
import makeLogo from "../assets/make-logo.png";
import vapiLogo from "../assets/vapi-logo.jpg";
import openAiLogo from "../assets/openai-logo.png";
import retellLogo from "../assets/retell-logo.png";
import pythonLogo from "../assets/python-logo.png";

export default function Tools() {
  const toolRef = useRef(null);

  const scrollYProgress = useScroll({
    target: toolRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  const logos = [
    { src: pythonLogo, alt: "python logo" },
    { src: retellLogo, alt: "retell ai logo" },
    { src: vapiLogo, alt: "vapi logo" },
    { src: openAiLogo, alt: "open ai logo" },
    { src: zapierLogo, alt: "zapier logo" },
    { src: botpressLogo, alt: "botpress logo" },
    { src: makeLogo, alt: "make.com logo" },
  ];
  return (
    <motion.section
      transition={{
        staggerChildren: 0.25,
      }}
      ref={toolRef}
      id="partners"
      className="section relative w-full flex flex-col px-2 py-20"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="TOOLS"
      />

      <motion.div className="w-full flex justify-center flex-wrap text-3xl">
        {logos.map((image, index) => {
          return (
            <motion.div
              key={index}
              className="w-1/3 lg:w-1/4 md:w-1/3 flex justify-center"
            >
              <motion.img
                style={{ opacity, y }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="inline-block px-6 h-[100px] lg:h-[120px] md:h-[110px] p-4 object-contain"
                src={image.src}
                alt={image.alt}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
