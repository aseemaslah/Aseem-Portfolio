import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-72 bg-black text-white px-6 relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:col-span-4"
                    >
                        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Who I Am</h2>
                        <div className="w-12 h-[1px] bg-white/20 mb-8"></div>
                        <h3 className="text-4xl font-serif italic text-gray-300">
                            "Bridging the gap between raw code and human experience."
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 md:pl-12 text-xl md:text-2xl font-light leading-relaxed text-gray-400 space-y-8"
                    >
                        <p>
                            I am <span className="text-white font-medium">Aseem Aslah</span>, a meticulous MEAN Stack Developer obsessed with performance and pixel-perfect UIs.
                        </p>
                        <p>
                            My approach combines technical precision with a designer's eye. I don't just write code; I craft digital environments. Every animation, transition, and micro-interaction is purposeful, aimed at making the web feel more organic and responsive.
                        </p>
                        <p>
                            Currently focused on building scalable enterprise solutions that feel like consumer apps—fast, beautiful, and intuitive.
                        </p>

                        <div className="pt-8 flex gap-8 text-sm font-mono tracking-wider text-white">
                            <div>
                                <span className="block text-gray-600 mb-1">LOCATION</span>
                                Remote / Worldwide
                            </div>
                            <div>
                                <span className="block text-gray-600 mb-1">AVAILABLE FOR</span>
                                Freelance & Full-time
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
