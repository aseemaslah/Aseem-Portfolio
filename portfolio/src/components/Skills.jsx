import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import {
    SiMongodb, SiExpress, SiAngular, SiNodedotjs,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiGit, SiBootstrap
} from 'react-icons/si';
const Skills3D = lazy(() => import('./Skills3D'));
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
        <section ref={sectionRef} id="skills" className="py-12 md:py-16 lg:py-24 bg-[#030303] text-white relative overflow-hidden">
            {/* Massive Background Typography */}
            <motion.div
                style={{ y: yText, WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
                className="absolute top-[30%] right-[-10%] text-[30vw] font-black text-transparent opacity-5 pointer-events-none stroke-text select-none text-stroke-hover leading-none z-0"
            >
                SKILLS
            </motion.div>

            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-sky-600/10 blur-[180px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>
            <Suspense fallback={null}>
                <Skills3D />
            </Suspense>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16 sm:mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                >
                    <div>
                        <h2 className="text-xs sm:text-sm font-mono text-sky-500 uppercase tracking-widest mb-6 flex items-center">
                            <span className="w-12 h-[1px] bg-sky-500/50 mr-4"></span>
                            Expertise
                        </h2>
                        <h3 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9]">
                            Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600 animate-glow">Toolkit.</span>
                        </h3>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10"
                >
                    {skills.map((skill, index) => (
                        <Magnetic key={index} multiplier={0.2}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-[2rem] glass-panel border border-white/5 hover:border-white/20 flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-700 backdrop-blur-xl cursor-none overflow-hidden bg-[#0a0a0a]/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                            >
                                {/* Glow behind icon on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-[40px] transition-opacity duration-1000 pointer-events-none rounded-full scale-150 rotate-45 mix-blend-screen" style={{ background: skill.color }} />

                                <div
                                    className="text-gray-500 group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-3 z-10"
                                    style={{ '--hover-color': skill.color }}
                                >
                                    <span style={{ color: skill.color }} className="opacity-50 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                        {skill.icon}
                                    </span>
                                </div>

                                <span className="text-[10px] md:text-xs font-semibold text-gray-500 group-hover:text-white tracking-[0.2em] uppercase transition-colors duration-500 text-center z-10 group-hover:translate-y-2 transform">
                                    {skill.name}
                                </span>

                                {/* Edge highlight */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </motion.div>
                        </Magnetic>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
