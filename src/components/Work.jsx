import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import WorkContent from "./WorkContent";
import web1Image from "../assets/web-1.jpg";
import web2Image from "../assets/web-2.jpg";
import web3Image from "../assets/web-3.png";

export default function Work() {
  const workRef = useRef(null);

  const scrollYProgress = useScroll({
    target: workRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);
  const works = [
    {
      title: "Website XYZ1",
      link: "",
      description:
        "This is a placeholder. We are working to update our real projects soon",
      image: web1Image,
    },
    {
      title: "Website XYZ2",
      link: "",
      description:
        "This is a placeholder. We are working to update our real projects soon",
      image: web2Image,
    },
    {
      title: "Website XYZ3",
      link: "",
      description:
        "This is a placeholder. We are working to update our real projects soon",
      image: web3Image,
    },
    {
      title: "Website XYZ4",
      link: "",
      description:
        "This is a placeholder. We are working to update our real projects soon",
      image: web1Image,
    },
  ];
  return (
    <motion.section
      transition={{
        staggerChildren: 0.25,
      }}
      ref={workRef}
      id="work"
      className="section relative w-full overflow-clip px-2 flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-20"
        name="OUR WORK"
      />
      <motion.div
        style={{ opacity, y }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="w-full flex nowrap lg:flex-wrap flex-col lg:flex-row border border-[0.5] border-black"
      >
        {works.map((item, index) => {
          return (
            <WorkContent
              key={index}
              title={item.title}
              link={item.link}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}
