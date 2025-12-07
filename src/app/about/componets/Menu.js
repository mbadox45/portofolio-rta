"use client";
import { motion } from "framer-motion";

export default function Menu({ selected, onSelect }) {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "skill", label: "Skill" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <section className="fixed flex flex-col md:items-center gap-8 h-screen right-4 md:right-8 bottom-0 md:w-[80px] justify-center z-20">
      <div className="flex flex-col items-center gap-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => onSelect(item.id)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor:
                selected === item.id ? "rgb(251,191,36)" : "transparent",
              borderColor: "rgb(251,191,36)",
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
            }}
            className="w-4 h-4 cursor-pointer border-2 rounded-full flex items-center justify-center"
          >
            <motion.span
              animate={{
                scale: selected === item.id ? [1, 1.4, 1] : 1,
              }}
              transition={{
                repeat: selected === item.id ? 1 : 0,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="block w-2 h-2 rounded-full bg-amber-400"
            ></motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
