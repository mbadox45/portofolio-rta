"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ganti loadFull ke loadSlim

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        // loadSlim lebih ringan, cukup buat efek dasar
        await loadSlim(engine);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 },
            },
            },
            particles: {
                color: { value: "#60a5fa" }, // biru muda (Tailwind: blue-400)
                links: {
                    color: "#60a5fa",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: { enable: true, speed: 1.5 },
                number: { value: 60, density: { enable: true, area: 800 } },
                opacity: { value: 0.4 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
        />
    );
}
