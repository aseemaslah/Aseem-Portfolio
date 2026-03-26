import Magnetic from './Magnetic';

const Footer = () => {
    return (
        <footer className="py-12 sm:py-16 bg-[#030303] text-gray-400 border-t border-white/5 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent shadow-[0_0_15px_rgba(14,165,233,1)]"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest gap-8 sm:gap-12 md:gap-0">
                <div className="order-2 md:order-1 text-center md:text-left text-gray-500">
                    &copy; {new Date().getFullYear()} Aseem Aslah. <br className="md:hidden" /> <span className="text-gray-600">All rights reserved.</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 order-1 md:order-2">
                    <Magnetic>
                        <a href="https://github.com/aseemaslah" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub Profile" className="hover:text-white transition-all py-3 px-6 glass-panel rounded-full hover:border-sky-500/50 hover:bg-white/5 shadow-md lg:cursor-none text-gray-400">GitHub</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="hover:text-[#0A66C2] transition-all py-3 px-6 glass-panel rounded-full hover:border-[#0A66C2]/50 hover:bg-white/5 shadow-md lg:cursor-none text-gray-400">LinkedIn</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.instagram.com/_asim_aslh__" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram" className="hover:text-[#E4405F] transition-all py-3 px-6 glass-panel rounded-full hover:border-[#E4405F]/50 hover:bg-white/5 shadow-md lg:cursor-none text-gray-400">Instagram</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://wa.me/919037432518" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="hover:text-[#25D366] transition-all py-3 px-6 glass-panel rounded-full hover:border-[#25D366]/50 hover:bg-white/5 shadow-md lg:cursor-none text-gray-400">WhatsApp</a>
                    </Magnetic>
                </div>

                <div className="order-3 text-center md:text-right text-gray-500">
                    <div className="flex items-center gap-3 justify-center md:justify-end bg-white/5 py-2 px-4 rounded-full border border-white/10 shadow-inner">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
                        <span className="text-gray-300">Available for Work</span>
                    </div>
                </div>
            </div>

            {/* Bottom Giant Text */}
            <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none opacity-10 transform translate-y-1/2 select-none mix-blend-screen">
                <span className="text-[25vw] font-black text-transparent stroke-text text-stroke-hover leading-[0.5] tracking-tighter" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>
                    ASEEM
                </span>
            </div>
            
            {/* Base Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-sky-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        </footer>
    );
};

export default Footer;
