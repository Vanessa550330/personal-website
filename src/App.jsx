import Header from './components/Header'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pb-10 font-sans">
      <Header />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  )
}
