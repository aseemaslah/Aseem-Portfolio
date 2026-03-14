import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Ultra smooth awwwards-style spring math
    const springConfig = { damping: 30, stiffness: 250, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Detect hovering over clickable elements
        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className='hidden lg:flex justify-center items-center fixed top-0 left-0 rounded-full pointer-events-none z-[10000]'
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
                width: 32,
                height: 32,
                backgroundColor: 'white',
                mixBlendMode: 'difference' // The key to the premium look
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        />
    );
};

export default Cursor;
