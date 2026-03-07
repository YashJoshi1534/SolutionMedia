import React from 'react';
import { Lightbulb, Keyboard, Palette, Film, Briefcase, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const Burst = ({ top, left, right, bottom, rotation, delay = 0.3 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, type: "spring" }}
    className="absolute w-12 h-12 pointer-events-none z-10"
    style={{ 
      top: top || 'auto', 
      left: left || 'auto', 
      right: right || 'auto', 
      bottom: bottom || 'auto', 
      transform: `rotate(${rotation}deg)` 
    }}
  >
    {/* Clean hand-drawn style SVG burst radiating to the top-left */}
    <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
      <path 
        d="M18 18 L6 6 M14 22 L2 22 M22 14 L22 2" 
        stroke="#FBBF24" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  </motion.div>
);

const Card = ({ icon: Icon, text, rotationClass, translateClass, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-[#0A0A0F]/80 backdrop-blur-sm border border-white/[0.08] lg:border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 w-full sm:max-w-[280px] mx-auto shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)] ${rotationClass} ${translateClass} hover:rotate-0 hover:scale-105 hover:border-[#9945FF]/40 hover:shadow-[0_0_30px_-10px_rgba(153,69,255,0.25)] transition-all duration-300 cursor-default group`}
    >
      <div className="text-[#C084FC] group-hover:text-[#9945FF] transition-colors drop-shadow-[0_0_15px_rgba(153,69,255,0.4)]">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
      </div>
      <span className="text-white/90 font-medium text-sm sm:text-base tracking-wide text-center">{text}</span>
    </motion.div>
  );
};

const ProblemsWeSolve = () => {
  return (
    <section id="problems" className="py-32 relative bg-[#050508] overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Ambient glows behind cards */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#7B2FBE]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center relative z-10">
        
        {/* Mobile Title */}
        <div className="lg:hidden relative text-center mb-16 z-10 w-full">
          <Burst top="-1.5rem" left="1rem" rotation={0} delay={0.2} />
          <Burst top="-1.5rem" right="1rem" rotation={90} delay={0.4} />
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-white">Problems </span>
            <span className="text-[#FBBF24]">we solve</span>
          </h2>
          <p className="text-white/70 text-base max-w-[280px] mx-auto">
            Think of an in house content team, that you don't have to manage.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-0 w-full lg:items-center relative">
          
          {/* Left Column Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-20">
            <Card icon={Lightbulb} text="Lead Creatives" rotationClass="lg:-rotate-6" translateClass="lg:translate-x-4" delay={0.2} />
            <Card icon={Keyboard} text="Content Writers" rotationClass="lg:-rotate-2" translateClass="lg:-translate-x-8" delay={0.3} />
            <Card icon={Palette} text="Designers" rotationClass="lg:rotate-3" translateClass="lg:translate-x-8" delay={0.4} />
          </div>

          {/* Center Column Title (Desktop Only) */}
          <div className="hidden lg:block relative text-center px-4 w-full self-center">
            {/* Bursts slightly offset around the large title */}
            <Burst top="-3rem" left="-2rem" rotation={0} delay={0.5} />
            <Burst top="-3rem" right="-2rem" rotation={90} delay={0.6} />
            <Burst bottom="-2.5rem" right="-2rem" rotation={180} delay={0.7} />
            <Burst bottom="-2.5rem" left="-2rem" rotation={270} delay={0.8} />
            
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
              <span className="text-white">Problems </span>
              <span className="text-[#FBBF24]">we solve</span>
            </h2>
            <p className="text-white/70 text-lg xl:text-xl max-w-sm mx-auto leading-relaxed">
              Think of an in house content team, that you don't have to manage.
            </p>
          </div>

          {/* Right Column Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-20 lg:mt-0 mt-6 sm:mt-8">
            <Card icon={Film} text="World-class Editors" rotationClass="lg:rotate-6" translateClass="lg:-translate-x-4" delay={0.5} />
            <Card icon={Briefcase} text="Project Managers" rotationClass="lg:rotate-2" translateClass="lg:translate-x-8" delay={0.6} />
            <Card icon={Headphones} text="Virtual Assistants" rotationClass="lg:-rotate-3" translateClass="lg:-translate-x-8" delay={0.7} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
