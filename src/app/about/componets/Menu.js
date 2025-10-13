"use client";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <section
      className="fixed flex flex-col items-center gap-10 h-screen right-0 bottom-0 w-1/7 justify-center z-20"
    >
      {/* Label menu di atas */}
      {/* <div className="flex flex-col items-center gap-3 mb-6">
        <span className="text-amber-600 font-semibold text-sm">About</span>
        <span className="text-amber-600 font-semibold text-sm">Skill</span>
        <span className="text-amber-600 font-semibold text-sm">Experience</span>
      </div> */}

      {/* Dot Menu */}
      <div className="flex flex-col items-center gap-10">
        {/* About */}
        <motion.div
          whileHover={{ width: "3.5rem" }}
          transition={{ duration: 0.3 }}
          placeholder="About"
          className="w-2 h-2 p-2 cursor-pointer 
                     border-2 border-amber-400 hover:bg-amber-400 
                     rounded-2xl transition-all duration-300"
        ></motion.div>

        {/* Skill */}
        <motion.div
          whileHover={{ width: "3.5rem" }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 p-2 cursor-pointer 
                     border-2 border-amber-400 hover:bg-amber-400 
                     rounded-2xl transition-all duration-300"
        ></motion.div>

        {/* Experience */}
        <motion.div
          whileHover={{ width: "3.5rem" }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 p-2 cursor-pointer 
                     border-2 border-amber-400 hover:bg-amber-400 
                     rounded-2xl transition-all duration-300"
        ></motion.div>
      </div>
    </section>
  );
}
