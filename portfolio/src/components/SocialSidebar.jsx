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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6"
        >
            <div className="flex flex-col gap-4">
                {socials.map((social, idx) => (
                    <Magnetic key={idx} multiplier={0.1}>
                        <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="p-3 rounded-full glass-panel border border-white/5 hover:border-white/20 text-gray-500 hover:text-white transition-all duration-500 shadow-xl group relative lg:cursor-none"
                            style={{ '--hover-color': social.color }}
                        >
                            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                                {social.icon}
                            </div>
                            <span className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap">
                                {social.name}
                            </span>
                        </motion.a>
                    </Magnetic>
                ))}
            </div>
            {/* Vertical Line */}
            <div className="w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        </motion.div>
    );
};

export default SocialSidebar;
