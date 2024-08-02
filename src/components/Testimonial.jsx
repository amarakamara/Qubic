import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MobileVideo from "../assets/vid-mo.mp4";
import LargeVideo from "../assets/vid-lap.mp4";
import { Play, Pause } from "lucide-react";

export default function Testimonial() {
  const [playSound, setPlaySound] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [vidSrc, setVidSrc] = useState(MobileVideo);
  const testimonialRef = useRef(null);

  const scrollYProgress = useScroll({
    target: testimonialRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      if (width <= 767) {
        setVidSrc(MobileVideo);
      } else if (width > 767) {
        setVidSrc(LargeVideo);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSound = () => {
    setPlaySound(!playSound);
  };

  return (
    <motion.section
 
      transition={{
        staggerChildren: 0.25,
      }}
      ref={testimonialRef}
      id="testimonial"
      className="animated-section w-full px-2"
    >
      <motion.div className="w-full flex flex-col justify-center items-center text-center">
        <motion.h1
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-3xl lg:text-8xl md:text-6xl font-black"
        >
          “STILL DOUBTING? HEAR FROM OUR CLIENTS”
        </motion.h1>
        <motion.div
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full p-2 my-10  border-[0.5px] border-black"
        >
          <div className="w-full h-[32rem] relative bg-black">
            {/*
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={vidSrc}
                autoPlay
                loop
                muted={!playSound}
              ></video>*/}
            <div className="text-white relative z-10 flex items-start justify-between w-full h-full bg-black bg-opacity-50 p-4">
              <p className="w-1/2 text-[0.5rem] lg:text-[1rem]   font-thin text-left">
                We are working to upload actual customer review videos soon
              </p>
              <button
                className="w-1/2 flex justify-end gap-2 text-sm"
                onClick={toggleSound}
              >
                Sound{playSound ? <Pause /> : <Play />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
