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
      className="py-28 bg-[#050816] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="PORTFOLIO"
          title="Featured Projects"
          description="A collection of projects covering Artificial Intelligence, ERP Systems, Full Stack Development, Linux Programming and Modern Web Technologies."
        />

       {/* Projects */}

<div className="grid lg:grid-cols-2 gap-8">

  {projects.map((project, index) => (

    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
    >
      <ProjectCard {...project} />
    </motion.div>

  ))}

</div>

      </Container>
    </section>
  );
}