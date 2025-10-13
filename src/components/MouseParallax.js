"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update ukuran window setelah mount
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  // Default: biar ga error sebelum window size ter-set
  const translateX1 = useTransform(x, [0, windowSize.width || 1], [-50, 50]);
  const translateY1 = useTransform(y, [0, windowSize.height || 1], [-50, 50]);

  const translateX2 = useTransform(x, [0, windowSize.width || 1], [50, -50]);
  const translateY2 = useTransform(y, [0, windowSize.height || 1], [50, -50]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1 */}
      <motion.div
        style={{ x: translateX1, y: translateY1 }}
        className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -top-40 -left-40"
      />

      {/* Layer 2 */}
      <motion.div
        style={{ x: translateX2, y: translateY2 }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-40 right-40"
      />
    </div>
  );
}
