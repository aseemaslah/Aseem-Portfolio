import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [time, setTime] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        const updateTime = () => {
            const now = new Date();
            // Force precise IST formatting
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).toUpperCase());
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        }
    }, []);

    const links = [
        { name: 'Index', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        open: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }} // Wait for preloader to finish
            className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 flex justify-between items-center transition-all duration-700 ${scrolled ? 'bg-[#030303]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent text-white mix-blend-difference'}`}
        >
            {/* Logo Area (Left) */}
            <div className="flex-1 flex justify-start z-50">
                <Magnetic>
                    <a href="#" className="pointer-events-auto group relative block p-2">
                        <span className="text-xl md:text-2xl font-black tracking-tighter block group-hover:scale-105 transition-transform origin-left leading-[0.85]">
                            ASEEM<br />
                            <span className="text-sky-400 group-hover:text-white transition-colors">ASLAH</span>
                        </span>
                    </a>
                </Magnetic>
            </div>

            {/* Desktop Navigation (Center) */}
            <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-center gap-2 glass-panel px-8 py-3 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-white/5 border border-white/10 backdrop-blur-md">
                    {links.map((link) => (
                        <Magnetic key={link.name} multiplier={0.2}>
                            <a
                                href={link.href}
                                className="text-[11px] font-semibold uppercase tracking-[0.2em] relative group overflow-hidden px-5 py-2.5 block rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full bg-sky-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1] origin-center z-0"></span>
                                <span className="block relative z-10">{link.name}</span>
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </div>

            {/* Right Side (Time Display) */}
            <div className="hidden md:flex flex-1 justify-end items-center">
                <Magnetic>
                    <div className="flex items-center gap-4 px-6 py-3 rounded-full neu-panel border border-white/5 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-500 cursor-default group">
                        <div className="relative flex items-center justify-center w-2 h-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 shadow-[0_0_10px_#0ea5e9]"></span>
                        </div>
                        <span className="text-xs font-mono tracking-widest text-gray-300 group-hover:text-white transition-colors">
                            {time || '...'}
                            <span className="text-sky-500/70 ml-1">IST</span>
                        </span>
                    </div>
                </Magnetic>
            </div>

            {/* Mobile Menu Toggle (Right) */}
            <div className="flex md:hidden flex-1 justify-end z-50">
                <Magnetic>
                    <button
                        className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
                    </button>
                </Magnetic>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#030303]/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 md:hidden z-40"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none bg-[url('/noise.svg')]"></div>

                        {links.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                custom={i}
                                variants={linkVariants}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-gray-400 hover:text-white transition-colors relative group"
                            >
                                <span className="absolute top-1/2 left-[-10%] w-0 h-2 bg-gradient-to-r from-sky-400 to-indigo-500 -translate-y-1/2 group-hover:w-[120%] transition-all duration-700 ease-[0.16,1,0.3,1] z-0 blur-[2px]"></span>
                                <span className="relative z-10">{link.name}</span>
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 flex flex-col items-center gap-6"
                        >
                            <div className="flex items-center gap-3 text-xs font-mono px-6 py-3 rounded-full border border-white/10 bg-white/5 shadow-inner">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#0ea5e9] animate-pulse"></div>
                                <span className="opacity-80 text-gray-200">{time} IST</span>
                            </div>
                            <div className="flex gap-8">
                                <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub Profile" className="text-gray-500 hover:text-sky-400 transition-colors text-sm font-mono tracking-widest">GH</a>
                                <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="text-gray-500 hover:text-[#0A66C2] transition-colors text-sm font-mono tracking-widest">LI</a>
                                <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram" className="text-gray-500 hover:text-[#E4405F] transition-colors text-sm font-mono tracking-widest">IG</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

