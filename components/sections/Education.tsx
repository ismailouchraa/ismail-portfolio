"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const education = [
  {
    year: "2023 – 2026",
    title: "Bachelor's Degree in Computer Engineering",
    subtitle: "Polydisciplinary Faculty of Taroudant",
    location: "Taroudant, Morocco",
    icon: <GraduationCap size={30} />,
    description:
      "Completed a Bachelor's degree in Computer Engineering with a focus on software development, web technologies, databases, artificial intelligence and modern software engineering practices.",
  },
  {
    year: "2023",
    title: "Scientific Baccalaureate",
    subtitle: "Physics & Chemistry (French Option)",
    location: "Morocco",
    icon: <School size={30} />,
    description:
      "Completed my Scientific Baccalaureate in Physics & Chemistry with the French option, building a strong foundation in scientific, mathematical and analytical subjects.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#08101f] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <Container>
        <div className="relative z-10">

          {/* Section Title */}

          <SectionTitle
            subtitle="EDUCATION"
            title="Academic Journey"
            description="My academic background and educational journey in computer engineering and scientific studies."
          />

          {/* Education Timeline */}

          <div className="mx-auto max-w-5xl space-y-8">

            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_45px_rgba(6,182,212,0.10)]
                "
              >

                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-cyan-500/20
                  "
                />

                <div className="relative z-10">

                  {/* Header */}

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-500/30
                        bg-cyan-500/10
                        text-cyan-400
                        transition-all
                        duration-300
                        group-hover:bg-cyan-500/20
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Main Info */}

                    <div className="flex-1">

                      <p className="text-sm font-semibold tracking-wider text-cyan-400">
                        {item.year}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-gray-300">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>

                  {/* Location */}

                  <div className="mt-7 flex items-center gap-2 text-cyan-400">

                    <MapPin size={18} />

                    <span className="text-sm font-medium">
                      {item.location}
                    </span>

                  </div>

                  {/* Description */}

                  <p className="mt-6 max-w-4xl text-[17px] leading-8 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}