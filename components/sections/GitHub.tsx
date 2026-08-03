"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function GitHub() {
  return (
    <section
  id="github"
  className="py-28 bg-[#08101f] text-white"
>
      <Container>

        <SectionTitle
          subtitle="GITHUB"
          title="Coding Activity"
          description="A quick overview of my GitHub activity, contributions and most used technologies."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          <Image
            src="https://github-readme-stats.vercel.app/api?username=ismailouchraa&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            width={600}
            height={300}
            className="rounded-3xl w-full"
          />

          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ismailouchraa&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top Languages"
            width={600}
            height={300}
            className="rounded-3xl w-full"
          />

        </div>

        <div className="mt-10">

          <Image
            src="https://github-readme-activity-graph.vercel.app/graph?username=ismailouchraa&theme=tokyo-night"
            alt="GitHub Activity"
            width={1200}
            height={350}
            className="rounded-3xl w-full"
          />

        </div>

      </Container>
    </section>
  );
}v
