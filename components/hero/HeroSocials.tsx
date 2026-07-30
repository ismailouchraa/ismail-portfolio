import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSocials() {
  return (
   <div className="flex gap-6 mt-10 text-3xl">

      <a
        href="https://github.com/ismailouchraa"
        target="_blank"
       className="hover:text-cyan-400 hover:scale-110 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
       className="hover:text-cyan-400 hover:scale-110 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:youremail@example.com"
       className="hover:text-cyan-400 hover:scale-110 transition duration-300"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}