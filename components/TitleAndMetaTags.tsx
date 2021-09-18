import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
  poster?: string;
};

export default function TitleAndMetaTags({
  url = 'https://blair3sat.org',
  pathname,
  title = 'blair3sat',
  description = 'An entirely student-run team developing an Ionospheric research satellite at Montgomery Blair High School.',
  poster,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = `${url}/social/${poster || 'default.png'}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@blair3sat" />
      <meta name="twitter:card" content="summary" />
      {poster && <meta name="twitter:card" content="summary_large_image" />}
    </Head>
  );
}
