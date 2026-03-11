import React from 'react';
import { PhoneCall, Cog, Rocket } from 'lucide-react';
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative rounded-3xl [perspective:1000px] group"
    >
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative h-full bg-[#12121A]/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/[0.06] hover:border-transparent hover:shadow-[0_0_30px_-10px_rgba(153,69,255,0.2)] transition-all duration-300"
      >
        {/* Soft Background Glow following cursor */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
           style={{
             background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(153,69,255,0.15), transparent 40%)`
           }}
        />
        {/* Subtle glowing border following cursor */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
           style={{
             background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(192,132,252,0.4), transparent 40%)`,
             maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
             maskComposite: 'exclude',
             padding: '1px',
             WebkitMaskComposite: 'xor',
           }}
        />

        <div style={{ transform: "translateZ(50px)" }} className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#9945FF] to-[#7B2FBE] flex justify-center items-center shadow-lg shadow-[#9945FF]/20 group-hover:scale-110 transition-transform z-10">
          {step.icon}
        </div>
        <div className="mt-12 text-center" style={{ transformStyle: "preserve-3d" }}>
          <span style={{ transform: "translateZ(40px)" }} className="relative z-10 text-xs font-bold text-[#C084FC] uppercase tracking-wider mb-2 block">Step {step.id}</span>
          <h4 style={{ transform: "translateZ(40px)" }} className="relative z-10 text-2xl font-bold text-white mb-4">{step.title}</h4>
          <p style={{ transform: "translateZ(30px)" }} className="relative z-10 text-white/50 leading-relaxed text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      title: 'Strategy Call',
      description: 'We understand your business, audience, and goals. Then we create a custom content plan for Personal Branding & Product Promotion. We set clear direction before we build anything.',
    },
    {
      id: 2,
      icon: <Cog className="w-8 h-8 text-white" />,
      title: 'Build Your AI Avatar System',
      description: 'This is where we set everything up for you. Deep-dive onboarding, tool & system setup. Your AI Identity (Avatar, Voice Clone). AI Ad Creatives for products. One-time setup. Your digital AI system is ready to work 24/7.',
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: 'Launching — It’s On Us',
      description: 'Once your system is ready, we handle everything monthly. 12–15 ready-to-post videos, world-class edits, script & content ideation, posting support, and growth reports. You stay focused on your business.',
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#08080D] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7B2FBE]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">How Our AI Brand System Works</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            3 Simple Steps. <br className="hidden sm:block"/>
            <span className="text-white/40">No Daily Shooting.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 animated-line rounded-full"></div>

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
