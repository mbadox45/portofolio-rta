"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingIcons from "@/components/FloatingIcons";
import MoonBackground from "@/components/MoonBackground";

const projects = [
    {
        id: 1,
        title: "Dashboard INL EDGE",
        image: "/portofolio/dashboard.png",
        description: "A dashboard application designed to comprehensively monitor company performance, supporting strategic decision-making by the management.",
        url: "/project/1"
    },
    {
        id: 2,
        title: "Assets Management",
        image: "/portofolio/asmen.png",
        description: "Asmen is an asset management application used to monitor the lifespan and book value of assets.",
        url: "/project/3"
    },
    {
        id: 3,
        title: "Attandance Canteen",
        image: "/portofolio/kantin.png",
        description: "Attandance Canteen is a canteen attendance recording application used to log employee presence during meals at the canteen by utilizing ID Cards and RFID Reader devices.",
        url: "/project/4"
    },
    {
        id: 4,
        title: "Survey Distributor",
        image: "/portofolio/survey.png",
        description: "Survey is an application used to measure the satisfaction of customers or distributors who have partnered with PT Industri Nabati Lestari, in order to assess the level of satisfaction with both bulk products and packaged cooking oil products.",
        url: "/project/5"
    },
    {
        id: 5,
        title: "Daico (Daily Inventory Cost)",
        image: "/projects/warehouse.png",
        description: "Daico is a Trading Dashboard application developed for PT Industri Nabati Lestari, aimed at monitoring production HPP costing reports, tracking updates on CPO price developments, market value & levy duty, as well as evaluating retail and production performance based on the company’s budget (RKAP) and actual realization.",
        url: "/project/2"
    },
];

function ProjectCard({ image, title, description, url }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="snap-center flex-shrink-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 
                       rounded-2xl p-5 flex flex-col items-center text-center shadow-lg 
                       hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
        >
            <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="rounded-xl mb-4"
            />
            <h3 className="text-lg font-bold text-amber-400">{title}</h3>
            <p className="text-gray-300 text-sm mt-2 line-clamp-3">{description}</p>

            <a
                href={url}
                className="mt-4 px-4 py-2 rounded-lg border border-amber-400 text-amber-400 
                           hover:bg-amber-400 hover:text-black transition-all duration-300 
                           text-sm font-semibold"
            >
                View Detail →
            </a>
        </motion.div>
    );
}

export default function Project() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-teal-800 to-black overflow-hidden">
            <FloatingIcons />
            <MoonBackground />

            <div className="absolute top-0 min-h-screen w-full flex flex-col items-center justify-center gap-10">
                <motion.span
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 8,
                    delay: 0.4,
                    }}
                    className="text-4xl md:text-6xl uppercase font-bold font-suse inline-block text-white"
                    style={{
                    textShadow: `
                        2px 2px 0 #1e3a8a,
                        4px 4px 0 #1c1917,
                        6px 6px 0 #0a0a0a
                    `,
                    }}
                >
                    My Projects
                </motion.span>

                {/* SCROLL HORIZONTAL */}
                <div className="w-full px-10 md:px-20">
                    <div
                        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-5"
                    >
                        {projects.map((p) => (
                            <ProjectCard
                                key={p.id}
                                image={p.image}
                                title={p.title}
                                description={p.description}
                                url={p.url}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 md:w-auto w-full md:left-40 py-6 
                           font-exo-2 font-medium text-xs flex gap-1 items-center 
                           md:justify-end justify-center px-5"
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
