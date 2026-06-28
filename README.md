# Roman Kostyuchenko · Portfolio & CV

Personal portfolio and CV website for software engineering applications.

The project presents selected product work, technical stack, working style, and a print-friendly CV page that can be exported as a PDF.

## Purpose

This site works as a structured source of truth for my professional profile:

* portfolio landing page;
* selected software projects;
* technical stack overview;
* working style and experience;
* print-friendly CV page.

The CV page is designed to be opened in the browser and exported as a PDF.

## Stack

* Next.js
* React
* TypeScript
* CSS
* App Router
* Static rendering

## Routes

```txt
/     Portfolio landing page
/cv   Print-friendly CV page
```

## Selected work

The portfolio currently highlights:

* **VCOS · Vehicle Care OS** — vehicle-care operating system prototype built with Next.js, NestJS, PostgreSQL, Prisma, Docker, and Nx.
* **DosNidos** — React Native / Expo mobile app for calm co-parenting coordination.
* **J414** — multilingual B2B landing site with production contact form and deployment work.

## Running locally

```bash
pnpm install
pnpm dev
```

Open:

```txt
http://localhost:3000
```

If port 3000 is busy, Next.js may start on another available port.

## Build

```bash
pnpm build
```

## Exporting the CV as PDF

Run the development server and open:

```txt
http://localhost:3000/cv
```

Then use the **Save as PDF** button or the browser print dialog.

Recommended print settings:

```txt
Paper: A4
Orientation: Portrait
Headers and footers: disabled
Background graphics: enabled
```

## Project structure

```txt
src/app/page.tsx          Main portfolio page
src/app/cv/page.tsx       Print-friendly CV page
src/app/globals.css       Global styling and print styles
src/data/profile.ts       Profile, projects, skills, and experience data
```

## Notes

The site is intentionally minimal: no CMS, no backend, no animations, and no unnecessary dependencies. The goal is clarity, fast iteration, and a professional presentation of real software work.
