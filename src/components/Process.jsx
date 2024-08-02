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
      title: "Discovery & Strategy",
      content:
        "We listen, ask questions, and develop a customized plan that defines project scope, timelines, and deliverables.",
    },
    {
      number: 2,
      title: "Design & Development",
      content:
        "Our designers and developers craft intuitive, visually stunning experiences that resonate with your audience.",
    },
    {
      number: 3,
      title: "Launch & Evolution",
      content:
        "We deploy your solution, ensure a smooth transition, and to continuously improve your digital presence.",
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
      <motion.div className="flex flex-col lg:flex-row">
        <motion.div className="w-full lg:w-1/2">
          <motion.img
            style={{ opacity, y }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut",
            }}
            src={ProcessImage}
            alt="robot"
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
