import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function ContactScene() {
    const meshRef = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY * 0.5, 0.05);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX * 0.5, 0.05);

            const scrollY = window.scrollY;
            // Adjust baseline based on approximate scroll position of Contact section
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -(scrollY - 3000) * 0.001 - 1, 0.05);
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={meshRef} position={[3, -1, -2]}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <MeshDistortMaterial
                        color="#eab308" // yellow-500
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        metalness={1}
                        roughness={0.1}
                        distort={0.4}
                        speed={2}
                    />
                </mesh>
                <ContactShadows position={[3, -3.5, -2]} opacity={0.5} scale={10} blur={2.5} far={4} />
            </Float>
        </group>
    );
}

export default function Contact3D() {
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
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <ContactScene />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
