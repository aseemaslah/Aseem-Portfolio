import Magnetic from './Magnetic';

const Footer = () => {
    return (
        <footer className="py-24 sm:py-32 bg-black text-gray-400 border-t border-white/5 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest gap-8 sm:gap-12 md:gap-0">
                <div className="order-2 md:order-1 text-center md:text-left text-gray-500">
                    &copy; {new Date().getFullYear()} Aseem Aslah. <br className="md:hidden" /> All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 order-1 md:order-2">
                    <Magnetic>
                        <a href="https://github.com/aseemaslah" target="_blank" className="hover:text-white transition-all py-3 px-6 neu-panel rounded-full hover:border-sky-500/50">GitHub</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" className="hover:text-[#0A66C2] transition-all py-3 px-6 neu-panel rounded-full hover:border-[#0A66C2]/50">LinkedIn</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.instagram.com/_asim_aslh__" target="_blank" className="hover:text-[#E4405F] transition-all py-3 px-6 neu-panel rounded-full hover:border-[#E4405F]/50">Instagram</a>
                    </Magnetic>
                </div>

                <div className="order-3 text-center md:text-right text-gray-500">
                    <div className="flex items-center gap-2 justify-center md:justify-end">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Work
                    </div>
                </div>
            </div>

            {/* Bottom Giant Text */}
            <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none opacity-20 transform translate-y-1/2 select-none">
                <span className="text-[25vw] font-black text-transparent stroke-text text-stroke-hover leading-[0.5]" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>
                    ASEEM
                </span>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </footer>
    );
};

export default Footer;
