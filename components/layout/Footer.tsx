"use client";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-cyan-500/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              Ismail <span className="text-cyan-400">Ouchraa</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Software Engineer passionate about Artificial Intelligence,
              Full Stack Development and building modern web applications.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/ismailouchraa"
                target="_blank"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ismail-ouchraa-9ba655288"
                target="_blank"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ismailouchraa.20@gmail.com"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/212667112916"
                target="_blank"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Ismail Ouchraa. All rights reserved.
          </p>

          <a
            href="#hero"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-500
              px-5
              py-3
              transition
              hover:bg-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/30
            "
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}