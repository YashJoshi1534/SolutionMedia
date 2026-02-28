import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-dark-green font-sans">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ProblemsWeSolve />
      </main>
      <Footer />
    </div>
  )
}

export default App
