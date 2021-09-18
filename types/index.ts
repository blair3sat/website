export type FrontMatter = {
  layout?: string;
  title: string;
  publishedAt: string;
  summary?: string;
  by?: string;
  id?: string;
  relatedIds?: string[];
  poster?: string;
  readingTime?: { text: string; minutes: number; time: number; words: number };
  __resourcePath: string;
};
