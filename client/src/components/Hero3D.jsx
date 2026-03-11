import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const GlowingSphere = () => {
  const sphereRef = useRef();
  
  // Continuous rotation for the rings and core
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
      sphereRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={sphereRef}>
        {/* Outer energy ring */}
        <mesh>
          <torusGeometry args={[2.5, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color="#9945FF" 
            emissive="#9945FF" 
            emissiveIntensity={1.5} 
            toneMapped={false} 
          />
        </mesh>
        
        {/* Second energy ring at an angle */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.3, 0.03, 16, 100]} />
          <meshStandardMaterial 
            color="#C084FC" 
            emissive="#C084FC" 
            emissiveIntensity={1} 
            toneMapped={false} 
          />
        </mesh>

        {/* Core AI Brain / Sphere */}
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial 
            color="#0a0a0f" 
            attach="material" 
            distort={0.4} 
            speed={2} 
            roughness={0.2} 
            metalness={0.8}
          />
        </Sphere>
        
        {/* Internal core light */}
        <pointLight position={[0, 0, 0]} intensity={15} color="#9945FF" distance={5} />
      </group>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#9945FF" />
        
        <PresentationControls 
          global={false}
          cursor={true}
          snap={{ mass: 1, tension: 170, friction: 26 }}
          speed={1.5}
          zoom={1}
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <GlowingSphere />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Hero3D;
