"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroOrbit from "./HeroOrbit";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex items-center justify-center py-10"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Main Glow */}

      <div className="absolute w-[520px] h-[520px] rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Extra Glow */}

      <div className="absolute w-[320px] h-[320px] rounded-full bg-cyan-400/20 blur-[80px]" />

      {/* Ring 1 */}

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

      {/* Ring 2 */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="
        absolute
        w-[470px]
        h-[470px]
        rounded-full
        border
        border-cyan-500/10
      "
      />

      {/* Floating Profile */}

      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <HeroOrbit />
        <Image
          src="/images/profile.png"
          alt="Ismail Ouchraa"
          width={380}
          height={380}
          priority
          className="
            rounded-full
            border-[6px]
            border-cyan-400
            object-cover
            shadow-[0_0_100px_rgba(34,211,238,.45)]
            hover:scale-105
            transition-all
            duration-500
            relative
            z-20
          "
        />

        {/* Open To Work */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
          absolute
          -top-5
          -right-6
          bg-[#0f172a]
          border
          border-cyan-500/40
          rounded-full
          px-4
          py-2
          text-sm
          shadow-xl
          backdrop-blur-xl
          z-30
        "
        >
          🟢 Open To Work
        </motion.div>

        {/* Morocco */}

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
          absolute
          -bottom-4
          -left-6
          bg-[#0f172a]
          border
          border-cyan-500/40
          rounded-full
          px-4
          py-2
          text-sm
          shadow-xl
          backdrop-blur-xl
          z-30
        "
        >
          📍 Morocco
        </motion.div>
      </motion.div>

      {/* Floating Dot */}

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
        right-10
        w-5
        h-5
        rounded-full
        bg-cyan-400
        shadow-lg
        shadow-cyan-400/50
      "
      />

      {/* Floating Dot */}

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
        left-8
        w-4
        h-4
        rounded-full
        bg-cyan-300
        shadow-lg
        shadow-cyan-300/50
      "
      />

      {/* Floating Dot */}

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

      {/* Floating Dot */}

      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
        absolute
        top-1/4
        -right-2
        w-3
        h-3
        rounded-full
        bg-cyan-300
      "
      />
    </motion.div>
  );
}