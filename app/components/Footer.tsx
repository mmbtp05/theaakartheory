"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "../constants/services";

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
            <Link href="/" aria-label="The Aakar Theory - Home" className="inline-block">
              <Image
                src="/aakar-33 (1).png"
                alt="The Aakar Theory Logo"
                width={240}
                height={96}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming spaces into timeless masterpieces with creativity and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
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
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300"
            >
              <span className="text-sm">Privacy Policy</span>
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-[#ba9550] transition-colors duration-300"
            >
              <span className="text-sm">Terms &amp; Conditions</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
