import React from 'react';
import { Container, Box, Text } from '@modulz/radix';

export const LegacyUseCases = () => (
  <Box>
    <Container size={2} mt={8} mb={[5, 7]}>
      <Text as="h3" size={8} mb={[5, 7]} px={[0, 8]} sx={{ lineHeight: 4 }}>
        Blair3sat is an entirely student-run cubesat team at Montgomery Blair High School.
      </Text>
    </Container>

    <Container size={1}>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Our nanosatellite will measure the electron density of the ionosphere to map how radio frequency 
        (RF) waves are affected. The importance of the ionosphere comes from its wide utilization in 
        long-distance communications, specifically in over the horizon (OTH) radars. 
      </Text>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Gathering detailed information about the ionosphere helps account for its effects on RF signals, 
        making communication cheaper and more reliable. Mapping the charge density of the ionosphere has 
        been a longstanding scientific objective, and our team’s unique approach is designed to pave the 
        way for future research.
      </Text>
    </Container>
  </Box>
);
