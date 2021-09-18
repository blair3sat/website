import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
import { publicationPosts } from '../../utils/publicationPosts';
import { FrontMatter } from '../../types';
import { PubCard } from '../../components/PubCard';
import { PubCardGrid } from '../../components/PubCardGrid';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Publications = () => {
  return (
    <Box mt={6} mb={8}>
      <Container size={2}>
        <TitleAndMetaTags title="Blair3sat Publications" description="View our latest articles and presentations." />

        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Publications
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          View Our Latest Articles and Presentations
        </Text>
      </Container>

      <Container size={2} my={8} sx={{ maxWidth: '1090px' }}>
        <PubCardGrid>
          {publicationPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <PubCard frontMatter={frontMatter} />
            </Box>
          ))}
        </PubCardGrid>
      </Container>
    </Box>
  );
};

export default Publications;
