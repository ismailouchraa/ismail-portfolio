"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Glow */}
      <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-500 blur-3xl opacity-20 animate-pulse"></div>

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
shadow-[0_0_60px_rgba(6,182,212,.5)]
object-cover
transition-all
duration-500
hover:scale-105
hover:rotate-1
"
      />
    </motion.div>
  );
}