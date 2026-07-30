"use client";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-12">

      <button
        className="
          px-8 py-4
          rounded-xl
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
        Download CV
      </button>

      <button
        className="
          px-8 py-4
          rounded-xl
          border-2
          border-cyan-500
          hover:bg-cyan-500
          hover:scale-105
          transition-all
          duration-300
          font-semibold
        "
      >
        View Projects
      </button>

    </div>
  );
}