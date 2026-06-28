export const profile = {
  name: 'Roman Kostyuchenko',
  role: 'Software Engineer',
  location: 'Catalonia / Barcelona area, Spain',
  headline:
    'Product-minded software engineer building TypeScript-based product systems across web, mobile, backend, and data.',
  summary:
    'I build end-to-end software products from domain model and architecture to user-facing flows. My recent work combines TypeScript, React, Next.js, React Native, NestJS, PostgreSQL, Prisma, Docker, Nx monorepos, and disciplined Git workflows. I care about clear reasoning, maintainable systems, product value, documentation, and shipping usable increments.',
  focus: [
    'TypeScript product engineering',
    'React / Next.js web applications',
    'React Native / Expo mobile apps',
    'NestJS / PostgreSQL backend systems',
    'Domain modeling and clean architecture',
    'AI-assisted development workflows',
  ],
  contact: {
    email: 'honomonodev@gmail.com',
    github: 'https://github.com/2nidosapp',
  },
};

export const projects = [
  {
    name: 'VCOS · Vehicle Care OS',
    type: 'Product system / SaaS prototype',
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
      'A vehicle-care operating system for dry car wash, light inspection, vehicle memory, visits, recommendations, evidence, operations, and business-value workflows.',
    highlights: [
      'Designed vehicle fichas with persistent visit history and vehicle memory.',
      'Built general and visit-linked observations and recommendations.',
      'Added visit detail flows, evidence foundations, business preview, operations preview, and workshop board display concept.',
      'Used clean Git checkpoints, documentation, build validation, and product-focused iteration.',
    ],
  },
  {
    name: 'DosNidos',
    type: 'Mobile product / co-parenting app',
    stack: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'Nx',
      'NativeWind',
    ],
    summary:
      'A calm child-centered co-parenting mobile app for coordination between two homes.',
    highlights: [
      'Built mobile app architecture with tabs, agenda, child profile, settings, and local persistence.',
      'Implemented create/edit/detail flows and i18n foundations in Spanish, Catalan, and English.',
      'Focused on sensitive UX, domain clarity, and practical family coordination.',
    ],
  },
  {
    name: 'J414',
    type: 'B2B product landing / production deployment',
    stack: ['Next.js', 'React', 'Tailwind/CSS', 'PHP', 'Resend', 'SFTP'],
    summary:
      'A multilingual B2B landing site for a reusable water circulation system built around premium stainless steel bottles.',
    highlights: [
      'Created a polished multilingual landing experience in English, German, and Spanish.',
      'Integrated production contact form with secure server-side configuration and Resend email delivery.',
      'Handled DNS/email verification, deployment, responsive QA, and business copy refinement.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Expo Router', 'NativeWind'],
  },
  {
    title: 'Backend',
    items: ['NestJS', 'Node.js', 'REST APIs', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Tooling',
    items: ['Nx', 'pnpm', 'Docker', 'Git', 'GitHub', 'Linux / WSL', 'VS Code'],
  },
  {
    title: 'Working style',
    items: [
      'Product thinking',
      'Domain modeling',
      'Documentation',
      'Clean commits',
      'Build verification',
      'AI-assisted workflows',
    ],
  },
];

export const experience = [
  {
    title: 'Independent Software / Product Developer',
    period: 'Recent work',
    description:
      'Built and iterated real product systems across web, mobile, backend, deployment, documentation, and product strategy. Projects include VCOS, DosNidos, and J414.',
  },
  {
    title: 'English Teacher',
    period: 'Current / part-time',
    description:
      'Teach English with a practical, structured, and human approach. This supports clear communication, patience, explanation, and learning design.',
  },
  {
    title: 'Career transition into software engineering',
    period: 'Approx. 6 years',
    description:
      'Moved from earlier customer-facing work into software development through structured learning and hands-on product building, with strong attention to fundamentals and reasoning.',
  },
];
