"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    setEnabled(media.matches);

    const update = () => setEnabled(media.matches);

    media.addEventListener("change", update);

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          duration: 0.05,
        }}
        className="
          fixed
          z-[9999]
          h-2.5
          w-2.5
          rounded-full
          bg-cyan-400
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          fixed
          z-[9998]
          h-9
          w-9
          rounded-full
          border
          border-cyan-400/70
          pointer-events-none
        "
      />
    </>
  );
}