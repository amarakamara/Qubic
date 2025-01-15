import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ChooseImage1 from "../assets/choose-image1.jpg";
import ChooseImage2 from "../assets/choose-image2.jpg";
import ChooseImage3 from "../assets/choose-image3.jpg";

const reasons = [
  {
    title: "Automate Repetitive Tasks",
    content:
      "Streamline daily operations with AI solutions that handle scheduling, reminders, follow-ups, and FAQs effortlessly. By automating these tasks, your team can focus on strategic activities, improving efficiency, accuracy, and overall productivity while saving time and money.",
    image: ChooseImage3,
  },
  {
    title: "Deliver 24/7 Availability",
    content:
      "AI solutions ensure your business is always accessible. Whether managing late-night inquiries or handling peak-time call surges, AI-powered systems respond instantly and reliably. This round-the-clock service enhances customer satisfaction and ensures no opportunity is missed.",
    image: ChooseImage2,
  },
  {
    title: "Reduce Operational Costs",
    content:
      "Cut costs without compromising service quality. AI automation reduces the need for additional staff, eliminates overtime, and enables you to manage higher workloads efficiently. The result? Long-term savings and more streamlined operations.",
    image: ChooseImage1,
  },
];

export default function YourWhy() {
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
      className="section relative my-20 px-6  w-full min-h-screen overflow-hidden flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="YOUR WHY"
      />

      <div className="flex flex-col gap-10 lg:flex-row justify-between py-20">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            style={{ opacity, y }}
            transition={{
              delay: 0.6 + index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="relative w-full lg:w-[30%] border border-black rounded-md overflow-hidden p-2"
          >
            <div
              style={{ backgroundImage: `url(${reason.image})` }}
              className="relative  w-full h-[400px]  bg-cover bg-center rounded-md"
            >
              <div className="w-full h-full flex flex-col gap-6 justify-center items-center text-center text-white px-6 rounded-md bg-black opacity-85">
                <h3 className="text-xl font-black">{reason.title}</h3>
                <p className="text-sm">{reason.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
