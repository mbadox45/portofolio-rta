"use client";
import { Parallax } from "react-scroll-parallax";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Bug, Code, Sparkles, CodeXml, ArrowRight, Download } from "lucide-react";
import MoonBackground from "@/components/MoonBackground";
import FloatingIcons from "@/components/FloatingIcons";

// Components Cards
import Home from "./componets/Home";
import Skill from "./componets/Skill";
import Experience from "./componets/Experience";
import Menu from "./componets/Menu";

export default function AboutMe() {
    const item = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, delay:1, ease: "easeOut" } },
    };
    return (
        <section className="relative w-full min-h-screen bg-white bg-gradient-to-b from-sky-950 to-black">
            {/* <Home/> */}
            <Skill/>
            {/* <Experience/> */}
            <motion.div
                variants={item}
                className="absolute bottom-0 left-40 py-10 font-exo-2 text-white font-medium text-xs flex gap-1 items-center justify-end"
            >
                <span className="font-bold">rtardiarta</span>
                <span className="font-bold">&copy;</span>
                <span className="font-bold">2025</span>
                <span className="mx-2">|</span>
                <span className="text-amber-400">Powered by Mbadox45</span>
            </motion.div>
            <Menu/>
        </section>
    );
}
