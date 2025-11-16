"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
      transition: { duration: 0.8,  },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6,  },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8,  },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8,  },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#0a0a0a] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
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
          {/* Decorative line */}
          <motion.div variants={lineVariants} className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#ba9550] origin-left"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to transform your space? Get in touch with us today.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20"
        >
          {/* Call Us */}
          <motion.div
            variants={contactInfoVariants}
            className="p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent backdrop-blur-sm hover:border-[#ba9550]/60 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#ba9550] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#ba9550]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.558 1.667 1.692 3.532 3.653 5.493s3.826 3.095 5.493 3.653l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 01.54-1.06l1.548-.773c-.558-1.667-1.692-3.532-3.653-5.493s-3.826-3.095-5.493-3.653l-.773 1.548a1 1 0 01-1.06.54L2 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-[#ba9550] font-semibold">+91 9414420503</p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={contactInfoVariants}
            className="p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent backdrop-blur-sm hover:border-[#ba9550]/60 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#ba9550] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#ba9550]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Owner</h3>
                <p className="text-[#ba9550] font-semibold">Mehak Nagpal</p>
              </div>
            </div>
          </motion.div>

          {/* Visit Us */}
          <motion.div
            variants={contactInfoVariants}
            className="p-8 rounded-2xl border border-[#ba9550]/30 bg-gradient-to-br from-[#152731]/40 to-transparent backdrop-blur-sm hover:border-[#ba9550]/60 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#ba9550] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#ba9550]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-[#ba9550] font-semibold text-sm">
                  New Dhan Mandi Shop #111
                  <br />
                  Harumangarh Town, Rajasthan 335513
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-300 text-sm font-semibold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-lg bg-[#152731]/40 border border-[#ba9550]/30 text-white placeholder-gray-500 focus:border-[#ba9550] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-300 text-sm font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-lg bg-[#152731]/40 border border-[#ba9550]/30 text-white placeholder-gray-500 focus:border-[#ba9550] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </motion.div>
            </div>

            {/* Message Input */}
            <motion.div variants={inputVariants}>
              <label className="block text-gray-300 text-sm font-semibold mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full px-6 py-4 rounded-lg bg-[#152731]/40 border border-[#ba9550]/30 text-white placeholder-gray-500 focus:border-[#ba9550] focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={inputVariants} className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-[#ba9550] text-[#152731] font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-4 rounded-lg bg-[#ba9550]/20 border border-[#ba9550]/50 text-center text-[#ba9550]"
            >
              Thank you for reaching out! We'll get back to you soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
