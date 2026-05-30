import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logoUrl from '../assets/GenArc Brand asset/White text logo.svg';

const Navbar = ({ openPopup }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [logoError, setLogoError] = React.useState(false);
  const location = useLocation();
  const isAvatarPage = location.pathname === '/avatar';

  const mainLinks = [
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Avatar', href: '/avatar' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  const avatarLinks = [
    { name: 'Process', href: '#problems' },
    { name: 'Contact', onClick: openPopup },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Main', href: '/' },
  ];

  const navLinks = isAvatarPage ? avatarLinks : mainLinks;

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <a href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer w-64 group">
            {!logoError ? (
              <img 
                src={logoUrl} 
                alt="Hypematter Media" 
                className="h-18 w-auto object-contain transition-transform group-hover:scale-105" 
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <div className="w-8 h-8 bg-gradient-to-br from-[#9945FF] to-[#7B2FBE] rounded-lg flex justify-center items-center text-white font-bold text-xl leading-none shadow-lg shadow-[#9945FF]/20 group-hover:scale-110 transition-transform">
                  H
                </div>
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#C084FC] transition-colors">
                  Hypematter Media
                </span>
              </>
            )}
          </a>
          
          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center justify-center space-x-10 flex-1">
            {navLinks.map((link) => (
              link.onClick ? (
                <button 
                  key={link.name}
                  onClick={() => {
                    setMenuOpen(false);
                    link.onClick();
                  }}
                  className="text-white/60 hover:text-[#9945FF] font-bold transition-all text-xs uppercase tracking-widest group"
                >
                  {link.name}
                  <div className="h-0.5 w-0 group-hover:w-full bg-[#9945FF] transition-all duration-300" />
                </button>
              ) : (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-white/60 hover:text-[#9945FF] font-bold transition-all text-xs uppercase tracking-widest group"
                >
                  {link.name}
                  <div className="h-0.5 w-0 group-hover:w-full bg-[#9945FF] transition-all duration-300" />
                </a>
              )
            ))}
          </div>

          {/* CTA + Mobile Toggle - Right */}
          <div className="flex items-center justify-end w-48 gap-4">
            <button onClick={openPopup} className="btn-primary px-6 py-2.5 text-sm hidden sm:flex hover:shadow-[0_0_20px_rgba(153,69,255,0.4)]">
              Schedule a Call
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0D0D12]/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        setMenuOpen(false);
                        link.onClick();
                      }}
                      className="block w-full text-left text-lg font-bold text-white/70 hover:text-[#9945FF] transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg font-bold text-white/70 hover:text-[#9945FF] transition-colors"
                    >
                      {link.name}
                    </a>
                  )
                ))}
                <button 
                  onClick={() => {
                    setMenuOpen(false);
                    openPopup();
                  }}
                  className="w-full btn-primary px-6 py-3 text-sm flex items-center justify-center gap-2"
                >
                  Schedule a Call <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
