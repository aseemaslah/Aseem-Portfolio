import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si';
import Magnetic from './Magnetic';

const SocialSidebar = () => {
    const socials = [
        { icon: <SiGithub size={20} />, href: "https://github.com/aseemaslah", color: "#ffffff", name: "GitHub" },
        { icon: <SiLinkedin size={20} />, href: "https://www.linkedin.com/in/aseem-aslah", color: "#0A66C2", name: "LinkedIn" },
        { icon: <SiInstagram size={20} />, href: "https://www.instagram.com/_asim_aslh__", color: "#E4405F", name: "Instagram" },
        { icon: <SiWhatsapp size={20} />, href: "https://wa.me/919037432518", color: "#25D366", name: "WhatsApp" }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 xl:left-6 xl:bottom-0 xl:translate-x-0 z-50 flex xl:flex-col items-center gap-6"
        >
            <div className="flex flex-row xl:flex-col gap-4 bg-black/60 xl:bg-transparent backdrop-blur-lg xl:backdrop-blur-none px-6 py-3 xl:px-0 xl:py-0 rounded-full border border-white/10 xl:border-none shadow-[0_8px_30px_rgba(0,0,0,0.5)] xl:shadow-none pointer-events-auto">
                {socials.map((social, idx) => (
                    <Magnetic key={idx} multiplier={0.1}>
                        <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="p-2 sm:p-3 rounded-full glass-panel xl:border border-transparent xl:border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-500 xl:shadow-xl group relative lg:cursor-none"
                            style={{ '--hover-color': social.color }}
                        >
                            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                                {social.icon}
                            </div>
                            <span className="absolute left-1/2 -top-10 -translate-x-1/2 xl:left-full xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-4 xl:ml-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap hidden sm:block">
                                {social.name}
                            </span>
                        </motion.a>
                    </Magnetic>
                ))}
            </div>
            {/* Vertical Line for desktop */}
            <div className="hidden xl:block w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        </motion.div>
    );
};

export default SocialSidebar;
