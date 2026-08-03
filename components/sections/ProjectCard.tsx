"use client";

import Image from "next/image";
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
    <div
      className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        transition-all
        duration-500
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(6,182,212,.2)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden group">

        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="
            h-64
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />

        {featured && (
          <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
            <FaStar />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-8">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-cyan-400">
          {subtitle}
        </p>

        <p className="mt-6 text-gray-400 leading-8">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-8">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
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

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

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
              transition
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
              transition
              hover:bg-cyan-500
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}