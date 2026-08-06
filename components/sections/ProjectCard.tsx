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
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        duration: 0.35,
      }}
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
            h-64
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
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

        {featured && (
          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-500
              px-4
              py-2
              text-sm
              font-bold
              text-black
              shadow-lg
            "
          >
            <FaStar />
            Featured
          </div>
        )}

      </div>

      {/* Content */}

      <div className="relative z-10 p-8">

        <h2
          className="
            text-3xl
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

        <p className="mt-6 leading-8 text-gray-400">
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
                hover:bg-cyan-500
                hover:text-white
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
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

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
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

        </div>

      </div>
    </motion.div>
  );
}