"use client";

import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-12">

      {/* Download CV */}

      <a
        href="/cv/Ismail_Ouchraa_CV.pdf"
        download
        className="
          inline-flex
          items-center
          gap-3
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          text-white
          font-semibold
          shadow-lg
          shadow-cyan-500/30
          transition-all
          duration-300
          hover:bg-cyan-400
          hover:-translate-y-1
          hover:shadow-cyan-500/50
        "
      >
        <FaDownload />
        Download CV
      </a>

      {/* View Projects */}

      <a
        href="#projects"
        className="
          inline-flex
          items-center
          gap-3
          px-8
          py-4
          rounded-xl
          border-2
          border-cyan-500
          text-white
          font-semibold
          transition-all
          duration-300
          hover:bg-cyan-500
          hover:border-cyan-400
          hover:-translate-y-1
        "
      >
        View Projects
        <FaArrowRight />
      </a>

    </div>
  );
}