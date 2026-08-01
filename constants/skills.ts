import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiApachemaven,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Maven", icon: SiApachemaven },
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
    ],
  },

  {
    title: "AI & Data Science",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
];