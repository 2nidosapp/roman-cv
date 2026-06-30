export const locales = ['en', 'es', 'ca'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  ca: 'CA',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
