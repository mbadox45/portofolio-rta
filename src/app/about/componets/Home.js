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
                className="absolute top-0 right-0 w-1/2 min-h-screen flex flex-col gap-5 items-center justify-center"
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
                <motion.button variants={fadeInRight} type="button">
                <a
                    href={`https://drive.google.com/file/d/125oy2zWomyj6HpKKy-hcc7J0vn2UTW9l/view?usp=sharing`}
                    target="_blank"
                    className="group relative overflow-hidden flex items-center gap-2 px-5 py-3 
                    border-2 cursor-pointer border-white font-bold uppercase text-white"
                >
                    <span className="absolute inset-0 bg-white border-2 border-white translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    Download CV
                    </span>
                    <Download size={25} className="relative group-hover:text-black" />
                </a>
                </motion.button>
            </motion.div>

            {/* Description */}
            <div className="absolute top-0 w-2/3 pl-40 pr-40 text-justify font-michroma min-h-screen flex flex-col gap-6 justify-center">
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
                        As a Software Engineer with over 4 years of experience, I have
                        successfully completed more than 4 application projects for various
                        companies, including PT Industri Nabati Lestari. My expertise
                        encompasses all aspects of web and application development, ranging
                        from frontend to backend. I am committed to continuously innovating
                        and delivering high-quality applications that meet corporate needs,
                        while consistently updating my knowledge and adopting the latest
                        technologies in the industry.
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
                
                {/* Button Direct to Section Skills */}
                {/* <div className="absolute bottom-0 pb-3 w-full flex justify-center">
                    <motion.div
                    onClick={() => {
                        const skillsSection = document.getElementById("skills");
                        if (skillsSection) {
                        skillsSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0, -8, 0] }} // pola mantul
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col w-auto gap-1 items-center cursor-pointer animate-pulse"
                    >
                        <span className="font-montserrat font-semibold text-sm uppercase text-white">
                            Skills
                        </span>
                        <ChevronsDown size={40} className="text-amber-400" />
                    </motion.div>
                </div> */}
            </div>
        </section>
    );
}
