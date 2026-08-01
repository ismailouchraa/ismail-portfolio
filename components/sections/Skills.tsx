"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/constants/skills";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#050816] text-white"
    >
      <Container>
        <SectionTitle
          subtitle="MY SKILLS"
          title="Technical Skills"
          description="Technologies and tools I use to build modern, scalable and intelligent software solutions."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-xl bg-white/5 border border-cyan-500/10 p-3 hover:border-cyan-400 hover:bg-cyan-500/10 transition duration-300"
                      >
                        <Icon
                          size={26}
                          className="text-cyan-400"
                        />

                        <span className="text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}