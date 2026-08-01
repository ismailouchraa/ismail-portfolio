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

      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        ISMAIL
        <br />
        <span className="text-cyan-400">OUCHRAA</span>
      </h1>

      <h2 className="mt-8 text-3xl font-semibold">
        Software Engineer
      </h2>

      <h3 className="mt-3 text-xl text-gray-300">
        Full Stack Developer • AI Enthusiast • DevOps
      </h3>

      <p className="mt-8 text-gray-400 leading-8 max-w-xl">
        Passionate about building scalable web applications,
        Artificial Intelligence solutions and modern cloud-ready
        software using clean architecture and best engineering
        practices.
      </p>

      {/* Tech Stack */}

      <div className="flex flex-wrap gap-3 mt-10">

        {[
          "React",
          "Next.js",
          "Django",
          "Python",
          "MongoDB",
          "Docker",
          "Kubernetes",
          "AI",
        ].map((tech) => (
          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/30
              text-cyan-300
              text-sm
              hover:bg-cyan-500
              hover:text-white
              transition
            "
          >
            {tech}
          </span>
        ))}

      </div>

      <div className="mt-12">
        <HeroButtons />
      </div>

      <HeroSocials />
    </motion.div>
  );
}