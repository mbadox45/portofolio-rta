"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronsDown, Download, Quote } from "lucide-react";
import MoonBackground from "@/components/MoonBackground";
import FloatingIcons from "@/components/FloatingIcons";
import { useEffect, useState } from "react";

export default function Home() {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 1.2, ease: "easeOut" },
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 1, ease: "easeOut" },
        },
    };

    // Typing effect untuk About Me
    const [typedText, setTypedText] = useState("");
    const [doneTyping, setDoneTyping] = useState(false);
    const fullText = "About Me";

    useEffect(() => {
    let i = 0;
    const startTyping = setTimeout(() => {
        const typing = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
                clearInterval(typing);
                setDoneTyping(true);
            }
        }, 150); // kecepatan ketikan
    }, 1000); // delay 1 detik

    return () => clearTimeout(startTyping);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-white bg-gradient-to-b from-sky-950 to-black overflow-hidden">
            {/* Moon Background */}
            <FloatingIcons />
            <MoonBackground />

            {/* Photo */}
            <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="show"
                className="hidden md:absolute top-0 right-0 w-1/2 min-h-screen md:flex flex-col gap-5 items-center justify-center"
            >
                <div className="p-2 rounded-t-full rounded-r-full border-8 border-amber-400 bg-gradient-to-b to-amber-400 from-stone-400">
                    <Image
                        src={"/photo.png"}
                        alt="Rio Teguh Ardiarta"
                        width={300}
                        height={300}
                        className="rounded-r-full rounded-t-full"
                    />
                </div>
            </motion.div>

            {/* Description */}
            <div className="hidden md:absolute top-0 w-2/3 pl-40 pr-40 text-justify font-michroma min-h-screen md:flex flex-col gap-6 justify-center">
                {/* Typing Effect */}
                <span
                className="text-4xl uppercase font-bold font-michroma"
                style={{
                    textShadow: `
                    2px 2px 0 #1e3a8a,   /* sky-900 */
                    4px 4px 0 #1c1917,   /* stone-900 */
                    6px 6px 0 #0a0a0a    /* black */
                    `,
                }}
                >
                    {typedText}
                    {!doneTyping && <span className="animate-pulse">|</span>}
                </span>

                {/* Paragraf dengan animasi smooth */}
                <motion.p
                variants={fadeInLeft}
                initial="hidden"
                animate="show"
                className="p-6 rounded-lg bg-white/60 border-2 border-amber-400 
                            text-stone-800 font-medium leading-relaxed relative backdrop-blur-sm"
                >
                    <Quote
                        size={30}
                        className="absolute -top-3 -left-3 text-stone-100"
                    />
                    <span>
                        Software Engineer with 5+ years of experience in end-to-end application development supporting core business operations. Skilled in requirement analysis, system architecture, frontend and backend development, API integration, deployment, and production-level maintenance. Strong expertise in server and database management, application security standards, and cross-functional collaboration to ensure stable, secure, and reliable system performance.
                    </span>
                    <Quote
                        size={30}
                        className="absolute -bottom-3 -right-3 text-stone-100"
                    />
                </motion.p>


                {/* Signature */}
                <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="show"
                className="flex w-full items-center gap-3"
                >
                    <span className="p-1 w-1/2 bg-amber-400 rounded-full"></span>
                    <span className="text-amber-400 uppercase font-bold w-full text-center">
                        Rio Teguh Ardiarta
                    </span>
                    <span className="p-1 w-1/2 bg-amber-400 rounded-full"></span>
                </motion.div>
            </div>

            {/* Mobile View */}

            <div className="md:hidden absolute top-0 w-full flex flex-col gap-6 items-center justify-center px-5 pt-18">
                <span
                className="text-3xl md:text-4xl uppercase font-bold font-michroma"
                style={{
                    textShadow: `
                    2px 2px 0 #1e3a8a,   /* sky-900 */
                    4px 4px 0 #1c1917,   /* stone-900 */
                    6px 6px 0 #0a0a0a    /* black */
                    `,
                }}
                >
                    {typedText}
                    {!doneTyping && <span className="animate-pulse">|</span>}
                </span>

                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate="show"
                    className="w-1/2 flex flex-col gap-5 items-center justify-center"
                >
                    <div className="p-2 rounded-t-full rounded-r-full border-4 border-amber-400 bg-gradient-to-b to-amber-400 from-stone-400">
                        <Image
                            src={"/photo.png"}
                            alt="Rio Teguh Ardiarta"
                            width={250}
                            height={250}
                            className="rounded-r-full rounded-t-full"
                        />
                    </div>
                </motion.div>

                <div className="w-full text-justify font-michroma flex flex-col gap-3 justify-center">
                    {/* Signature */}
                    <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="show"
                    className="flex w-full items-center gap-3"
                    >
                        <span className="p-[1px] w-1/2 bg-amber-400 rounded-full"></span>
                        <span className="text-[9px] md:text-md text-amber-400 uppercase font-bold w-full text-center">
                            Rio Teguh Ardiarta
                        </span>
                        <span className="p-[1px] w-1/2 bg-amber-400 rounded-full"></span>
                    </motion.div>

                    {/* Paragraf dengan animasi smooth */}
                    <motion.p
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="show"
                    className="p-4 rounded-lg bg-white/60 border-2 border-amber-400 
                                text-stone-800 font-medium leading-relaxed relative backdrop-blur-sm"
                    >
                        <Quote
                            size={20}
                            className="absolute -top-3 -left-3 text-stone-100"
                        />
                        <span className="text-[9px] md:text-md">
                            Software Engineer with 5+ years of experience in end-to-end application development supporting core business operations. Skilled in requirement analysis, system architecture, frontend and backend development, API integration, deployment, and production-level maintenance. Strong expertise in server and database management, application security standards, and cross-functional collaboration to ensure stable, secure, and reliable system performance.
                        </span>
                        <Quote
                            size={20}
                            className="absolute -bottom-3 -right-3 text-stone-100"
                        />
                    </motion.p>

                </div>
            </div>
        </section>
    );
}
