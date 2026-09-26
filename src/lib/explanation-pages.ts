const BASE_URL = 'https://askmyenvoy.com';

export const explanationPages = {
  meetingCoordination: {
    en: {
      path: '/meeting-coordination',
      url: `${BASE_URL}/meeting-coordination`,
    },
    fr: {
      path: '/fr/coordination-reunions',
      url: `${BASE_URL}/fr/coordination-reunions`,
    },
  },
  costOfMeetingCoordination: {
    en: {
      path: '/cost-of-meeting-coordination',
      url: `${BASE_URL}/cost-of-meeting-coordination`,
    },
    fr: {
      path: '/fr/cout-coordination-reunions',
      url: `${BASE_URL}/fr/cout-coordination-reunions`,
    },
  },
  bookingLinksAndMeetingCoordination: {
    en: {
      path: '/booking-links-and-meeting-coordination',
      url: `${BASE_URL}/booking-links-and-meeting-coordination`,
    },
  },
  developer: {
    en: {
      path: '/developer',
      url: `${BASE_URL}/developer`,
    },
  },
} as const;

export type BilingualExplanationPageKey = 'meetingCoordination' | 'costOfMeetingCoordination';

export const explanationPagePaths = [
  explanationPages.meetingCoordination.en.path,
  explanationPages.meetingCoordination.fr.path,
  explanationPages.costOfMeetingCoordination.en.path,
  explanationPages.costOfMeetingCoordination.fr.path,
  explanationPages.bookingLinksAndMeetingCoordination.en.path,
  explanationPages.developer.en.path,
] as const;

export function buildExplanationPageAlternates(
  page: BilingualExplanationPageKey,
  locale: 'en' | 'fr',
) {
  const urls = explanationPages[page];

  return {
    canonical: locale === 'en' ? urls.en.url : urls.fr.url,
    languages: {
      en: urls.en.url,
      fr: urls.fr.url,
      'x-default': urls.en.url,
    },
  };
}

export function buildExplanationPageOpenGraph(
  locale: 'en' | 'fr',
  title: string,
  description: string,
) {
  return {
    title: `${title} | Ask My Envoy`,
    description,
    locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
  };
}
