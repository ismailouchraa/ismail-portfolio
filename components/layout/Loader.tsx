"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#050816]
          "
        >
          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
              className="
                h-20
                w-20
                rounded-full
                border-4
                border-cyan-500/20
                border-t-cyan-400
              "
            />

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .3,
              }}
              className="
                mt-8
                text-4xl
                font-black
                tracking-wider
              "
            >
              <span className="text-white">
                ISMAIL
              </span>

              <span className="text-cyan-400 ml-2">
                OUCHRAA
              </span>
            </motion.h1>

            <p className="mt-3 text-gray-400">
              Loading Portfolio...
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}