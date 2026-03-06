import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import InteractiveBackground from './components/InteractiveBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-primary-bg text-dark-green font-sans overflow-x-hidden">
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <ProblemsWeSolve />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App
