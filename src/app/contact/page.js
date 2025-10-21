"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import MoonBackground from "@/components/MoonBackground";
import FloatingIcons from "@/components/FloatingIcons";
import { useEffect, useState } from "react";

export default function Contact() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 1.2, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-amber-950 to-black overflow-hidden">
      {/* Moon Background */}
      <FloatingIcons />
      <MoonBackground />

      {/* WhatsApp & Email */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate="show"
        className="lg:absolute hidden top-0 right-0 w-1/2 min-h-screen lg:flex flex-col gap-10 items-center justify-center"
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/6281388375266"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="flex flex-col justify-center items-center gap-1 text-[#25D366] hover:text-white transition-all duration-300"
        >
          <Image
                src={"/logo/contact/whatsapp.png"}
                alt="WhatsApp"
                width={80}
                height={80}
                className="rounded-r-full rounded-t-full"
            />
          <span className="text-xl font-semibold">WhatsApp</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:rioteguhard@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="flex flex-col justify-center items-center gap-1 text-[#EA4335] hover:text-white transition-all duration-300"
        >
          <Image
                src={"/logo/contact/gmail.png"}
                alt="Gmail"
                width={80}
                height={80}
                className=""
            />
          <span className="text-xl font-semibold">Email</span>
        </motion.a>

        <motion.a
          href="mailto:rioteguhard@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="flex flex-col justify-center items-center gap-1 text-[#5865F2] hover:text-white transition-all duration-300"
        >
          <Image
                src={"/logo/contact/discord.png"}
                alt="Gmail"
                width={80}
                height={80}
                className=""
            />
          <span className="text-xl font-semibold">Discord</span>
        </motion.a>
      </motion.div>

      {/* Description */}
      <div className="absolute top-0 w-2/3 pl-40 pr-40 text-justify font-michroma min-h-screen flex flex-col gap-6 justify-center">
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
          Contact Me
        </motion.span>

        {/* Animated Typing Paragraph */}
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          animate="show"
          className="rounded-lg text-stone-200 font-medium leading-relaxed relative backdrop-blur-sm"
        >
          <TypingParagraph />
        </motion.p>
      </div>
    </section>
  );
}

// Komponen Typing Paragraph — efek mengetik berulang
function TypingParagraph() {
  const fullText = `If you have any questions or would like to learn more. About work, collaborations, or business opportunities. Feel free to contact me through the platforms below.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 20 : 40; // kecepatan ketik & hapus
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (index === fullText.length) {
        // jeda sebelum menghapus
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (index === 0 && isDeleting) {
        // ulang dari awal
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <span className="text-gray-300 max-w-2xl text-justify block whitespace-pre-line">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
