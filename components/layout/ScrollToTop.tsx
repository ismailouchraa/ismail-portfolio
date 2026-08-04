"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-8
        right-8
        h-14
        w-14
        rounded-full
        bg-cyan-500
        hover:bg-cyan-400
        shadow-lg
        shadow-cyan-500/40
        transition
        z-50
        flex
        items-center
        justify-center
      "
    >
      <ChevronUp />
    </button>
  );
}