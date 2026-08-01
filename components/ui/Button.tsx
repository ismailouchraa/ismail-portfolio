interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button
      className="
      px-8
      py-4
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
      {children}
    </button>
  );
}