import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle(props) {
  return (
    <div
      className={` w-full flex justify-center items-center tb-border ${props.mb}`}
    >
      <motion.h1
        style={props.style}
        transition={props.transition}
        className="font-black text-[2rem] lg:text-[9rem] md:text-[6.5rem] whitespace-nowrap"
      >
        {props.name}
      </motion.h1>
    </div>
  );
}
