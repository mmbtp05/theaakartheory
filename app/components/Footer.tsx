"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-[#152731] border-t border-[#ba9550]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#ba9550] flex items-center justify-center">
                <span className="text-[#ba9550] font-bold">₹</span>
              </div>
              <span className="text-white font-semibold">The Aakar Theory</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming spaces into timeless masterpieces with creativity and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2">
              {["Residential Design", "Commercial Spaces", "Consultation & Planning"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#ba9550]/20 my-8"></div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} The Aakar Theory. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300"
            >
              <span className="text-sm">Privacy Policy</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300"
            >
              <span className="text-sm">Terms of Service</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
