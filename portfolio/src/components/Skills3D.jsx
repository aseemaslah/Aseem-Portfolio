import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function SkillsScene() {
    const starsRef = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x * 0.2;
        const mouseY = state.pointer.y * 0.2;

        starsRef.current.rotation.x = THREE.MathUtils.lerp(starsRef.current.rotation.x, mouseY, 0.05);
        starsRef.current.rotation.y = THREE.MathUtils.lerp(starsRef.current.rotation.y, mouseX, 0.05);

        const scrollY = window.scrollY;
        // Move stars forward as you scroll
        starsRef.current.position.z = THREE.MathUtils.lerp(starsRef.current.position.z, (scrollY - 1500) * 0.01 - 5, 0.05);
    });

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default function Skills3D() {
    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <SkillsScene />
            </Canvas>
        </div>
    );
}
