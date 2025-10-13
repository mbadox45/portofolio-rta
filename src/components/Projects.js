"use client";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        { title: "Portfolio Website", desc: "Next.js + Tailwind + Motion" },
        { title: "ERP System", desc: "Vue + Node.js + PostgreSQL" },
        { title: "E-Commerce", desc: "Next.js Fullstack + Midtrans" },
    ];

    return (
        <section className="py-20 bg-black text-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-400 mb-10">My Projects</h2>
                <div className="space-y-12">
                {projects.map((p, i) => (
                    <Parallax speed={i % 2 === 0 ? -5 : 5} key={i}>
                    <motion.div
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl bg-gray-800 shadow-lg hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                        <p className="text-gray-400">{p.desc}</p>
                    </motion.div>
                    </Parallax>
                ))}
                </div>
            </div>
        </section>
    );
}
