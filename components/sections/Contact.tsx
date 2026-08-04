"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
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
          description="Have an idea, project or opportunity? Feel free to contact me."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-6"
          >

            <div className="rounded-3xl bg-white/5 border border-cyan-500/20 p-6">

              <div className="flex items-center gap-4">

                <Mail className="text-cyan-400" size={28} />

                <div>
                  <p className="text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:ismailouchraa.20@gmail.com"
                    className="text-xl font-semibold hover:text-cyan-400"
                  >
                    ismailouchraa.20@gmail.com
                  </a>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white/5 border border-cyan-500/20 p-6">

              <div className="flex items-center gap-4">

                <Phone className="text-cyan-400" size={28} />

                <div>
                  <p className="text-gray-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/212667112916"
                    target="_blank"
                    className="text-xl font-semibold hover:text-cyan-400"
                  >
                    +212 667 112 916
                  </a>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white/5 border border-cyan-500/20 p-6">

              <div className="flex items-center gap-4">

                <MapPin className="text-cyan-400" size={28} />

                <div>

                  <p className="text-gray-400">
                    Location
                  </p>

                  <h3 className="text-xl font-semibold">
                    Morocco
                  </h3>

                </div>

              </div>

            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/ismailouchraa"
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 border border-cyan-500/20 hover:bg-cyan-500 transition"
              >
               <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/ismail-ouchraa-9ba655288"
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 border border-cyan-500/20 hover:bg-cyan-500 transition"
              >
               <FaLinkedin size={28} />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl bg-white/5 border border-cyan-500/20 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl bg-white/5 border border-cyan-500/20 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl bg-white/5 border border-cyan-500/20 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message..."
              className="w-full rounded-2xl bg-white/5 border border-cyan-500/20 px-5 py-4 outline-none resize-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="
                px-8
                py-4
                rounded-2xl
                bg-cyan-500
                hover:bg-cyan-400
                hover:scale-105
                transition-all
                duration-300
                font-semibold
                shadow-lg
                shadow-cyan-500/30
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </Container>
    </section>
  );
}