"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative line */}
            <motion.div variants={lineVariants}>
              <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            >
              About Us
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              At THE AAKAR THEORY, we are creators of meaningful spaces. Our work goes beyond decoration — we design environments that support the way you live, work, and feel. With a strong focus on clarity, comfort, and craftsmanship, we turn empty spaces into well-designed experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              As a comprehensive interior solution studio, we manage every step of the journey. From the first design idea to the final handover, our team ensures smooth coordination, quality execution, and complete transparency. This one-point approach makes the entire process simple, organised, and stress-free for you.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Our strength lies in understanding people, studying spaces, and shaping designs that balance style with purpose. Every project is a fresh opportunity to build something thoughtful, functional, and timeless.
            </motion.p>

            {/* Stats or highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#ba9550] pl-4">
                <p className="text-3xl font-bold text-[#ba9550]">500+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="border-l-2 border-[#ba9550] pl-4">
                <p className="text-3xl font-bold text-[#ba9550]">10+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ba9550]/20 to-transparent z-10"></div>
            <img
              src="/siteImages/image5.jpg"
              alt="Interior Design Showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
