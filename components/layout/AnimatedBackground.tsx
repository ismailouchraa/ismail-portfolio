"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [0, 120, -50, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-20
          left-20
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 120, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-20
          right-20
          w-[350px]
          h-[350px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* Glow 3 */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/3
          -translate-x-1/2
          w-[280px]
          h-[280px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

    </div>
  );
}