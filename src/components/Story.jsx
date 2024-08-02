import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StoryImage from "../assets/story-image.png";
import SectionTitle from "./SectionTitle";

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
      className="section w-full h-auto min-h-screen overflow-clip flex flex-col relative"
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
        <div className="flex flex-col lg:flex-row">
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2"
          >
            <img className="scale-x-[-1]" src={StoryImage} alt="robot" />
          </motion.div>
          <motion.div
            style={{ opacity, y }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2 text-justify flex flex-col gap-6 justify-center text-3xl pr-0 lg:pr-4 md:pr-2"
          >
            <p className="font-bold text-center lg:text-justify">
              Lame online presence? We fix that.
            </p>
            <p className="px-4 lg:px-0">
              As digital experts with years of experience, we craft innovative
              strategies & designs. And targeted campaigns deliver results. We
              collaborate, not dictate. We unlock your brand's story & goals,
              then build a plan to make you shine online.
            </p>
            <p className="font-bold text-center lg:text-justify">
              Ready to ignite? Let's go!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
