import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, MonitorSmartphone, Database, LayoutTemplate } from 'lucide-react';
import Services3D from './Services3D';

const services = [
    {
        title: "Frontend Engineering",
        description: "Crafting pixel-perfect, highly responsive, and accessible user interfaces using React, Angular, and modern CSS architectures.",
        icon: <LayoutTemplate size={32} strokeWidth={1.5} />
    },
    {
        title: "Backend Development",
        description: "Building robust, scalable, and secure RESTful APIs and microservices using Node.js, Express, and Typescript.",
        icon: <Database size={32} strokeWidth={1.5} />
    },
    {
        title: "Full-Stack Web Apps",
        description: "End-to-end development of complex web applications using the MEAN/MERN stack with a focus on performance and usability.",
        icon: <Code2 size={32} strokeWidth={1.5} />
    },
    {
        title: "Digital Experiences",
        description: "Integrating WebGL, Three.js, and Framer Motion to create memorable, interactive, and immersive digital journeys.",
        icon: <MonitorSmartphone size={32} strokeWidth={1.5} />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const Services = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityTitle = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

    return (
        <section ref={sectionRef} id="services" className="py-16 md:py-24 lg:py-32 bg-black text-white relative overflow-hidden">
            <Services3D />

            {/* Animated Ambient Light */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    style={{ y: yTitle, opacity: opacityTitle }}
                    className="mb-12 sm:mb-16 md:mb-32"
                >
                    <h2 className="text-xs sm:text-sm font-mono text-indigo-400 tracking-[0.5em] mb-4 uppercase">Capabilities</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                        WHAT I <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600 animate-pulse">BRING.</span>
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/30 border border-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, zIndex: 10, backgroundColor: "rgba(10, 15, 30, 0.8)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-black/80 backdrop-blur-md p-6 sm:p-10 md:p-16 group relative overflow-hidden shadow-2xl"
                        >
                            {/* Hover Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="text-gray-500 group-hover:text-sky-400 transition-colors duration-500 mb-8 sm:mb-12 inline-flex"
                                >
                                    {service.icon}
                                </motion.div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-white group-hover:tracking-wide transition-all duration-500">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom gradient border line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-600 group-hover:w-full transition-all duration-700"></div>

                            {/* Animated corner bracket */}
                            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-sky-400/50 transition-all duration-700 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
