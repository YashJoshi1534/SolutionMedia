import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Monitor, Tv, Eye, Sparkles } from 'lucide-react';

const videosList = [
  {
    id: '1hDtdaW_IARInVVx863wh7KU3t3AJb-qq',
    title: 'Watch My Process',
    description: 'A deep-dive walkthrough of how our AI avatar & video system scales your brand without daily shooting.',
    category: 'Process Video',
    duration: '4:12',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: '10sXIg5c3jn7S6H90Z8ajeO1LlgFqKsPI',
    title: 'AI Avatar Systems Showcase',
    description: 'Demonstrating hyper-realistic digital twin creation, automated voice synthesis, and multi-language lip sync.',
    category: 'Tech Demo',
    duration: '3:05',
    icon: <Monitor className="w-4 h-4" />
  },
  {
    id: '1Ox1AAxLhS8aZuIuI1qER1GTxOmSg5Xjx',
    title: 'Conversion Direct-Response Campaign',
    description: 'High-performing commercial advertisements built entirely using advanced organic video generation techniques.',
    category: 'Case Study',
    duration: '2:40',
    icon: <Film className="w-4 h-4" />
  },
  {
    id: '1A-_w74PsKmSpN2XpGWIraCgvXd7RZsyy',
    title: 'Smart Automation & Scale Engine',
    description: 'Behind the scenes look at our scheduling, repurposing, and distribution tech stack.',
    category: 'Automation',
    duration: '3:20',
    icon: <Tv className="w-4 h-4" />
  },
  {
    id: '1ESoHtExSx0tyULgGbUV6zoDwkrXBWAf6',
    title: 'High-Engagement Short-Form Creative',
    description: 'Vibrant vertical hooks, visual edits, and engaging pacing optimized for social algorithms.',
    category: 'Short-Form',
    duration: '1:45',
    icon: <Play className="w-4 h-4" />
  },
  {
    id: '1serVwJ7nF-Kt8xmwA0NccVqpigGVoa_7',
    title: 'Interactive AI Brand Twin Demo',
    description: 'How we build continuous 24/7 web presence and dynamic client query management using conversational clones.',
    category: 'Avatar Clone',
    duration: '3:55',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: '1GoKd6iPFTbHQSrN3jMhmQp6F0S8cpF8m',
    title: 'Omnichannel Content Distribution',
    description: 'A look at how a single 10-minute master video gets scaled into 40+ pieces of distinct, viral media.',
    category: 'Distribution',
    duration: '2:15',
    icon: <Monitor className="w-4 h-4" />
  },
  {
    id: '1KB7xQN1E9vC4nUtMYwijuHkoxjE95Nbo',
    title: 'Cinematic AI Creative Showcase',
    description: 'An immersive showcase of high-end cinematic visual generation and creative ad components.',
    category: 'Creative Showcase',
    duration: '2:30',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: '1WbQdS77lEcKCBaOdXj8W8B4ur-m8qPJK',
    title: 'Next-Gen AI Production Pipeline',
    description: 'A comprehensive look at our end-to-end automated workflow producing high-impact, scalable content assets.',
    category: 'AI Production',
    duration: '3:10',
    icon: <Monitor className="w-4 h-4" />
  },
  {
    id: '1G0DNcK9Gk0VeFreGmmypsaE3ay2BevLe',
    title: 'Conversational AI Twin Demo',
    description: 'Demonstrating how we build continuous 24/7 web presence and dynamic client query management using conversational clones.',
    category: 'Avatar Clone',
    duration: '3:55',
    icon: <Sparkles className="w-4 h-4" />
  }
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(videosList[0]);

  return (
    <section id="portfolio" className="py-24 bg-[#08080D] relative overflow-hidden text-white border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C084FC]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Showcase</span>
            </h3>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Browse our system in action. Click on any video below to see our premium AI content engine deliver real conversion assets.
            </p>
          </motion.div>
        </div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Video Player Card (Left 8 cols) */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div 
              key={activeVideo.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/10 p-4 lg:p-6 shadow-2xl flex flex-col justify-start h-full"
            >
              {/* Embed Iframe Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideo.id}/preview`}
                  className="absolute inset-0 w-full h-full border-none"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={activeVideo.title}
                ></iframe>
              </div>

              {/* Video Info Footer */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#9945FF]/10 border border-[#9945FF]/20 rounded-full text-[10px] font-bold text-[#C084FC] uppercase tracking-wider flex items-center gap-1">
                      {activeVideo.icon}
                      {activeVideo.category}
                    </span>
                    <span className="text-[10px] font-bold text-white/40 flex items-center gap-1">
                      ⏱️ {activeVideo.duration} mins
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">{activeVideo.title}</h4>
                  <p className="text-white/60 text-sm mt-2 max-w-xl">{activeVideo.description}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col h-[580px] max-h-[580px]">
            <div className="bg-[#12121A]/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6 flex flex-col h-full overflow-hidden">
              <h5 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#9945FF]" />
                Showcase Playlist
              </h5>
              
              {/* Playlist Items */}
              <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                {videosList.map((video) => {
                  const isActive = video.id === activeVideo.id;
                  return (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex gap-4 items-start ${
                        isActive
                          ? 'bg-[#9945FF]/10 border-[#9945FF]/40 shadow-lg shadow-[#9945FF]/5'
                          : 'bg-[#161622]/40 border-white/5 hover:bg-[#1A1A2A]/40 hover:border-white/10'
                      }`}
                    >
                      {/* Play/Active Indicator Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isActive ? 'bg-[#9945FF] text-white' : 'bg-white/5 text-white/50'
                      }`}>
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </div>

                      {/* Content details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[9px] font-bold uppercase tracking-wider ${
                            isActive ? 'text-[#C084FC]' : 'text-white/40'
                          }`}>
                            {video.category}
                          </span>
                          <span className="text-[9px] text-white/30 font-semibold">{video.duration}</span>
                        </div>
                        <h6 className={`font-bold text-sm truncate ${isActive ? 'text-white' : 'text-white/80'}`}>
                          {video.title}
                        </h6>
                        <p className="text-white/40 text-[11px] mt-1 line-clamp-1">
                          {video.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
