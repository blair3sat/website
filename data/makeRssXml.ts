import { FrontMatter } from '../types';
import { parseISO, format } from 'date-fns';

const baseUrl = 'https://blair3sat.org';

type XmlProps = { articleType: 'blog' | 'publication'; title: string; description: string; frontMatters: FrontMatter[] };

export const makeRssXml = ({ articleType, title, description, frontMatters }: XmlProps) => {
  const sortedFrontMatters = frontMatters
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .slice(0, 15);

  const rssItemsXml = makeItemsRss({ frontMatters: sortedFrontMatters });

  return `<?xml version="1.0" ?>
		<rss version="2.0">
			<channel>
					<title>${title}</title>
					<link>${baseUrl}/${articleType}</link>
					<description>${description}</description>
					<language>en</language>
					<lastBuildDate>${format(parseISO(frontMatters[0].publishedAt), 'MMMM dd, yyyy')}</lastBuildDate>
					${rssItemsXml}
			</channel>
		</rss>`;
};

type MakeItemsRssProps = { frontMatters: FrontMatter[] };

const makeItemsRss = ({ frontMatters }: MakeItemsRssProps) => {
  let rssItemsXml = '';

  frontMatters.forEach((frontMatter) => {
    rssItemsXml += `
			<item>
				<title>${frontMatter.title}</title>
				<link>${baseUrl}/${frontMatter.id}</link>
				<pubDate>${frontMatter.publishedAt}</pubDate>
				<description>${frontMatter.summary}</description>
			</item>
		`;
  });

  return rssItemsXml;
};
