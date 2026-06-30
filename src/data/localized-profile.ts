import { type Locale } from '@/i18n/config';
import {
  experience as baseExperience,
  profile as baseProfile,
  projects as baseProjects,
  skillGroups as baseSkillGroups,
} from './profile';

type Labels = {
  work: string;
  stack: string;
  experience: string;
  cv: string;
  viewCv: string;
  selectedWork: string;
  selectedWorkEyebrow: string;
  selectedWorkTitle: string;
  technicalStack: string;
  technicalStackTitle: string;
  experienceTitle: string;
  contact: string;
  footerTitle: string;
  cvPage: string;
  portfolio: string;
  saveAsPdf: string;
  profile: string;
  selectedProjects: string;
  liveSite: string;
};

type LocalizedProfile = {
  labels: Labels;
  profile: typeof baseProfile;
  projects: typeof baseProjects;
  skillGroups: typeof baseSkillGroups;
  experience: typeof baseExperience;
};

export const localizedProfiles = {
  en: {
    labels: {
      work: 'Work',
      stack: 'Stack',
      experience: 'Experience',
      cv: 'CV',
      viewCv: 'View CV',
      selectedWork: 'Selected work',
      selectedWorkEyebrow: 'Selected work',
      selectedWorkTitle: 'Real systems, built end to end.',
      technicalStack: 'Technical stack',
      technicalStackTitle: 'Focused on TypeScript product engineering.',
      experienceTitle: 'Product ownership, learning speed, and delivery discipline.',
      contact: 'Contact',
      footerTitle: 'Available for software engineering roles.',
      cvPage: 'CV page',
      portfolio: 'Portfolio',
      saveAsPdf: 'Save as PDF',
      profile: 'Profile',
      selectedProjects: 'Selected projects',
      liveSite: 'Portfolio',
    },
    profile: baseProfile,
    projects: baseProjects,
    skillGroups: baseSkillGroups,
    experience: baseExperience,
  },

  es: {
    labels: {
      work: 'Proyectos',
      stack: 'Stack',
      experience: 'Experiencia',
      cv: 'CV',
      viewCv: 'Ver CV',
      selectedWork: 'Proyectos seleccionados',
      selectedWorkEyebrow: 'Proyectos seleccionados',
      selectedWorkTitle: 'Sistemas reales, construidos de principio a fin.',
      technicalStack: 'Stack técnico',
      technicalStackTitle: 'Enfocado en ingeniería de producto con TypeScript.',
      experienceTitle: 'Ownership de producto, velocidad de aprendizaje y disciplina de entrega.',
      contact: 'Contacto',
      footerTitle: 'Disponible para roles de ingeniería de software.',
      cvPage: 'Página CV',
      portfolio: 'Portfolio',
      saveAsPdf: 'Guardar como PDF',
      profile: 'Perfil',
      selectedProjects: 'Proyectos seleccionados',
      liveSite: 'Portfolio',
    },
    profile: {
      ...baseProfile,
      role: 'Desarrollador de software',
      location: 'Cataluña / área de Barcelona, España',
      headline:
        'Desarrollador de software orientado a producto, creando sistemas con TypeScript para web, móvil, backend y datos.',
      summary:
        'Construyo productos de software de principio a fin: desde el modelo de dominio y la arquitectura hasta los flujos visibles para el usuario. Mi trabajo reciente combina TypeScript, React, Next.js, React Native, NestJS, PostgreSQL, Prisma, Docker, monorepos Nx y flujos Git disciplinados. Me importan el razonamiento claro, los sistemas mantenibles, el valor de producto, la documentación y entregar incrementos utilizables.',
      focus: [
        'Ingeniería de producto con TypeScript',
        'Aplicaciones web con React / Next.js',
        'Apps móviles con React Native / Expo',
        'Backends con NestJS / PostgreSQL',
        'Modelado de dominio y arquitectura limpia',
        'Flujos de desarrollo asistidos por IA',
      ],
    },
    projects: [
      {
        name: 'VCOS · Vehicle Care OS',
        type: 'Sistema de producto / prototipo SaaS',
        stack: [
          'TypeScript',
          'Next.js',
          'NestJS',
          'PostgreSQL',
          'Prisma',
          'Docker',
          'Nx',
        ],
        summary:
          'Un sistema operativo para cuidado de vehículos: lavado en seco, inspección ligera, memoria del vehículo, visitas, recomendaciones, evidencias, operaciones y flujos de valor de negocio.',
        highlights: [
          'Diseñé fichas de vehículo con historial persistente de visitas y memoria del vehículo.',
          'Construí observaciones y recomendaciones generales y vinculadas a visitas.',
          'Añadí flujos de detalle de visita, base de evidencias, business preview, operations preview y concepto de workshop board.',
          'Trabajé con checkpoints limpios en Git, documentación, validación de build e iteración orientada a producto.',
        ],
      },
      {
        name: 'DosNidos',
        type: 'Producto móvil / app de coparentalidad',
        stack: [
          'React Native',
          'Expo',
          'Expo Router',
          'TypeScript',
          'Nx',
          'NativeWind',
        ],
        summary:
          'Una app móvil tranquila y centrada en el niño para coordinar la vida entre dos hogares.',
        highlights: [
          'Construí la arquitectura móvil con pestañas, agenda, perfil del niño, ajustes y persistencia local.',
          'Implementé flujos de creación, edición y detalle, además de bases i18n en español, catalán e inglés.',
          'Me enfoqué en UX sensible, claridad de dominio y coordinación familiar práctica.',
        ],
      },
      {
        name: 'J414',
        type: 'Landing B2B de producto / despliegue en producción',
        stack: ['Next.js', 'React', 'Tailwind/CSS', 'PHP', 'Resend', 'SFTP'],
        summary:
          'Una landing B2B multilingüe para un sistema de circulación de agua reutilizable construido alrededor de botellas premium de acero inoxidable.',
        highlights: [
          'Creé una experiencia landing pulida y multilingüe en inglés, alemán y español.',
          'Integré un formulario de contacto en producción con configuración segura del lado servidor y envío mediante Resend.',
          'Gestioné verificación DNS/email, despliegue, QA responsive y refinamiento de copy de negocio.',
        ],
      },
    ],
    skillGroups: [
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'UI responsive'],
      },
      {
        title: 'Mobile',
        items: ['React Native', 'Expo', 'Expo Router', 'NativeWind'],
      },
      {
        title: 'Backend',
        items: ['NestJS', 'Node.js', 'APIs REST', 'Prisma', 'PostgreSQL'],
      },
      {
        title: 'Tooling',
        items: ['Nx', 'pnpm', 'Docker', 'Git', 'GitHub', 'Linux / WSL', 'VS Code'],
      },
      {
        title: 'Forma de trabajo',
        items: [
          'Pensamiento de producto',
          'Modelado de dominio',
          'Documentación',
          'Commits limpios',
          'Verificación de build',
          'Flujos asistidos por IA',
        ],
      },
    ],
    experience: [
      {
        title: 'Desarrollador independiente de software / producto',
        period: 'Trabajo reciente',
        description:
          'Construcción e iteración de sistemas reales de producto en web, móvil, backend, despliegue, documentación y estrategia de producto. Proyectos: VCOS, DosNidos y J414.',
      },
      {
        title: 'Profesor de inglés',
        period: 'Actual / tiempo parcial',
        description:
          'Enseñanza de inglés con un enfoque práctico, estructurado y humano. Refuerza comunicación clara, paciencia, explicación y diseño de aprendizaje.',
      },
      {
        title: 'Transición profesional hacia ingeniería de software',
        period: 'Aprox. 6 años',
        description:
          'Transición desde trabajo anterior orientado al cliente hacia desarrollo de software mediante aprendizaje estructurado y construcción práctica de productos, con atención fuerte a fundamentos y razonamiento.',
      },
    ],
  },

  ca: {
    labels: {
      work: 'Projectes',
      stack: 'Stack',
      experience: 'Experiència',
      cv: 'CV',
      viewCv: 'Veure CV',
      selectedWork: 'Projectes seleccionats',
      selectedWorkEyebrow: 'Projectes seleccionats',
      selectedWorkTitle: 'Sistemes reals, construïts de principi a fi.',
      technicalStack: 'Stack tècnic',
      technicalStackTitle: 'Enfocat en enginyeria de producte amb TypeScript.',
      experienceTitle: 'Ownership de producte, velocitat d’aprenentatge i disciplina d’entrega.',
      contact: 'Contacte',
      footerTitle: 'Disponible per a rols d’enginyeria de programari.',
      cvPage: 'Pàgina CV',
      portfolio: 'Portfolio',
      saveAsPdf: 'Desar com a PDF',
      profile: 'Perfil',
      selectedProjects: 'Projectes seleccionats',
      liveSite: 'Portfolio',
    },
    profile: {
      ...baseProfile,
      role: 'Desenvolupador de programari',
      location: 'Catalunya / àrea de Barcelona, Espanya',
      headline:
        'Desenvolupador de programari orientat a producte, creant sistemes amb TypeScript per a web, mòbil, backend i dades.',
      summary:
        'Construeixo productes de programari de principi a fi: des del model de domini i l’arquitectura fins als fluxos visibles per a l’usuari. El meu treball recent combina TypeScript, React, Next.js, React Native, NestJS, PostgreSQL, Prisma, Docker, monorepos Nx i fluxos Git disciplinats. Em preocupen el raonament clar, els sistemes mantenibles, el valor de producte, la documentació i entregar increments utilitzables.',
      focus: [
        'Enginyeria de producte amb TypeScript',
        'Aplicacions web amb React / Next.js',
        'Apps mòbils amb React Native / Expo',
        'Backends amb NestJS / PostgreSQL',
        'Modelatge de domini i arquitectura neta',
        'Fluxos de desenvolupament assistits per IA',
      ],
    },
    projects: [
      {
        name: 'VCOS · Vehicle Care OS',
        type: 'Sistema de producte / prototip SaaS',
        stack: [
          'TypeScript',
          'Next.js',
          'NestJS',
          'PostgreSQL',
          'Prisma',
          'Docker',
          'Nx',
        ],
        summary:
          'Un sistema operatiu per a la cura de vehicles: rentat en sec, inspecció lleugera, memòria del vehicle, visites, recomanacions, evidències, operacions i fluxos de valor de negoci.',
        highlights: [
          'Vaig dissenyar fitxes de vehicle amb historial persistent de visites i memòria del vehicle.',
          'Vaig construir observacions i recomanacions generals i vinculades a visites.',
          'Vaig afegir fluxos de detall de visita, base d’evidències, business preview, operations preview i concepte de workshop board.',
          'Vaig treballar amb checkpoints nets a Git, documentació, validació de build i iteració orientada a producte.',
        ],
      },
      {
        name: 'DosNidos',
        type: 'Producte mòbil / app de coparentalitat',
        stack: [
          'React Native',
          'Expo',
          'Expo Router',
          'TypeScript',
          'Nx',
          'NativeWind',
        ],
        summary:
          'Una app mòbil tranquil·la i centrada en l’infant per coordinar la vida entre dues llars.',
        highlights: [
          'Vaig construir l’arquitectura mòbil amb pestanyes, agenda, perfil de l’infant, ajustos i persistència local.',
          'Vaig implementar fluxos de creació, edició i detall, i bases i18n en castellà, català i anglès.',
          'Em vaig enfocar en UX sensible, claredat de domini i coordinació familiar pràctica.',
        ],
      },
      {
        name: 'J414',
        type: 'Landing B2B de producte / desplegament en producció',
        stack: ['Next.js', 'React', 'Tailwind/CSS', 'PHP', 'Resend', 'SFTP'],
        summary:
          'Una landing B2B multilingüe per a un sistema de circulació d’aigua reutilitzable construït al voltant d’ampolles premium d’acer inoxidable.',
        highlights: [
          'Vaig crear una experiència landing polida i multilingüe en anglès, alemany i castellà.',
          'Vaig integrar un formulari de contacte en producció amb configuració segura del costat servidor i enviament mitjançant Resend.',
          'Vaig gestionar verificació DNS/email, desplegament, QA responsive i refinament de copy de negoci.',
        ],
      },
    ],
    skillGroups: [
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'UI responsive'],
      },
      {
        title: 'Mobile',
        items: ['React Native', 'Expo', 'Expo Router', 'NativeWind'],
      },
      {
        title: 'Backend',
        items: ['NestJS', 'Node.js', 'APIs REST', 'Prisma', 'PostgreSQL'],
      },
      {
        title: 'Tooling',
        items: ['Nx', 'pnpm', 'Docker', 'Git', 'GitHub', 'Linux / WSL', 'VS Code'],
      },
      {
        title: 'Forma de treball',
        items: [
          'Pensament de producte',
          'Modelatge de domini',
          'Documentació',
          'Commits nets',
          'Verificació de build',
          'Fluxos assistits per IA',
        ],
      },
    ],
    experience: [
      {
        title: 'Desenvolupador independent de programari / producte',
        period: 'Treball recent',
        description:
          'Construcció i iteració de sistemes reals de producte en web, mòbil, backend, desplegament, documentació i estratègia de producte. Projectes: VCOS, DosNidos i J414.',
      },
      {
        title: 'Professor d’anglès',
        period: 'Actual / temps parcial',
        description:
          'Ensenyament d’anglès amb un enfocament pràctic, estructurat i humà. Reforça comunicació clara, paciència, explicació i disseny d’aprenentatge.',
      },
      {
        title: 'Transició professional cap a enginyeria de programari',
        period: 'Aprox. 6 anys',
        description:
          'Transició des de feina anterior orientada al client cap al desenvolupament de programari mitjançant aprenentatge estructurat i construcció pràctica de productes, amb molta atenció als fonaments i al raonament.',
      },
    ],
  },
} satisfies Record<Locale, LocalizedProfile>;

export function getLocalizedProfile(locale: Locale) {
  return localizedProfiles[locale];
}
