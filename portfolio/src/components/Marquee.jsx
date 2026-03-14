import { useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100, className = "" }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden tracking-tighter leading-[0.85] m-0 whitespace-nowrap flex flex-nowrap py-2 sm:py-4">
            <motion.div className={`scroller font-black uppercase text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] flex whitespace-nowrap flex-nowrap ${className}`} style={{ x }}>
                <span className="block mr-12 sm:mr-16 md:mr-24">{children} </span>
                <span className="block mr-12 sm:mr-16 md:mr-24">{children} </span>
                <span className="block mr-12 sm:mr-16 md:mr-24">{children} </span>
                <span className="block mr-12 sm:mr-16 md:mr-24">{children} </span>
            </motion.div>
        </div>
    );
}

const Marquee = () => {
    return (
        <section className="py-24 md:py-36 my-16 mx-4 sm:mx-8 md:mx-16 rounded-[3rem] glass-panel text-white overflow-hidden relative z-10 shadow-[0_0_100px_rgba(14,165,233,0.15)] border border-white/5 bg-[#030303]/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-full bg-gradient-to-r from-sky-500/10 via-blue-500/20 to-indigo-500/10 blur-[120px] pointer-events-none mix-blend-screen"></div>

            <ParallaxText
                baseVelocity={-2.5}
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-300 hover:to-indigo-400 transition-all duration-700"
            >
                MEAN STACK DEVELOPER • CREATIVE CODER •
            </ParallaxText>

            <ParallaxText
                baseVelocity={2.5}
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)" }}
            >
                <span style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)" }} className="hover:text-white transition-colors duration-700 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">MONGODB • EXPRESS • ANGULAR • NODE •</span>
            </ParallaxText>
        </section>
    );
};

export default Marquee;
