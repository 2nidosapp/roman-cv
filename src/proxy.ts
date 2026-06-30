import { type NextRequest, NextResponse } from 'next/server';

import { defaultLocale, isLocale, type Locale } from '@/i18n/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function getLocaleFromCookie(request: NextRequest): Locale | null {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return null;
}

function getLocaleFromAcceptLanguage(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language');

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const languages = acceptLanguage
    .split(',')
    .map((item) => item.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean);

  for (const language of languages) {
    const baseLanguage = language.split('-')[0];

    if (baseLanguage && isLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return defaultLocale;
}

function getPreferredLocale(request: NextRequest): Locale {
  return getLocaleFromCookie(request) ?? getLocaleFromAcceptLanguage(request);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== '/' && pathname !== '/cv') {
    return NextResponse.next();
  }

  const preferredLocale = getPreferredLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = pathname === '/cv' ? `/${preferredLocale}/cv` : `/${preferredLocale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
