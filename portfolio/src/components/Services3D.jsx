import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function ServicesScene() {
    const groupRef = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.3, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.3, 0.05);

            const scrollY = window.scrollY;
            // Adjust baseline based on approximate scroll position of Services section
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -(scrollY - 1800) * 0.001 - 1, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                <Icosahedron args={[2.5, 1]} position={[0, 0, -3]}>
                    <meshPhysicalMaterial
                        color="#4338ca" // indigo-700
                        metalness={0.9}
                        roughness={0.2}
                        wireframe
                    />
                </Icosahedron>
            </Float>
        </group>
    );
}

export default function Services3D() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    if (!isDesktop) return null;

    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-20">
            <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <ServicesScene />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
