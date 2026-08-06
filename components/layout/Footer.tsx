"use client";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#050816]">

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Name */}

        <div className="text-center">

          <h2 className="text-4xl font-black">
            <span className="text-white">ISMAIL </span>
            <span className="text-cyan-400">OUCHRAA</span>
          </h2>

          <p className="mt-4 text-lg text-cyan-300">
            Software Engineer • Full Stack Developer
          </p>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Passionate about building scalable web applications,
            Artificial Intelligence solutions and cloud-ready
            software using modern technologies and clean architecture.
          </p>

        </div>

        {/* Social */}

        <div className="mt-12 flex justify-center gap-5">

          <a
            href="https://github.com/ismailouchraa"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 text-2xl text-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 text-2xl text-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 text-2xl text-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            <MdEmail />
          </a>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-cyan-500/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-gray-500">
            © 2026 Ismail Ouchraa • Built with Next.js & Tailwind CSS
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
          >
            <FaArrowUp />
            Back To Top
          </button>

        </div>

      </div>

    </footer>
  );
}