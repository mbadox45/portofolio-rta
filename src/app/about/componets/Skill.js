"use client";
import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";
import Image from "next/image";

export default function Skill() {
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

  // Data Skill Stack
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

  // Data Database (RDBMS)
  const databases = [
    { name: "PostgreSQL", icon: "/logo/skill/postgresql.png" },
    { name: "MySQL", icon: "/logo/skill/mysql.png" },
    { name: "SQLite", icon: "/logo/skill/sqlite.png" },
  ];

  // Data Soft Skill
  const softSkills = [
    { name: "Problem Solving", icon: "/logo/skill/problem.png" },
    { name: "Teamwork", icon: "/logo/skill/teamwork.png" },
    { name: "Communication", icon: "/logo/skill/communication.png" },
    { name: "Creativity", icon: "/logo/skill/creativity.png" },
  ];

  // Data Tools Used
  const tools = [
    { name: "Git", icon: "/logo/skill/github.png" },
    { name: "Docker", icon: "/logo/skill/docker.png" },
    { name: "Postman", icon: "/logo/skill/postman.png" },
  ];

  return (
    <section
      id="skill"
      className="relative w-full min-h-screen bg-gradient-to-b from-sky-950 to-gray-600 overflow-hidden"
    >
      <FloatingIcons />

      {/* Content */}
      <div className="absolute top-0 w-full px-40 font-michroma min-h-screen flex flex-col gap-14 justify-center">
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
        >
          Skills
        </motion.span>

        {/* Skills Section */}
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
              {skillStack.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={45}
                    height={45}
                  />
                  {/* <span className="text-xs">{skill.name}</span> */}
                </div>
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
              {databases.map((db, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all"
                >
                  <Image src={db.icon} alt={db.name} width={45} height={45} />
                  {/* <span>{db.name}</span> */}
                </div>
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
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                  {/* <span>{skill.name}</span> */}
                </div>
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
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={45}
                    height={45}
                  />
                  {/* <span>{tool.name}</span> */}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
