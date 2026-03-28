import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemsWeSolve from '../components/ProblemsWeSolve';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Avatar = ({ openPopup }) => {
  return (
    <div className="relative min-h-screen bg-primary-bg text-dark-green font-sans overflow-x-hidden">
      <Navbar openPopup={openPopup} />
      <main>
        <Hero openPopup={openPopup} />
        <ProblemsWeSolve />
        <HowItWorks />
      </main>
      <Footer openPopup={openPopup} />
    </div>
  );
};

export default Avatar;
