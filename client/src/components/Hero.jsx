import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ 
  openPopup, 
  badgeText = "Scale Your Brand With Us", 
  title = "Scale Your Brand With ", 
  highlight = "AI Avatars", 
  subtitle = "& Smart Ad Systems.",
  description = [
    "We help you create videos and ads using AI, so you don't need to record again and again.",
    "Build systems so your content keeps working for you 24/7."
  ],
  ctaText = "Schedule a Call"
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9945FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[#7B2FBE]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#9945FF] animate-pulse"></span>
              {badgeText}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white max-w-3xl">
              {title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B]">
                {highlight}
              </span> {subtitle}
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed space-y-4">
              {description.map((line, index) => (
                <span key={index} className={`block ${index === 1 ? 'font-medium text-white/80' : ''}`}>
                  {line}
                </span>
              ))}
            </p>

            <div className="flex flex-col items-center gap-3 mb-10 w-full sm:w-auto">
              <button onClick={openPopup} className="btn-primary inline-flex items-center gap-2 justify-center group w-full sm:w-auto">
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm font-medium text-white/50">
                Want to see if this works for you?
              </p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
