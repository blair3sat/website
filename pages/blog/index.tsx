import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
import { blogPosts } from '../../utils/blogPosts';
import { FrontMatter } from '../../types';
import { BlogCard } from '../../components/BlogCard';
import { BlogCardGrid } from '../../components/BlogCardGrid';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Blog = () => {
  return (
    <Box mt={6} mb={8}>
      <Container size={1}>
        <TitleAndMetaTags title="Blair3sat Blog" description="Updates and announcements from the blair3sat team." />

        <Heading size={5} mb={4} sx={{ textAlign: 'center' }}>
          Blog
        </Heading>

        <Text as="h2" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          Updates From The Blair3sat Team
        </Text>
      </Container>

      <Container size={2} my={8} sx={{ maxWidth: '1090px' }}>
        <BlogCardGrid>
          {blogPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <BlogCard frontMatter={frontMatter} />
            </Box>
          ))}
        </BlogCardGrid>
      </Container>
    </Box>
  );
};

export default Blog;
