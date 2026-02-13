
const Footer = () => {
    return (
        <footer className="py-20 bg-black text-gray-500 border-t border-gray-900 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-sm font-mono uppercase tracking-widest">
                <div className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Aseem Aslah
                </div>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="https://www.linkedin.com/in/aseem-aslah" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/aseemaslah" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="mt-4 md:mt-0">
                    Based in Worldwide
                </div>
            </div>

            {/* Bottom Giant Text */}
            <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none">
                <span className="text-[12rem] md:text-[18rem] font-bold text-gray-900/10 leading-none">ASEEM</span>
            </div>
        </footer>
    );
};

export default Footer;
