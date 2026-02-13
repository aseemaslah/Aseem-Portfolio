import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-black text-white pt-20">
            {/* Background Elements - Minimal Noise/Grain could go here via CSS */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('/noise.svg')]"></div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none mb-6"
                        >
                            ASEEM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">ASLAH</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-xl md:text-2xl text-gray-400 font-light max-w-xl mb-10"
                        >
                            Crafting digital experiences with code and creativity. <br />
                            Specializing in the MEAN Stack.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex space-x-6"
                        >
                            <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={32} /></a>
                            <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={32} /></a>
                            <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={32} /></a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 hidden lg:block"
                    >
                        <div className="w-full h-96 bg-gradient-to-tr from-gray-800 to-black rounded-full blur-3xl opacity-50 absolute right-0 top-1/4 animate-pulse"></div>
                        {/* Abstract geometric shape or image could go here */}
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-white/20 overflow-hidden">
                    <div className="w-full h-full bg-white animate-blob"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
