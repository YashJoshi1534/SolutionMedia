import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-dark-green font-sans">
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
