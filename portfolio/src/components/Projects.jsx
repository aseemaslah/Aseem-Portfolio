import { useRef, Suspense, lazy, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
const Projects3D = lazy(() => import('./Projects3D'));

const projects = [
    {
        title: "E-Commerce App",
        description: "Full-featured online store.",
        tags: ["MEAN Stack", "Angular", "Node.js"],
        link: "https://github.com/aseemaslah/E-commerce-App",
        image: "/projects/ecommerce.webp"
    },
    {
        title: "Student Management",
        description: "Efficient record administration.",
        tags: ["Angular", "Typescript", "Express"],
        link: "https://github.com/aseemaslah/Student-Managment",
        image: "/projects/student.webp"
    },
    {
        title: "Hasoon Trading",
        description: "Business & Product showcase.",
        tags: ["Web Dev", "Frontend"],
        link: "https://github.com/aseemaslah/HasoonGeneralTrading",
        image: "/projects/trading.webp"
    },
    {
        title: "Portfolio Website",
        description: "Personal design showcase.",
        tags: ["React", "Vite", "Tailwind"],
        link: "https://github.com/aseemaslah/portfolio",
        image: "/projects/portfolio.webp"
    }
];

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityTitle = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

    return (
        <section ref={targetRef} id="projects" className="py-24 md:py-48 bg-[#030303] text-white px-4 sm:px-8 relative overflow-hidden flex flex-col border-t border-white/5">
            {/* Ambient Background Effects */}
            <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-sky-600/10 blur-[200px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[200px] rounded-full mix-blend-screen pointer-events-none"></div>

            <Suspense fallback={null}>
                <Projects3D scrollYProgress={scrollYProgress} />
            </Suspense>
            <div className="container mx-auto relative z-10 w-full">
                <div className="flex flex-col mb-24 md:mb-48 overflow-hidden">
                    <motion.h2
                        style={{ y: yTitle, opacity: opacityTitle }}
                        className="text-[15vw] xs:text-[14vw] sm:text-[12vw] md:text-8xl font-black tracking-tighter leading-[0.85] uppercase inline-block whitespace-nowrap"
                    >
                        SELECTED <br /> <span className="premium-gradient-text">WORKS</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent mt-8"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-x-24 md:gap-y-36">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group flex flex-col p-5 xs:p-8 sm:p-12 transition-all duration-700 ease-[0.16,1,0.3,1] glass-panel rounded-[1.5rem] sm:rounded-[4rem] relative ${index % 2 === 1 ? 'md:mt-80' : 'md:mb-40'}`}
        >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden mb-8 aspect-[4/3] rounded-2xl relative group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)] transition-all duration-700" style={{ transform: "translateZ(50px)" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity z-10 duration-700"></div>
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 blur-[0.5px] group-hover:blur-0"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none bg-black/20 backdrop-blur-[2px]">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-sky-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
            </a>

            <div className="flex flex-col xl:flex-row xl:items-start justify-between border-t border-white/10 pt-8 gap-6 xl:gap-0 group-hover:border-sky-500/50 transition-colors duration-700 relative" style={{ transform: "translateZ(30px)" }}>
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:w-full transition-all duration-1000 ease-out"></div>
                <div className="xl:pr-8">
                    <h3 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-sky-300 transition-all duration-500 uppercase leading-[1.1]">{project.title}</h3>
                    <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-500">{project.description}</p>
                </div>
                <div className="flex flex-row xl:flex-col gap-2.5 items-start xl:items-end flex-wrap shrink-0">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] sm:text-xs font-mono px-4 py-1.5 rounded-full border border-white/10 text-gray-300 bg-white/5 backdrop-blur-sm group-hover:bg-sky-500/20 group-hover:border-sky-400/50 group-hover:text-sky-200 transition-all duration-500 shadow-sm whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
