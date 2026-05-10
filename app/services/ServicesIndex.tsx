"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../constants/services";

const serviceFaqs = [
  {
    question: "How do I choose the right service for my project?",
    answer:
      "Start with a free consultation — we'll understand your space, goals, and budget, then recommend the best-fit service. Many projects combine more than one (e.g. residential interiors + custom furniture).",
  },
  {
    question: "Do you offer turnkey execution or only design?",
    answer:
      "Both. You can engage us for design-only deliverables (concepts, drawings, material specs) or full turnkey delivery covering civil, electrical, plumbing, joinery, and styling.",
  },
  {
    question: "What's the typical timeline for a project?",
    answer:
      "Custom furniture takes 4–6 weeks; residential apartments 10–14 weeks; villas and commercial fit-outs 4–7 months. We commit to dates after the final scope is locked.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Design fees are quoted per square foot or as a fixed package; execution is line-itemed and transparent. We share a detailed BOQ before you commit, with no hidden charges.",
  },
  {
    question: "Do you work outside Rajasthan?",
    answer:
      "Yes — we deliver projects across India and offer remote consultations for international clients. On-site visits are scheduled in milestones.",
  },
  {
    question: "Will you handle approvals, vendors, and site coordination?",
    answer:
      "Single-point accountability is our standard. We coordinate every vendor, contractor, and approval so you have one team, one timeline, and one number to call.",
  },
];

export default function ServicesIndex() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { y: -8, transition: { duration: 0.3 } },
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
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#152731] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={lineVariants} className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#ba9550] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
          >
            What We Do
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive design solutions crafted with intention — from intimate
            homes to expansive commercial environments.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full relative group p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent hover:border-[#ba9550]/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ba9550]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-5xl mb-6">{service.icon}</div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#ba9550] text-sm italic mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {service.shortDescription}
                  </p>

                  <div className="mt-auto pt-6 border-t border-[#ba9550]/20 flex items-center justify-between">
                    <span className="text-[#ba9550] text-sm font-semibold">
                      Explore Service
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

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Not sure where to begin? We&apos;ll help you scope it out.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-10 py-4 rounded-full bg-[#ba9550] text-[#152731] font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Talk to a Designer
          </Link>
        </motion.div>

        {/* FAQs */}
        <div ref={faqRef} className="mt-24 sm:mt-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={lineVariants} className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#ba9550] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
            >
              Common Questions
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Frequently Asked
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Quick answers to the questions we hear most. Don&apos;t see yours?
              <Link
                href="/#contact"
                className="text-[#ba9550] hover:underline ml-1"
              >
                Reach out
              </Link>
              .
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto space-y-4"
          >
            {serviceFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  variants={itemVariants}
                  className="rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-[#ba9550]/5 transition-colors duration-300"
                  >
                    <span className="text-white font-semibold text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#ba9550]/50 flex items-center justify-center text-[#ba9550] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
