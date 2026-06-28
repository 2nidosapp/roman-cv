import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roman Kostyuchenko · Software Engineer',
  description:
    'Product-minded software engineer building TypeScript, React, Next.js, React Native, NestJS, and PostgreSQL product systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
