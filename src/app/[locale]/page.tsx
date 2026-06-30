import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { LanguageSwitcher } from '@/components/language-switcher';
import { getLocalizedProfile } from '@/data/localized-profile';
import { isLocale, locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const { evidence, labels, experience, profile, projects, skillGroups } =
    getLocalizedProfile(localeParam);

  const homeHref = `/${localeParam}`;
  const cvHref = `/${localeParam}/cv`;

  return (
    <main className="site">
      <header className="nav">
        <Link href={homeHref} className="brand">
          {profile.name}
        </Link>

        <nav>
          <a href="#work">{labels.work}</a>
          <a href="#stack">{labels.stack}</a>
          <a href="#experience">{labels.experience}</a>
          <Link href={cvHref}>{labels.cv}</Link>
          <LanguageSwitcher currentLocale={localeParam} page="home" />
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.role}</h1>
        <p className="heroLead">{profile.headline}</p>

        <div className="heroActions">
          <Link href={cvHref} className="primaryAction">
            {labels.viewCv}
          </Link>
          <a href="#work" className="secondaryAction">
            {labels.selectedWork}
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

      <section className="section evidenceSection" aria-labelledby="evidence-title">
        <div className="sectionHeader">
          <p className="eyebrow">{evidence.eyebrow}</p>
          <h2 id="evidence-title">{evidence.title}</h2>
          <p className="sectionLead">{evidence.description}</p>
        </div>

        <div className="evidenceGrid">
          {evidence.projects.map((project) => (
            <article className="evidenceCard" key={project.name}>
              <div className="evidenceContent">
                <div>
                  <p className="projectType">{project.label}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>

                <div>
                  <p className="evidenceStatus">{project.status}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {project.href ? (
                    <a
                      className="evidenceAction"
                      href={project.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {project.actionLabel}
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="evidenceVisual">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1448}
                  height={1086}
                  sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1080px) 45vw, 31vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="sectionHeader">
          <p className="eyebrow">{labels.selectedWorkEyebrow}</p>
          <h2>{labels.selectedWorkTitle}</h2>
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
          <p className="eyebrow">{labels.technicalStack}</p>
          <h2>{labels.technicalStackTitle}</h2>
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
          <p className="eyebrow">{labels.experience}</p>
          <h2>{labels.experienceTitle}</h2>
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
          <p className="eyebrow">{labels.contact}</p>
          <h2>{labels.footerTitle}</h2>
        </div>

        <div className="footerLinks">
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          <a href={profile.contact.github}>GitHub</a>
          <Link href={cvHref}>{labels.cvPage}</Link>
        </div>
      </footer>
    </main>
  );
}
