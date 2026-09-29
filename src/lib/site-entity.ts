/** Canonical marketing site origin (apex, no www). */
export const SITE_URL = 'https://askmyenvoy.com';

export const ORGANIZATION_NAME = 'Ask My Envoy';

/** Typographic variants users search for; primary name stays in `name`. */
export const ORGANIZATION_ALTERNATE_NAMES = ['AskMyEnvoy'] as const;

/** Stable @id for Organization; referenced from Article JSON-LD and site graph. */
export const ORGANIZATION_ABOUT_URL = `${SITE_URL}/about`;
export const ORGANIZATION_ID = `${ORGANIZATION_ABOUT_URL}#organization`;

export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Square logo for Organization (Google rich-result guidelines). */
export const ORGANIZATION_LOGO_URL = `${SITE_URL}/logo/AME_logo_512x512.png`;

/**
 * Official profile URLs (LinkedIn, GitHub, etc.). Add entries when available;
 * omitted from JSON-LD when empty.
 */
export const ORGANIZATION_SAME_AS: string[] = [
  'https://www.linkedin.com/company/askmyenvoy/',
];

export function buildSiteEntityJsonLd(): Record<string, unknown> {
  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: ORGANIZATION_NAME,
    alternateName: [...ORGANIZATION_ALTERNATE_NAMES],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION_LOGO_URL,
    },
  };

  if (ORGANIZATION_SAME_AS.length > 0) {
    organization.sameAs = ORGANIZATION_SAME_AS;
  }

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: ORGANIZATION_NAME,
    alternateName: [...ORGANIZATION_ALTERNATE_NAMES],
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: ['en-US', 'fr-FR'],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  };
}
