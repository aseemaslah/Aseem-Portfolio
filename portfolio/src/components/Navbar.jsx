import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [time, setTime] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 md:py-6 flex justify-between items-center mix-blend-difference text-white"
        >
            {/* Logo Area */}
            <a href="#" className="pointer-events-auto group z-50 relative">
                <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter block group-hover:scale-105 transition-transform origin-left leading-[0.9]">
                    ASEEM<br />ASLAH
                </span>
                <span className="text-[10px] md:text-xs font-mono opacity-50 block mt-1">© {new Date().getFullYear()}</span>
            </a>

            {/* Time Display - Shown on md+ and positioned carefully */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xs font-mono opacity-50">
                {time} IST
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-xs font-medium uppercase tracking-widest relative group overflow-hidden"
                    >
                        <span className="block transform group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
                        <span className="absolute top-full left-0 block transform group-hover:-translate-y-full transition-transform duration-300 text-gray-400">{link.name}</span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                custom={i}
                                variants={linkVariants}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl sm:text-4xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-10 flex flex-col items-center gap-4"
                        >
                            <span className="text-xs font-mono opacity-50">{time} IST</span>
                            <div className="flex gap-6">
                                <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GH</a>
                                <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LI</a>
                                <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">IG</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

