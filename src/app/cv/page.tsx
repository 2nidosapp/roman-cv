import Link from 'next/link';

import { experience, profile, projects, skillGroups } from '@/data/profile';

export default function CvPage() {
  return (
    <main className="cvPage">
      <div className="cvToolbar">
        <Link href="/">← Portfolio</Link>
        <span>Use browser print → Save as PDF</span>
      </div>

      <article className="cvSheet">
        <header className="cvHeader">
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
          </div>

          <div className="cvContact">
            <span>{profile.location}</span>
            <span>{profile.contact.email}</span>
            <span>{profile.contact.github.replace('https://', '')}</span>
          </div>
        </header>

        <section className="cvSection">
          <h2>Profile</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="cvSection">
          <h2>Selected projects</h2>

          {projects.map((project) => (
            <div className="cvProject" key={project.name}>
              <div className="cvProjectHeader">
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>

              <p>{project.summary}</p>
              <p className="cvStack">{project.stack.join(' · ')}</p>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cvSection">
          <h2>Technical stack</h2>

          <div className="cvSkills">
            {skillGroups.map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong> {group.items.join(', ')}
              </p>
            ))}
          </div>
        </section>

        <section className="cvSection">
          <h2>Experience</h2>

          {experience.map((item) => (
            <div className="cvExperience" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
