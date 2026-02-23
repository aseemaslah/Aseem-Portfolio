import { motion } from 'framer-motion';
import {
    SiMongodb, SiExpress, SiAngular, SiNodedotjs,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiGit, SiBootstrap
} from 'react-icons/si';
import Skills3D from './Skills3D';

const skills = [
    { name: "MongoDB", icon: <SiMongodb size={32} />, color: "#47A248" },
    { name: "Express", icon: <SiExpress size={32} />, color: "#ffffff" },
    { name: "Angular", icon: <SiAngular size={32} />, color: "#DD0031" },
    { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "#339933" },
    { name: "TypeScript", icon: <SiTypescript size={32} />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript size={32} />, color: "#F7DF1E" },
    { name: "Bootstrap 5", icon: <SiBootstrap size={32} />, color: "#7952B3" },
    { name: "HTML5", icon: <SiHtml5 size={32} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 size={32} />, color: "#1572B6" },
    { name: "Git", icon: <SiGit size={32} />, color: "#F05032" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 sm:py-24 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-blue-900/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
            <Skills3D />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <h2 className="text-xs sm:text-sm font-mono text-gray-500 tracking-[0.5em] mb-4 uppercase">Expertise</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tighter leading-tight">
                        Digital <br /> <span className="text-gray-600">Toolkit.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-gray-800">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative border-r border-b border-gray-800 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 hover:bg-gray-900/30 transition-colors duration-500"
                        >
                            <div
                                className="text-gray-500 group-hover:text-white transition-all duration-500 filter grayscale group-hover:grayscale-0 transform group-hover:scale-110"
                            >
                                <span style={{ color: skill.color }}>
                                    {skill.icon}
                                </span>
                            </div>

                            <span className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-gray-300 tracking-wider transition-colors duration-500 text-center">
                                {skill.name}
                            </span>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Skills;
