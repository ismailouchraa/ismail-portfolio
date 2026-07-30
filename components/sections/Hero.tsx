"use client";

import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";

export default function Hero() {
  return (
   <section
  className="relative min-h-[90vh] overflow-hidden bg-[#050816] text-white flex items-center"
>
      {/* Background Glow */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
}