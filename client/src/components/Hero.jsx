import React from 'react';
import { PlayCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ openPopup }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9945FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[#7B2FBE]/8 rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#9945FF] animate-pulse"></span>
              Scale Your Brand With Us
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Scale Your Brand With <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B]">
                AI Avatars
              </span> & Smart Ad Systems.
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed space-y-4">
              <span className="block">We help you create videos and ads using AI, so you don't need to record again and again.</span>
              <span className="block font-medium text-white/80">Build systems so your content keeps working for you 24/7.</span>
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 mb-10">
              <button onClick={openPopup} className="btn-primary inline-flex items-center gap-2 justify-center group w-full sm:w-auto">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm font-medium text-white/50 flex items-center gap-2">
                👉 Want to see if this works for you?
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0A0A0F] flex justify-center items-center font-bold text-xs bg-[#1A1A2E] text-white/60`}>
                   {i === 4 ? "+26" : "U"}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-[#C084FC]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/60 font-medium">Built systems for <span className="font-bold text-white">30+ clients</span></p>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9945FF]/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] bg-[#12121A] rounded-3xl shadow-2xl overflow-hidden border border-[#9945FF]/20 flex flex-col justify-center items-center group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(153,69,255,0.15)] transition-all duration-500">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-[#0A0A0F]/40 group-hover:bg-[#0A0A0F]/20 transition-colors duration-500"></div>
               
               <div className="relative w-20 h-20 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                 <div className="absolute inset-0 rounded-full bg-[#9945FF]/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                 <div className="absolute inset-0 rounded-full bg-[#9945FF]/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                 <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"></div>
                 <PlayCircle className="w-10 h-10 text-white relative z-10" />
               </div>
               <p className="mt-4 text-white font-medium text-lg tracking-wide z-10">Watch My Process</p>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#12121A] p-4 rounded-2xl shadow-xl border border-[#9945FF]/20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9945FF]/10 flex justify-center items-center text-xl">
                 🚀
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Launch Speed</p>
                  <p className="font-bold text-white">2x Faster</p>
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
