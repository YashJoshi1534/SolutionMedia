import React from 'react';
import { Play, Film, Tv, Sparkles, Cpu, Target, Smartphone } from 'lucide-react';

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
    id: 'gmdoF0pBrT0',
    title: 'Hook & Pacing',
    category: 'Direct Response',
    icon: <Play className="w-6 h-6" />,
    description: 'High-retention visual hooks and custom pacing designed to capture attention within the first 3 seconds of viewing.'
  },
  {
    id: 'bLvv5A9opSU',
    title: 'AI Avatar Clone',
    category: 'Digital Twin',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Photorealistic digital clone setup using synthetic speech to record content automatically from a simple script.'
  },
  {
    id: 'BWMJy2HbXvQ',
    title: 'Ad Creative',
    category: 'Paid Marketing',
    icon: <Target className="w-6 h-6" />,
    description: 'High-ROI commercial advertisements engineered to boost click-through rates and optimize acquisition costs.'
  },
  {
    id: 'Egryl7N1Ig0',
    title: 'Viral Loops',
    category: 'Organic Growth',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'A collection of seamless looping mechanisms and audio cues optimized for TikTok and Instagram algorithms.'
  },
  {
    id: 'LqArnHSSzQ0',
    title: 'Post Production',
    category: 'VFX & Edits',
    icon: <Film className="w-6 h-6" />,
    description: 'Cinematic editing pipelines featuring dynamic typography overlays and professional sound design.'
  },
  {
    id: 'xd6nlqybyug',
    title: 'Scale Engine',
    category: 'Automation',
    icon: <Tv className="w-6 h-6" />,
    description: 'Behind-the-scenes systems showcasing how we repurpose single-format raw footage into omnichannel assets.'
  },
  {
    id: 'Eswa76hXM-c',
    title: 'Interactive Avatar',
    category: 'Client Demo',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Real-time interactive digital avatar deployed on client websites to guide users and convert leads.'
  }
];

const VideoShowcase = () => {
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
            Explore our premium AI content engine. Scroll horizontally to see our horizontal systems, or browse our vertical creative library directly inline below.
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

        {/* ─── SECTION 2: VERTICAL SQUARES SHOWCASE (7 Videos - Inline landscape rectangle players) ─── */}
        <div>
          <div className="flex items-center justify-between mb-8 border-t border-white/5 pt-12">
            <h4 className="text-xl font-bold tracking-wide text-white/90">
              Vertical Creative Library
            </h4>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              Grid Layout
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticalVideos.map((video) => (
              <div
                key={video.id}
                className="bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/5 p-4 shadow-2xl flex flex-col justify-between hover:border-[#9945FF]/40 hover:bg-[#12121A]/95 transition-all duration-300 group overflow-hidden"
              >
                {/* Widescreen Video Container (Rectangle 16:9 aspect ratio) */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&loop=1&playlist=${video.id}&rel=0&playsinline=1`}
                    className="absolute inset-0 w-full h-full border-none z-10"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>

                <div className="relative z-10 w-full text-left">
                  <div className="flex items-center justify-between mb-3">
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
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
