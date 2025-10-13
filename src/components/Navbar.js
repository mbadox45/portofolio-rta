"use client";
import { Github, Instagram, Linkedin, Menu, SquareMenu } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX / window.innerWidth - 0.5);
            y.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    const moonX = useTransform(x, [-0.5, 0.5], [-20, 20]);
    const moonY = useTransform(y, [-0.5, 0.5], [-20, 20]);

    return (
        <nav className="absolute top-0 left-0 w-full">
            {/* <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="w-full absolute h-screen"
            >
                <motion.div variants={sidebarVariants} className="w-full absolute h-screen top-0 bg-white z-30" style={{ x: moonX, y: moonY }}></motion.div>
                <Navigation />
            </motion.nav> */}
            <div className="absolute w-full px-40 mx-auto py-6 flex justify-between items-center">
                <a href={process.env.NEXT_PUBLIC_URL_HOME || "/"} >
                    <span className="text-xl font-bold font-michroma cursor-pointer transition-all duration-150 hover:text-stone-300">rtardiarta</span>
                </a>
                <div className="space-x-12 font-bold text-white flex items-center">
                    <a href={`https://www.instagram.com/rtardiarta/profilecard/?igsh=bWM0a3dvOWZxbXgx`} target="_blank">
                        <Instagram size={25} className=" cursor-pointer transition-all duration-150 hover:text-stone-300" />
                    </a>
                    <a href={`https://www.linkedin.com/in/rio-teguh-ardiarta-52a021116/`} target="_blank">
                        <Linkedin size={25} className=" cursor-pointer transition-all duration-150 hover:text-stone-300" />
                    </a>
                    <a href={`https://github.com/mbadox45/`} target="_blank">
                        <Github size={25} className=" cursor-pointer transition-all duration-150 hover:text-stone-300" />
                    </a>
                    {/* <button className="cursor-pointer group">
                        <Image src={`/logo/uk.jpg`} width={35} height={35} alt="UK" className="border border-white rounded-lg opacity-50 transition-all duration-300 group-hover:opacity-85"/>
                    </button> */}
                    {/* <MenuToggle toggle={() => setIsOpen(!isOpen)} /> */}
                    <Menu size={40} onClick={() => setIsOpen(!isOpen)} className="ml-15 p-2 rounded-full bg-white text-stone-900 cursor-pointer transition-all duration-500 font-bold hover:text-sky-900 hover:rotate-180" />
                </div>
            </div>
        </nav>
    );
}

const Navigation = () => (
    <motion.ul style={list} variants={navVariants} className="z-50 fixed">
        {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const MenuItem = ({ i }) => {
    const border = `2px solid ${colors[i]}`;
    return (
        <motion.li
        style={listItem}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
            <div style={{ ...iconPlaceholder, border }} />
            <div style={{ ...textPlaceholder, border }} />
        </motion.li>
    );
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button style={toggleContainer} onClick={toggle} className="flex justify-center items-center z-50">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

const background = {
  backgroundColor: "#f5f5f5",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
};
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(5px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const nav = {
  width: 300,
};
const iconPlaceholder = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
};
const textPlaceholder = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const list = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: 230,
};
const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const toggleContainer = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
};