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

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-cyan-600
                  flex
                  items-center
                  justify-center
                  font-black
                  text-2xl
                  text-[#050816]
                  shadow-lg
                  shadow-cyan-500/30
                "
              >
                IO
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  Ismail <span className="text-cyan-400">Ouchraa</span>
                </h2>

                <p className="text-gray-400">
                  Software Engineer
                </p>

              </div>

            </div>

            <p className="mt-8 text-gray-400 leading-8">
              Passionate about building modern web applications,
              Artificial Intelligence solutions and scalable
              software using clean architecture and modern
              technologies.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-gray-400
                    hover:text-cyan-400
                    transition
                    duration-300
                  "
                >
                  {link.name}
                </a>

              ))}

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/ismailouchraa",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/in/ismail-ouchraa-9ba655288",
                },
                {
                  icon: <FaEnvelope />,
                  href: "mailto:ismailouchraa.20@gmail.com",
                },
                {
                  icon: <FaWhatsapp />,
                  href: "https://wa.me/212667112916",
                },
              ].map((item, index) => (

                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-white/5
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition-all
                    duration-300
                    hover:bg-cyan-500
                    hover:text-white
                    hover:scale-110
                    hover:shadow-lg
                    hover:shadow-cyan-500/30
                  "
                >
                  {item.icon}
                </a>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">

            <p className="text-gray-500">
              © {new Date().getFullYear()} Ismail Ouchraa. All rights reserved.
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Built with Next.js & Tailwind CSS
            </p>

          </div>

          <a
            href="#hero"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-500
              px-6
              py-3
              font-semibold
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:shadow-xl
              hover:shadow-cyan-500/40
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