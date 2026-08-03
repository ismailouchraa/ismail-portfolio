"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Greeting */}

      <p className="text-cyan-400 text-lg font-medium mb-4">
        👋 Hello, I'm
      </p>

      {/* Name */}

      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        ISMAIL
        <br />
        <span className="text-cyan-400">OUCHRAA</span>
      </h1>

      {/* Typing Animation */}

      <div className="mt-8">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1800,

            "Full Stack Developer",
            1800,

            "AI Enthusiast",
            1800,

            "Backend Developer",
            1800,

            "Frontend Developer",
            1800,

            "DevOps Learner",
            1800,
          ]}
          wrapper="h2"
          speed={45}
          repeat={Infinity}
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-white
            min-h-[50px]
          "
        />
      </div>

      {/* Description */}

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
              transition
              hover:bg-cyan-500
              hover:text-white
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}

      <div className="mt-12">
        <HeroButtons />
      </div>

      {/* Stats */}

      <HeroStats />

      {/* Social */}

      <div className="mt-10">
        <HeroSocials />
      </div>
    </motion.div>
  );
}