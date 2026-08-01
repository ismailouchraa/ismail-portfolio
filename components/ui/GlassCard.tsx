import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-lg
        p-8
        transition-all
        duration-300
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(6,182,212,.25)]
      "
    >
      {children}
    </div>
  );
}