import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Sphere, Box, Octahedron, TorusKnot, Icosahedron } from '@react-three/drei';

const OrbitalSystem = () => {
  const { viewport } = useThree();
  const [scrollY, setScrollY] = useState(0);
  
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Store current animated values for smooth lerping
  const currentY = useRef(0);
  const currentRotY = useRef(0);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1000;
    const targetScrollFactor = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Smooth group parallax & levitation via Lerp
    if (groupRef.current) {
      // Calculate where we *want* to be based on scroll
      const targetY = (viewport.height * 0.1) - (targetScrollFactor * viewport.height * 0.4);
      const targetRotY = targetScrollFactor * Math.PI * 0.5;

      // Smoothly interpolate current values towards targets (easing factor = delta * 4)
      currentY.current = THREE.MathUtils.lerp(currentY.current, targetY, delta * 4);
      currentRotY.current = THREE.MathUtils.lerp(currentRotY.current, targetRotY, delta * 4);

      // Apply the eased values
      groupRef.current.position.y = currentY.current + (Math.sin(time * 0.5) * 0.2); // eased Y + slow breath
      groupRef.current.position.x = (viewport.width * 0.2) - (targetScrollFactor * viewport.width * 0.2); 
      groupRef.current.rotation.y = currentRotY.current; // eased rotation
    }

    // Individual orbit speeds
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.3;     // inner fast
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.15;    // middle reverse
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.08;    // outer slow
    
    // Give objects a slight intrinsic spin
    if (ring2Ref.current) ring2Ref.current.children[0].rotation.x += delta * 0.5;
    if (ring2Ref.current) ring2Ref.current.children[1].rotation.y += delta * 0.8;
  });

  return (
    <group ref={groupRef} position={[viewport.width * 0.25, 0, -5]}>
      {/* Central Core Glow */}
      <Sphere args={[0.3, 32, 32]}>
        <meshBasicMaterial color="#A855F7" transparent opacity={0.8} />
      </Sphere>
      <pointLight intensity={8} color="#A855F7" distance={15} />
      <pointLight intensity={4} color="#EC4899" distance={10} position={[0,0,2]} />

      {/* Ring 1 - Inner Orbit */}
      <group rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        {/* Track */}
        <mesh>
          <torusGeometry args={[2, 0.008, 16, 100]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.4} />
        </mesh>
        {/* Orbiting Objects */}
        <group ref={ring1Ref}>
          <Box args={[0.3, 0.3, 0.3]} position={[2, 0, 0]}>
            <meshStandardMaterial color="#12121A" metalness={0.8} roughness={0.2} />
          </Box>
          <Sphere args={[0.15, 16, 16]} position={[-2, 0, 0]}>
            <meshStandardMaterial color="#EC4899" emissive="#EC4899" emissiveIntensity={0.8} />
          </Sphere>
        </group>
      </group>

      {/* Ring 2 - Middle Orbit */}
      <group rotation={[Math.PI / 4, -Math.PI / 8, 0]}>
        <mesh>
          <torusGeometry args={[3.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#6366F1" transparent opacity={0.3} />
        </mesh>
        <group ref={ring2Ref}>
          <Octahedron args={[0.4]} position={[3.8, 0, 0]}>
            <meshStandardMaterial color="#6366F1" emissive="#6366F1" wireframe emissiveIntensity={0.4} />
          </Octahedron>
          <TorusKnot args={[0.2, 0.05, 64, 16]} position={[-3.8, 0, 0]}>
             <meshStandardMaterial color="#A855F7" metalness={0.9} roughness={0.1} />
          </TorusKnot>
        </group>
      </group>

      {/* Ring 3 - Outer Orbit */}
      <group rotation={[-Math.PI / 5, Math.PI / 5, 0]}>
        <mesh>
          <torusGeometry args={[5.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#EC4899" transparent opacity={0.2} />
        </mesh>
        <group ref={ring3Ref}>
          <Icosahedron args={[0.4]} position={[5.5, 0, 0]}>
            <meshStandardMaterial color="#0A0A0F" metalness={0.9} roughness={0.1} />
            {/* Edge glow via pointlight attached to the outer object */}
            <pointLight intensity={2} color="#EC4899" distance={2} />
          </Icosahedron>
        </group>
      </group>
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-5] pointer-events-none bg-[#05050A]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        
        <OrbitalSystem />

        {/* Purple Depth Dust */}
        <Sparkles 
          count={100} 
          scale={[25, 25, 15]} 
          size={2} 
          speed={0.1} 
          opacity={0.3} 
          color="#A855F7" 
        />
        
        {/* Pink Sparkles */}
        <Sparkles 
          count={50} 
          scale={[20, 20, 10]} 
          size={3} 
          speed={0.2} 
          opacity={0.4} 
          color="#EC4899" 
        />
        
        {/* Tiny white/cyan starfield */}
        <Sparkles 
          count={300} 
          scale={[30, 30, 20]} 
          size={1} 
          speed={0.05} 
          opacity={0.15} 
          color="#a5f3fc" 
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
