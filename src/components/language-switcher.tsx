'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  localeLabels,
  localeNames,
  locales,
  type Locale,
} from '@/i18n/config';

type LanguageSwitcherProps = {
  currentLocale: Locale;
  page: 'home' | 'cv';
};

function hrefForLocale(locale: Locale, page: LanguageSwitcherProps['page']) {
  return page === 'cv' ? `/${locale}/cv` : `/${locale}`;
}

function rememberLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LanguageSwitcher({
  currentLocale,
  page,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="languageSwitcher" data-open={isOpen}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Change language"
        className="languageTrigger"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        {localeLabels[currentLocale]}
      </button>

      <div className="languageMenu" role="menu">
        {locales.map((locale) => (
          <Link
            aria-current={locale === currentLocale ? 'true' : undefined}
            href={hrefForLocale(locale, page)}
            key={locale}
            role="menuitem"
            onClick={() => {
              rememberLocale(locale);
              setIsOpen(false);
            }}
          >
            <span className="languageCode">{localeLabels[locale]}</span>
            <span className="languageName">{localeNames[locale]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
