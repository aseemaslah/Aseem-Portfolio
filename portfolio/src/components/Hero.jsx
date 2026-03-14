import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
const Hero3D = lazy(() => import('./Hero3D'));
import Magnetic from './Magnetic';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Letter animation variants
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 100, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 1
            }
        }
    };

    const nameStr = "ASEEM";
    const surnameStr = "ASLAH";

    return (
        <section ref={containerRef} id="hero" className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden bg-[#030303] text-white pt-24 md:pt-20">
            {/* Ultra Premium Multi-layered Floating Orbs */}
            <div className="absolute top-[-5%] right-[-5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-sky-500/20 blur-[120px] md:blur-[180px] rounded-full pointer-events-none mix-blend-screen animate-blob will-change-transform"></div>
            <div className="absolute bottom-[0%] left-[-10%] w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-indigo-600/15 blur-[150px] md:blur-[200px] rounded-full pointer-events-none mix-blend-screen animate-blob animation-delay-2000 will-change-transform"></div>
            <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-blob animation-delay-4000 will-change-transform"></div>

            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none bg-[url('/noise.svg')] mix-blend-overlay"></div>

            <div className="container mx-auto px-4 sm:px-8 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <motion.div
                        style={{ y: yText, opacity: opacityText }}
                        className="lg:col-span-8 flex flex-col justify-center translate-y-[-5%] pointer-events-auto z-20"
                    >
                        <motion.h1
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-[16vw] sm:text-[14vw] md:text-[9.5rem] lg:text-[12rem] font-black tracking-tighter leading-[0.85] mb-8 flex flex-col perspective-1000 z-10 pointer-events-none"
                        >
                            <div className="flex overflow-hidden pb-4">
                                {nameStr.split('').map((char, index) => (
                                    <motion.span key={`name-${index}`} variants={letterVariants} className="inline-block origin-bottom transform-gpu text-white hover:text-transparent hover:text-stroke-hover cursor-default transition-all duration-300 pointer-events-auto">
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex overflow-hidden pb-4 -mt-2 sm:-mt-4 lg:-mt-8">
                                {surnameStr.split('').map((char, index) => (
                                    <motion.span key={`sur-${index}`} variants={letterVariants} className="inline-block origin-bottom transform-gpu text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-500 to-purple-600 hover:scale-[1.05] hover:-translate-y-2 hover:-rotate-3 transition-transform duration-300 animate-glow pointer-events-auto">
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 mb-12 sm:mb-16 z-20 pointer-events-auto"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-lg leading-relaxed border-l-[3px] border-sky-500 pl-6 rounded-sm backdrop-blur-sm bg-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-none">
                                Architecting <b className="text-white font-medium">world-class digital experiences</b> with mathematics, motion, and modern web technologies.
                            </p>

                            <Magnetic multiplier={0.2}>
                                <a href="#projects" className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-sky-500/20 border border-white/20 hover:border-sky-400 px-10 py-5 rounded-full transition-all duration-500 backdrop-blur-md shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_50px_rgba(14,165,233,0.4)] pointer-events-auto cursor-none">
                                    <span className="text-sm font-bold tracking-[0.25em] text-white group-hover:text-sky-300 transition-colors uppercase">Explore Work</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-3 group-hover:text-sky-300 transition-all duration-300" />
                                </a>
                            </Magnetic>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex space-x-6 sm:space-x-8 items-center z-20 pointer-events-auto"
                        >
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10 pointer-events-none">Connect</span>
                            <Magnetic>
                                <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub Profile" className="p-4 glass-panel rounded-full text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 shadow-lg group pointer-events-auto cursor-none"><Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" /></a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="p-4 glass-panel rounded-full text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 transition-all duration-300 shadow-lg group pointer-events-auto cursor-none"><Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" /></a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram" className="p-4 glass-panel rounded-full text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F]/60 transition-all duration-300 shadow-lg group pointer-events-auto cursor-none"><Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" /></a>
                            </Magnetic>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="lg:col-span-4 hidden lg:block pointer-events-none"
                    >
                        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none opacity-90 mix-blend-screen z-10">
                            <Suspense fallback={null}>
                <Hero3D />
            </Suspense>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.4em] vertical-text hidden md:block mix-blend-difference">Scroll</span>
                <div className="w-[1px] h-16 md:h-28 bg-white/10 overflow-hidden relative">
                    <motion.div 
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-sky-400 to-transparent"
                    ></motion.div>
                </div>
            </motion.div>
        </section >

    );
};

export default Hero;
