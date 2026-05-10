"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Service, services } from "../../constants/services";

interface Props {
  service: Service;
}

export default function ServiceDetail({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { ref: heroSectionRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: featuresSectionRef, inView: featuresInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: processSectionRef, inView: processInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: faqSectionRef, inView: faqInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8 } },
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroSectionRef}
        className="relative bg-[#0a0a0a] pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#152731] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-10"
            >
              <Link
                href="/"
                className="hover:text-[#ba9550] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-[#ba9550]/40">/</span>
              <Link
                href="/services"
                className="hover:text-[#ba9550] transition-colors duration-300"
              >
                Services
              </Link>
              <span className="text-[#ba9550]/40">/</span>
              <span className="text-[#ba9550]">{service.title}</span>
            </motion.nav>

            <motion.div variants={lineVariants} className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-7xl sm:text-8xl mb-8"
            >
              {service.icon}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#ba9550] text-xl sm:text-2xl italic mb-8"
            >
              {service.tagline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10"
            >
              {service.longDescription}
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {service.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-5 py-2 rounded-full border border-[#ba9550]/40 bg-[#152731]/40 text-[#ba9550] text-sm font-medium backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#contact"
                className="px-10 py-4 rounded-full bg-[#ba9550] text-[#152731] font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {service.cta}
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 rounded-full border-2 border-[#ba9550]/50 text-[#ba9550] font-semibold text-lg hover:border-[#ba9550] hover:bg-[#ba9550]/10 transition-all duration-300"
              >
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features / What's Included */}
      <section
        ref={featuresSectionRef}
        className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#ba9550]/10"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.div variants={lineVariants} className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#ba9550] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
            >
              What&apos;s Included
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Every Detail, Considered
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              A closer look at the offerings we deliver under this service.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative group p-7 rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent hover:border-[#ba9550]/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-[#ba9550] font-bold text-sm tracking-widest mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section
        ref={processSectionRef}
        className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#ba9550]/10"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.div variants={lineVariants} className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#ba9550] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
            >
              Our Approach
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              How We Deliver
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative group flex flex-col sm:flex-row gap-6 p-7 rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent hover:border-[#ba9550]/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl border-2 border-[#ba9550] bg-[#ba9550]/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#ba9550]">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index !== service.process.length - 1 && (
                  <div className="hidden sm:block absolute -bottom-3 left-14 w-0.5 h-6 bg-gradient-to-b from-[#ba9550]/40 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={faqSectionRef}
        className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#ba9550]/10"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="text-center mb-16"
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  variants={itemVariants}
                  className="rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#ba9550]/5 transition-colors duration-300"
                  >
                    <span className="text-white font-semibold text-lg">
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
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-[#0a0a0a] py-20 sm:py-28 overflow-hidden border-t border-[#ba9550]/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to begin?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Tell us about your space and we&apos;ll respond within one working day
            with next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-10 py-4 rounded-full bg-[#ba9550] text-[#152731] font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {service.cta}
            </Link>
            <a
              href="tel:+916376554145"
              className="px-10 py-4 rounded-full border-2 border-[#ba9550]/50 text-[#ba9550] font-semibold text-lg hover:border-[#ba9550] hover:bg-[#ba9550]/10 transition-all duration-300"
            >
              Call +91 6376554145
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative bg-[#0a0a0a] py-20 sm:py-28 overflow-hidden border-t border-[#ba9550]/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-[#ba9550]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Other Services
            </h2>
            <p className="text-gray-400 text-lg">
              Browse the full range of what we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-6 rounded-2xl border border-[#ba9550]/20 bg-gradient-to-br from-[#152731]/30 to-transparent hover:border-[#ba9550]/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{other.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ba9550] transition-colors duration-300">
                  {other.title}
                </h3>
                <p className="text-[#ba9550] text-sm flex items-center gap-2">
                  View
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
