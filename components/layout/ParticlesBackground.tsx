"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        detectRetina: true,

        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              area: 900,
            },
          },

          color: {
            value: "#22d3ee",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.25,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#22d3ee",
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: false,
            },

            onClick: {
              enable: false,
            },

            resize: {
              enable: true,
            },
          },
        },
      }}
    />
  );
}