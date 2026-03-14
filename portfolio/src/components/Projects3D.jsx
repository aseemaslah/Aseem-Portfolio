import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Octahedron, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function ProjectsScene() {
    const groupRef = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.2, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.2, 0.05);

            const scrollY = window.scrollY;
            // Adjust baseline based on approximate scroll position of Projects section
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -(scrollY - 2000) * 0.002, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                <Torus args={[3, 0.2, 32, 100]} position={[-6, 2, -2]}>
                    <meshPhysicalMaterial
                        color="#6b7280"
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={1}
                        wireframe
                    />
                </Torus>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
                <Octahedron args={[2]} position={[6, -4, -5]}>
                    <meshPhysicalMaterial
                        color="#9ca3af"
                        metalness={0.8}
                        roughness={0.1}
                    />
                </Octahedron>
            </Float>
        </group>
    );
}

export default function Projects3D() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    if (!isDesktop) return null;

    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-20">
            <Canvas 
                camera={{ position: [0, 0, 10], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <ProjectsScene />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
