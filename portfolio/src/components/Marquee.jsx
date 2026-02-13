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

function ParallaxText({ children, baseVelocity = 100 }) {
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
        <div className="parallax overflow-hidden tracking-tighter leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="scroller font-black uppercase text-6xl md:text-9xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
            </motion.div>
        </div>
    );
}

const Marquee = () => {
    return (
        <section className="py-12 bg-black text-white overflow-hidden relative z-10 border-y border-gray-800">
            <ParallaxText baseVelocity={-5}>MEAN STACK DEVELOPER • CREATIVE CODER • </ParallaxText>
            <ParallaxText baseVelocity={5}>MONGODB • EXPRESS • ANGULAR • NODE • </ParallaxText>
        </section>
    );
};

export default Marquee;
