import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import aseemSuitHd from '../assets/aseem_suit_hd.png';

export default function Hero3D() {
    const cardRef = useRef(null);

    // Mouse coordinates relative to screen dimensions for 3D rotation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for high-end organic transition
    const mouseXSpring = useSpring(x, { stiffness: 80, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 80, damping: 20 });

    // Multipliers for degree of tilt
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Normalize mouse position between -0.5 and 0.5
            const xPct = (e.clientX / width) - 0.5;
            const yPct = (e.clientY / height) - 0.5;
            
            x.set(xPct);
            y.set(yPct);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [x, y]);

    return (
        <div className="w-full h-full flex items-center justify-center p-4 relative select-none pointer-events-none">
            {/* Ambient Background Glow matching the blue gradient theme */}
            <div className="absolute w-[280px] h-[280px] xs:w-[350px] xs:h-[350px] md:w-[500px] md:h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>

            <motion.div
                ref={cardRef}
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d",
                    perspective: 1000
                }}
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }
                }}
                className="relative w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[3/4] z-10 pointer-events-auto"
            >
                {/* Outermost premium colored drop shadow aura */}
                <div className="absolute inset-4 bg-sky-500/35 blur-3xl rounded-[2.5rem] opacity-50 mix-blend-screen -z-20"></div>

                {/* Glowing border outline */}
                <div className="absolute inset-[-2px] bg-gradient-to-br from-sky-400/40 via-transparent to-indigo-500/40 rounded-[2.6rem] -z-10"></div>

                {/* 3D Content Container */}
                <div 
                    className="w-full h-full rounded-[2.5rem] overflow-hidden glass-panel border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-black/30 backdrop-blur-md relative flex items-center justify-center"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <img 
                        src={aseemSuitHd} 
                        alt="Aseem Aslah Portrait" 
                        className="w-full h-full object-cover scale-[1.03] select-none pointer-events-none"
                    />

                    {/* Gradient Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 opacity-40 pointer-events-none"></div>
                </div>

                {/* Subtly offset decorative background glass card */}
                <div 
                    className="absolute inset-2 bg-white/5 border border-white/10 rounded-[2.2rem] -z-10 pointer-events-none"
                    style={{ transform: "translateZ(-20px) rotate(2deg)" }}
                />
            </motion.div>
        </div>
    );
}
