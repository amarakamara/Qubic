import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StoryImage from "../assets/story-image.jpeg";
import SectionTitle from "./SectionTitle";
import ImageFrame from "./ImageFrame";
export default function Story() {
  const storyRef = useRef(null);

  const scrollYProgress = useScroll({
    target: storyRef,
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
      ref={storyRef}
      id="story"
      className="section my-20 px-6 w-full h-auto min-h-screen overflow-clip flex flex-col relative"
    >
      <div>
        <SectionTitle
          style={{ opacity, y }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          mb="mb-10"
          name="OUR STORY"
        />
        <div className="flex flex-col lg:flex-row justify-between py-14 lg:py-24">
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2 text-center flex flex-row justify-center items-center"
          >
            <ImageFrame imageSrc={StoryImage} altText="Intelligent Shape" />
          </motion.div>
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="w-full  lg:w-1/2 text-justify flex flex-col gap-6 px-0 lg:px-20 justify-center items-center text-3xl"
          >
            <p className="font-bold self-center lg:self-start">
              Starting Small, Thinking Big:
            </p>
            <p>
              At QubicPro AI, we’re passionate about empowering service-based
              businesses with cutting-edge AI solutions. Our mission is to
              streamline operations, enhance customer experiences, and drive
              efficiency for your business.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
