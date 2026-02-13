
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Large background text for depth */}
            <div className="absolute bottom-0 left-0 text-[12rem] md:text-[20rem] font-bold text-gray-800/5 leading-none pointer-events-none select-none -translate-x-10 translate-y-20">
                HIRE
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row justify-between items-start gap-20">

                {/* Left Side: Headline & Links */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 max-w-2xl">
                            LET'S WORK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">TOGETHER.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                            Have a project in mind? I'm currently open for new opportunities. Let's create something exceptional.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            <a href="mailto:aseemaslah4508@gmail.com" className="flex items-center gap-4 text-2xl font-light hover:text-blue-500 transition-colors group">
                                <div className="p-4 rounded-full border border-gray-800 group-hover:border-blue-500 transition-colors">
                                    <Mail size={24} />
                                </div>
                                aseemaslah4508@gmail.com
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/aseemaslah" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aseem-aslah" },
                                { icon: <Instagram size={20} />, href: "https://www.instagram.com/_asim_aslh__" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-gray-900 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Premium Clean Form */}
                <div className="lg:w-1/2 w-full">
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3XMNSJtL7B4Max8yUqRv7v0rjmdRiEpc2i_TP7CL4IcWmVQ/formResponse"
                        method="POST"
                        target="_blank"
                    >
                        <div className="group relative">
                            <input
                                type="text"
                                id="name"
                                name="entry.181621641"
                                className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-white transition-colors peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                What's your name?
                            </label>
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                id="email"
                                name="entry.1593222259"
                                className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-white transition-colors peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                Your email address
                            </label>
                        </div>

                        <div className="group relative">
                            <textarea
                                id="message"
                                name="entry.1243622484"
                                rows="4"
                                className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-white transition-colors peer resize-none"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none"
                            >
                                Tell me about your project
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="group flex items-center justify-between w-full py-6 mt-8 border-b border-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="text-2xl font-light tracking-wide">SEND MESSAGE</span>
                            <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" size={32} />
                        </button>
                    </motion.form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
