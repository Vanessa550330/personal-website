import React from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen font-sans">
      <Header />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
