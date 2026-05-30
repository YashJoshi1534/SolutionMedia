import React from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Monitor, Tv, Sparkles, Smartphone } from 'lucide-react';

const videosList = [
  {
    id: '1hDtdaW_IARInVVx863wh7KU3t3AJb-qq',
    title: 'Watch My Process',
    description: 'A deep-dive walkthrough of how our AI avatar & video system scales your brand without daily shooting.',
    category: 'Process Video',
    duration: '4:12',
    icon: <Sparkles className="w-4 h-4" />,
    isVertical: false
  },
  {
    id: '10sXIg5c3jn7S6H90Z8ajeO1LlgFqKsPI',
    title: 'AI Avatar Systems Showcase',
    description: 'Demonstrating hyper-realistic digital twin creation, automated voice synthesis, and multi-language lip sync.',
    category: 'Tech Demo',
    duration: '3:05',
    icon: <Monitor className="w-4 h-4" />,
    isVertical: false
  },
  {
    id: '1Ox1AAxLhS8aZuIuI1qER1GTxOmSg5Xjx',
    title: 'Conversion Direct-Response Campaign',
    description: 'High-performing commercial advertisements built entirely using advanced organic video generation techniques.',
    category: 'Case Study',
    duration: '2:40',
    icon: <Film className="w-4 h-4" />,
    isVertical: true
  },
  {
    id: '1A-_w74PsKmSpN2XpGWIraCgvXd7RZsyy',
    title: 'Smart Automation & Scale Engine',
    description: 'Behind the scenes look at our scheduling, repurposing, and distribution tech stack.',
    category: 'Automation',
    duration: '3:20',
    icon: <Tv className="w-4 h-4" />,
    isVertical: false
  },
  {
    id: '1ESoHtExSx0tyULgGbUV6zoDwkrXBWAf6',
    title: 'High-Engagement Short-Form Creative',
    description: 'Vibrant vertical hooks, visual edits, and engaging pacing optimized for social algorithms.',
    category: 'Short-Form',
    duration: '1:45',
    icon: <Play className="w-4 h-4" />,
    isVertical: true
  },
  {
    id: '1serVwJ7nF-Kt8xmwA0NccVqpigGVoa_7',
    title: 'Interactive AI Brand Twin Demo',
    description: 'How we build continuous 24/7 web presence and dynamic client query management using conversational clones.',
    category: 'Avatar Clone',
    duration: '3:55',
    icon: <Sparkles className="w-4 h-4" />,
    isVertical: true
  },
  {
    id: '1GoKd6iPFTbHQSrN3jMhmQp6F0S8cpF8m',
    title: 'Omnichannel Content Distribution',
    description: 'A look at how a single 10-minute master video gets scaled into 40+ pieces of distinct, viral media.',
    category: 'Distribution',
    duration: '2:15',
    icon: <Monitor className="w-4 h-4" />,
    isVertical: false
  },
  {
    id: '1KB7xQN1E9vC4nUtMYwijuHkoxjE95Nbo',
    title: 'Cinematic AI Creative Showcase',
    description: 'An immersive showcase of high-end cinematic visual generation and creative ad components.',
    category: 'Creative Showcase',
    duration: '2:30',
    icon: <Sparkles className="w-4 h-4" />,
    isVertical: true
  },
  {
    id: '1WbQdS77lEcKCBaOdXj8W8B4ur-m8qPJK',
    title: 'Next-Gen AI Production Pipeline',
    description: 'A comprehensive look at our end-to-end automated workflow producing high-impact, scalable content assets.',
    category: 'AI Production',
    duration: '3:10',
    icon: <Monitor className="w-4 h-4" />,
    isVertical: false
  },
  {
    id: '1G0DNcK9Gk0VeFreGmmypsaE3ay2BevLe',
    title: 'Conversational AI Twin Demo',
    description: 'Demonstrating how we build continuous 24/7 web presence and dynamic client query management using conversational clones.',
    category: 'Avatar Clone',
    duration: '3:55',
    icon: <Sparkles className="w-4 h-4" />,
    isVertical: false
  }
];

const VideoShowcase = () => {
  const verticalVideos = videosList.filter(video => video.isVertical);
  const horizontalVideos = videosList.filter(video => !video.isVertical);

  return (
    <section id="portfolio" className="py-24 bg-[#08080D] relative overflow-hidden text-white border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9945FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C084FC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
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
              Explore our premium AI content engine in action. View our highly engaging vertical assets and cinematic landscape systems.
            </p>
          </motion.div>
        </div>

        {/* ─── ROW 1: VERTICAL VIDEOS ─── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#9945FF]/10 border border-[#9945FF]/20 flex items-center justify-center text-[#C084FC]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">Short-Form & Vertical Reels</h4>
              <p className="text-white/40 text-sm">Highly engaging mobile creatives optimized for TikTok, Instagram Reels, and YouTube Shorts.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticalVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/10 p-3 shadow-2xl flex flex-col justify-start hover:border-white/20 transition-all duration-300 group"
              >
                {/* Embed Iframe Container (9:16 aspect ratio) */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="mt-4 px-2 pb-2">
                  <span className="px-2.5 py-0.5 bg-[#9945FF]/10 border border-[#9945FF]/20 rounded-full text-[10px] font-bold text-[#C084FC] uppercase tracking-wider inline-flex items-center gap-1 mb-2">
                    {video.icon}
                    {video.category}
                  </span>
                  <h5 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-[#C084FC] transition-colors">{video.title}</h5>
                  <p className="text-white/50 text-[12px] line-clamp-2 leading-relaxed">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── ROW 2: HORIZONTAL VIDEOS ─── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#9945FF]/10 border border-[#9945FF]/20 flex items-center justify-center text-[#C084FC]">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">Landscape Systems & Case Studies</h4>
              <p className="text-white/40 text-sm">Cinematic landscape master assets, platform overviews, and automated distribution pipelines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {horizontalVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/10 p-4 shadow-2xl flex flex-col justify-start hover:border-white/20 transition-all duration-300 group"
              >
                {/* Embed Iframe Container (16:9 aspect ratio) */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="mt-4">
                  <span className="px-2.5 py-0.5 bg-[#9945FF]/10 border border-[#9945FF]/20 rounded-full text-[10px] font-bold text-[#C084FC] uppercase tracking-wider inline-flex items-center gap-1 mb-2">
                    {video.icon}
                    {video.category}
                  </span>
                  <h5 className="text-lg font-bold text-white mb-1 group-hover:text-[#C084FC] transition-colors">{video.title}</h5>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
