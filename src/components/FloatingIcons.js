"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Bug, Code, Sparkles } from "lucide-react";

export default function FloatingIcons() {
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

    const iconX = useTransform(x, [-0.5, 0.5], [30, -30]);
    const iconY = useTransform(y, [-0.5, 0.5], [-30, 30]);
    const starX = useTransform(x, [-0.5, 0.5], [15, -15]);
    const starY = useTransform(y, [-0.5, 0.5], [-15, 15]);

    const moon = [
        { size: 1500, opa: 20, bg: 10 },
        { size: 1200, opa: 30, bg: 20 },
        { size: 900, opa: 40, bg: 30 },
        { size: 600, opa: 10, bg: 40 },
    ];

    return (
        <section className="absolute w-full h-screen">
            {/* Floating Icons */}
            <motion.div
                className="absolute w-full h-full flex flex-col gap-12 items-center justify-between py-16"
                style={{ x: iconX, y: iconY }}
            >
                <div className="flex w-full justify-center">
                    <Sparkles size={40} className="text-amber-400 rotate-12" />
                </div>
                <div className="flex w-1/2 justify-between">
                    <Bug size={40} className="text-pink-400 rotate-45" />
                    <Code size={40} className="text-emerald-400 -rotate-12" />
                </div>
            </motion.div>

            {/* Stars */}
            <motion.div className="absolute w-full h-full pointer-events-none" style={{ x: starX, y: starY }}>
                <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full shadow" />
                <div className="absolute top-1/3 right-10 w-2 h-2 bg-white rounded-full shadow" />
                <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-white rounded-full shadow" />
                <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-white rounded-full shadow" />
            </motion.div>
        </section>
    );
}
