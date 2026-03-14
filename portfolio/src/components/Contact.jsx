import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import Contact3D from './Contact3D';
import Magnetic from './Magnetic';

const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const xBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]);

    return (
        <section ref={sectionRef} id="contact" className="py-24 md:py-32 lg:py-48 bg-black text-white relative overflow-hidden">
            <Contact3D />

            {/* Animated Ambient Light */}
            <div className="absolute bottom-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-sky-900/20 blur-[150px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/4 z-0"></div>

            {/* Large background text */}
            <motion.div
                style={{ x: xBg, opacity: opacityBg, WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
                className="absolute bottom-10 left-0 text-[35vw] font-black text-transparent opacity-5 pointer-events-none select-none translate-y-20 whitespace-nowrap text-stroke-hover"
            >
                CONTACT
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-24">

                {/* Left Side: Headline & Links */}
                <div className="lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-xs sm:text-sm font-mono text-sky-500 tracking-[0.5em] mb-8 uppercase flex items-center">
                            <span className="w-12 h-[1px] bg-sky-500/50 mr-4"></span>
                            Got an idea?
                        </h2>
                        <h3 className="text-[12vw] sm:text-[10vw] md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 sm:mb-12 leading-[0.9]">
                            LET'S WORK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">TOGETHER.</span>
                        </h3>

                        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                            Have a project in mind? I'm currently open for new opportunities. Let's create something exceptional.
                        </p>

                        <div className="flex flex-col gap-6 mb-16">
                            <Magnetic multiplier={0.2}>
                                <motion.a
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    href="mailto:aseemaslah4508@gmail.com"
                                    className="flex items-center gap-4 text-xl sm:text-2xl font-light hover:text-sky-400 transition-colors group w-fit"
                                >
                                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/50 transition-all duration-300 shrink-0">
                                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <span className="relative overflow-hidden block">
                                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">aseemaslah4508@gmail.com</span>
                                        <span className="absolute top-full left-0 block opacity-0 group-hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-full text-sky-400">aseemaslah4508@gmail.com</span>
                                    </span>
                                </motion.a>
                            </Magnetic>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { icon: <Github size={24} />, href: "https://github.com/aseemaslah" },
                                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/aseem-aslah" },
                                { icon: <Instagram size={24} />, href: "https://www.instagram.com/_asim_aslh__" }
                            ].map((social, idx) => (
                                <Magnetic key={idx}>
                                    <motion.a
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all duration-300 text-gray-400 block"
                                    >
                                        {social.icon}
                                    </motion.a>
                                </Magnetic>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Premium Clean Form */}
                <div className="lg:w-6/12 w-full pt-8 lg:pt-0">
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-12 bg-white/5 p-8 sm:p-12 border border-white/10 rounded-3xl backdrop-blur-sm relative overflow-hidden group/form"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3XMNSJtL7B4Max8yUqRv7v0rjmdRiEpc2i_TP7CL4IcWmVQ/formResponse"
                        method="POST"
                        target="_blank"
                    >
                        {/* Hover flare */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] opacity-0 group-hover/form:opacity-100 group-hover/form:translate-x-1/2 group-hover/form:-translate-y-1/2 transition-all duration-1000"></div>

                        <div className="group relative">
                            <input
                                type="text"
                                id="name"
                                name="entry.181621641"
                                className="w-full bg-transparent border-b border-gray-700/50 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-gray-500 transition-all duration-300 peer rounded-t-sm"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                What's your name?
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                id="email"
                                name="entry.1593222259"
                                className="w-full bg-transparent border-b border-gray-700/50 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-gray-500 transition-all duration-300 peer rounded-t-sm"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                Your electronic mail
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="group relative">
                            <textarea
                                id="message"
                                name="entry.1243622484"
                                rows="3"
                                className="w-full bg-transparent border-b border-gray-700/50 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-gray-500 transition-all duration-300 peer resize-none rounded-t-sm"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                Tell me about your mission
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="pt-6">
                            <Magnetic multiplier={0.1}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="relative group flex items-center justify-between w-full p-8 overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-300 shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>

                                    <span className="relative z-10 text-xl md:text-2xl font-bold tracking-widest text-white transition-colors duration-300 uppercase">Transmit</span>

                                    <div className="relative z-10 flex items-center justify-center p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <ArrowRight className="text-white transform group-hover:-rotate-45 transition-transform duration-300" size={24} />
                                    </div>
                                </motion.button>
                            </Magnetic>
                        </div>
                    </motion.form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
