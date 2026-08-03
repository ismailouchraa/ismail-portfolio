"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "8+",
    label: "Technologies",
  },
  {
    value: "3",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
          }}
          className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-lg
            p-5
            text-center
            transition-all
            duration-300
            hover:border-cyan-400
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-cyan-500/20
          "
        >
          <h3 className="text-3xl font-black text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400 text-sm">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}