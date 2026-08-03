"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCardProps {
  title: string;
  level: number;
  skills: Skill[];
}

export default function SkillCard({
  title,
  level,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        h-full
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-lg
        p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_35px_rgba(6,182,212,.2)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-5">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <span className="text-cyan-400 font-semibold">
          {level}%
        </span>

      </div>

      {/* Progress Bar */}

      <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-8">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full rounded-full bg-cyan-400"
        />

      </div>

      {/* Skills */}

      <div className="grid grid-cols-2 gap-4">

        {skills.map((skill) => {

          const Icon = skill.icon;

          return (

            <div
              key={skill.name}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-cyan-500/10
                bg-white/5
                p-3
                transition
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
              "
            >

              <Icon
                size={24}
                className="text-cyan-400"
              />

              <span className="text-gray-200 text-sm">
                {skill.name}
              </span>

            </div>

          );
        })}

      </div>

    </motion.div>
  );
}