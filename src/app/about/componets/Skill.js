"use client";
import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";
import Image from "next/image";

export default function Skill() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

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

  const skillStack = [
    { name: "HTML 5", icon: "/logo/skill/html.png" },
    { name: "PHP", icon: "/logo/skill/php.png" },
    { name: "Tailwind CSS", icon: "/logo/skill/tailwindcss.png" },
    { name: "JavaScript", icon: "/logo/skill/javascript.png" },
    { name: "TypeScript", icon: "/logo/skill/typescript.png" },
    { name: "React", icon: "/logo/skill/react.png" },
    { name: "Vue JS", icon: "/logo/skill/vuejs.png" },
    { name: "Next.js", icon: "/logo/skill/nextjs.png" },
    { name: "Node.js", icon: "/logo/skill/nodejs.png" },
  ];

  const databases = [
    { name: "PostgreSQL", icon: "/logo/skill/postgresql.png" },
    { name: "MySQL", icon: "/logo/skill/mysql.png" },
    { name: "SQLite", icon: "/logo/skill/sqlite.png" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "/logo/skill/problem.png" },
    { name: "Teamwork", icon: "/logo/skill/teamwork.png" },
    { name: "Communication", icon: "/logo/skill/communication.png" },
    { name: "Creativity", icon: "/logo/skill/creativity.png" },
  ];

  const tools = [
    { name: "Git", icon: "/logo/skill/github.png" },
    { name: "Docker", icon: "/logo/skill/docker.png" },
    { name: "Postman", icon: "/logo/skill/postman.png" },
  ];

  // Helper komponen tooltip item
  const TooltipItem = ({ name, icon, size = 45 }) => (
    <div className="group relative flex flex-col items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all cursor-pointer">
      <Image src={icon} alt={name} width={size} height={size} />
      {/* Tooltip */}
      <span
        className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 z-50 bg-black/80 text-white text-xs 
        px-3 py-1 rounded opacity-0 translate-y-2 group-hover:opacity-100 
        group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap pointer-events-none shadow-md"
      >
        {name}
      </span>
    </div>
  );

  return (
    <section
      id="skill"
      className="relative w-full min-h-screen bg-gradient-to-b from-sky-950 to-gray-600 overflow-hidden"
    >
      <FloatingIcons />

      <div className="absolute text-white top-0 w-full px-45 font-michroma min-h-screen flex flex-col gap-14 justify-center">
        {/* Title */}
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
        >
          Skills
        </motion.span>

        {/* Skills Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* Tech Stack */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl col-span-3 p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-between gap-4">
              {skillStack.map((skill, i) => (
                <TooltipItem key={i} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Databases
            </h3>
            <div className="flex justify-between gap-4">
              {databases.map((db, i) => (
                <TooltipItem key={i} {...db} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Soft Skills
            </h3>
            <div className="flex justify-between gap-4">
              {softSkills.map((skill, i) => (
                <TooltipItem key={i} {...skill} size={40} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Tools</h3>
            <div className="flex justify-between gap-4">
              {tools.map((tool, i) => (
                <TooltipItem key={i} {...tool} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
