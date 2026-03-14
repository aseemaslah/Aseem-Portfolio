import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children, multiplier = 0.5 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const rectRef = useRef(null);

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        if (!rectRef.current) {
            rectRef.current = ref.current.getBoundingClientRect();
        }
        const { width, height, left, top } = rectRef.current;

        // Calculate distance from center of the child element
        const x = (clientX - (left + width / 2)) * multiplier;
        const y = (clientY - (top + height / 2)) * multiplier;

        setPosition({ x, y });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        rectRef.current = null; // Reset for next interaction
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
