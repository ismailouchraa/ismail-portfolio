"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ServerCog,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const cards = [
  {
    icon: <Code2 size={34} />,
    title: "Full Stack Development",
    description:
      "Building responsive, scalable and modern web applications using the latest technologies.",
  },
  {
    icon: <BrainCircuit size={34} />,
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems powered by Machine Learning and AI techniques.",
  },
  {
    icon: <ServerCog size={34} />,
    title: "DevOps",
    description:
      "Experience with Docker, Kubernetes, Linux, Git and modern deployment workflows.",
  },
  {
    icon: <GraduationCap size={34} />,
    title: "Software Engineering",
    description:
      "Applying clean architecture, design patterns and software engineering best practices.",
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
          description="A motivated Software Engineer passionate about building modern digital solutions."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-4xl font-bold leading-tight">
              Turning Ideas Into
              <span className="text-cyan-400"> Powerful Software.</span>
            </h3>

            <p className="mt-8 text-gray-400 leading-8">
              I'm Ismail Ouchraa, a Computer Science graduate and Software
              Engineer passionate about Full Stack Development,
              Artificial Intelligence and DevOps.

              I enjoy transforming ideas into real-world software
              solutions through clean code, scalable architectures
              and modern technologies.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              My goal is to continuously improve my technical skills,
              contribute to impactful projects and create software
              that makes people's lives easier.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                px-7
                py-4
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                transition
                font-semibold
              "
            >
              Let's Talk
              <ArrowRight size={18} />
            </a>

          </motion.div>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-6">

            {cards.map((card, index) => (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
              >

                <GlassCard>

                  <div className="text-cyan-400 mb-5">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    {card.description}
                  </p>

                </GlassCard>

              </motion.div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}