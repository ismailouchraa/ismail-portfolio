"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";

const principles = [
  {
    icon: <Code2 size={21} />,
    title: "Clean Code",
    description:
      "Readable, structured and maintainable code built with attention to detail.",
  },
  {
    icon: <Layers3 size={21} />,
    title: "Good Architecture",
    description:
      "Designing solutions with a clear structure that can grow with the project.",
  },
  {
    icon: <CheckCircle2 size={21} />,
    title: "Real Solutions",
    description:
      "Focusing on practical software that solves real problems and creates value.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08101f] py-28 text-white md:py-36"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.05]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-150px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <Container>
        <div className="relative z-10">

          {/* Section Header */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Sparkles size={17} />
            </div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </span>
          </motion.div>

          {/* Main Introduction */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-10 max-w-5xl"
          >
            <h2
              className="
                text-4xl
                font-black
                leading-[1.08]
                tracking-tight
                md:text-6xl
                lg:text-7xl
              "
            >
              Turning ideas into
              <span className="text-cyan-400">
                {" "}practical software.
              </span>
            </h2>
          </motion.div>

          {/* Introduction Text */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 max-w-4xl"
          >
            <p className="text-2xl font-medium leading-relaxed text-gray-200 md:text-3xl">
              I'm{" "}
              <span className="font-bold text-cyan-400">
                Ismail Ouchraa
              </span>
              , a Computer Engineering graduate interested in transforming
              ideas into practical software solutions.
            </p>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                mt-7
                max-w-3xl
                border-l-2
                border-cyan-500/40
                pl-6
                text-lg
                leading-8
                text-gray-400
                md:text-xl
              "
            >
              I enjoy understanding complex problems, designing simple
              solutions and continuously improving what I build.
            </motion.p>
          </motion.div>

          {/* Divider */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-16 origin-left border-t border-white/10"
          />

          {/* Principles */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.5,
                  delay: 0.45 + index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  transition-colors
                  duration-300
                  hover:border-cyan-500/30
                  hover:bg-cyan-500/[0.03]
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-500/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:bg-cyan-500
                    group-hover:text-black
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.75,
            }}
            className="mt-10"
          >
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-cyan-500
                px-6
                py-3.5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-400
              "
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}