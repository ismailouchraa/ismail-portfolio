"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const contacts = [
  {
    icon: <FaEnvelope size={28} />,
    title: "Email",
    value: "ismailouchraa.20@gmail.com",
    link: "mailto:ismailouchraa.20@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: <FaWhatsapp size={28} />,
    title: "WhatsApp",
    value: "+212 667 112 916",
    link: "https://wa.me/212667112916",
    color: "hover:text-green-400",
  },
  {
    icon: <FaGithub size={28} />,
    title: "GitHub",
    value: "github.com/ismailouchraa",
    link: "https://github.com/ismailouchraa",
    color: "hover:text-cyan-400",
  },
  {
    icon: <FaLinkedin size={28} />,
    title: "LinkedIn",
    value: "linkedin.com/in/ismail-ouchraa",
    link: "https://www.linkedin.com/in/ismail-ouchraa-9ba655288",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#08101f] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title="Let's Connect"
          description="Feel free to reach out for internships, collaborations or exciting software engineering opportunities."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item, index) => (

            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`
                rounded-3xl
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-lg
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(6,182,212,.2)]
                ${item.color}
              `}
            >
              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 break-all">
                {item.value}
              </p>

            </motion.a>

          ))}

        </div>

      </Container>
    </section>
  );
}