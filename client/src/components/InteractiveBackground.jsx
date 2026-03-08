import React, { useEffect, useRef, useCallback } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const animFrameRef = useRef(null);


  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // Increment time for drifting
    timeRef.current += 0.005;

    // Base target is mouse/touch position
    let targetX = mouseRef.current.x;
    let targetY = mouseRef.current.y;

    // Autonomous drift: sine/cosine based offsets
    // If user hasn't moved the mouse recently or is on mobile, the drift keeps things alive.
    const driftX = Math.sin(timeRef.current) * (width * 0.15);
    const driftY = Math.cos(timeRef.current * 0.8) * (height * 0.15);
    
    targetX += driftX;
    targetY += driftY;
    
    // Smooth follow
    currentRef.current.x += (targetX - currentRef.current.x) * 0.04;
    currentRef.current.y += (targetY - currentRef.current.y) * 0.04;

    ctx.clearRect(0, 0, width, height);

    // Cursor-following glow (purple)
    const gradient1 = ctx.createRadialGradient(
      currentRef.current.x, currentRef.current.y, 0,
      currentRef.current.x, currentRef.current.y, width * 0.35
    );
    gradient1.addColorStop(0, 'rgba(153, 69, 255, 0.12)');
    gradient1.addColorStop(0.5, 'rgba(153, 69, 255, 0.04)');
    gradient1.addColorStop(1, 'rgba(153, 69, 255, 0)');

    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, width, height);

    // Static ambient glow top-left (deep purple) - slightly animated now
    const static1X = width * 0.15 + Math.cos(timeRef.current * 0.5) * 50;
    const static1Y = height * 0.15 + Math.sin(timeRef.current * 0.6) * 50;
    const gradient2 = ctx.createRadialGradient(
      static1X, static1Y, 0,
      static1X, static1Y, width * 0.4
    );
    gradient2.addColorStop(0, 'rgba(123, 47, 190, 0.08)');
    gradient2.addColorStop(1, 'rgba(123, 47, 190, 0)');

    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, width, height);

    // Static ambient glow bottom-right (pink-purple) - slightly animated now
    const static2X = width * 0.8 + Math.sin(timeRef.current * 0.7) * 70;
    const static2Y = height * 0.7 + Math.cos(timeRef.current * 0.4) * 70;
    const gradient3 = ctx.createRadialGradient(
      static2X, static2Y, 0,
      static2X, static2Y, width * 0.45
    );
    gradient3.addColorStop(0, 'rgba(190, 47, 123, 0.06)');
    gradient3.addColorStop(1, 'rgba(190, 47, 123, 0)');

    ctx.fillStyle = gradient3;
    ctx.fillRect(0, 0, width, height);

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Keep center bounds accurate
      if (mouseRef.current.x === 0 && mouseRef.current.y === 0) {
        mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        currentRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleTouchMove = (e) => {
        if (e.touches.length > 0) {
            mouseRef.current.x = e.touches[0].clientX;
            mouseRef.current.y = e.touches[0].clientY;
        }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-50"
      style={{ willChange: 'transform' }}
    />
  );
};

export default InteractiveBackground;
