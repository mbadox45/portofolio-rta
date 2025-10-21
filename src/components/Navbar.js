"use client";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkUrl = [
    { name: "Home", link: `${process.env.NEXT_PUBLIC_URL_HOME}` },
    { name: "About", link: `${process.env.NEXT_PUBLIC_URL_HOME}about` },
    { name: "Projects", link: `${process.env.NEXT_PUBLIC_URL_HOME}project` },
    { name: "Contact", link: `${process.env.NEXT_PUBLIC_URL_HOME}contact` },
  ];

  // Efek blur & transparansi saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("bg-stone-900/70", "backdrop-blur-md", "shadow-lg");
      } else {
        navbar.classList.remove("bg-stone-900/70", "backdrop-blur-md", "shadow-lg");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="flex justify-between items-center px-6 md:px-38 py-5">
        {/* Logo */}
        <a
          href={process.env.NEXT_PUBLIC_URL_HOME || "/"}
          className="text-white text-xl font-michroma font-bold hover:text-amber-400 transition-colors duration-200"
        >
          rtardiarta
        </a>

        <div className="flex items-center gap-12">
          {/* Sosial Media */}
          <div className="md:flex gap-12 hidden">
            <motion.a
              whileHover={{ scale: 1.2, color: "#fbbf24" }}
              href="https://www.instagram.com/rtardiarta/profilecard/?igsh=bWM0a3dvOWZxbXgx"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#fbbf24" }}
              href="https://www.linkedin.com/in/rio-teguh-ardiarta-52a021116/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#fbbf24" }}
              href="https://github.com/mbadox45/"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={24} />
            </motion.a>
          </div>

          {/* Tombol Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md flex flex-col justify-center items-center space-y-10 text-white text-lg font-semibold z-50"
          >
            {/* Navigasi pakai mapping */}
            {linkUrl.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, color: "#fbbf24" }}
                transition={{ duration: 0.3 }}
                className="text-3xl"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Garis pemisah */}
            <div className="w-24 border-t border-stone-700 my-4"></div>

            {/* Sosial Media */}
            <div className="flex gap-12 md:hidden">
              <motion.a
                whileHover={{ scale: 1.2, color: "#fbbf24" }}
                href="https://www.instagram.com/rtardiarta/profilecard/?igsh=bWM0a3dvOWZxbXgx"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#fbbf24" }}
                href="https://www.linkedin.com/in/rio-teguh-ardiarta-52a021116/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#fbbf24" }}
                href="https://github.com/mbadox45/"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
