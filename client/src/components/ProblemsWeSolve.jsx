import React, { useRef } from 'react';
import { Timer, CalendarRange, Banknote, Flame, TrendingUp, Layers } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const ConnectorLine = ({ direction, delay = 0 }) => {
  const controls = {
    left: "M 100 0 Q 50 0 0 50",
    right: "M 0 0 Q 50 0 100 50"
  };

  return (
    <div className={`absolute hidden lg:block pointer-events-none opacity-20 ${direction === 'left' ? '-right-16 top-1/2' : '-left-16 top-1/2'}`}>
      <svg width="80" height="40" viewBox="0 0 100 50" fill="none">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          d={controls[direction]}
          stroke="url(#purpleGradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9945FF" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Card = ({ icon: Icon, title, description, index }) => {
  const isLeft = index < 3;
  
  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  // Mouse position for glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const scrollX = e.clientX - rect.left;
    const scrollY = e.clientY - rect.top;
    
    x.set(scrollX / width - 0.5);
    y.set(scrollY / height - 0.5);
    
    mouseX.set(scrollX);
    mouseY.set(scrollY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative will-change-transform [perspective:1000px]"
    >
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative h-full bg-[#0A0A0F]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 overflow-hidden border border-white/[0.05]"
      >
        {/* Soft Background Glow following cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(153,69,255,0.15), transparent 40%)`
          }}
        />
        {/* Subtle glowing border following cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(192,132,252,0.4), transparent 40%)`,
            maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            maskComposite: 'exclude',
            padding: '1px',
            WebkitMaskComposite: 'xor',
          }}
        />

        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 mb-4 p-3 bg-white/[0.03] rounded-xl border border-white/[0.05] group-hover:scale-110 group-hover:bg-[#9945FF]/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <Icon className="w-8 h-8 text-[#C084FC] group-hover:text-[#9945FF]" strokeWidth={1.5} />
        </div>
        <h3 style={{ transform: "translateZ(40px)" }} className="relative z-10 text-white font-semibold text-lg mb-2">{title}</h3>
        <p style={{ transform: "translateZ(30px)" }} className="relative z-10 text-white/50 text-sm leading-relaxed">{description}</p>
      </div>

      <ConnectorLine direction={isLeft ? 'left' : 'right'} delay={0.4 + (index * 0.1)} />
    </motion.div>
  );
};

const ProblemsWeSolve = () => {
  const leftCards = [
    { icon: Timer, title: "No Time to Create Content", description: "You're scaling fast, but content creation is slowing you down." },
    { icon: CalendarRange, title: "Inconsistent Posting", description: "Your brand fades away when you're too busy to stay active." },
    { icon: Banknote, title: "Expensive Content Teams", description: "Full-time hires and overhead costs are eating into your margins." }
  ];

  const rightCards = [
    { icon: Flame, title: "Content Creation Burnout", description: "Struggling to keep up with the relentless demand for high-quality posts." },
    { icon: TrendingUp, title: "Low Social Media Visibility", description: "Great products falling flat due to lack of strategic content reach." },
    { icon: Layers, title: "Production Bottlenecks", description: "Waiting days for simple edits. Speed is your biggest missing asset." }
  ];

  return (
    <section id="problems" className="py-32 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #444 1px, transparent 1px),
            linear-gradient(to bottom, #444 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Cards */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            {leftCards.map((card, idx) => (
              <Card key={idx} {...card} index={idx} />
            ))}
          </div>

          {/* Center Content */}
          <div className="order-1 lg:order-2 text-center flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                <span className="text-white block">Why Most Businesses</span>
                <span className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
                  Struggle With Content
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#9945FF] to-[#C084FC] mx-auto rounded-full mb-8" />
              <p className="text-white/60 text-lg sm:text-xl max-w-xs mx-auto leading-relaxed">
                We remove the content production friction so you can focus on building your vision.
              </p>
            </motion.div>
          </div>

          {/* Right Side Cards */}
          <div className="order-3 flex flex-col gap-8">
            {rightCards.map((card, idx) => (
              <Card key={idx + 3} {...card} index={idx + 3} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;

