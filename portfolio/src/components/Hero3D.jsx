import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function HeroScene() {
    const meshRef = useRef();
    const isMobile = useMediaQuery('(max-width: 768px)');

    useFrame((state) => {
        // Cursor assisted movement
        const targetX = (state.pointer.x * Math.PI) / 4;
        const targetY = (state.pointer.y * Math.PI) / 4;

        if (meshRef.current) {
            if (isMobile) {
                // Continuous graceful auto-rotation for mobile 
                meshRef.current.rotation.y += 0.005;
                meshRef.current.rotation.x += 0.003;
            } else {
                meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
                meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
            }

            // Scroll based movement (slight translation)
            const scrollY = window.scrollY;
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, scrollY * -0.002, 0.05);
        }
    });

    return (
        <group scale={isMobile ? 0.7 : 1}>
            <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                <mesh ref={meshRef} position={isMobile ? [0, -1, 0] : [0, 0, 0]}>
                    <torusKnotGeometry args={[1.2, 0.35, 256, 64]} />
                    <MeshTransmissionMaterial 
                        backside
                        samples={4}
                        thickness={1.5}
                        chromaticAberration={0.5}
                        anisotropy={0.3}
                        distortion={0.4}
                        distortionScale={0.5}
                        temporalDistortion={0.1}
                        transmission={1}
                        roughness={0.1}
                        color="#e0f2fe"
                    />
                </mesh>
            </Float>
            <Environment preset="city" />
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none">
            <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
            >
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#0ea5e9" />
                <HeroScene />
            </Canvas>
        </div>
    );
}
