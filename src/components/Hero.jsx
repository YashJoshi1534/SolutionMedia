import React from 'react';
import { PlayCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-primary-bg">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-dark-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-bg/30 text-dark-green font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
              Scale Your Brand With Us
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Scale Your Brand With <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-[#ff8c42]">
                AI Avatars
              </span> & Smart Ad Systems.
            </h1>
            
            <p className="text-lg md:text-xl text-dark-green/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed space-y-4">
              <span className="block">We help you create videos and ads using AI, so you don't need to record again and again.</span>
              <span className="block font-medium">Build systems so your content keeps working for you 24/7.</span>
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 mb-10">
              <a href="mailto:contact@hypemattermedia.com" className="btn-primary inline-flex items-center gap-2 justify-center group w-full sm:w-auto hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,103,0,0.4)] transition-all duration-300">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm font-medium text-dark-green/70 flex items-center gap-2">
                👉 Want to see if this works for you?
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-secondary-bg/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-primary-bg flex justify-center items-center font-bold text-xs bg-secondary-bg`}>
                   {i === 4 ? "+26" : "U"}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-accent-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-dark-green/80 font-medium">Built systems for <span className="font-bold text-dark-green">30+ clients</span></p>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] bg-dark-green rounded-3xl shadow-2xl overflow-hidden border border-secondary-bg/20 flex flex-col justify-center items-center group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500">
               {/* Video thumbnail abstraction */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-dark-green/40 group-hover:bg-dark-green/20 transition-colors duration-500"></div>
               
               <div className="relative w-20 h-20 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                 {/* Pulsing rings */}
                 <div className="absolute inset-0 rounded-full bg-accent-orange/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                 <div className="absolute inset-0 rounded-full bg-accent-orange/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                 {/* Main button */}
                 <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"></div>
                 <PlayCircle className="w-10 h-10 text-white relative z-10" />
               </div>
               <p className="mt-4 text-white font-medium text-lg tracking-wide z-10">Watch My Process</p>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary-bg p-4 rounded-2xl shadow-xl border border-secondary-bg/20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex justify-center items-center text-xl">
                 🚀
                </div>
                <div>
                  <p className="text-xs text-dark-green/60 font-medium">Launch Speed</p>
                  <p className="font-bold text-dark-green">2x Faster</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
