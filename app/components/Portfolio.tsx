"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectCard {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "Residential",
    image: "🏠",
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    category: "Residential",
    image: "🛋️",
  },
  {
    id: 3,
    title: "Minimalist Kitchen",
    category: "Residential",
    image: "👨‍🍳",
  },
  {
    id: 4,
    title: "Luxury Interior",
    category: "Residential",
    image: "✨",
  },
  {
    id: 5,
    title: "Modern Wall Art",
    category: "Decoration",
    image: "🎨",
  },
  {
    id: 6,
    title: "Bedroom Design",
    category: "Residential",
    image: "🛏️",
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8,  },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6,  },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8,  },
    },
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Decorative line */}
          <motion.div variants={lineVariants} className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Showcasing our finest work in residential and commercial design
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background image or placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#152731] to-[#ba9550]/30 flex items-center justify-center">
                <div className="text-6xl sm:text-7xl">{project.image}</div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#ba9550] text-sm font-semibold">
                  {project.category}
                </p>
              </div>

              {/* Subtle border effect */}
              <div className="absolute inset-0 border-2 border-[#ba9550]/0 group-hover:border-[#ba9550]/50 transition-colors duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mt-16 sm:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border-2 border-[#ba9550] text-[#ba9550] font-semibold text-lg hover:bg-[#ba9550]/10 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
