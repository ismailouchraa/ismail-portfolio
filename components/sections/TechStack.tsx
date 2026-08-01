"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const techs = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "MongoDB",
  "Java",
  "C++",
  "Docker",
  "Kubernetes",
  "Git",
  "Linux",
  "REST API",
  "JWT",
  "Tailwind CSS",
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-28 bg-[#08101f] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="TECH STACK"
          title="Technologies I Work With"
          description="Technologies and tools I have used throughout my academic projects and software development journey."
        />

        <div className="flex flex-wrap justify-center gap-5">

          {techs.map((tech, index) => (

            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .4,
                delay: index * .05,
              }}
              className="
                px-6
                py-3
                rounded-full
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-lg
                text-cyan-300
                font-medium
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-cyan-500
                hover:text-white
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(6,182,212,.4)]
              "
            >
              {tech}
            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}