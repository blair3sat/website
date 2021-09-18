import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Flex, Link } from '@modulz/radix';
import { publicationPosts } from '../utils/publicationPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { PubCard } from '../components/PubCard';
import { PubCardGrid } from '../components/PubCardGrid';
import { BetaAccess } from '../components/ContactFooter';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/FancyButton';
import { LegacyComposerHero } from '../components/HeroIllustration/HeroImage';
import { LegacyUseCases } from '../components/HeroIllustration/HomeMission';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container size={2} mt={6} sx={{ textAlign: 'center' }}>
        <Heading size={5} mb={3}>
          blair3sat
        </Heading>
      </Container>

      <Container size={2} sx={{ textAlign: 'center', px: [6, '120px'] }}>
        <Heading as="h2" size={2} mb={6} sx={{ color: 'gray700', lineHeight: '3', fontWeight: 400 }}>
          An entirely student-run team developing an Ionospheric research satellite at Montgomery Blair High School.
        </Heading>
        <MarketingButton as="a" href="mailto:contact@blair3sat.org" target="_blank" rel="noopener">
          Contact Us
          <Box as="span" ml={2} aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>

        {/* <Box mt={3}>
          <Text as="p" size={2} sx={{ color: 'gray700', lineHeight: '1' }}>
            Registered 501(c)(3) Nonprofit
          </Text>
        </Box> */}
      </Container>

      <LegacyComposerHero />
      <LegacyUseCases />
      {/* <Divider size={2} my={8} mx="auto" /> */}
      {/* <LegacyWallOfLove /> */}

      {/* <HideInProd> */}
        <Divider size={2} my={8} mx="auto" />
        <Box my={8}>
          <Container size={2} sx={{ textAlign: 'center' }}>
            <Heading as="h3" size={4} mb={4}>
              Publications
            </Heading>

            <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
              View our latest articles and presentations.
            </Text>
          </Container>

          <Container size={2} sx={{ maxWidth: '1090px' }}>
            <PubCardGrid>
              {(publicationPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
                <Box key={frontMatter.title} sx={{ flex: 1 }}>
                  <PubCard frontMatter={frontMatter} />
                </Box>
              ))}
            </PubCardGrid>

            <Box mt={2}>
              <NextLink href="/publications" passHref>
                <Link>Browse all</Link>
              </NextLink>
            </Box>
          </Container>
        </Box>

        <Divider mx="auto" size={2} />
      {/* </HideInProd> */}

      <Box py={9}>
        <Container size={2} sx={{ textAlign: 'center' }}>
          <Heading as="h3" size={4} mb={4}>
            Blog
          </Heading>

          <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
          Updates from the blair3sat team.
          </Text>
        </Container>

        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <BlogCardGrid>
            {(blogPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
          </BlogCardGrid>

          <Box mt={2}>
            <NextLink href="/blog" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>
      <Divider mx="auto" size={2} />
      <BetaAccess />
    </Box>
  );
};

export default Home;
