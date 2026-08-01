"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#08101f] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title="Let's Work Together"
          description="Feel free to contact me for internships, freelance opportunities or collaboration."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            mx-auto
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-lg
            p-10
            text-center
          "
        >

          <div className="space-y-8">

            <a
              href="mailto:YOUR_EMAIL"
              className="flex justify-center items-center gap-4 text-lg hover:text-cyan-400 transition"
            >
              <FaEnvelope size={24} />
              YOUR_EMAIL
            </a>

            <a
              href="https://github.com/ismailouchraa"
              target="_blank"
              className="flex justify-center items-center gap-4 text-lg hover:text-cyan-400 transition"
            >
              <FaGithub size={24} />
              github.com/ismailouchraa
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="flex justify-center items-center gap-4 text-lg hover:text-cyan-400 transition"
            >
              <FaLinkedin size={24} />
              LinkedIn Profile
            </a>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}