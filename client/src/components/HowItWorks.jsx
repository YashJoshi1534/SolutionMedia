import React from 'react';
import { Compass, Cpu, Rocket, TrendingUp } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const StepCard = ({ step, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="relative rounded-3xl [perspective:1000px] group"
    >
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative h-full bg-[#12121A]/40 backdrop-blur-md rounded-3xl p-8 pt-12 pb-10 shadow-2xl border border-white/[0.04] hover:border-white/10 hover:bg-[#12121A]/70 transition-all duration-500"
      >
        {/* Large Decorative Step Number */}
        <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.02] group-hover:text-[#9945FF]/10 font-sans select-none pointer-events-none transition-all duration-500 transform group-hover:scale-110">
          0{step.id}
        </div>

        {/* Soft Background Glow following cursor */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
           style={{
             background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(153,69,255,0.15), transparent 40%)`
           }}
        />
        {/* Subtle glowing border following cursor */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
           style={{
             background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(192,132,252,0.4), transparent 40%)`,
             maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
             maskComposite: 'exclude',
             padding: '1px',
             WebkitMaskComposite: 'xor',
           }}
        />

        {/* Icon Floating Badge */}
        <div style={{ transform: "translateZ(50px)" }} className="absolute -top-6 left-8 z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9945FF] to-[#7B2FBE] flex justify-center items-center shadow-xl shadow-[#9945FF]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {step.icon}
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-4 text-left" style={{ transformStyle: "preserve-3d" }}>
          <span style={{ transform: "translateZ(40px)" }} className="relative z-10 text-xs font-bold text-[#C084FC]/80 uppercase tracking-widest mb-3 block">
            Phase 0{step.id}
          </span>
          <h4 style={{ transform: "translateZ(40px)" }} className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-[#C084FC] transition-colors duration-300">
            {step.title}
          </h4>
          <p style={{ transform: "translateZ(30px)" }} className="relative z-10 text-white/50 leading-relaxed text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = ({ 
  steps = [
    {
      id: 1,
      icon: <Compass className="w-6 h-6 text-white" />,
      title: 'Strategic Discovery',
      description: 'A focused strategy call to assess your brand and goals to define the right AI-driven approach.',
    },
    {
      id: 2,
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: 'Creative AI Development',
      description: 'We design the visual concept and AI-driven workflow behind your creative production.',
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: 'Implementation',
      description: 'We deliver your creative deliverables and ensure they integrate smoothly with your brand.',
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: 'Continuous Optimization',
      description: 'We continue optimizing your AI-driven approach to improve performance and creative output.',
    }
  ],
  mainTitle = "Our Creative AI Production Process",
  subTitle = "We combine creative direction, AI visuals and scalable workflows to help brands produce standout content."
}) => {
  return (
    <section id="how-it-works" className="py-32 bg-[#08080D] relative overflow-hidden border-t border-white/[0.03]">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#BE2F7B]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-xs font-bold tracking-widest text-[#C084FC] uppercase mb-4">
            How We Partner With You
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            {mainTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B] bg-clip-text text-transparent">
              {mainTitle.split(" ").slice(-1)}
            </span>
          </h3>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subTitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {/* Animated Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[#9945FF]/20 via-[#BE2F7B]/30 to-[#9945FF]/20 rounded-full z-0" />

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
