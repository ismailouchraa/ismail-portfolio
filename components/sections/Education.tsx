"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-[#050816] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="EDUCATION"
          title="Academic Background"
          description="My academic journey in Computer Science and Software Engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-lg
            p-10
          "
        >

          <div className="flex items-start gap-6">

            <div className="bg-cyan-500/10 p-5 rounded-2xl">
              <GraduationCap
                className="text-cyan-400"
                size={40}
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Bachelor's Degree in Computer Science
              </h3>

              <p className="text-cyan-400 mt-2">
                Faculty of Polydisciplinary Studies, Taroudant
              </p>

              <p className="text-gray-400 mt-2">
                2023 — 2026
              </p>

              <p className="text-gray-400 leading-8 mt-8">
                Studied Software Engineering, Artificial Intelligence,
                Full Stack Development, DevOps, Databases,
                Operating Systems, Computer Networks and
                Software Architecture.
              </p>

            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}