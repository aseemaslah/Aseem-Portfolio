import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import About3D from './About3D';
import Magnetic from './Magnetic';

// Word animation
const quote = "Bridging the gap between raw code and human experience.";
const quoteWords = quote.split(" ");

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]);

    // 3D Tilt properties for the image
    const imageRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
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
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section ref={sectionRef} id="about" className="py-12 md:py-16 lg:py-24 bg-[#030303] text-white px-4 sm:px-6 relative overflow-hidden">
            {/* Massive Background Typography */}
            <motion.div
                style={{ y: yText, WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
                className="absolute top-[20%] left-[-10%] text-[40vw] font-black text-transparent opacity-5 pointer-events-none stroke-text select-none text-stroke-hover leading-none"
            >
                ABOUT
            </motion.div>

            <motion.div
                style={{ y: yBackground, opacity: opacityBackground }}
                className="absolute top-0 right-0 w-1/2 h-[150%] bg-gradient-to-l from-sky-900/20 to-transparent pointer-events-none"
            />
            <About3D />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column - 3D Black & White Portrait */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 relative"
                    >
                        <h2 className="text-xs sm:text-sm font-mono text-sky-500 uppercase tracking-widest mb-12 flex items-center">
                            <span className="w-12 h-[1px] bg-sky-500/50 mr-4"></span>
                            Who I Am
                        </h2>

                        <motion.div 
                            ref={imageRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative w-full aspect-[3/4] rounded-3xl cursor-none group"
                        >
                            {/* Glow Behind the Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-purple-600/30 blur-[60px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000"></div>

                            {/* The 3D Image Container */}
                            <motion.div 
                                style={{ transform: "translateZ(50px)" }}
                                className="w-full h-full rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative z-10 bg-black/40 backdrop-blur-md"
                            >
                                <img 
                                    src="/profile.jpg" 
                                    alt="Aseem Aslah" 
                                    className="w-full h-full object-cover grayscale-[1] brightness-[1.1] contrast-[1.2] group-hover:grayscale-[0.5] group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1] mix-blend-screen mix-blend-mode"
                                />
                                
                                {/* Overlay Gradient for Premium Vignette Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                    {/* Right Column - Body Text & Quote */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 lg:pl-8 flex flex-col justify-center mt-4 lg:mt-24 space-y-12"
                    >
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-[1.1] flex flex-wrap gap-x-3 gap-y-2 border-b border-white/10 pb-12 shadow-sm">
                            {quoteWords.map((word, index) => (
                                <span className="overflow-hidden" key={index}>
                                    <motion.span
                                        initial={{ y: "100%", opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.33, 1, 0.68, 1],
                                            delay: index * 0.05
                                        }}
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </h3>

                        <div className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-400 space-y-8">
                            <motion.p variants={itemVariants}>
                                I am <span className="text-white font-medium hover:text-sky-400 transition-colors">Aseem Aslah</span>, a meticulous MEAN Stack Developer obsessed with performance and pixel-perfect UIs.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                My approach combines technical precision with a designer's eye. I don't just write code; I craft digital environments. Every animation, transition, and micro-interaction is purposeful, aimed at making the web feel more organic and responsive.
                            </motion.p>
                            <motion.p variants={itemVariants} className="text-gray-300">
                                Currently focused on building scalable enterprise solutions that feel like consumer apps—fast, beautiful, and intuitive.
                            </motion.p>

                            <motion.div variants={itemVariants} className="pt-12 flex flex-col sm:flex-row gap-12 text-xs sm:text-sm font-mono tracking-wider text-white mt-8">
                                <Magnetic>
                                    <div className="group cursor-pointer p-4 -m-4">
                                        <span className="block text-sky-500 mb-2 group-hover:text-blue-400 transition-colors uppercase">Location</span>
                                        <span className="text-gray-400 group-hover:text-white transition-colors text-lg">Worldwide</span>
                                    </div>
                                </Magnetic>
                                <Magnetic>
                                    <div className="group cursor-pointer p-4 -m-4">
                                        <span className="block text-sky-500 mb-2 group-hover:text-purple-400 transition-colors uppercase">Capacity</span>
                                        <span className="text-gray-400 group-hover:text-white transition-colors text-lg flex items-center gap-3">
                                            Available <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span></span>
                                        </span>
                                    </div>
                                </Magnetic>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
