import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { CardLink, Heading, Text, Flex, Avatar, Box } from '@modulz/radix';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';

export const BlogCard = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <NextLink href={`/${frontMatter.id}`} passHref>
      <CardLink
        sx={{
          bg: 'transparent',
          userSelect: 'none',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading as="h4" size={1} sx={{ fontWeight: 500 }}>
          {frontMatter.title}
        </Heading>

        <Text as="p" size={3} mt={2} sx={{ color: 'gray700' }}>
          {frontMatter.summary}
        </Text>

        <Flex pt={4} mt="auto" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Flex sx={{ alignItems: 'center' }}>
            <Avatar src={authors[frontMatter.by].avatar} alt={`Photo of ${authors[frontMatter.by].name}`} />
            <Text as="p" size={2} ml={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {authors[frontMatter.by].name}
            </Text>
          </Flex>
          <Box>
            <Text as="p" size={2} ml={2} sx={{ color: 'gray700' }}>
              {format(parseISO(frontMatter.publishedAt), 'MMMM ‘yy')}
            </Text>
          </Box>
        </Flex>
      </CardLink>
    </NextLink>
  );
};
