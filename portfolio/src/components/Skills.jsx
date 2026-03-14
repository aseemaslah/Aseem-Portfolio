import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    SiMongodb, SiExpress, SiAngular, SiNodedotjs,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiGit, SiBootstrap
} from 'react-icons/si';
import Skills3D from './Skills3D';
import Magnetic from './Magnetic';

const skills = [
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
    { name: "Express", icon: <SiExpress size={40} />, color: "#ffffff" },
    { name: "Angular", icon: <SiAngular size={40} />, color: "#DD0031" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#339933" },
    { name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    { name: "Bootstrap 5", icon: <SiBootstrap size={40} />, color: "#7952B3" },
    { name: "HTML5", icon: <SiHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 size={40} />, color: "#1572B6" },
    { name: "Git", icon: <SiGit size={40} />, color: "#F05032" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 }
    }
};

const Skills = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

    return (
        <section ref={sectionRef} id="skills" className="py-24 md:py-32 lg:py-48 bg-black text-white relative overflow-hidden">
            {/* Massive Background Typography */}
            <motion.div
                style={{ y: yText, WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
                className="absolute top-[30%] right-[-10%] text-[30vw] font-black text-transparent opacity-5 pointer-events-none stroke-text select-none text-stroke-hover leading-none z-0"
            >
                SKILLS
            </motion.div>

            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[600px] bg-sky-900/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
            <Skills3D />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16 sm:mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                >
                    <div>
                        <h2 className="text-xs sm:text-sm font-mono text-sky-500 tracking-[0.5em] mb-4 uppercase flex items-center">
                            <span className="w-12 h-[1px] bg-sky-500/50 mr-4"></span>
                            Expertise
                        </h2>
                        <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
                            Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Toolkit.</span>
                        </h3>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8"
                >
                    {skills.map((skill, index) => (
                        <Magnetic key={index} multiplier={0.2}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                                className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl border border-gray-800/50 hover:border-sky-500/30 flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 backdrop-blur-md cursor-pointer overflow-hidden bg-black/40 shadow-2xl"
                            >
                                {/* Glow behind icon on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 pointer-events-none rounded-full scale-150 rotate-45" style={{ background: skill.color }} />

                                <div
                                    className="text-gray-500 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 z-10"
                                    style={{ '--hover-color': skill.color }}
                                >
                                    <span style={{ color: skill.color }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                        {skill.icon}
                                    </span>
                                </div>

                                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white tracking-widest uppercase transition-colors duration-300 text-center z-10 group-hover:translate-y-1 transform">
                                    {skill.name}
                                </span>

                                {/* Edge highlight */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        </Magnetic>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
