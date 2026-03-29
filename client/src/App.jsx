import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import ContactPopup from './components/ContactPopup'
import Pricing from './pages/Pricing'
import Avatar from './pages/Avatar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Work from './components/Work'

import { PhoneCall, Cog, Rocket } from 'lucide-react'

function LandingPage({ openPopup }) {
  const homeSteps = [
    {
      id: 1,
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      title: 'Schedule your call',
      description: 'Book a discovery session to discuss your brand and organic growth potential.',
    },
    {
      id: 2,
      icon: <Cog className="w-8 h-8 text-white" />,
      title: 'Tell us your concerns',
      description: 'Share your challenges and goals so we can tailor the perfect AI strategy for you.',
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: 'Finalise your AI-Driven solutions',
      description: 'We finalize and launch your custom AI content system for organic influence.',
    }
  ];

  return (
    <div className="relative min-h-screen bg-primary-bg text-dark-green font-sans overflow-x-hidden">
      <Navbar openPopup={openPopup} />
      <main>
        <Hero 
          openPopup={openPopup} 
          badgeText="Grow Your Influence"
          title="Grow Your "
          highlight="Influence"
          subtitle="with AI-Driven Content Solutions."
          description={[
            "Build your personal brand and business influence through organic AI-powered content.",
            "Stay consistent effortlessly with our smart content automation systems."
          ]}
        />
        <Work />
        <ProblemsWeSolve 
          title1="Why" 
          title2="Us?" 
          subtitle="(1m+ views generated, 30+ clients served, 100+ AI videos created, Cinematic and story driven ads)"
        />
        <Services />
        <Testimonials />
        <HowItWorks 
          steps={homeSteps}
          mainTitle="3 Simple Steps."
          subTitle="To Your Success."
        />
      </main>
      <Footer openPopup={openPopup} />
    </div>
  )
}

function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  const openPopup = () => setPopupOpen(true)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage openPopup={openPopup} />} />
        <Route path="/avatar" element={<Avatar openPopup={openPopup} />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default App
