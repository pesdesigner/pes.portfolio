import { useState, useEffect } from 'react'
import './index.css'
import { formatProjectTitle } from './util/formatProjectTitle'

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

  const heroBackgroundImageUrl =
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'

  const projects = [
    {
      title: 'retro-game-quiz',
      description:
        'Quiz tematico com pegada retrô para explorar conhecimentos em jogos com interface divertida.',
      stack: 'React, JavaScript',
      link: 'https://github.com/pesdesigner/retro-game-quiz',
    },
    {
      title: 'nextpodcast',
      description:
        'Aplicacao focada em podcasts com interface moderna para explorar episodios e organizar a experiencia de audio.',
      stack: 'Next.js, React, TypeScript',
      link: 'https://github.com/pesdesigner/nextpodcast',
    },
    {
      title: 'app_lista_de_tarefas',
      description:
        'Aplicativo de tarefas para organizar atividades do dia a dia com uma navegacao simples e objetiva.',
      stack: 'JavaScript, HTML, CSS',
      link: 'https://github.com/pesdesigner/app_lista_de_tarefas',
    },
    {
      title: 'sistema-posts-fullstack',
      description:
        'Sistema completo para criacao e gerenciamento de posts, integrando frontend e backend.',
      stack: 'React, Node.js, API REST',
      link: 'https://github.com/pesdesigner/sistema-posts-fullstack',
    },
    {
      title: 'dashboard-angular',
      description:
        'Dashboard administrativo com foco em visualizacao de indicadores e organizacao de informacoes em uma interface clara.',
      stack: 'Angular, TypeScript, CSS',
      link: 'https://github.com/pesdesigner/dashboard-angular',
    },
    {
      title: 'painel-professores',
      description:
        'Aplicacao para organizacao de professores, com foco em cadastro, visualizacao e produtividade.',
      stack: 'React, Java, Spring Boot',
      link: 'https://github.com/pesdesigner/painel-professores',
    },
    {
      title: 'dsdeliver-sds2',
      description:
        'Projeto de pedidos com experiencia de compra simplificada e rastreio de entrega.',
      stack: 'React, Java, Spring',
      link: 'https://github.com/pesdesigner/dsdeliver-sds2',
    },
    {
      title: 'plantmanager',
      description:
        'Aplicativo para cuidado de plantas, com lembretes e rotina de manutencao personalizada.',
      stack: 'React Native, TypeScript',
      link: 'https://github.com/pesdesigner/plantmanager',
    },
  ]

  const hobbies = [
    { label: 'Música', emoji: '🎵', link: 'https://youtube.com/playlist?list=PLnHFnbNiS-ByXJouzWKdlI4X5zXouBsQh&si=CauQt6lhbEUAB6kX' },
    { label: 'Games', emoji: '🎮', link: 'https://steamcommunity.com/profiles/76561198981601007' },
    { label: 'Artes', emoji: '🎨', link: 'https://www.behance.net/graficoeweb' },
    { label: 'Viagens', emoji: '✈️', link: 'https://www.instagram.com/paulo_eduardo.souza' },
  ]

  return (
    <div className="site-shell">
      <header
        className="hero"
        id="inicio"
        style={{
          '--hero-cover-image': `url(${heroBackgroundImageUrl})`,
        }}
      >
        <div className="hero-cover" aria-hidden="true" />
        <div className="hero-top">
          <p className="hero-kicker">Portfolio</p>
          <img
            className="profile-photo"
            src="https://media.licdn.com/dms/image/v2/C4D03AQFfdmWJgZcOmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1575203504706?e=1780531200&v=beta&t=aAfLg6T4t0JILeH5XMs1bg9PuvX7CfLLY40PK320HLs"
            alt="Foto de Paulo Eduardo"
          />
        </div>
        <h1>Paulo Eduardo</h1>
        <p className="hero-role">Analista de Sistemas | Desenvolvedor Full Stack</p>
        <p className="hero-text">
          Sou programador e estudante de tecnologia, apaixonado por aprender e transformar ideias
          em soluções digitais úteis. Hoje sigo aprofundando minha jornada em cloud com foco em IA,
          buscando crescimento contínuo na carreira e projetos que gerem valor real para as pessoas.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-ghost">
            Contato
          </a>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={darkMode ? 'Modo claro' : 'Modo escuro'}
          >
            {darkMode ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 4.5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0 12a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm8.5-5.5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5.5 12a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm11.01-5.51a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM8.1 15.9a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0Zm8.49 1.41a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41ZM8.1 8.1a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 0 1 7.39 6l.71.71a1 1 0 0 1 0 1.4ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main>
        <section className="section" id="projetos">
          <div className="section-title-row">
            <h2>Projetos</h2>
            <p>Repositórios selecionados com foco em evolução full stack.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{formatProjectTitle(project.title)}</h3>
                <p>{project.description}</p>
                <div className="stack-tags" aria-label="Tecnologias do projeto">
                  {project.stack.split(',').map((tech) => (
                    <span className="stack-tag" key={`${project.title}-${tech.trim()}`}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  <svg
                    className="project-link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.11-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.06a9.25 9.25 0 0 1 5 0c1.91-1.33 2.75-1.06 2.75-1.06.55 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.58 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
                    />
                  </svg>
                  <span>Repositório</span>
                  <svg
                    className="project-link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3a1 1 0 1 0 0 2h3.59l-8.3 8.29a1 1 0 1 0 1.42 1.42L19 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6Zm-9 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V7h5a1 1 0 1 0 0-2H5Z"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="hobbies">
          <div className="section-title-row">
            <h2>Hobbies</h2>
            <p>Interesses que alimentam criatividade e repertorio pessoal.</p>
          </div>

          <ul className="hobby-list">
            {hobbies.map((hobby) => (
              <li key={hobby.label}>
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hobby-link"
                  aria-label={hobby.label}
                >
                  <span className="hobby-emoji" aria-hidden="true">{hobby.emoji}</span>
                  <span>{hobby.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer" id="contato">
        <p>Vamos nos conectar</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/paulo-eduardo-de-souza/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM8.5 9.75H5.38V19h3.12V9.75Zm4.93 0h-2.99V19h3.12v-4.86c0-1.28.24-2.53 1.83-2.53 1.57 0 1.59 1.47 1.59 2.61V19H20v-5.4c0-2.65-.57-4.69-3.67-4.69-1.49 0-2.48.82-2.9 1.6v-1.36Z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/pesdesigner"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.11-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.06a9.25 9.25 0 0 1 5 0c1.91-1.33 2.75-1.06 2.75-1.06.55 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.58 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/paulo_eduardo.souza"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5A4 4 0 0 0 7.75 20.25h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
              />
            </svg>
          </a>
        </div>
        <p className="footer-credits">
          © {new Date().getFullYear()} Paulo Eduardo. Desenvolvido com React e Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
