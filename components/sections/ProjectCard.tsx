"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
  description,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_40px_rgba(6,182,212,.25)]
      "
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}

      <div className="p-8">

        {subtitle && (
          <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
            {subtitle}
          </p>
        )}

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-7 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1
                text-sm
                text-cyan-300
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

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
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
              hover:bg-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/30
            "
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <button
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-500
              px-6
              py-3
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-white
              hover:shadow-lg
              hover:shadow-cyan-500/20
            "
          >
            Details
          </button>

        </div>

      </div>
    </div>
  );
}