import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si';
const Contact3D = lazy(() => import('./Contact3D'));
import Magnetic from './Magnetic';

const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const xBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const phoneNumber = "919037432518";
        const text = `Hello Aseem,\n\nMy name is *${name}*.\nEmail: *${email}*\n\nMessage: ${message}`;
        const encodedText = encodeURIComponent(text);
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <section ref={sectionRef} id="contact" className="py-12 md:py-16 lg:py-24 bg-[#030303] text-white relative overflow-hidden">
            <Suspense fallback={null}>
                <Contact3D />
            </Suspense>

            {/* Animated Ambient Light */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-sky-600/15 blur-[180px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/4 z-0 mix-blend-screen"></div>

            {/* Large background text */}
            <motion.div
                style={{ x: xBg, opacity: opacityBg, WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                className="absolute bottom-10 left-0 text-[45vw] sm:text-[35vw] font-black text-transparent opacity-[0.03] pointer-events-none select-none translate-y-20 whitespace-nowrap leading-none"
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
                        <h2 className="text-xs sm:text-sm font-mono text-sky-500 tracking-widest uppercase mb-8 flex items-center">
                            <span className="w-12 h-[1px] bg-sky-500/50 mr-4"></span>
                            Got an idea?
                        </h2>
                        <h3 className="text-[14vw] xs:text-[12vw] sm:text-[10vw] md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 sm:mb-12 leading-[0.9]">
                            LET'S WORK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 animate-glow">TOGETHER.</span>
                        </h3>

                        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-md leading-relaxed font-light">
                            Have a project in mind? I'm currently open for new opportunities. Let's create something exceptional.
                        </p>

                        <div className="flex flex-col gap-6 mb-16">
                            <Magnetic multiplier={0.2}>
                                <motion.a
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    href="mailto:aseemaslah4508@gmail.com"
                                    className="flex items-center gap-4 text-xl sm:text-2xl font-light hover:text-sky-400 transition-colors group w-fit lg:cursor-none"
                                >
                                    <div className="p-4 rounded-full glass-panel border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/50 transition-all duration-500 shrink-0 shadow-lg">
                                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <span className="relative overflow-hidden block">
                                        <span className="block transition-transform duration-500 group-hover:-translate-y-full">aseemaslah4508@gmail.com</span>
                                        <span className="absolute top-full left-0 block opacity-0 group-hover:opacity-100 transition-transform duration-500 group-hover:-translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-400">aseemaslah4508@gmail.com</span>
                                    </span>
                                </motion.a>
                            </Magnetic>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { icon: <SiGithub size={24} />, href: "https://github.com/aseemaslah" },
                                { icon: <SiLinkedin size={24} />, href: "https://www.linkedin.com/in/aseem-aslah" },
                                { icon: <SiInstagram size={24} />, href: "https://www.instagram.com/_asim_aslh__" },
                                { icon: <SiWhatsapp size={24} />, href: "https://wa.me/919037432518" }
                            ].map((social, idx) => (
                                <Magnetic key={idx}>
                                    <motion.a
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-full glass-panel border border-white/10 hover:border-sky-400 transition-all duration-500 text-gray-400 hover:text-white block shadow-lg group lg:cursor-none"
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-500">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                </Magnetic>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Premium Clean Form */}
                <div className="lg:w-6/12 w-full pt-8 lg:pt-0">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-10 sm:space-y-12 bg-[#0a0a0a]/60 p-6 xs:p-8 sm:p-12 border border-white/5 rounded-3xl backdrop-blur-xl relative overflow-hidden group/form shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Hover flare */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-sky-500/20 to-purple-600/10 rounded-full blur-[80px] opacity-0 group-hover/form:opacity-100 group-hover/form:translate-x-1/4 group-hover/form:-translate-y-1/4 transition-all duration-1000 mix-blend-screen"></div>

                        <div className="group relative z-10">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-white/50 transition-all duration-300 peer rounded-t-sm"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none uppercase tracking-wider"
                            >
                                What's your name?
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-700 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="group relative z-10">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-white/50 transition-all duration-300 peer rounded-t-sm"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none uppercase tracking-wider"
                            >
                                Your electronic mail
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-700 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="group relative z-10">
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.02] hover:border-white/50 transition-all duration-300 peer resize-none rounded-t-sm"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-2 top-4 text-gray-500 text-xl font-light transition-all duration-300 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-sky-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none uppercase tracking-wider"
                            >
                                Tell me about your mission
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-700 peer-focus:w-full pointer-events-none"></div>
                        </div>

                        <div className="pt-6 relative z-10">
                            <Magnetic multiplier={0.1}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="relative group flex items-center justify-between w-full p-6 sm:p-8 overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition-all duration-500 shadow-xl lg:cursor-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"></div>

                                    <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-black tracking-widest text-white transition-colors duration-500 uppercase drop-shadow-md">Transmit Request</span>

                                    <div className="relative z-10 flex items-center justify-center p-3 sm:p-4 rounded-full bg-white/10 group-hover:bg-white/25 transition-colors duration-500 backdrop-blur-md">
                                        <ArrowRight className="text-white transform group-hover:-rotate-45 group-hover:scale-110 transition-all duration-500" size={24} />
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
