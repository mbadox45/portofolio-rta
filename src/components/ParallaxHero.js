"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Bug, Code, Sparkles, CodeXml, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ParallaxHero() {
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
    const iconX = useTransform(x, [-0.5, 0.5], [30, -30]);
    const iconY = useTransform(y, [-0.5, 0.5], [-30, 30]);
    const starX = useTransform(x, [-0.5, 0.5], [15, -15]);
    const starY = useTransform(y, [-0.5, 0.5], [-15, 15]);
    const logoX = useTransform(x, [-0.5, 0.5], [-10, 10]);
    const logoY = useTransform(y, [-0.5, 0.5], [-10, 10]);

    const moon = [
        { size: 1500, opa: 20, bg: 10 },
        { size: 1200, opa: 30, bg: 20 },
        { size: 900, opa: 40, bg: 30 },
        { size: 600, opa: 10, bg: 40 },
    ];

    // === VARIANTS UNTUK ANIMASI SEKUENSIAL ===
    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // jeda tiap anak
            delayChildren: 1.8, // biar nunggu transisi PageTransition (1.5s)
        },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, delay:1, ease: "easeOut" } },
    };

    const item2 = {
        hidden: { opacity: 0, y: 0 },
        show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3, delay:1.5, ease:"circOut" } },
    };

    return (
        <section className="absolute w-full h-screen bg-gradient-to-b from-sky-950 to-black overflow-hidden text-white">
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

            {/* Logo */}
            <motion.div variants={item2}
                initial="hidden"
                animate="show" className="absolute w-1/2 h-screen flex items-center justify-center" style={{ x: logoX, y: logoY }}>
                <div
                className="w-[25rem] h-[25rem] opacity-60"
                style={{
                    WebkitMaskImage: "url('/logo/Logo Mbadox.png')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    background: "white",
                    padding: "8px",
                }}
                ></div>
            </motion.div>

            {/* === KONTEN HERO DENGAN STAGGER === */}
            <motion.div
                className="absolute flex flex-col items-end justify-center uppercase h-screen px-40 w-full z-20"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={item} className="text-stone-800 p-2 bg-white flex items-center gap-3">
                    <CodeXml size={20} className="font-bold " />
                    <span className="font-bold font-exo-2">Software Engineer</span>
                </motion.div>

                <motion.div variants={item} className="flex flex-col items-end">
                    <span className="text-white w-full text-right text-[60px] mb-[-20px] font-bold font-michroma italic">
                        Rio Teguh
                    </span>
                    <span className="text-white w-full text-right text-[62px] font-semibold font-michroma italic">
                        Ardiarta
                    </span>
                    <span className="w-2/3 border-b-4 border-amber-500 text-right font-bold">My Portofolio</span>
                    <span className="w-1/3 border-b-4 mt-2 border-amber-500"></span>
                </motion.div>

                <motion.button
                variants={item}
                type="button"
                className=""
                >
                    <a href={`${process.env.NEXT_PUBLIC_URL_HOME}/about` || '/about'} className="group relative overflow-hidden flex items-center gap-2 mt-7 px-5 py-3 
                            border-2 cursor-pointer border-white font-bold uppercase text-white">
                        <span className="absolute inset-0 bg-pink-800 border-2 border-pink-800 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                            About Me
                        </span>
                        <ArrowRight size={25} className="relative group-hover:text-white" />
                    </a>
                </motion.button>
            </motion.div>

            {/* Footer */}
            <motion.div
                variants={item}
                className="absolute bottom-0 left-40 py-10 font-exo-2 font-medium text-xs flex gap-1 items-center justify-end"
            >
                <span className="font-bold">rtardiarta</span>
                <span className="font-bold">&copy;</span>
                <span className="font-bold">2025</span>
                <span className="mx-2">|</span>
                <span className="text-amber-400">Powered by Mbadox45</span>
            </motion.div>
        </section>
    );
}
