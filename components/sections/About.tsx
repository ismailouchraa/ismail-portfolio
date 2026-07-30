"use client";

import { motion } from "framer-motion";
import { Code, BrainCircuit, Server, Trophy } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code size={32} />,
      title: "Full Stack Development",
      desc: "Building modern web applications using React, Next.js, Django and Laravel.",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Artificial Intelligence",
      desc: "Passionate about Machine Learning, AI systems and intelligent solutions.",
    },
    {
      icon: <Server size={32} />,
      title: "DevOps",
      desc: "Learning Docker, Kubernetes, CI/CD and cloud deployment.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Continuous Learning",
      desc: "Always improving my skills and discovering new technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Who I Am
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8">
            I'm Ismail Ouchraa, a Software Engineer passionate about
            Artificial Intelligence, Full Stack Development and DevOps.
            I enjoy building scalable, modern and high-performance
            applications while continuously learning new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .15 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}