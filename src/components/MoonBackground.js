"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function MoonBackground() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
        x.set(e.clientX / window.innerWidth - 0.5);
        y.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    const moonX = useTransform(x, [-0.5, 0.5], [-20, 20]);
    const moonY = useTransform(y, [-0.5, 0.5], [-20, 20]);

    const moon = [
        { size: 1500, opa: 20, bg: 10 },
        { size: 1200, opa: 30, bg: 20 },
        { size: 900, opa: 40, bg: 30 },
        { size: 600, opa: 10, bg: 40 },
    ];

    return (
        <section className="relative w-full min-h-screen">
            {/* Moon Background */}
            <motion.div className="absolute top-1/2 left-1/4" style={{ x: moonX, y: moonY }}>
                {moon.map((bln, id) => (
                <div
                    key={id}
                    className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                    width: `${bln.size}px`,
                    height: `${bln.size}px`,
                    opacity: bln.opa / 100,
                    background: `rgba(255,255,255,${bln.bg / 100})`,
                    }}
                />
                ))}
            </motion.div>
        </section>
    );
}
