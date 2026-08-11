import { useState } from 'react'
import { Navbar } from './components/layout/Navbar/Navbar'
import { Footer } from './components/layout/Footer/Footer'
import { Hero } from './components/sections/Hero/Hero'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Hero />

      <div className="ticks"></div>

      <section id="about" className="scroll-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Sobre Mim (Mock)</h2>
        <p>Esta seção será preenchida na etapa de desenvolvimento do conteúdo.</p>
      </section>

      <div className="ticks"></div>

      <section id="projects" className="scroll-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Projetos (Mock)</h2>
        <p>Esta seção será preenchida na etapa de desenvolvimento do conteúdo.</p>
      </section>

      <div className="ticks"></div>

      <section id="skills" className="scroll-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Habilidades (Mock)</h2>
        <p>Esta seção será preenchida na etapa de desenvolvimento do conteúdo.</p>
      </section>

      <div className="ticks"></div>

      <section id="contact" className="scroll-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Contato (Mock)</h2>
        <p>Esta seção será preenchida na etapa de desenvolvimento do conteúdo.</p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          style={{ display: 'none' }} /* Hidden but preserved count logic for compatibility */
        >
          Count is {count}
        </button>
      </section>

      <Footer />
    </>
  )
}

export default App
