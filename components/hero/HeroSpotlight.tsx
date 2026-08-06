"use client";

import { motion } from "framer-motion";

export default function HeroSpotlight() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-sky-400/10
          blur-[160px]
        "
      />
    </>
  );
}