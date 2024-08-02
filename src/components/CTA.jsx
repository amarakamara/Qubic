import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "./Button";

export default function CTA(props) {
  const { setShowQuote } = props;
  const containerRef = useRef(null);

  const scrollYProgress = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  const handleOpenQuote = () => {
    setShowQuote(true);
  };
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      ref={containerRef}
      className="px-2 w-full"
    >
      <motion.div className="w-full tb-border py-20 flex flex-col justify-center items-center gap-4 text-center">
        <motion.h1
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="font-black text-[2.3rem] lg:text-[5rem] md:text-[4rem]"
        >
          “READY TO GIVE YOUR BUSINESS A NEW LOOK?”
        </motion.h1>
        <Button
          onClick={handleOpenQuote}
          borderColor="border-black"
          name="Quick Contact"
          width="w-52"
          height="h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
