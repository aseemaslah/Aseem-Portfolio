import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function HeroScene() {
    // ... Scene logic remains the same
    const meshRef = useRef();

    useFrame((state) => {
        // Cursor assisted movement
        const targetX = (state.pointer.x * Math.PI) / 4;
        const targetY = (state.pointer.y * Math.PI) / 4;

        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);

            // Scroll based movement (slight translation)
            const scrollY = window.scrollY;
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, scrollY * -0.002, 0.05);
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <mesh ref={meshRef} position={[4, 0, 0]}>
                    <torusKnotGeometry args={[1.2, 0.4, 256, 64]} />
                    <MeshTransmissionMaterial
                        color="#ffffff"
                        resolution={1024}
                        thickness={0.5}
                        roughness={0.1}
                        transmission={1}
                        ior={1.5}
                        chromaticAberration={0.06}
                        backside
                    />
                </mesh>
                <ContactShadows position={[4, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
            </Float>
        </group>
    );
}

export default function Hero3D() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    if (!isDesktop) return null;

    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none hidden lg:block">
            <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <HeroScene />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
