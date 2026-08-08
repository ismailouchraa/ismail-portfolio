"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  subtitle: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      {/* Subtitle */}

      <div className="inline-flex items-center gap-3">
        <span className="h-px w-10 bg-cyan-400" />

        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          {subtitle}
        </span>

        <span className="h-px w-10 bg-cyan-400" />
      </div>

      {/* Title */}

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {/* Gradient Line */}

      <div
        className="
          mx-auto
          mt-6
          h-1
          w-24
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-cyan-400
        "
      />

      {/* Description */}

      {description && (
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-gray-400
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}