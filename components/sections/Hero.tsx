"use client";

import HeroContent from "../hero/HeroContent";
import HeroImage from "../hero/HeroImage";
import HeroSpotlight from "../hero/HeroSpotlight";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#050816]
        text-white
        flex
        items-center
        pt-24
        lg:pt-12
      "
    >
      {/* Animated Spotlight */}

      <HeroSpotlight />

      {/* Grid Background */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Background Blur */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/10
          blur-[170px]
        "
      />

      <Container>

        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-2
            items-center
            gap-20
          "
        >
          <HeroContent />

          <HeroImage />
        </div>

      </Container>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          bg-gradient-to-b
          from-transparent
          to-[#08101f]
        "
      />
    </section>
  );
}