"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BrainCircuit,
  Briefcase,
  ServerCog,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    year: "2026",
    title: "Software Engineering Graduate",
    company: "Polydisciplinary Faculty of Taroudant",
    description:
      "Bachelor's Degree in Computer Science with strong foundations in Software Engineering, Artificial Intelligence and Full Stack Development.",
    icon: GraduationCap,
  },

  {
    year: "2026",
    title: "DisasterTrack",
    company: "Graduation Project (PFE)",
    description:
      "Designed and developed an AI-powered natural disaster detection and alert system for Morocco using Django, React, Machine Learning and Docker.",
    icon: BrainCircuit,
  },

  {
    year: "2025",
    title: "Full Stack Development",
    company: "Personal Projects",
    description:
      "Built modern web applications using React, Next.js, Django, Node.js, PostgreSQL and MongoDB following clean architecture principles.",
    icon: Briefcase,
  },

  {
    year: "2025",
    title: "DevOps Journey",
    company: "Docker • Kubernetes • Jenkins",
    description:
      "Learned Docker, Kubernetes, Jenkins, Maven, Git and Linux while building CI/CD workflows and deploying scalable applications.",
    icon: ServerCog,
  },

  {
    year: "2023",
    title: "Started Computer Science",
    company: "Polydisciplinary Faculty of Taroudant",
    description:
      "Started my academic journey in Computer Science and discovered my passion for software engineering and artificial intelligence.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#08101f] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="EXPERIENCE"
          title="Journey & Experience"
          description="My academic and technical journey in software engineering, artificial intelligence and modern web development."
        />

        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-cyan-500/30"></div>

          <div className="space-y-14">

            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-8"
                >
                  {/* Timeline Dot */}

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-500 bg-[#08101f] shadow-[0_0_25px_rgba(6,182,212,.4)]">

                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />

                  </div>

                  {/* Card */}

                  <div
                    className="
                      flex-1
                      rounded-3xl
                      border
                      border-cyan-500/20
                      bg-white/5
                      p-8
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:shadow-[0_0_30px_rgba(6,182,212,.18)]
                    "
                  >
                    <span className="text-cyan-400 text-sm font-semibold">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-cyan-300">
                      {item.company}
                    </p>

                    <p className="mt-5 text-gray-400 leading-8">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}