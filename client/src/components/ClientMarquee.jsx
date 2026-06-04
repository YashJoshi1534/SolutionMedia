import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  const match = value.match(/^([\d.,]+)([a-zA-Z+]*)$/);
  const targetNum = match ? parseFloat(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNum, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.round(latest))
      });
      return controls.stop;
    }
  }, [isInView, targetNum, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};
import logo1 from '../assets/GenArc Brand asset/1.svg';
import logo2 from '../assets/GenArc Brand asset/2.svg';
import logo3 from '../assets/GenArc Brand asset/3.svg';
import logo4 from '../assets/GenArc Brand asset/4.svg';
import logo5 from '../assets/GenArc Brand asset/5.svg';
import logo6 from '../assets/GenArc Brand asset/6.svg';

const partnersList = [
  { name: 'Partner 1', logo: logo1 },
  { name: 'Partner 2', logo: logo2 },
  { name: 'Partner 3', logo: logo3 },
  { name: 'Partner 4', logo: logo4 },
  { name: 'Partner 5', logo: logo5 },
  { name: 'Partner 6', logo: logo6 }
];

const ClientMarquee = () => {
  const [failedLogos, setFailedLogos] = useState({});

  const handleLogoError = (name) => {
    setFailedLogos(prev => ({ ...prev, [name]: true }));
  };

  const doubledPartners = [...partnersList, ...partnersList, ...partnersList, ...partnersList];

  return (
    <section className="py-16 bg-[#060609] border-y border-white/5 overflow-hidden relative">
      {/* Inline styles for custom marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <div className="grid grid-cols-2 gap-8 sm:gap-16 max-w-2xl mx-auto bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          {/* Ambient Glow inside the stats container */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#9945FF]/10 rounded-full blur-2xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#BE2F7B]/10 rounded-full blur-2xl translate-y-1/2"></div>

          {/* Stat 1 */}
          <div className="flex flex-col items-center relative z-10">
            <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B] tracking-tight">
              <AnimatedCounter value="5M+" />
            </span>
            <span className="mt-2 text-xs sm:text-sm font-bold tracking-widest text-white/50 uppercase">
              views generated
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden sm:block"></div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center relative z-10">
            <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B] tracking-tight">
              <AnimatedCounter value="500+" />
            </span>
            <span className="mt-2 text-xs sm:text-sm font-bold tracking-widest text-white/50 uppercase">
              Videos Created
            </span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold tracking-widest text-[#C084FC]/60 uppercase">
          Trusted by founders and brands worldwide
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center">
        {/* Soft shadow gradients on edges for high-end cinematic fade-out effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060609] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060609] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-16 flex items-center">
          {doubledPartners.map((partner, index) => {
            const uniqueKey = `${partner.name}-${index}`;
            const logoUrl = partner.logo;
            const hasFailed = failedLogos[partner.name];

            return (
              <div 
                key={uniqueKey}
                className="flex items-center justify-center transition-all duration-300 group flex-shrink-0"
              >
                {!hasFailed ? (
                  <img
                    src={logoUrl}
                    alt={partner.name}
                    className="h-32 w-auto object-contain mix-blend-screen opacity-75 group-hover:opacity-100 transition-all duration-300"
                    onError={() => handleLogoError(partner.name)}
                  />
                ) : (
                  <span className="font-bold text-sm tracking-wide text-white/30 group-hover:text-[#C084FC] transition-colors duration-300">
                    {partner.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
