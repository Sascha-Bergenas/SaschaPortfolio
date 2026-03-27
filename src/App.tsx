import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="hero-shell" aria-labelledby="home">
          <div className="hero">
            <p className="eyebrow">Frontend-portfolio</p>
            <h1 id="home">Sascha Bergenås</h1>
            <p className="lead">
              Jag bygger snabba, tillgängliga och rena webbgränssnitt med React,
              TypeScript och modern CSS.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Se projekt
              </a>
              <a className="button button--ghost" href="#contact">
                Kontakta mig
              </a>
            </div>
          </div>
        </section>

        <Card>
          <section className="about" aria-labelledby="about">
            <h2 id="about">Om mig</h2>
            <p>
              Jag studerar just nu till JavaScript-utvecklare och tycker om det
              mer och mer ju längre jag kommer. Det är roligt att se hur saker
              hänger ihop och hur man kan bygga något som faktiskt fungerar.
            </p>
            <p>
              Det är utmanande ibland, men det hör till. Att lösa ett problem
              som tagit ett tag känns bra, och det är nog det som håller
              motivationen uppe.
            </p>
            <p>
              Jag siktar på att bygga gränssnitt som är enkla att använda och
              som håller över tid.
            </p>
          </section>
        </Card>

        <Card>
          <section className="skills" aria-labelledby="skills">
            <h2 id="skills">Tekniker</h2>
            <div className="skill-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">REST API</span>
            </div>
          </section>
        </Card>

        <Card>
          <section className="projects" aria-labelledby="projects">
            <h2 id="projects">Projekt</h2>
            <div className="project-list">
              <article className="project-item">
                <img
                  src="/projects/movie-watchlist.png"
                  alt="Skarmbild av projektet Movie Watchlist"
                  className="project-image"
                  loading="lazy"
                />
                <h3>Movie Watchlist</h3>
                <p>Sökapp med API-data, filtrering och laddningstillstånd.</p>
                <a
                  href="https://github.com/Sascha-Bergenas/Movie-watchlist"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </article>
              <article className="project-item">
                <img
                  src="/projects/pokedex.png"
                  alt="Skarmbild av projektet Pokedex"
                  className="project-image"
                  loading="lazy"
                />
                <h3>Pokedéx</h3>
                <p>Filtrera och hitta information om de första 151 pokémon.</p>
                <a
                  href="https://github.com/Sascha-Bergenas/NewPokeDex"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </article>
              <article className="project-item">
                <img
                  src="/projects/zoan.png"
                  alt="Skarmbild av projektet Zoan Project"
                  className="project-image"
                  loading="lazy"
                />
                <h3>Zoan Project</h3>
                <p>
                  Produktivitetsapp med timer, kalender, AI-rekommendationer,
                  todos och sessionsöversikt.
                </p>
                <a
                  href="https://github.com/Sascha-Bergenas/zoan-project"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </article>
            </div>
          </section>
        </Card>
      </main>

      <footer className="footer" id="contact">
        <span>Kontakt</span>
        <div className="contact-icons">
          <a
            href="mailto:Sascha.Bergenas@hotmail.com"
            className="contact-link"
            aria-label="Skicka e-post"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Sascha-Bergenas"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sascha-bergenås-9b9679382"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
