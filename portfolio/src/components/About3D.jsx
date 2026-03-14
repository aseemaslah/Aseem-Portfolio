import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function AboutScene() {
    // ... (rest of Scene remains the same)
    const groupRef = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.5, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.5, 0.05);
        }

        const scrollY = window.scrollY;
        if (groupRef.current) {
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (scrollY - 500) * -0.001, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[2, 0, -2]} scale={1.5}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshPhysicalMaterial
                        color="#9ca3af"
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        wireframe
                    />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-3, -1, -5]} scale={1.2}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshPhysicalMaterial
                        color="#4b5563"
                        metalness={0.7}
                        roughness={0.2}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export default function About3D() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    if (!isDesktop) return null;

    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
            <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <AboutScene />
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}
