"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  // Tambah emerald-900 (#064e3b)
  const colors = [
    "#0f0f0f",                      // stone-950
    "oklch(40.8% 0.153 2.432)",     // pink-800
    "oklch(66.6% 0.179 58.318)",    // amber-600
    "#000000",                      // emerald-900
  ];

  const container = {
    initial: { x: "0%" },
    animate: {
      x: "100%",
      transition: {
        duration: 1.5,        // sedikit lebih lama biar smooth
        ease: "easeInOut",
        staggerChildren: 0.3, // jeda antar layer lebih jelas
      },
    },
    exit: {
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.3,
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
          key={pathname}
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
              transition={{ duration: 1.5, ease: "easeInOut" }}
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
