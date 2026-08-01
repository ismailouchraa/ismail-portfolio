"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              Ismail Ouchraa
            </h2>

            <p className="text-gray-400 mt-2">
              Software Engineer • Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-6 text-2xl">

            <a
              href="https://github.com/ismailouchraa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ismail-ouchraa-9ba655288"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ismailouchraa.20@gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/212667112916"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="border-t border-cyan-500/10 mt-10 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Ismail Ouchraa. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}