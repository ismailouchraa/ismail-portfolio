"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32 bg-[#050816] text-white"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <Container>

        <SectionTitle
          subtitle="MY WORK"
          title="Featured Projects"
          description="A selection of projects showcasing my expertise in Artificial Intelligence, Full Stack Development and modern software engineering."
        />

        <div className="mt-20 space-y-12">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}