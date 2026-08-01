"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ServerCog,
  GraduationCap,
} from "lucide-react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const cards = [
  {
    icon: <Code2 size={36} />,
    title: "Full Stack Development",
    description:
      "Building scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: <BrainCircuit size={36} />,
    title: "Artificial Intelligence",
    description:
      "Interested in Machine Learning, AI systems and intelligent solutions.",
  },
  {
    icon: <ServerCog size={36} />,
    title: "DevOps",
    description:
      "Docker, Kubernetes, Jenkins, Linux and CI/CD workflows.",
  },
  {
    icon: <GraduationCap size={36} />,
    title: "Software Engineering",
    description:
      "Strong background in software design, UML and best development practices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#08101f] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="ABOUT ME"
          title="Who I Am"
          description="Software Engineer passionate about Artificial Intelligence, Full Stack Development, DevOps and building modern applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
            >
              <GlassCard>

                <div className="text-cyan-400 mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {card.description}
                </p>

              </GlassCard>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}