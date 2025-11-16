"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

const backgroundImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1565183966519-514a57ba29a8?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&h=900&fit=crop",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(186, 149, 80, 0.3)",
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background image carousel */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#152731] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Decorative line */}
          <motion.div
            variants={lineVariants}
            className="flex justify-center"
          >
            <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Reimagine Your Space,{" "}
            <span className="text-[#ba9550]">Expert Execution.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Welcome to The Aakar Theory Interior Design Studio.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto"
          >
            Where creativity meets precision, transforming spaces into timeless
            masterpieces.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="inline-block px-8 py-4 rounded-full bg-[#ba9550] text-[#152731] font-semibold text-lg hover:shadow-lg transition-all duration-300 mt-8"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned at section bottom */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 inset-x-0 flex justify-center z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-[#ba9550]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>

      {/* Background carousel indicators - Commented for now */}
      {/* <div className="absolute bottom-20 inset-x-0 flex justify-center gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[#ba9550] w-8"
                : "bg-white/40 hover:bg-white/60 w-2"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
