"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ganti loadFull → loadSlim
import { useCallback } from "react";

export default function ParticlesShapes() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // lebih aman di Next.js 15
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#ffffff", "#00ffff", "#ff00ff", "#00ff99"] },
          shape: {
            type: ["circle", "triangle", "star", "polygon"],
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 3, max: 8 },
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "out" },
            parallax: { enable: true, force: 60, smooth: 10 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 120 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
