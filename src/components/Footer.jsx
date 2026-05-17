import './Footer.css'

function Footer() {
  return (
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
  )
}

export default Footer