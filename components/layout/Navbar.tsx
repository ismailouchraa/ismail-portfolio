"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-[#0b1120]/80 backdrop-blur-md z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          ISMAIL<span className="text-cyan-400">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <a
          href="#contact"
          className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-400"
        >
          Hire Me
        </a>

      </div>
    </header>
  );
}