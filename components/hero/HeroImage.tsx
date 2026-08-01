"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Glow */}

      <div className="absolute w-[470px] h-[470px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

      {/* Ring */}

      <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-500/20"></div>

      <Image
        src="/images/profile.png"
        alt="Ismail Ouchraa"
        width={380}
        height={380}
        priority
        className="
          relative
          rounded-full
          border-[5px]
          border-cyan-400
          object-cover
          shadow-[0_0_80px_rgba(6,182,212,.45)]
          transition-all
          duration-500
          hover:scale-105
        "
      />

    </motion.div>
  );
}