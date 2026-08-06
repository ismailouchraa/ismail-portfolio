"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", x: 0, y: -210 },
  { Icon: SiNextdotjs, color: "#ffffff", x: 150, y: -140 },
  { Icon: FaNodeJs, color: "#68A063", x: 210, y: 0 },
  { Icon: FaDocker, color: "#2496ED", x: 150, y: 140 },
  { Icon: FaPython, color: "#FFD43B", x: -150, y: 140 },
  { Icon: FaJava, color: "#f89820", x: -210, y: 0 },
];

export default function HeroOrbit() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 35,
        ease: "linear",
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {icons.map(({ Icon, color, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
          whileHover={{
            scale: 1.2,
          }}
        >
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#0f172a]/80
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              shadow-xl
            "
          >
            <Icon
              size={28}
              color={color}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}