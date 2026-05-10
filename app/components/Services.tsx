"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../constants/services";

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
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
      id="services"
      ref={ref}
      className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2"></div>
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
            Our Services
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive design solutions for every space and vision
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full relative group p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent hover:border-[#ba9550]/60 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ba9550]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-6">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-6 border-t border-[#ba9550]/20 flex items-center justify-between">
                    <span className="text-[#ba9550] text-sm font-semibold">
                      Learn More
                    </span>
                    <span className="text-[#ba9550] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#ba9550]/50 text-[#ba9550] font-semibold hover:border-[#ba9550] hover:bg-[#ba9550]/10 transition-all duration-300"
          >
            View All Services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
