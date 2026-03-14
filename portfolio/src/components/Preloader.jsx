import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fast random loading simulation for ultra-premium feel
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Start fading out shortly after 100%
                    setTimeout(() => onComplete(), 400);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 20) + 5;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center text-white overflow-hidden pointer-events-auto"
        >
            {/* Massive background noise text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-transparent opacity-[0.03] stroke-text select-none whitespace-nowrap pointer-events-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}>
                PORTFOLIO
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[18vw] sm:text-[15vw] md:text-[10rem] font-black tracking-tighter tabular-nums leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600"
                    >
                        {progress}
                    </motion.div>
                </div>
                <motion.div
                    className="w-full flex justify-end pr-2 md:pr-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-xl md:text-3xl font-bold text-sky-500">%</span>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-gray-400 overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Loading Experience
                </motion.div>
            </div>

            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 w-32 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-600"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
