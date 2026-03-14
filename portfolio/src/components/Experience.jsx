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
        <section ref={sectionRef} id="experience" className="py-12 md:py-16 lg:py-24 bg-[#030303] text-white px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-screen"></div>
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 z-20">
                        <motion.div
                            style={{ y: yTitle }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h2 className="text-xs sm:text-sm font-mono text-sky-500 uppercase tracking-widest mb-6 flex items-center">
                                <span className="w-8 h-[1px] bg-sky-500/50 mr-4"></span>
                                Timeline
                            </h2>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                                MY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 animate-glow">JOURNEY.</span>
                            </h3>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-sky-500 to-transparent mb-8 hidden lg:block shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                            <p className="text-gray-400 font-light hidden lg:block pr-8 leading-relaxed text-lg">
                                A brief history of my professional work, academic background, and the progressive path that shaped my expertise in crafting scalable modern web applications.
                            </p>
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-8 relative">
                        {/* Background timeline line */}
                        <div className="absolute left-[11px] md:left-[23px] top-4 bottom-0 w-[1px] bg-white/10"></div>

                        {/* Animated fill timeline line */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-[10px] md:left-[22px] top-4 bottom-0 w-[3px] bg-gradient-to-b from-sky-400 via-indigo-500 to-transparent z-0 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                        />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative ml-8 md:ml-16 pb-12 space-y-12 sm:space-y-16"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative group glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5 hover:border-sky-500/30 transition-all duration-700 block z-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 bg-[#0a0a0a]/60 backdrop-blur-xl"
                                >
                                    {/* Timeline Node Outer */}
                                    <div className="absolute -left-[31px] md:-left-[51px] top-10 w-5 h-5 rounded-full bg-[#030303] border-2 border-white/20 group-hover:border-sky-400 transition-colors duration-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                                        {/* Timeline Node Inner */}
                                        <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-sky-400 transition-colors duration-500 group-hover:shadow-[0_0_10px_rgba(14,165,233,1)]"></div>
                                    </div>

                                    {/* Glow behind node */}
                                    <div className="absolute -left-[31px] md:-left-[51px] top-10 w-5 h-5 rounded-full bg-sky-400 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"></div>

                                    <div className="flex flex-col xl:flex-row xl:items-baseline gap-3 xl:gap-8 mb-6">
                                        <span className="text-xs sm:text-sm font-mono tracking-widest text-sky-400 xl:w-40 shrink-0 uppercase">
                                            {exp.year}
                                        </span>
                                        <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-indigo-400 transition-colors duration-500">
                                            {exp.role}
                                        </h4>
                                    </div>

                                    <div className="xl:ml-48">
                                        <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 mb-6 rounded-full group-hover:border-sky-500/50 group-hover:bg-sky-500/10 group-hover:text-sky-200 transition-colors duration-500 shadow-inner">
                                            {exp.company}
                                        </span>
                                        <p className="text-gray-400 font-light text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl group-hover:text-gray-200 transition-colors duration-500">
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Subtle gradient accent on hover at bottom */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-transparent group-hover:w-full transition-all duration-1000 opacity-0 group-hover:opacity-100 rounded-b-3xl"></div>
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
