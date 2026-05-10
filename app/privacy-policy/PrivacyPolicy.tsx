"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Section {
  number: string;
  title: string;
  body?: string;
  paragraphs?: string[];
  list?: string[];
  blocks?: { label: string; value: string }[];
}

const lastUpdated = "May 2026";

const sections: Section[] = [
  {
    number: "01",
    title: "Information We Collect",
    list: [
      "Name, phone number, and email address",
      "Project location, property details, and requirements",
      "Information shared via contact forms, WhatsApp, calls, or emails",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    list: [
      "To respond to inquiries and provide consultations",
      "To offer interior design, execution, and construction services",
      "To share project-related communication and updates",
      "To improve our website and customer experience",
    ],
  },
  {
    number: "03",
    title: "Data Protection & Security",
    list: [
      "We do not sell, rent, or trade your personal information",
      "Access to data is limited to authorized team members only",
      "Reasonable technical and organizational safeguards are in place",
    ],
  },
  {
    number: "04",
    title: "Cookies",
    body: "Our website may use cookies to enhance browsing experience and analyze website performance. You can disable cookies through your browser settings if preferred.",
  },
  {
    number: "05",
    title: "Third-Party Links",
    body: "Our website may contain links to external or third-party platforms. We are not responsible for their privacy practices, content, or policies.",
  },
  {
    number: "06",
    title: "Information Sharing",
    body: "Your information is used strictly for internal purposes related to your inquiry or project. We do not share personal data with third parties except where required by law.",
  },
  {
    number: "07",
    title: "Policy Updates",
    body: "We reserve the right to update this Privacy Policy at any time. Changes will be reflected on this page with an updated revision date.",
  },
];

export default function PrivacyPolicy() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#152731] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.nav
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-10"
          >
            <Link href="/" className="hover:text-[#ba9550] transition-colors duration-300">
              Home
            </Link>
            <span className="text-[#ba9550]/40">/</span>
            <span className="text-[#ba9550]">Privacy Policy</span>
          </motion.nav>

          <motion.div variants={lineVariants} className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#ba9550] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
          >
            Legal
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            This Privacy Policy explains how The Aakar Theory collects, uses, and
            protects your personal information when you interact with our website
            or services.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm mt-6"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {sections.map((section) => (
            <motion.article
              key={section.number}
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent backdrop-blur-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-[#ba9550]/40 bg-[#ba9550]/5 flex items-center justify-center">
                  <span className="text-[#ba9550] font-bold text-sm sm:text-base">
                    {section.number}
                  </span>
                </div>

                <div className="flex-grow min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>

                  {section.body && (
                    <p className="text-gray-400 leading-relaxed">
                      {section.body}
                    </p>
                  )}

                  {section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="text-gray-400 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-400 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[#ba9550]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.blocks && (
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {section.blocks.map((block) => (
                        <div key={block.label}>
                          <dt className="text-[#ba9550] text-xs uppercase tracking-widest mb-1">
                            {block.label}
                          </dt>
                          <dd className="text-gray-300 leading-relaxed">
                            {block.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent backdrop-blur-sm text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Questions about your data?
          </h3>
          <p className="text-gray-400 mb-6">
            We&apos;re happy to clarify anything about how your information is
            handled.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 rounded-full bg-[#ba9550] text-[#152731] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
