"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcessStep {
    id: number;
    number: string;
    title: string;
    description: string;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        number: "01",
        title: "Consultation & Understanding",
        description:
            "We begin by understanding your vision, lifestyle, and requirements to create a design brief tailored to you.",
    },
    {
        id: 2,
        number: "02",
        title: "Concept & Design Development",
        description:
            "Our team crafts innovative layouts, mood boards, 3D visuals, and material palettes that bring your vision to life.",
    },
    {
        id: 3,
        number: "03",
        title: "Material Selection & Detailing",
        description:
            "Every material, finish, fixture, and detail is carefully curated to ensure quality, aesthetics, and functionality.",
    },
    {
        id: 4,
        number: "04",
        title: "Execution & Project Management",
        description:
            "We handle end-to-end execution, coordinating craftsmen, vendors, and timelines for a smooth, stress-free experience.",
    },
    {
        id: 5,
        number: "05",
        title: "Happy Handover",
        description:
            "Your space is delivered meticulously, with attention to every detail, ensuring complete satisfaction and lasting quality.",
    },
];

export default function Process() {
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
            transition: { duration: 0.8 },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
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

    return (
        <section
            id="process"
            ref={ref}
            className="relative bg-[#152731] py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ba9550] rounded-full mix-blend-multiply filter blur-3xl"></div>
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
                        Our Process
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        We follow a seamless client-centric process that transforms ideas into exceptional spaces
                    </motion.p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-8"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={stepVariants}
                            className="relative group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full border-2 border-[#ba9550] bg-[#0a0a0a]/50 flex items-center justify-center group-hover:bg-[#ba9550] transition-all duration-300">
                                        <span className="text-2xl font-bold text-[#ba9550] group-hover:text-[#152731] transition-colors duration-300">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 p-6 rounded-xl border border-[#ba9550]/30 bg-gradient-to-br from-[#0a0a0a]/40 to-transparent backdrop-blur-sm hover:border-[#ba9550]/60 transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting Line (except for last item) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute left-8 top-16 w-0.5 h-8 bg-[#ba9550]/30"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
