import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ openPopup }) => {
  return (
    <footer className="bg-[#0A0A0F] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#12121A] to-[#0D0D14] rounded-3xl p-10 lg:p-14 relative overflow-hidden mb-16 shadow-2xl border border-[#9945FF]/20"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#9945FF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BE2F7B]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
           
           <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 relative z-10">
             Ready to Build Your AI Content System?
           </h2>
           <p className="text-white/60 text-lg mb-10 relative z-10 max-w-2xl mx-auto">
             Book a free 15-minute strategy call and see how your brand can grow without daily shooting. <br/>
             <span className="font-bold text-[#C084FC] mt-2 inline-block">No pressure. No obligation. Just clarity.</span>
           </p>
           
            <button onClick={openPopup} className="btn-primary inline-flex items-center gap-2 relative z-10 px-10 py-4 text-lg group">
               Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#9945FF] rounded flex justify-center items-center text-white font-bold text-xs leading-none">H</div>
            <span className="font-bold text-white/70">Hypematter Media</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C084FC] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C084FC] transition-colors">Terms of Service</a>
          </div>
          
          <p>© {new Date().getFullYear()} Hypematter Media. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
