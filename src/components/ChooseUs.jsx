import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ChooseImg from "../assets/choose-image.png";

export default function ChooseUs() {
  const chooseRef = useRef(null);

  const scrollYProgress = useScroll({
    target: chooseRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [100, 0]);
  return (
    <motion.section
      transition={{
        staggerChildren: 0.25,
      }}
      ref={chooseRef}
      className="section relative w-full overflow-clip px-2 flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="CHOOSE US"
      />
      <div className=" flex flex-col">
        <motion.div className="w-full flex justify-center text-center -mb-20 lg:-mb-52 md:-mb-32">
          <motion.h2
            style={{ opacity, y }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="font-black text-[2.5rem] md:text-[5.7rem]  lg:text-[6rem]"
          >
            RELAX. INSTRUCT. WE EXECUTE.
          </motion.h2>
        </motion.div>
        <motion.div className="w-full flex justify-center overflow-hidden px-3 md:px-10 lg:px-0">
          <motion.img
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="grayscale scale-125 lg:scale-100"
            src={ChooseImg}
            alt="man"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
