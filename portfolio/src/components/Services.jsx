import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import { Code2, MonitorSmartphone, Database, LayoutTemplate } from 'lucide-react';
const Services3D = lazy(() => import('./Services3D'));

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
        <section ref={sectionRef} id="services" className="py-12 md:py-16 lg:py-24 bg-[#030303] text-white relative overflow-hidden">
            <Suspense fallback={null}>
                <Services3D />
            </Suspense>

            {/* Animated Ambient Light */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 mix-blend-screen"></div>
            <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <motion.div
                    style={{ y: yTitle, opacity: opacityTitle }}
                    className="mb-16 sm:mb-24 md:mb-32"
                >
                    <h2 className="text-xs sm:text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6 flex items-center">
                        <span className="w-8 h-[1px] bg-indigo-500/50 mr-4"></span>
                        Capabilities
                    </h2>
                    <h3 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9]">
                        WHAT I <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 animate-glow">BRING.</span>
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-20"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, zIndex: 30 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-panel p-8 sm:p-12 md:p-16 rounded-[2rem] group relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-sky-500/40 bg-[#0a0a0a]/60 backdrop-blur-xl"
                        >
                            {/* Hover Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0 mix-blend-screen"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-gray-500 group-hover:text-sky-400 transition-colors duration-500 mb-10 sm:mb-14 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:bg-sky-500/10 group-hover:border-sky-500/30"
                                >
                                    {service.icon}
                                </motion.div>
                                <div>
                                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-sky-200 transition-all duration-500">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom gradient border line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 group-hover:w-full transition-all duration-1000"></div>

                            {/* Animated corner bracket */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-sky-400/50 transition-all duration-700 transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-tr-xl"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
