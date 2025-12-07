"use client";
import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";
import Image from "next/image";

export default function Skill() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.15, // biar muncul satu-satu lembut
      },
    },
  };

  // 💡 Efek spring bounce alami
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 160, // makin tinggi makin "mantul"
        damping: 10,    // makin kecil makin lentur
        mass: 0.6,      // menambah efek lembut
        bounce: 0.45,   // tambahan bounce efek
      },
    },
  };

  const languageStack = [
    { name: "HTML 5", icon: "/logo/skill/languages/html.png" },
    { name: "CSS3", icon: "/logo/skill/languages/css.png" },
    { name: "JavaScript", icon: "/logo/skill/languages/javascript.png" },
    { name: "PHP", icon: "/logo/skill/languages/php.png" },
    { name: "Python", icon: "/logo/skill/languages/python.png" },
    { name: "C++", icon: "/logo/skill/languages/c++.png" },
    { name: "TypeScript", icon: "/logo/skill/typescript.png" },
    { name: "React", icon: "/logo/skill/react.png" },
    { name: "Vue JS", icon: "/logo/skill/vuejs.png" },
    { name: "Next.js", icon: "/logo/skill/nextjs.png" },
    { name: "Node.js", icon: "/logo/skill/nodejs.png" },
    { name: "Tailwind CSS", icon: "/logo/skill/tailwindcss.png" },
    { name: "Bootstrap", icon: "/logo/skill/languages/bootstrap.png" },
    { name: "Laravel", icon: "/logo/skill/languages/laravel.png" },
    { name: "CodeIgniter", icon: "/logo/skill/languages/codeigniter.webp" },
  ];

  const databasesStack = [
    { name: "PostgreSQL", icon: "/logo/skill/postgresql.png" },
    { name: "MySQL", icon: "/logo/skill/mysql.png" },
    { name: "SQLite", icon: "/logo/skill/sqlite.png" },
    { name: "Git", icon: "/logo/skill/github.png" },
    { name: "Docker", icon: "/logo/skill/docker.png" },
    { name: "Postman", icon: "/logo/skill/postman.png" },
    { name: "Nginx", icon: "/logo/skill/languages/nginx.webp" },
    { name: "Apache", icon: "/logo/skill/languages/apache.png" },
    { name: "CentOS", icon: "/logo/skill/languages/centos.webp" },
    { name: "Ubuntu", icon: "/logo/skill/languages/ubuntu.png" },
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

  const TooltipItem = ({ name, icon, size = 45 }) => (
    <div className="group relative flex flex-col items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-amber-500/20 transition-all cursor-pointer">
      <Image src={icon} alt={name} width={size} height={size} />
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

      <div className="hidden md:absolute text-white top-0 w-full px-45 font-michroma min-h-screen md:flex flex-col gap-14 justify-center">
        {/* Title */}
        <motion.span
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 8,
            delay: 0.4,
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
          className="grid grid-cols-1 gap-10"
        >
          {/* Tech Stack */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl w-full p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Languages & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languageStack.map((skill, i) => (
                <TooltipItem key={i} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl w-full p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Databases & Tech Stack
            </h3>
            <div className="flex justify-between gap-4">
              {databasesStack.map((db, i) => (
                <TooltipItem key={i} {...db} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden absolute text-white top-0 w-full px-7 font-michroma min-h-screen flex flex-col gap-6 justify-center">
        {/* Title */}
        <motion.span
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 8,
            delay: 0.4,
          }}
          className="text-3xl md:text-6xl uppercase font-bold font-suse inline-block"
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
          className="grid grid-cols-1 gap-6"
        >
          {/* Tech Stack */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-md font-bold mb-4 text-amber-400">
              Languages & Frameworks
            </h3>
            <div className="flex flex-wrap justify-between gap-4">
              {languageStack.map((skill, i) => (
                <TooltipItem key={i} {...skill} size={22} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <h3 className="text-md font-bold mb-4 text-amber-400">
              Databases & Tech Stack
            </h3>
            <div className="flex flex-wrap justify-between gap-4">
              {databasesStack.map((db, i) => (
                <TooltipItem key={i} {...db} size={22} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
