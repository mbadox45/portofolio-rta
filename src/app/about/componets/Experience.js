"use client";
import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";
import Image from "next/image";

export default function Experience() {
    // Variants untuk parent container
    const containerVariants = {
        hidden: {},
        show: {
        transition: {
            delayChildren: 1, // delay 1 detik sebelum card pertama muncul
            staggerChildren: 0.3, // jeda antar card
        },
        },
    };

    // Variants untuk card animasi
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -3 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 12,
            },
        },
    };

    // Data pengalaman kerja
    const experiences = [
        {
            role: "Software Engineer",
            company: "PT Industri Nabati Lestari",
            date: "Dec 2021 - Now",
            logo: "/logo/experience/inl.png",
        },
        {
            role: "Full Stack Developer",
            company: "PT Indonesia Comnets Plus",
            date: "Jul 2019 - Dec 2021",
            logo: "/logo/experience/iconplus.png",
        },
        {
            role: "IT Helpdesk ATS",
            company: "PT Infomedia Solusi Humanika",
            date: "Oct 2018 - Jul 2019",
            logo: "/logo/experience/ish.png",
        },
        {
            role: "OSS Engineer",
            company: "PT Global One Solusindo",
            date: "Mar 2018 - Sep 2018",
            logo: "/logo/experience/g1.jpeg",
        },
    ];

    return (
        <section
        id="experience"
        className="relative w-full min-h-screen bg-gradient-to-b from-sky-950 to-gray-600 overflow-hidden"
        >
            <FloatingIcons />

            {/* Description */}
            <div className="absolute top-0 w-full pl-40 pr-40 font-michroma min-h-screen flex flex-col gap-10 justify-center">
                {/* Title Animation */}
                <motion.span
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 8,
                    delay: 0.5,
                }}
                className="text-6xl uppercase font-bold font-suse inline-block"
                style={{
                    textShadow: `
                    2px 2px 0 #1e3a8a,   
                    4px 4px 0 #1c1917,   
                    6px 6px 0 #0a0a0a    
                    `,
                }}
                >My Experiences</motion.span>

                {/* Experience List dengan stagger */}
                <motion.div
                className="grid grid-cols-2 gap-6 mt-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                >
                {experiences.map((exp, i) => (
                    <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{
                        scale: 1.07,
                        boxShadow: "0px 12px 30px rgba(0,0,0,0.5)",
                        transition: { type: "spring", stiffness: 500, damping: 12 },
                    }}
                    className="p-6 rounded-lg bg-black/80 border-2 border-amber-500 
                                text-stone-200 font-medium leading-relaxed shadow-xl flex flex-col gap-3 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={70}
                            height={70}
                            className="rounded-md object-contain bg-white p-2"
                            />
                            <div>
                                <h3 className="text-lg font-bold">{exp.role}</h3>
                                <p className="text-sm">{exp.company}</p>
                            </div>
                        </div>
                        <span className="text-xs text-stone-400">{exp.date}</span>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}
