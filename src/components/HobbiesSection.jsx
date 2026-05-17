import './HobbiesSection.css'

function HobbiesSection({ hobbies }) {
  return (
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
  )
}

export default HobbiesSection