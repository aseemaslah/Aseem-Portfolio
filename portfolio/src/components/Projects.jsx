
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        <section ref={targetRef} id="projects" className="py-24 md:py-32 bg-black text-white px-6">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[12vw] md:text-8xl font-black mb-16 md:mb-24 tracking-tighter leading-none"
                >
                    SELECTED <br /> <span className="text-gray-600">WORKS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden mb-6 aspect-[4/3] rounded-lg relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </a>

                            <div className="flex justify-between items-start border-t border-gray-800 pt-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-base md:text-lg mb-4">{project.description}</p>
                                </div>
                                <div className="hidden sm:flex flex-col items-end gap-2 text-[10px] md:text-xs font-mono text-gray-500">
                                    {project.tags.map(tag => <span key={tag}>/{tag}</span>)}
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
