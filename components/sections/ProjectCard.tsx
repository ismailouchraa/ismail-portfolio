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
      hover:border-cyan-400
      hover:shadow-[0_0_40px_rgba(6,182,212,.2)]
      transition-all
      duration-500
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
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      {/* Content */}

      <div className="p-8">

        {subtitle && (
          <p className="text-cyan-400 uppercase text-sm tracking-widest mb-2">
            {subtitle}
          </p>
        )}

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="text-gray-400 mt-5 leading-8">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-7">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
              text-sm
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* GitHub */}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
          mt-8
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-cyan-500
          px-6
          py-3
          font-semibold
          hover:bg-cyan-400
          transition
          "
        >
          <FaGithub size={20} />
          View on GitHub
        </a>

      </div>
    </div>
  );
}