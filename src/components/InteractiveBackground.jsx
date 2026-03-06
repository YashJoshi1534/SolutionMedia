import React, { useEffect, useRef, useCallback } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    // Lerp the current position toward the mouse (smooth trailing)
    currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.04;
    currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.04;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Cursor-following glow (warm orange)
    const gradient1 = ctx.createRadialGradient(
      currentRef.current.x, currentRef.current.y, 0,
      currentRef.current.x, currentRef.current.y, width * 0.35
    );
    gradient1.addColorStop(0, 'rgba(249, 115, 22, 0.15)');
    gradient1.addColorStop(0.5, 'rgba(249, 115, 22, 0.05)');
    gradient1.addColorStop(1, 'rgba(249, 115, 22, 0)');

    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, width, height);

    // Static ambient glow top-left (deep green)
    const gradient2 = ctx.createRadialGradient(
      width * 0.15, height * 0.15, 0,
      width * 0.15, height * 0.15, width * 0.4
    );
    gradient2.addColorStop(0, 'rgba(2, 44, 34, 0.08)');
    gradient2.addColorStop(1, 'rgba(2, 44, 34, 0)');

    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, width, height);

    // Static ambient glow bottom-right (slate)
    const gradient3 = ctx.createRadialGradient(
      width * 0.8, height * 0.7, 0,
      width * 0.8, height * 0.7, width * 0.45
    );
    gradient3.addColorStop(0, 'rgba(226, 232, 240, 0.12)');
    gradient3.addColorStop(1, 'rgba(226, 232, 240, 0)');

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
    };

    resize();
    window.addEventListener('resize', resize);

    // Set initial position to center
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Start animation loop
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
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
