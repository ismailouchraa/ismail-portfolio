"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../skills/SkillCard";

import { skillCategories } from "@/constants/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#050816] text-white"
    >
      <Container>

        <SectionTitle
          subtitle="MY SKILLS"
          title="Technical Skills"
          description="Technologies, frameworks and tools I use to build modern, scalable and intelligent software solutions."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category) => (

            <SkillCard
              key={category.title}
              title={category.title}
              level={category.level}
              skills={category.skills}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}