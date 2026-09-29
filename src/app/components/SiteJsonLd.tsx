import { buildSiteEntityJsonLd } from '@/lib/site-entity';

export default function SiteJsonLd() {
  const jsonLd = buildSiteEntityJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
