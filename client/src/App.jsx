import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import InteractiveBackground from './components/InteractiveBackground'
import ContactPopup from './components/ContactPopup'
import Pricing from './pages/Pricing'

function LandingPage({ openPopup }) {
  return (
    <div className="relative min-h-screen bg-primary-bg text-dark-green font-sans overflow-x-hidden">
      <InteractiveBackground />
      <Navbar openPopup={openPopup} />
      <main>
        <Hero openPopup={openPopup} />
        <ProblemsWeSolve />
        <HowItWorks />
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
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default App
