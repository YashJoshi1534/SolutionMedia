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
import VideoShowcase from './components/VideoShowcase'
import ClientMarquee from './components/ClientMarquee'
import KeyBenefits from './components/KeyBenefits'
import Expertise from './components/Expertise'
import FAQ from './components/FAQ'




function LandingPage({ openPopup }) {
  return (
    <div className="relative min-h-screen bg-primary-bg text-dark-green font-sans overflow-x-hidden">
      <Navbar openPopup={openPopup} />
      <main>
        <Hero 
          openPopup={openPopup} 
          badgeText="Grow Your Influence"
          title="We build content systems for "
          highlight="brands and founders,"
          subtitle="faster, smarter, and more visual than anyone else."
          description={[
            "We automate your content with an AI system, so your brand never runs out of content again."
          ]}
          ctaText="Book a Free discovery call"
        />

        <ClientMarquee />

        <ProblemsWeSolve 
          title1="Why" 
          title2="Us?" 
        />

        <KeyBenefits />
        <HowItWorks />
        <Expertise />
        <Services />
        <Testimonials />
        <VideoShowcase />
        <FAQ />
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
