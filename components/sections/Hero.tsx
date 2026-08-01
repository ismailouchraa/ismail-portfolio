"use client";

import HeroContent from "../hero/HeroContent";
import HeroImage from "../hero/HeroImage";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-20
            left-20
            w-96
            h-96
            rounded-full
            bg-cyan-500/10
            blur-[120px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-10
            right-10
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
            animate-pulse
          "
        />

      </div>

      <Container>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}