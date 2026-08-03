import { Globe, Monitor } from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaGithub,
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
  SiHtml5,
  SiCss,
  SiFirebase,
  SiRedis,
  SiVercel,
  SiFigma,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Programming",
    level: 90,
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
    level: 90,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },

  {
    title: "Backend",
    level: 88,
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST API", icon: Globe },
      { name: "JWT", icon: Globe },
    ],
  },

  {
    title: "DevOps",
    level: 78,
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Maven", icon: SiApachemaven },
      { name: "Linux", icon: FaLinux },
      { name: "Git", icon: FaGitAlt },
    ],
  },

  {
    title: "Artificial Intelligence",
    level: 82,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Computer Vision", icon: Monitor },
      { name: "Python", icon: FaPython },
    ],
  },

  {
    title: "Databases",
    level: 90,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
    ],
  },

  {
    title: "Tools",
    level: 92,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: Monitor },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux Terminal", icon: FaLinux },
    ],
  },
];