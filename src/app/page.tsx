import Link from 'next/link';

import { experience, profile, projects, skillGroups } from '@/data/profile';

export default function Home() {
  return (
    <main className="site">
      <header className="nav">
        <Link href="/" className="brand">
          {profile.name}
        </Link>

        <nav>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <Link href="/cv">CV</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.role}</h1>
        <p className="heroLead">{profile.headline}</p>

        <div className="heroActions">
          <Link href="/cv" className="primaryAction">
            View CV
          </Link>
          <a href="#work" className="secondaryAction">
            Selected work
          </a>
        </div>
      </section>

      <section className="intro">
        <p>{profile.summary}</p>

        <div className="focusGrid">
          {profile.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="sectionHeader">
          <p className="eyebrow">Selected work</p>
          <h2>Real systems, built end to end.</h2>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div>
                <p className="projectType">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>

              <div className="stackList">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="stack">
        <div className="sectionHeader">
          <p className="eyebrow">Technical stack</p>
          <h2>Focused on TypeScript product engineering.</h2>
        </div>

        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <article className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="sectionHeader">
          <p className="eyebrow">Experience</p>
          <h2>Product ownership, learning speed, and delivery discipline.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for software engineering roles.</h2>
        </div>

        <div className="footerLinks">
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          <a href={profile.contact.github}>GitHub</a>
          <Link href="/cv">CV page</Link>
        </div>
      </footer>
    </main>
  );
}
