"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

import {
  featuredProjects,
  projects,
} from "@/constants/projects";

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

        {/* Featured Projects */}

        <div className="space-y-12">

          {featuredProjects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>

          ))}

        </div>

        {/* Divider */}

        <div className="flex items-center gap-6 my-24">

          <div className="h-px bg-cyan-500/20 flex-1"></div>

          <h2 className="text-4xl font-bold">
            Other Projects
          </h2>

          <div className="h-px bg-cyan-500/20 flex-1"></div>

        </div>

        {/* Other Projects */}

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
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