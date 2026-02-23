
const Footer = () => {
    return (
        <footer className="py-16 sm:py-20 bg-black text-gray-500 border-t border-gray-900 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-widest gap-6 sm:gap-8 md:gap-0">
                <div className="order-2 md:order-1 text-center md:text-left">
                    &copy; {new Date().getFullYear()} Aseem Aslah
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 order-1 md:order-2">
                    <a href="https://github.com/aseemaslah" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/_asim_aslh__" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                </div>

                <div className="order-3 text-center md:text-right">
                    Based in Worldwide
                </div>
            </div>

            {/* Bottom Giant Text */}
            <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none opacity-5 md:opacity-10">
                <span className="text-[25vw] md:text-[18rem] font-bold text-gray-800 leading-none">ASEEM</span>
            </div>
        </footer>

    );
};

export default Footer;
