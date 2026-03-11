import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Icosahedron, Box, Cylinder, Float, TorusKnot } from '@react-three/drei';

const FloatingTechObjects = () => {
  const { viewport } = useThree();
  const [scrollY, setScrollY] = useState(0);
  
  const camRef = useRef();
  const aiRef = useRef();
  const gearRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1000;
    const scrollFactor = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Constant idle rotations
    if (camRef.current) {
      camRef.current.rotation.x += delta * 0.2;
      camRef.current.rotation.y += delta * 0.3;
      // Parallax move up on scroll
      camRef.current.position.y = (viewport.height * 0.3) - (scrollFactor * viewport.height * 0.8);
    }

    if (aiRef.current) {
      aiRef.current.rotation.z += delta * 0.5;
      aiRef.current.rotation.x += delta * 0.4;
      // Parallax move up on scroll (moves faster)
      aiRef.current.position.y = (-viewport.height * 0.1) + (scrollFactor * viewport.height * 0.6);
    }

    if (gearRef.current) {
      gearRef.current.rotation.y -= delta * 0.4;
      gearRef.current.rotation.z += delta * 0.2;
      // Parallax move
      gearRef.current.position.y = (viewport.height * 0.1) - (scrollFactor * viewport.height * 0.5);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#9945FF" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#C084FC" />

      {/* Camera Tool */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={camRef} position={[viewport.width * 0.3, 0, -3]} scale={0.4}>
          <Box args={[1.5, 1, 0.5]}>
            <meshStandardMaterial color="#12121A" metalness={0.8} roughness={0.2} />
          </Box>
          <Cylinder args={[0.4, 0.4, 0.6, 32]} position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#0A0A0F" metalness={0.9} roughness={0.1} />
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.65, 32]} position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#9945FF" emissive="#9945FF" emissiveIntensity={0.5} />
          </Cylinder>
        </group>
      </Float>

      {/* AI Core Component */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <group ref={aiRef} position={[-viewport.width * 0.35, 0, -4]} scale={0.5}>
          <Icosahedron args={[1, 0]}>
            <meshStandardMaterial color="#C084FC" wireframe wireframeLinewidth={2} transparent opacity={0.6} emissive="#C084FC" emissiveIntensity={0.5} />
          </Icosahedron>
          <Icosahedron args={[0.5, 0]}>
             <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
          </Icosahedron>
        </group>
      </Float>

      {/* Abstract Tech Knot */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <group ref={gearRef} position={[viewport.width * 0.2, 0, -5]} scale={0.3}>
          <TorusKnot args={[1, 0.3, 100, 16]}>
            <meshStandardMaterial color="#9945FF" metalness={0.8} roughness={0.2} transparent opacity={0.5} wireframe />
          </TorusKnot>
        </group>
      </Float>
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-5] pointer-events-none bg-[#0A0A0F]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        
        <FloatingTechObjects />

        {/* Purple Nodes */}
        <Sparkles 
          count={150} 
          scale={[20, 20, 10]} 
          size={2} 
          speed={0.2} 
          opacity={0.3} 
          color="#9945FF" 
        />
        
        {/* Pink/Magenta Nodes */}
        <Sparkles 
          count={80} 
          scale={[15, 15, 15]} 
          size={3} 
          speed={0.3} 
          opacity={0.2} 
          color="#C084FC" 
        />
        
        {/* Tiny white dust */}
        <Sparkles 
          count={250} 
          scale={[25, 25, 15]} 
          size={1} 
          speed={0.1} 
          opacity={0.1} 
          color="#ffffff" 
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
