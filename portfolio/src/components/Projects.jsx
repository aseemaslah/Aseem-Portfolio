import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
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

const ProjectCard = ({ project }) => {
    return (
        <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[75vh] flex flex-col justify-center shrink-0 pr-8 md:pr-16 group">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-[60%] md:h-[70%] overflow-hidden rounded-2xl mb-8 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </a>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between border-t border-gray-800 pt-6 gap-6 lg:gap-0">
                <div className="lg:pr-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tighter group-hover:text-amber-500 transition-colors uppercase leading-tight line-clamp-2 md:line-clamp-none">{project.title}</h3>
                    <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light">{project.description}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-2 md:gap-3 items-start lg:items-end flex-wrap shrink-0">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-gray-800 text-gray-500 group-hover:border-gray-600 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress for natural horizontal sliding
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30, // slightly less bouncy
        restDelta: 0.001
    });

    const scrollPercentage = useTransform(smoothProgress, [0, 1], [0, 100]);
    // Uses precise CSS calculation to always align the right edge of container with right edge of screen
    const x = useMotionTemplate`calc(-${scrollPercentage}% + ${scrollPercentage}vw)`;

    return (
        <section ref={targetRef} id="projects" className="relative h-[400vh] bg-black text-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <Projects3D />

                <div className="absolute top-24 md:top-32 left-6 md:left-24 z-0 pointer-events-none">
                    <h2 className="text-[14vw] sm:text-[12vw] md:text-8xl font-black tracking-tighter leading-none text-white opacity-10">
                        SELECTED <br /> WORKS
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-4 md:gap-16 pl-6 md:pl-24 lg:pl-48 relative z-20 items-center h-full w-max">
                    {/* First spacer to allow seeing title initially before content hits */}
                    <div className="w-[10vw] shrink-0"></div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

                    {/* End spacer for smooth exiting visually */}
                    <div className="w-[50vw] shrink-0 flex items-center justify-center p-20">
                        <span className="text-6xl md:text-8xl font-black text-white opacity-10 uppercase tracking-widest pointer-events-none">MORE SOON</span>
                    </div>
                </motion.div>

                {/* Scroll Indicator specific to horizontal section */}
                <div className="absolute bottom-12 left-6 md:left-24 z-10 flex gap-4 items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Scroll Sideways</span>
                    <div className="w-24 h-[1px] bg-gray-800 hidden md:block relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white"
                            style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
