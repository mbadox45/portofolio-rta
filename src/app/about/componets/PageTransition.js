"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, triggerKey }) {
  // Tambah emerald-900 (#064e3b)
  const colors = [
    "#0f0f0f",                      // stone-950
    "oklch(40.8% 0.153 2.432)",     // pink-800
    "oklch(66.6% 0.179 58.318)",    // amber-600
    "#064e3b",                      // emerald-900
  ];

  const container = {
    initial: { x: "0%" },
    animate: {
      x: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 0.25,
      },
    },
    exit: {
      x: "0%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 0.25,
      },
    },
  };

  const layer = {
    initial: { x: "0%" },
    animate: { x: "100%" },
    exit: { x: "0%" },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {children}
      <AnimatePresence mode="wait">
        <motion.div
          key={triggerKey} // setiap kali berubah, animasi diputar
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none"
        >
          {colors.map((color, i) => (
            <motion.div
              key={i}
              variants={layer}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundColor: color,
                zIndex: 50 + (colors.length - i),
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
