"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-12 flex flex-wrap gap-5"
    >
      {/* Download CV */}

      <a
        href="/Ismail_Ouchraa_CV.pdf"
        download
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-cyan-500
          px-8
          py-4
          font-semibold
          text-black
          shadow-xl
          shadow-cyan-500/30
          transition-all
          duration-300
          hover:scale-105
          hover:bg-cyan-400
        "
      >
        <FaDownload
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-1
          "
        />

        Download CV
      </a>

      {/* Contact */}

      <a
        href="#contact"
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-cyan-500/30
          bg-white/5
          px-8
          py-4
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-cyan-400
          hover:bg-cyan-500/10
        "
      >
        Contact Me

        <FaArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>

      {/* Projects */}

      <a
        href="#projects"
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-cyan-400
          hover:bg-cyan-500/10
        "
      >
        View Projects

        <FaArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>
    </motion.div>
  );
}