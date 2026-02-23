import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-black text-white pt-24 md:pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('/noise.svg')]"></div>

            <div className="container mx-auto px-4 sm:px-6 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[16vw] sm:text-[14vw] md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6 sm:mb-8"
                        >
                            ASEEM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">ASLAH</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-base sm:text-lg md:text-2xl text-gray-400 font-light max-w-xl mb-8 sm:mb-12 leading-relaxed"
                        >
                            Crafting digital experiences with code and creativity. <br className="hidden md:block" />
                            Specializing in the <span className="text-white">MEAN Stack</span>.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex space-x-6 sm:space-x-8"
                        >
                            <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6 sm:w-7 sm:h-7" /></a>
                            <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6 sm:w-7 sm:h-7" /></a>
                            <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-6 h-6 sm:w-7 sm:h-7" /></a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 hidden lg:block"
                    >
                        <div className="absolute right-0 top-0 w-full h-full">
                            <Hero3D />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em] vertical-text hidden md:block">Scroll</span>
                <div className="w-[1px] h-12 md:h-24 bg-white/20 overflow-hidden">
                    <div className="w-full h-full bg-white animate-blob"></div>
                </div>
            </motion.div>
        </section >

    );
};

export default Hero;
