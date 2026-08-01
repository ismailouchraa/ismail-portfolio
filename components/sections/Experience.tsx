"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    title: "Final Year Project (PFE)",
    company: "DisasterTrack",
    period: "2026",
    description:
      "Designed and developed an AI-powered web application for monitoring natural disasters in Morocco. Integrated external APIs, Artificial Intelligence, MongoDB, Python and modern web technologies.",
  },
  {
    title: "Academic Software Projects",
    company: "Personal & University Projects",
    period: "2023 - 2026",
    description:
      "Developed several software projects including an ERP system, Course Manager, University Course Website, Linux System Monitor (C++) and a modern developer portfolio.",
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
          title="My Experience"
          description="Projects and practical experience gained throughout my academic journey."
        />

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.title}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {exp.company}
                  </p>
                </div>

                <span className="text-gray-400 mt-4 md:mt-0">
                  {exp.period}
                </span>

              </div>

              <p className="mt-6 text-gray-400 leading-8">
                {exp.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}