"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  technologies: string[];
  year: string;
  badge: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  github,
  demo,
  featured,
  technologies,
  year,
  badge,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        shadow-lg
        hover:shadow-[0_0_60px_rgba(34,211,238,.18)]
        transition-all
        duration-500
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-blue-500/10
        "
      />

      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="
            h-72
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
          "
        />

        {/* Top Left */}

        <div className="absolute top-5 left-5 flex items-center gap-3">
          {featured && (
            <div className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
              <FaStar />
              Featured Project
            </div>
          )}

          <div className="rounded-full border border-cyan-400/40 bg-[#050816]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-xl">
            {badge}
          </div>
        </div>

        {/* Top Right */}

        <div className="absolute top-5 right-5 rounded-full border border-white/10 bg-[#050816]/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
          {year}
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 p-8">
        <h2
          className="
            text-3xl
            lg:text-4xl
            font-bold
            transition
            group-hover:text-cyan-400
          "
        >
          {title}
        </h2>

        <p className="mt-2 text-cyan-400">
          {subtitle}
        </p>

        <p className="mt-6 text-[17px] leading-8 text-gray-300">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                text-cyan-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-500/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-400
            "
          >
            <FaGithub />
            GitHub
          </a>

          {demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-cyan-500
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:bg-cyan-500
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}