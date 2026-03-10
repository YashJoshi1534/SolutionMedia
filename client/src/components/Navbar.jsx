import React from 'react';

const Navbar = ({ openPopup }) => {
  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer w-48">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9945FF] to-[#7B2FBE] rounded-lg flex justify-center items-center text-white font-bold text-xl leading-none shadow-lg shadow-[#9945FF]/20">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-white hover:text-[#C084FC] transition-colors">
              Hypematter Media
            </span>
          </div>
          
          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <a href="#how-it-works" className="text-[#F5F5FA] hover:text-[#C084FC] font-semibold transition-colors text-sm">Process</a>
            <a href="#problems" className="text-[#F5F5FA] hover:text-[#C084FC] font-semibold transition-colors text-sm">Problems We Solve</a>
            <button onClick={openPopup} className="text-[#F5F5FA] hover:text-[#C084FC] font-semibold transition-colors text-sm">Contact</button>
          </div>

          {/* CTA - Right */}
          <div className="flex items-center justify-end w-48">
            <button onClick={openPopup} className="btn-primary px-6 py-2.5 text-sm hidden sm:flex hover:shadow-[0_0_20px_rgba(153,69,255,0.4)]">
              Schedule a Call
            </button>
            {/* Mobile menu button could go here if needed in future */}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
