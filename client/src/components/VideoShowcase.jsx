import React from 'react';
import { Play, Film, Tv, Sparkles, Cpu, Target, Smartphone } from 'lucide-react';

const horizontalVideos = [
  { id: '6a32aa064e9e90564975a384', title: 'Horizontal Video 1' },
  { id: '6a329e3a4e9e905649742799', title: 'Horizontal Video 2' },
  { id: '6a32a9bd1ce628ced48e6991', title: 'Horizontal Video 3' },
  { id: '6a32ad226a4f24de8a365346', title: 'Horizontal Video 4' },
  { id: '6a329e3a4e9e905649742795', title: 'Horizontal Video 5' },
  { id: '6a329e3a4e9e90564974278b', title: 'Horizontal Video 6' },
  { id: '6a329e3a4e9e905649742788', title: 'Horizontal Video 7' },
  { id: '6a329e3a1ce628ced48cee28', title: 'Horizontal Video 8' }
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

const VideoShowcase = ({ openPopup }) => {
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
            Content Production, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Systematised</span>
          </h3>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We build the production system that lets you publish consistently at the quality level your brand demands. We own editing trends in the industry
          </p>
        </div>

        {/* ─── SECTION 1: AI PRODUCTION SHOWCASE (Grid Layout - 4 Columns) ─── */}
        <div className="mb-24">
          <div className="mb-8">
              {/* <h4 className="text-xl font-bold tracking-wide text-white/90">
                AI Production Showcase
              </h4> */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
            {horizontalVideos.map((video) => (
              <div
                key={video.id}
                className="bg-[#12121A]/60 backdrop-blur-md rounded-3xl border border-white/10 p-3 shadow-2xl flex flex-col justify-start hover:border-white/20 transition-all duration-300"
              >
                {/* Embed Iframe Container (9:16 aspect ratio) */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                  <iframe
                    src={`https://play.gumlet.io/embed/${video.id}`}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
                    allowFullScreen
                    title={video.title}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 2: FEATURED SPOTLIGHT ─── */}
        <div className="border-t border-white/5 pt-16 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Showcase</span>
              </div>
              
              <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                GenArc <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Spotlight</span>
              </h4>
              
              <p className="text-white/80 text-lg leading-relaxed">
                We develop cinematic worlds using AI-native production pipelines guided by human storytellers.
              </p>

              
              <div className="pt-2">
                <button
                  onClick={openPopup}
                  className="btn-primary hover:shadow-[0_0_20px_rgba(153,69,255,0.4)]"
                >
                  Book a Discovery Call
                </button>
              </div>
            </div>

            {/* Right Video Column */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[480/253] rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl p-2 hover:border-[#9945FF]/40 hover:bg-[#12121A]/90 transition-all duration-300 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    src="https://play.gumlet.io/embed/6a32adf66a4f24de8a366bf2"
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
                    allowFullScreen
                    title="GenArc Spotlight Video"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
