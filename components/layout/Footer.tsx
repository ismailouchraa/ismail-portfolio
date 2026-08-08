"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white">
      <Container>

        <div className="border-b border-white/10 py-16">

          {/* Identity */}

          <div className="text-center">

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              ISMAIL{" "}
              <span className="text-cyan-400">
                OUCHRAA
              </span>
            </h2>

            <p className="mt-4 text-lg text-cyan-400">
              Software Engineer • Full Stack Developer
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              Passionate about building scalable web applications,
              Artificial Intelligence solutions and cloud-ready
              software using modern technologies and clean architecture.
            </p>

            {/* Social Links */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {/* GitHub */}

              <a
                href="https://github.com/ismailouchraa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-white/[0.03]
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                "
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/ismail-ouchraa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-white/[0.03]
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                "
              >
                <FaLinkedin size={22} />
              </a>

              {/* Email */}

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-white/[0.03]
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                "
              >
                <FaEnvelope size={21} />
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/212667112916"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-white/[0.03]
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                "
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Ismail Ouchraa. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </Container>
    </footer>
  );
}