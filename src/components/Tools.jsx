import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";

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
    { src: "src/assets/html-logo.png", alt: "Logo company 1" },
    { src: "src/assets/css-logo.png", alt: "Logo company 2" },
    { src: "src/assets/js-logo.png", alt: "Logo company 3" },
    { src: "src/assets/next-logo.png", alt: "Logo company 4" },
    { src: "src/assets/react-logo.png", alt: "Logo company 5" },
    { src: "src/assets/figma-logo.png", alt: "Logo company 5" },
    { src: "src/assets/webflow-logo.png", alt: "Logo company 6" },
    { src: "src/assets/zapier-logo.png", alt: "Logo company 7" },
    { src: "src/assets/botpress-logo.png", alt: "Logo company 7" },
    { src: "src/assets/make-logo.png", alt: "Logo company 7" },
    { src: "src/assets/framer-logo.png", alt: "Logo company 7" },
  ];
  return (
    <motion.section
      
      transition={{
        staggerChildren: 0.25,
      }}
      ref={toolRef}
      id="partners"
      className="section relative w-full flex flex-col px-2"
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

      <motion.div className=" w-full flex justify-center flex-wrap text-3xl">
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
                className="inline-block whitespace-nowrap px-6 h-[100px] lg:h-[120px] md:h-[110px] p-4"
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