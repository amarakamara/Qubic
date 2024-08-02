import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
      transition={{
        bounceDamping: 10,
        bounceStiffness: 800,
      }}
      onClick={props.onClick}
      className={`${props.width} ${props.height} ${
        props.borderColor ? props.borderColor : "border-black"
      } bg-transparent rounded-sm border  py-2 px-6`}
    >
      {props.name}
    </motion.button>
  );
}
