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
    icon: <FaEnvelope size={32} />,
    title: "Email",
    value: "ismailouchraa.20@gmail.com",
    link: "mailto:ismailouchraa.20@gmail.com",
    action: "Send Email",
    color: "hover:text-red-400",
  },
  {
    icon: <FaWhatsapp size={32} />,
    title: "WhatsApp",
    value: "+212 667 112 916",
    link: "https://wa.me/212667112916",
    action: "Chat on WhatsApp",
    color: "hover:text-green-400",
  },
  {
    icon: <FaGithub size={32} />,
    title: "GitHub",
    value: "github.com/ismailouchraa",
    link: "https://github.com/ismailouchraa",
    action: "View Projects",
    color: "hover:text-cyan-400",
  },
  {
    icon: <FaLinkedin size={32} />,
    title: "LinkedIn",
    value: "linkedin.com/in/ismail-ouchraa",
    link: "https://www.linkedin.com/in/ismail-ouchraa-9ba655288",
    action: "Visit Profile",
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
          title="Let's Work Together"
          description="I'm always open to discussing new opportunities, innovative projects and collaborations. Feel free to reach out through any of the platforms below."
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
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`
                group
                cursor-pointer
                rounded-3xl
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:border-cyan-400
                hover:shadow-[0_0_60px_rgba(6,182,212,.35)]
                ${item.color}
              `}
            >

              <div
                className="
                  text-cyan-400
                  mb-6
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:rotate-6
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 break-all">
                {item.value}
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-cyan-400
                  font-semibold
                "
              >
                <span>{item.action}</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>

              </div>

            </motion.a>

          ))}

        </div>

      </Container>
    </section>
  );
}