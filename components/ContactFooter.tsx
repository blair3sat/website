import React from 'react';
import { Container, Text, Box, Flex, Heading } from '@modulz/radix';
import { MarketingButton } from './FancyButton';

export const BetaAccess = () => {
  return (
    <Box my={8}>
      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h4" size={4} mb={3}>
          Send us a message
        </Heading>

        <Text as="p" size={5} mb={6} sx={{ color: 'gray700', lineHeight: 3 }}>
          We're always looking for new partnerships and we're happy to answer any questions.
        </Text>

        <MarketingButton as="a" href="mailto:contact@blair3sat.org" target="_blank" rel="noopener">
          Contact Us
          <Box as="span" ml={2} aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>
      </Container>
    </Box>
  );
};
