"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse"></div>

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          border-2
          border-dashed
          border-cyan-500/30
        "
      />

      {/* Second Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        className="
          absolute
          w-[460px]
          h-[460px]
          rounded-full
          border
          border-cyan-500/10
        "
      />

      {/* Floating Image */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      >
        <Image
          src="/images/profile.png"
          alt="Ismail Ouchraa"
          width={380}
          height={380}
          priority
          className="
            relative
            rounded-full
            border-[6px]
            border-cyan-400
            object-cover
            shadow-[0_0_90px_rgba(6,182,212,.45)]
            transition-all
            duration-500
            hover:scale-105
          "
        />
      </motion.div>

      {/* Small Floating Circles */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          top-8
          right-8
          w-5
          h-5
          rounded-full
          bg-cyan-400
          shadow-lg
          shadow-cyan-400/50
        "
      />

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          bottom-12
          left-6
          w-4
          h-4
          rounded-full
          bg-cyan-300
          shadow-lg
          shadow-cyan-400/50
        "
      />

      <motion.div
        animate={{
          x: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          top-1/2
          -left-4
          w-3
          h-3
          rounded-full
          bg-cyan-500
        "
      />
    </motion.div>
  );
}