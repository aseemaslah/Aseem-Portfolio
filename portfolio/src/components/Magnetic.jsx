import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children, multiplier = 0.5 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();

        // Calculate distance from center of the child element
        const x = (clientX - (left + width / 2)) * multiplier;
        const y = (clientY - (top + height / 2)) * multiplier;

        setPosition({ x, y });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
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
