"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Components
import Home from "./componets/Home";
import Skill from "./componets/Skill";
import Experience from "./componets/Experience";
import Menu from "./componets/Menu";
import PageTransition from "./componets/PageTransition";

export default function AboutMe() {
  const [selected, setSelected] = useState("home");

  const variants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 10 },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-sky-950 to-black text-white overflow-hidden">
      <div className="h-screen flex items-center justify-center">
        {/* Transisi layer warna */}
        {/* <PageTransition triggerKey={selected}> */}
          <AnimatePresence mode="wait">
            {selected === "home" && (
              <motion.div
                key="home"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <Home />
              </motion.div>
            )}
            {selected === "skill" && (
              <motion.div
                key="skill"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <Skill />
              </motion.div>
            )}
            {selected === "experience" && (
              <motion.div
                key="experience"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <Experience />
              </motion.div>
            )}
          </AnimatePresence>
        {/* </PageTransition> */}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-0 left-40 py-10 font-exo-2 text-white font-medium text-xs flex gap-1 items-center justify-end"
      >
        <span className="font-bold">rtardiarta</span>
        <span className="font-bold">&copy;</span>
        <span className="font-bold">2025</span>
        <span className="mx-2">|</span>
        <span className="text-amber-400">Powered by Mbadox45</span>
      </motion.div>

      {/* Menu */}
      <Menu selected={selected} onSelect={setSelected} />
    </section>
  );
}
