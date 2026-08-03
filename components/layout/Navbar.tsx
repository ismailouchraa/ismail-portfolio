"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(links[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        bg-[#050816]/60
        backdrop-blur-2xl
      "
    >
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link
          href="#hero"
          className="text-2xl font-bold"
        >
          <span className="text-white">Ismail</span>
          <span className="text-cyan-400 ml-2">Ouchraa</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">

          {links.map((link) => (

            <li key={link.name}>

              <a
                href={link.href}
                className={`relative transition duration-300
                ${
                  active === link.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}

               {active === link.href && (
  <motion.span
    layoutId="active-link"
    className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-cyan-400"
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 30,
    }}
  />
)}

              </a>

            </li>

          ))}

        </ul>

        <a
          href="#contact"
          className="
            hidden
            md:inline-flex
            items-center
            rounded-xl
            bg-cyan-500
            px-5
            py-3
            font-semibold
            transition
            hover:bg-cyan-400
          "
        >
          Contact Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {open && (

        <div className="md:hidden bg-[#050816] border-t border-white/10">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-cyan-400"
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </header>
  );
}