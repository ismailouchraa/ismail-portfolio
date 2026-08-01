"use client";

import { motion } from "framer-motion";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}