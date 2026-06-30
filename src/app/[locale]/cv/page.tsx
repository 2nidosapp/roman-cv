import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getLocalizedProfile } from '@/data/localized-profile';
import { isLocale, locales } from '@/i18n/config';
import { PrintButton } from '@/app/cv/print-button';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocalizedCvPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedCvPage({ params }: LocalizedCvPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const { labels, experience, profile, projects, skillGroups } =
    getLocalizedProfile(localeParam);

  return (
    <main className="cvPage">
      <div className="cvToolbar">
        <Link href={`/${localeParam}`}>← {labels.portfolio}</Link>
        <PrintButton label={labels.saveAsPdf} />
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
            <span>{profile.contact.website.replace('https://', '')}</span>
          </div>
        </header>

        <section className="cvSection">
          <h2>{labels.profile}</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="cvSection">
          <h2>{labels.selectedProjects}</h2>

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
          <h2>{labels.technicalStack}</h2>

          <div className="cvSkills">
            {skillGroups.map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong> {group.items.join(', ')}
              </p>
            ))}
          </div>
        </section>

        <section className="cvSection">
          <h2>{labels.experience}</h2>

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
