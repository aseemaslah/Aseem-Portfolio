import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [time, setTime] = useState('');

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
        { name: 'Work', href: '#projects' },
        { name: 'Expertise', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none"
        >
            {/* Logo Area */}
            <a href="#" className="pointer-events-auto group">
                <span className="text-xl font-bold tracking-tighter block group-hover:scale-110 transition-transform origin-left">
                    ASEEM<br />ASLAH
                </span>
                <span className="text-xs font-mono opacity-50 block mt-1">© {new Date().getFullYear()}</span>
            </a>

            {/* Center Dynamic Visual - Optional, maybe just keep clean */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xs font-mono opacity-50">
                {time} IST
            </div>

            {/* Links Area - Vertical on Desktop for unique look or standard horizontal? Let's go minimal horizontal pill */}
            <div className="pointer-events-auto">
                <div className={`flex flex-col md:flex-row gap-1 md:gap-8 items-end md:items-center transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md p-2 rounded-full px-6' : ''}`}>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wide relative group overflow-hidden"
                        >
                            <span className="block transform group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
                            <span className="absolute top-full left-0 block transform group-hover:-translate-y-full transition-transform duration-300 text-gray-400">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
