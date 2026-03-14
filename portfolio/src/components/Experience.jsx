import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        year: "2026 - Present",
        role: "Full Stack Developer",
        company: "Freelance",
        description: "Designing and developing robust web applications, ranging from interactive portfolios to full-fledged e-commerce platforms using the MEAN stack and modern React architectures."
    },
    {
        year: "2025 - 2026",
        role: "Full Stack Developer Intern",
        company: "Aeth Analytica Pvt.Ltd",
        description: "Authored pixel-perfect, highly performant user interfaces. Integrated complex animations and state management solutions resolving performance bottlenecks."
    },
    {
        year: "2022 - 2025",
        role: "Bachelor of Computer Application",
        company: "University of Calicut",
        description: "Built foundational knowledge in algorithms, data structures, and software engineering principles. Graduated with honors, focusing on web technologies."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const Experience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Scale timeline line based on scroll
    const scaleY = useScroll({
        target: sectionRef,
        offset: ["start center", "end end"]
    }).scrollYProgress;

    return (
        <section ref={sectionRef} id="experience" className="py-16 md:py-24 lg:py-32 bg-black text-white px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Header */}
                    <div className="lg:col-span-4 sticky top-24 z-20">
                        <motion.div
                            style={{ y: yTitle }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h2 className="text-xs sm:text-sm font-mono text-sky-400 tracking-[0.5em] mb-4 uppercase">Timeline</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 sm:mb-8 text-white">
                                MY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 animate-pulse">JOURNEY.</span>
                            </h3>
                            <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent mb-6 sm:mb-8 hidden lg:block"></div>
                            <p className="text-gray-400 font-light hidden lg:block pr-8 leading-relaxed">
                                A brief history of my professional work, academic background, and the progressive path that shaped my expertise in crafting scalable modern web applications.
                            </p>
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-8 relative">
                        {/* Background timeline line */}
                        <div className="absolute left-[7px] md:left-[19px] top-4 bottom-0 w-[1px] bg-gray-800/50"></div>

                        {/* Animated fill timeline line */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-[7px] md:left-[19px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 via-blue-500 to-transparent z-0"
                        />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative ml-6 md:ml-12 pb-12 space-y-16 sm:space-y-24"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative group bg-white/[0.02] hover:bg-white/[0.04] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-500 block z-10 backdrop-blur-sm"
                                >
                                    {/* Timeline Node Outer */}
                                    <div className="absolute -left-[30px] md:-left-[52px] top-10 w-4 h-4 rounded-full bg-black border-2 border-gray-700 group-hover:border-sky-400 transition-colors duration-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                        {/* Timeline Node Inner */}
                                        <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-sky-400 transition-colors duration-500"></div>
                                    </div>

                                    {/* Glow behind node */}
                                    <div className="absolute -left-[30px] md:-left-[52px] top-10 w-4 h-4 rounded-full bg-sky-400 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    <div className="flex flex-col xl:flex-row xl:items-baseline gap-2 xl:gap-8 mb-4">
                                        <span className="text-xs sm:text-sm font-mono tracking-widest text-sky-400 xl:w-40 shrink-0">
                                            {exp.year}
                                        </span>
                                        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-sky-300 transition-colors duration-500">
                                            {exp.role}
                                        </h4>
                                    </div>

                                    <div className="xl:ml-48">
                                        <span className="inline-block text-[10px] sm:text-xs font-mono bg-sky-900/20 border border-sky-800/50 text-sky-200 px-3 py-1 mb-4 sm:mb-6 rounded-full group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-colors duration-500 shadow-sm">
                                            {exp.company}
                                        </span>
                                        <p className="text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-500">
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Subtle gradient accent on hover at bottom */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-transparent group-hover:w-1/2 transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-bl-2xl"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
