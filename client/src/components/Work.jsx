import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Star, Target } from 'lucide-react';

const projects = [
  {
    title: 'Brand Storyteller',
    type: 'AI Video Production',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '1.2M Views'
  },
  {
    title: 'Conversion Engine',
    type: 'Direct Response Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '15% CTR'
  },
  {
    title: 'Digital Twin',
    type: 'AI Avatar Setup',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '24/7 Presence'
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-[#08080D] relative overflow-hidden text-white">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#9945FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Work</span>
            </h3>
            <p className="text-white/50 text-lg max-w-2xl mx-auto italic">
              "We don't just create content; we build conversion assets."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#9945FF]/20 border border-[#9945FF]/30 rounded-full text-[10px] font-bold text-[#C084FC] uppercase tracking-wider">
                      {project.type}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-white/60">
                      <Target className="w-3 h-3 text-[#9945FF]" />
                      {project.stats}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
