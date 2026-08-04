"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [enabled, setEnabled] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer:fine)");

    setEnabled(media.matches);

    const update = () => setEnabled(media.matches);

    media.addEventListener("change", update);

    const move = (e: MouseEvent) => {
      setMouse({
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
    <motion.div
      animate={{
        x: mouse.x - 180,
        y: mouse.y - 180,
      }}
      transition={{
        type: "tween",
        duration: .2,
      }}
      className="
        fixed
        w-[360px]
        h-[360px]
        rounded-full
        pointer-events-none
        z-0
        blur-[120px]
        bg-cyan-400/20
      "
    />
  );
}