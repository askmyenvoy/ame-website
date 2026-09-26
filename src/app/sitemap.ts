import type { MetadataRoute } from 'next';
import { referenceArticleSitemapEntries } from '@/lib/reference-article';
import { referenceArticle as bookingLinksAndMeetingCoordinationArticle } from './booking-links-and-meeting-coordination/reference-article.config';
import { referenceArticle as developerArticle } from './developer/reference-article.config';
import { referenceArticle as costOfMeetingCoordinationArticle } from './cost-of-meeting-coordination/reference-article.config';
import { referenceArticle as meetingCoordinationArticle } from './meeting-coordination/reference-article.config';
import { referenceArticle as coordinationReunionsArticle } from './fr/coordination-reunions/reference-article.config';
import { referenceArticle as coutCoordinationReunionsArticle } from './fr/cout-coordination-reunions/reference-article.config';

const BASE_URL = 'https://askmyenvoy.com';

const referenceArticlePages = referenceArticleSitemapEntries([
  meetingCoordinationArticle,
  costOfMeetingCoordinationArticle,
  bookingLinksAndMeetingCoordinationArticle,
  developerArticle,
  coordinationReunionsArticle,
  coutCoordinationReunionsArticle,
]);

const staticPages: Array<{ path: string; lastModified: string }> = [
  { path: '/', lastModified: '2026-09-23' },
  { path: '/how-it-works', lastModified: '2026-09-03' },
  { path: '/trust-and-control', lastModified: '2026-09-03' },
  { path: '/pricing', lastModified: '2026-09-16' },
  { path: '/getting-started', lastModified: '2026-09-03' },
  { path: '/about', lastModified: '2026-09-03' },
  { path: '/milestones', lastModified: '2026-09-03' },
  { path: '/privacy', lastModified: '2026-08-30' },
  { path: '/terms', lastModified: '2026-08-30' },
];

const pages = [...staticPages.slice(0, 7), ...referenceArticlePages, ...staticPages.slice(7)];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
  }));
}
