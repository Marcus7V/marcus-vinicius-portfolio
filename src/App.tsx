import { Navbar } from './components/layout/Navbar/Navbar'
import { Footer } from './components/layout/Footer/Footer'
import { Hero } from './components/sections/Hero/Hero'
import { About } from './components/sections/About/About'
import { Projects } from './components/sections/Projects/Projects'
import { Skills } from './components/sections/Skills/Skills'
import { Education } from './components/sections/Education/Education'
import { Certifications } from './components/sections/Certifications/Certifications'
import { Contact } from './components/sections/Contact/Contact'
import { LanguageProvider } from './i18n/LanguageProvider'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Navbar />

      <Hero />
      <div className="ticks" />

      <About />
      <div className="ticks" />

      <Projects />
      <div className="ticks" />

      <Skills />
      <div className="ticks" />

      <Education />
      <div className="ticks" />

      <Certifications />
      <div className="ticks" />

      <Contact />
      <div className="ticks" />

      <Footer />
    </LanguageProvider>
  )
}

export default App