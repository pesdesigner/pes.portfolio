import './ProjectsSection.css'
import { formatProjectTitle } from '../util/formatProjectTitle'

function ProjectsSection({ projects }) {
  return (
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
              <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.11-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.06a9.25 9.25 0 0 1 5 0c1.91-1.33 2.75-1.06 2.75-1.06.55 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.58 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
                />
              </svg>
              <span>Repositório</span>
              <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
  )
}

export default ProjectsSection