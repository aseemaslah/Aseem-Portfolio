import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Projects3D from './Projects3D';

const projects = [
    {
        title: "E-Commerce App",
        description: "Full-featured online store.",
        tags: ["MEAN Stack", "Angular", "Node.js"],
        link: "https://github.com/aseemaslah/E-commerce-App",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop"
    },
    {
        title: "Student Management",
        description: "Efficient record administration.",
        tags: ["Angular", "Typescript", "Express"],
        link: "https://github.com/aseemaslah/Student-Managment",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Hasoon Trading",
        description: "Business & Product showcase.",
        tags: ["Web Dev", "Frontend"],
        link: "https://github.com/aseemaslah/HasoonGeneralTrading",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Portfolio Website",
        description: "Personal design showcase.",
        tags: ["React", "Vite", "Tailwind"],
        link: "https://github.com/aseemaslah/portfolio",
        image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2670&auto=format&fit=crop"
    }
];

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={targetRef} id="projects" className="py-20 sm:py-24 md:py-32 bg-black text-white px-4 sm:px-6 relative overflow-hidden flex flex-col border-t border-gray-900">
            <Projects3D />
            <div className="container mx-auto relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[14vw] sm:text-[12vw] md:text-8xl font-black mb-16 sm:mb-20 md:mb-32 tracking-tighter leading-none"
                >
                    SELECTED <br /> <span className="text-gray-600">WORKS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-x-24 md:gap-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-48' : ''}`}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden mb-8 aspect-[4/3] rounded-2xl relative border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </a>

                            <div className="flex flex-col xl:flex-row xl:items-start justify-between border-t border-gray-800 pt-6 gap-4 xl:gap-0">
                                <div className="xl:pr-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tighter group-hover:text-amber-500 transition-colors uppercase leading-tight">{project.title}</h3>
                                    <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">{project.description}</p>
                                </div>
                                <div className="flex flex-row xl:flex-col gap-2 items-start xl:items-end flex-wrap shrink-0">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full border border-gray-800 text-gray-500 group-hover:border-gray-500 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
