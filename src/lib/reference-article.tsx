import type { Metadata } from 'next';
import {
  buildExplanationPageAlternates,
  type BilingualExplanationPageKey,
} from '@/lib/explanation-pages';
import {
  ORGANIZATION_ID,
  ORGANIZATION_NAME,
  SITE_URL,
} from '@/lib/site-entity';

const DEFAULT_OG_IMAGE = '/og-card.png';

export type ReferenceArticleLanguage = 'en' | 'fr';

export type ReferenceArticleConfig = {
  metaTitle: string;
  headline: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
  language: ReferenceArticleLanguage;
  image?: string;
  imageAlt?: string;
  hreflang?: {
    page: BilingualExplanationPageKey;
    locale: ReferenceArticleLanguage;
  };
};

function absoluteImageUrl(imagePath: string): string {
  return imagePath.startsWith('http') ? imagePath : `${SITE_URL}${imagePath}`;
}

function openGraphLocale(language: ReferenceArticleLanguage): string {
  return language === 'fr' ? 'fr_FR' : 'en_US';
}

function schemaLanguage(language: ReferenceArticleLanguage): string {
  return language === 'fr' ? 'fr-FR' : 'en-US';
}

export function buildReferenceArticleMetadata(
  config: ReferenceArticleConfig,
): Metadata {
  const imagePath = config.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = config.imageAlt ?? `${ORGANIZATION_NAME} - ${config.metaTitle}`;
  const ogLocale = openGraphLocale(config.language);

  const alternates = config.hreflang
    ? buildExplanationPageAlternates(config.hreflang.page, config.hreflang.locale)
    : { canonical: config.canonical };

  return {
    title: config.metaTitle,
    description: config.description,
    alternates,
    openGraph: {
      type: 'article',
      url: config.canonical,
      title: config.metaTitle,
      description: config.description,
      locale: ogLocale,
      ...(config.hreflang
        ? { alternateLocale: [config.hreflang.locale === 'fr' ? 'en_US' : 'fr_FR'] }
        : {}),
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metaTitle,
      description: config.description,
      images: [imagePath],
    },
    robots: 'index, follow',
  };
}

export function buildReferenceArticleJsonLd(config: ReferenceArticleConfig) {
  const imagePath = config.image ?? DEFAULT_OG_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    inLanguage: schemaLanguage(config.language),
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.canonical,
    },
    image: absoluteImageUrl(imagePath),
  };
}

export type ReferenceArticleSitemapEntry = {
  path: string;
  lastModified: string;
};

/** Derives sitemap lastmod from a reference-article page's own config. */
export function referenceArticleSitemapEntry(
  article: Pick<ReferenceArticleConfig, 'canonical' | 'dateModified'>,
): ReferenceArticleSitemapEntry {
  return {
    path: new URL(article.canonical).pathname,
    lastModified: article.dateModified,
  };
}

export function referenceArticleSitemapEntries(
  articles: Array<Pick<ReferenceArticleConfig, 'canonical' | 'dateModified'>>,
): ReferenceArticleSitemapEntry[] {
  return articles.map(referenceArticleSitemapEntry);
}

type ReferenceArticleJsonLdProps = {
  config: ReferenceArticleConfig;
};

export function ReferenceArticleJsonLd({ config }: ReferenceArticleJsonLdProps) {
  const jsonLd = buildReferenceArticleJsonLd(config);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
