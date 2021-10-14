import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Grid, Card, CardLink } from '@modulz/radix';
import { BetaAccess } from '../../components/ContactFooter';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const JoinUs = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Join Us"
        description="Help us launch an ionospheric research CubeSat."
      />

      <Container size={1} mt={6} sx={{ maxWidth: 715 }}>
        <Text as="h1" size={9} mb={[5, 6]} sx={{ lineHeight: 5, fontWeight: 500 }}>
          Help us launch an ionospheric research CubeSat.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          blair3sat is an entirely student-run cubesat team at Montgomery Blair High School.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          We're developing a nanosatellite that will measure electron density in a special layer of the atmosphere called the ionosphere.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          The electron density data our CubeSat produces will help improve weather prediction models and make communications more reliable.
        </Text>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Our values
        </Heading>
      </Container>

      <Container size={2} mt={8}>
        <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
          <Box>
            <Heading size={1} mb={1}>
              Integrity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              We always strive to act with uncompromising honesty and integrity in everything we do.
              We build trust through responsible actions and honest relationships.

            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Diversity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              We're committed to building an inclusive company. We're serious about creating an environment where
              everyone feels welcome and appreciated.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Autonomy
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Your ideas and opinions will be heard. You will have the freedom to lead projects. We want you to feel
              invested in your work and proud of it.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Curiosity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Ask questions. Experiment with new ideas and tech. Reach out to customers and learn about their workflows.
              Be curious.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Perks & benefits
        </Heading>
      </Container>

      <Container size={2} mt={8}>
        <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
          <Box>
            <Heading size={1} mb={1}>
              Learn new skills
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              We provide you with opportunities to develop your technical skills.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Improve your communication
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              You will learn how to operate & communicate in a profession enviroment.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Grow your network
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              You will make lots of connections with people that can provide very good opportunities.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Attend conferences
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              Attending conferences is fun and you learn a lot.  It's also great for your resume.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Leadership opportunities
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              As you become more aquainted with the mission, you will start leading projects.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Make new friends
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              We're a very close team and you will make some amazing friends at blair3sat.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Apply your knowledge
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              You will apply all of the theoretical knowledge you've been learning in school.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Gain experience in the space industry
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              Space is one of the hottest industries and the skills you learn here will help you in your career.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2}>
        <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center' }}>
          Open roles
        </Heading>
        <Text as="p" size={4} mt={6} sx={{ lineHeight: 2, textAlign: 'center' }}>
          We have 0 roles open currently.  Please check back in a few weeks.
        </Text>
      </Container>
    </Box>
  );
};

export default JoinUs;
