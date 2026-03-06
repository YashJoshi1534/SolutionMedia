import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  // Motion values for tracking cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth, lagging physics (fluid feel)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 1 });

  useEffect(() => {
    setMounted(true);
    
    // Set initial position to center
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-primary-bg">
      
      {/* Dynamic Cursor-following Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        className="absolute w-[60vw] max-w-[800px] aspect-square rounded-full mix-blend-multiply filter blur-[80px] bg-accent-orange/20"
      />

      {/* Static abstract gradients to fill space */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] bg-dark-green/10"
        style={{ willChange: 'transform' }}
      />
      
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] bg-secondary-bg/50"
        style={{ willChange: 'transform' }}
      />

      {/* Reduced glass effect: extreme backdrop blur destroys fps while scrolling */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default InteractiveBackground;
