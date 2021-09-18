// @ts-ignore
import { frontMatter } from '../pages/publications/**/index.mdx';
import { FrontMatter } from '../types';

export const publicationPosts: FrontMatter[] = frontMatter.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);