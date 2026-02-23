import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2023 - Present",
        role: "Full Stack Developer",
        company: "Freelance",
        description: "Designing and developing robust web applications, ranging from interactive portfolios to full-fledged e-commerce platforms using the MEAN stack and modern React architectures."
    },
    {
        year: "2022 - 2023",
        role: "Frontend Specialist",
        company: "Digital Agency",
        description: "Authored pixel-perfect, highly performant user interfaces. Integrated complex animations and state management solutions resolving performance bottlenecks."
    },
    {
        year: "2020 - 2022",
        role: "Computer Science Degree",
        company: "University",
        description: "Built foundational knowledge in algorithms, data structures, and software engineering principles. Graduated with honors, focusing on web technologies."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 sm:py-24 md:py-48 bg-black text-white px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Header */}
                    <div className="lg:col-span-4 sticky top-20 sm:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xs sm:text-sm font-mono text-gray-500 tracking-[0.5em] mb-4 uppercase">Timeline</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 sm:mb-8">
                                MY <br /> <span className="text-gray-600">JOURNEY.</span>
                            </h3>
                            <div className="w-10 sm:w-12 h-[1px] bg-white/20 mb-6 sm:mb-8 hidden lg:block"></div>
                            <p className="text-gray-500 font-light hidden lg:block pr-8">
                                A brief history of my professional work, academic background, and the path that led me to where I am today.
                            </p>
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-8">
                        <div className="relative border-l border-gray-800 ml-4 md:ml-0 pl-6 sm:pl-8 md:pl-12 pb-12 space-y-16 sm:space-y-24">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="relative group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[29px] sm:-left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-black border border-gray-600 rounded-full group-hover:border-white group-hover:bg-white transition-colors duration-500 z-10"></div>
                                    <div className="absolute -left-[29px] sm:-left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-white blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                                        <span className="text-xs sm:text-sm font-mono tracking-widest text-gray-500 md:w-40 shrink-0">
                                            {exp.year}
                                        </span>
                                        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight group-hover:text-amber-500 transition-colors duration-500">
                                            {exp.role}
                                        </h4>
                                    </div>

                                    <div className="md:ml-48">
                                        <span className="inline-block text-[10px] sm:text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 px-3 py-1 mb-4 sm:mb-6 rounded-full group-hover:border-gray-600 transition-colors duration-500">
                                            {exp.company}
                                        </span>
                                        <p className="text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-500">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
