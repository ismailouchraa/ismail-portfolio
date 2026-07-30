"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-cyan-400 text-lg font-medium mb-4">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        ISMAIL
        <br />
        OUCHRAA
      </h1>

      <h2 className="mt-8 text-3xl text-white">
        Software Engineer
      </h2>

      <h3 className="mt-2 text-2xl text-cyan-400 font-semibold">
        Full Stack Developer
      </h3>

      <p className="mt-8 text-gray-400 leading-8 max-w-xl">
        Passionate about AI, Full Stack Development,
        DevOps, and creating modern,
        high-performance web applications.
      </p>

      <div className="mt-12">
        <HeroButtons />
      </div>

      <HeroSocials />
    </motion.div>
  );
}