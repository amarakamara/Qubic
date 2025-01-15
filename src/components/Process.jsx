import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProcessImage from "../assets/process-image.png";
import ProcessContent from "./ProcessContent";

export default function Process() {
  const processRef = useRef(null);

  const scrollYProgress = useScroll({
    target: processRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  const process = [
    {
      number: 1,
      title: "Understanding Your Needs",
      content:
        "We begin by understanding your business operations and challenges, identifying areas where AI can enhance efficiency and customer care.",
    },
    {
      number: 2,
      title: "Custom AI Development",
      content:
        "Our team designs and develops AI-powered solutions tailored to your specific requirements, ensuring seamless integration with your existing systems.",
    },
    {
      number: 3,
      title: "Deployment & Optimization",
      content:
        "We implement your AI solution with minimal disruption, monitor its performance, and optimize it to adapt to your evolving needs.",
    },
  ];

  return (
    <motion.section
      id="process"
      ref={processRef}
      transition={{
        staggerChildren: 0.25,
      }}
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
        name="PROCESS"
      />
      <motion.div className="flex flex-col lg:flex-row py-14 lg:py-24">
        <motion.div className="w-full lg:w-1/2 flex flex-row justify-center items-center mb-10 lg:mb-0">
          <motion.img
            style={{ opacity, y }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut",
            }}
            src={ProcessImage}
            alt="robot"
            className="object-contain w-80 lg:w-96"
          />
        </motion.div>
        <motion.div
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2  text-justify flex flex-col gap-6 justify-center text-3xl"
        >
          {process.map((item, index) => {
            return (
              <ProcessContent
                key={index}
                number={item.number}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
