import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film, Tv, Sparkles, Cpu, Target, Smartphone, X } from 'lucide-react';

const horizontalVideos = [
  { id: '1Xw9n79EGzWXpvZ6gW7mC9ZZtgXoVkw21', title: 'Horizontal Video 1' },
  { id: '1fs5I2lq0Mhz6Phr1wiklfLsoROFlBTR_', title: 'Horizontal Video 2' },
  { id: '143GMnWXxB4cZygbaOvARqu8NqbA_p_xa', title: 'Horizontal Video 3' },
  { id: '18jiJpJ2dhxZVw-7RZhwUTSwmoVkJ-61p', title: 'Horizontal Video 4' },
  { id: '1mMZNrHZ0xjqwxyUsb95FGgmQtX_Kwrju', title: 'Horizontal Video 5' },
  { id: '1MbdIENdbZTdlDb-bb0DAArc9QGQf7rTJ', title: 'Horizontal Video 6' }
];

const verticalVideos = [
  {
    id: '1fbGM4DqQYj56acFQcicvBNNlFDnGhlAV',
    title: 'Hook & Pacing',
    category: 'Direct Response',
    icon: <Play className="w-6 h-6" />,
    description: 'High-retention visual hooks and custom pacing designed to capture attention within the first 3 seconds of viewing.'
  },
  {
    id: '1kmSYn-Aqk14cLUL2zTdrIVTJlKrjYE0T',
    title: 'AI Avatar Clone',
    category: 'Digital Twin',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Photorealistic digital clone setup using synthetic speech to record content automatically from a simple script.'
  },
  {
    id: '1TU-RON-Q43CpF1SUTv7YGJM7u4IoUKR9',
    title: 'Ad Creative',
    category: 'Paid Marketing',
    icon: <Target className="w-6 h-6" />,
    description: 'High-ROI commercial advertisements engineered to boost click-through rates and optimize acquisition costs.'
  },
  {
    id: '1Rzgg_5G8dkK8wzR3X8wTYuAfFbahr5BZ',
    title: 'Viral Loops',
    category: 'Organic Growth',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'A collection of seamless looping mechanisms and audio cues optimized for TikTok and Instagram algorithms.'
  },
  {
    id: '1PQhap2teEEvBTwPzRE1rqAkDTxYRiPbx',
    title: 'Post Production',
    category: 'VFX & Edits',
    icon: <Film className="w-6 h-6" />,
    description: 'Cinematic editing pipelines featuring dynamic typography overlays and professional sound design.'
  },
  {
    id: '1-fWthoZ8WnDffIzKoKLONKwq27lons47',
    title: 'Scale Engine',
    category: 'Automation',
    icon: <Tv className="w-6 h-6" />,
    description: 'Behind-the-scenes systems showcasing how we repurpose single-format raw footage into omnichannel assets.'
  },
  {
    id: '165MlMCQ0-9Y_gt05hQiULlH3oVIx0TzP',
    title: 'Interactive Avatar',
    category: 'Client Demo',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Real-time interactive digital avatar deployed on client websites to guide users and convert leads.'
  }
];

const VideoShowcase = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

  const openLightbox = (id, title) => {
    setSelectedVideoId(id);
    setSelectedVideoTitle(title);
  };

  const closeLightbox = () => {
    setSelectedVideoId(null);
    setSelectedVideoTitle('');
  };

  return (
    <section id="work" className="py-24 bg-[#08080D] relative overflow-hidden text-white border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9945FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C084FC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">Work</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Showcase</span>
          </h3>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Explore our premium AI content engine. Scroll horizontally to see our systems, or click any vertical card to open the player.
          </p>
        </div>

        {/* ─── SECTION 1: HORIZONTAL SCROLL SHOWCASE (6 Videos - Inline players) ─── */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold tracking-wide text-white/90">
              AI Production Showcase
            </h4>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              Scroll Row →
            </span>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-6 px-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {horizontalVideos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-[280px] sm:w-[310px] bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/10 p-3 shadow-2xl flex flex-col justify-start hover:border-white/20 transition-all duration-300"
              >
                {/* Embed Iframe Container (9:16 aspect ratio) */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="absolute top-0 bottom-0 border-none"
                    style={{
                      width: '316.05%',
                      height: '100%',
                      left: '-108.02%'
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 2: VERTICAL SQUARES SHOWCASE (7 Videos - Lightbox mode) ─── */}
        <div>
          <div className="flex items-center justify-between mb-8 border-t border-white/5 pt-12">
            <h4 className="text-xl font-bold tracking-wide text-white/90">
              Vertical Creative Library
            </h4>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              Square Cards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {verticalVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => openLightbox(video.id, video.title)}
                className="aspect-square bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-2xl flex flex-col justify-between hover:border-[#9945FF]/40 hover:bg-[#12121A]/95 transition-all duration-300 group text-left relative overflow-hidden"
              >
                {/* Glow Backdrop Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#C084FC] group-hover:scale-110 group-hover:bg-[#9945FF]/10 transition-all duration-300">
                      {video.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>
                  
                  <h5 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#C084FC] transition-colors">
                    {video.title}
                  </h5>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9945FF]/20 text-[#C084FC]">
                    <Play size={12} fill="currentColor" />
                  </div>
                  Watch Showcase
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ─── LIGHTBOX MODAL PLAYER ─── */}
      <AnimatePresence>
        {selectedVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[45px] border-[10px] border-[#1F1F2E] bg-black shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all"
              >
                <X size={18} />
              </button>

              {/* Smartphone Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1F1F2E] rounded-full z-20 flex justify-center items-center pointer-events-none">
                <div className="w-1.5 h-1.5 bg-[#08080C] rounded-full mr-2"></div>
                <div className="w-6 h-1 bg-[#08080C] rounded-full"></div>
              </div>

              {/* Video Screen */}
              <div className="w-full h-full relative overflow-hidden bg-[#0A0A0F]">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideoId}/preview`}
                  className="absolute top-0 bottom-0 border-none"
                  style={{
                    width: '316.05%',
                    height: '100%',
                    left: '-108.02%'
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={selectedVideoTitle}
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
