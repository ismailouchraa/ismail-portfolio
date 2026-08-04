"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  Award,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const education = [
  {
    year: "2023 - 2026",
    title: "Bachelor's Degree in Computer Science",
    school: "Polydisciplinary Faculty of Taroudant",
    description:
      "Focused on Software Engineering, Artificial Intelligence, Databases, Operating Systems, Networks, DevOps and Full Stack Web Development.",
    icon: GraduationCap,
  },

  {
    year: "2025 - 2026",
    title: "Graduation Project (PFE)",
    school: "DisasterTrack",
    description:
      "Designed and developed an AI-powered natural disaster detection and alert platform using React, Django, Machine Learning and Docker.",
    icon: Award,
  },

  {
    year: "2024 - 2025",
    title: "Software Engineering",
    school: "Academic Projects",
    description:
      "Worked on Full Stack applications, REST APIs, UML design, Object-Oriented Programming and modern software engineering practices.",
    icon: BookOpen,
  },

  {
    year: "2023",
    title: "Baccalaureate",
    school: "Morocco",
    description:
      "Started my journey toward becoming a Software Engineer through higher education in Computer Science.",
    icon: School,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-[#050816] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="EDUCATION"
          title="Education & Learning"
          description="My academic background and learning journey in Computer Science and Software Engineering."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div
                  className="
                    h-full
                    rounded-3xl
                    border
                    border-cyan-500/20
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:shadow-[0_0_30px_rgba(6,182,212,.18)]
                  "
                >
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        h-14
                        w-14
                        rounded-2xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={28}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>

                      <p className="text-cyan-400 text-sm">
                        {item.year}
                      </p>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-6 text-cyan-300">
                    {item.school}
                  </p>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}