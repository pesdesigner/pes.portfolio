import { useState, useEffect } from 'react'
import './index.css'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import HobbiesSection from './components/HobbiesSection'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { hobbies } from './data/hobbies'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="site-shell">
      <Hero darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />

      <main>
        <ProjectsSection projects={projects} />
        <HobbiesSection hobbies={hobbies} />
      </main>

      <Footer />
    </div>
  )
}

export default App
