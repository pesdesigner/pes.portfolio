import './Hero.css'

const heroBackgroundImageUrl =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'

function Hero({ darkMode, onToggleTheme }) {
  return (
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
        Sou programador e estudante de tecnologia, apaixonado por aprender e transformar ideias em
        soluções digitais úteis. Hoje sigo aprofundando minha jornada em cloud com foco em IA,
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
          onClick={onToggleTheme}
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
  )
}

export default Hero