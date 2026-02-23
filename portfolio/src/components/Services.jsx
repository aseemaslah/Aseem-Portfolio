import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Database, LayoutTemplate } from 'lucide-react';
import Services3D from './Services3D';

const services = [
    {
        title: "Frontend Engineering",
        description: "Crafting pixel-perfect, highly responsive, and accessible user interfaces using React, Angular, and modern CSS architectures.",
        icon: <LayoutTemplate size={32} strokeWidth={1} />
    },
    {
        title: "Backend Development",
        description: "Building robust, scalable, and secure RESTful APIs and microservices using Node.js, Express, and Typescript.",
        icon: <Database size={32} strokeWidth={1} />
    },
    {
        title: "Full-Stack Web Apps",
        description: "End-to-end development of complex web applications using the MEAN/MERN stack with a focus on performance and usability.",
        icon: <Code2 size={32} strokeWidth={1} />
    },
    {
        title: "Digital Experiences",
        description: "Integrating WebGL, Three.js, and Framer Motion to create memorable, interactive, and immersive digital journeys.",
        icon: <MonitorSmartphone size={32} strokeWidth={1} />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 sm:py-24 md:py-48 lg:py-64 bg-black text-white relative overflow-hidden">
            <Services3D />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16 md:mb-32"
                >
                    <h2 className="text-xs sm:text-sm font-mono text-gray-500 tracking-[0.5em] mb-4 uppercase">Capabilities</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                        WHAT I <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">BRING.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900 border border-gray-900">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black p-6 sm:p-10 md:p-16 group relative overflow-hidden"
                        >
                            {/* Hover Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="text-gray-500 group-hover:text-indigo-400 transition-colors duration-500 mb-8 sm:mb-12">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 group-hover:tracking-wide transition-all duration-500">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Animated corner bracket */}
                            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-transparent group-hover:border-indigo-500/50 transition-all duration-700 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
