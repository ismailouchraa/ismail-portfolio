"use client";

export default function ParticlesBackground() {
  const particles = Array.from({ length: 28 });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-cyan-400/20 animate-pulse"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
            animationDelay: `${(index % 8) * 0.4}s`,
            animationDuration: `${3 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}