"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Django",
  "Python",
  "Docker",
  "MongoDB",
  "Kubernetes",
  "AI",
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-10 lg:pt-16"
    >
      {/* Greeting */}

      <p className="text-cyan-400 text-lg font-medium mb-5">
        👋 Hello, I'm
      </p>
      <motion.div
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mb-6"
>
  <span
    className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-emerald-500/30
      bg-emerald-500/10
      px-5
      py-2
      text-sm
      font-semibold
      text-emerald-400
      backdrop-blur-xl
    "
  >
    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>

    Available for Work
  </span>
</motion.div>

      {/* Name */}

      <h1 className="font-black leading-[0.95]">
        <span className="block text-6xl md:text-7xl lg:text-8xl text-white">
          ISMAIL
        </span>

        <span className="block mt-2 text-6xl md:text-7xl lg:text-8xl text-cyan-400">
          OUCHRAA
        </span>
      </h1>

      {/* Typing */}

      <div className="mt-8 h-[60px]">
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
          className="text-3xl md:text-4xl font-bold text-white"
        />
      </div>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
        Passionate about building scalable web applications,
        Artificial Intelligence solutions and cloud-ready software
        using clean architecture, clean code and modern engineering
        practices.
      </p>

      {/* Technologies */}

      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400
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

      <div className="mt-16">
        <HeroStats />
      </div>

      {/* Social */}

    <div className="mt-10">
  <HeroSocials />
</div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="mt-12"
>
  <a
    href="#about"
    className="
      inline-flex
      items-center
      gap-3
      text-gray-400
      hover:text-cyan-400
      transition
    "
  >
    <span>Scroll Down</span>

    <motion.span
      animate={{ y: [0, 8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="text-2xl"
    >
      ↓
    </motion.span>
  </a>
</motion.div>
    </motion.div>
  );
}