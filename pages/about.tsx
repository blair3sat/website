import React from 'react';
import { Container, Box, Heading, Link, Text, Divider, Flex, Grid, AspectRatio } from '@modulz/radix';
import { BetaAccess } from '../components/ContactFooter';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { authors } from '../data/authors';

const About = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="About"
        description="Blair3sat an entirely student-run cubesat team at Montgomery Blair High School."/>

      <Container size={2} mt={6} mb={[5, 7]}>
        <Text as="h2" size={8} mb={[5, 7]} px={[0, 8]} sx={{ lineHeight: 4 }}>
          Blair3sat an entirely student-run cubesat team at Montgomery Blair High School.
        </Text>
      </Container>

      <Container size={1}>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
          Our nanosatellite will measure the electron density of the ionosphere to map how radio frequency (RF) waves are affected.
        </Text>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
          The importance of the ionosphere comes from its wide utilization in long-distance communications, specifically in over the horizon (OTH) radars.
        </Text>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
          Gathering detailed information about the ionosphere helps account for its effects on RF signals, making communication cheaper and more reliable.
        </Text>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
          Mapping the charge density of the ionosphere has been a longstanding scientific objective, and our team’s unique approach is designed to pave the way for future research.
        </Text>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2}>
        <Heading as="h3" size={4} mb={9} sx={{ lineHeight: 4, textAlign: 'center' }}>
          Our journey so far
        </Heading>

        <Flex>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                December '17
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                December '18
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                August '19
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                October '20
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                March '22
              </Text>
            </Box>
          </Box>
          <Box px={6} aria-hidden>
            <Box sx={{ width: '1px', bg: 'gray300' }}>
              <Flex
                mb={8}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
                mb={8}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
                mb={8}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
                mb={8}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'gray300',
                  bg: 'white',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ lineHeight: 2 }}>
                Founded blair3sat
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ lineHeight: 2 }}>
                Finished 1st gen CAD design
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ lineHeight: 2 }}>
                Presented at the SmallSat conference
              </Text>
            </Box>
            <Box mb={8}>
              <Text as="p" size={4} sx={{ lineHeight: 2 }}>
                Published optical paper in SPIE proceedings
              </Text>
            </Box>
            <Box>
              <Text as="p" size={4} sx={{ lineHeight: 2 }}>
                Finalized mission design
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Team
        </Heading>

        <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
          Who we are and what we do.
        </Text>
      </Container>

      <Container size={3}>
        <Grid sx={{ gap: [5, 7], gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'] }}>
          {Object.entries(authors).map(([key, author]) => (
            <Box>
              <AspectRatio ratio="4:3">
                <Box
                  sx={{
                    height: '100%',
                    backgroundImage: `url(${author.mug})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1)',
                  }}
                />
              </AspectRatio>
              <Box mt={4} px={[0, 2]}>
                <Text as="p" size={4} weight="medium" mb={1}>
                  {author.name}
                </Text>
                <Flex sx={{ alignItems: 'center' }} mt={2}>
                  <Link
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${author.name}'s twitter account`}
                  >
                    <Text size={2}>Twitter</Text>
                    <Box as="span" ml={1} sx={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M5.5 3.5L11.5 3.5L11.5 9.5"
                          stroke="hsl(208,12%,46%)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 11.5L11.5 3.5"
                          stroke="hsl(208,12%,46%)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Link>
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <BetaAccess />
    </Box>
  );
};

export default About;

const TickIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
    <path d="M12.5 3.5L6.5 11.5L2.5 8.5" stroke="hsl(208,12%,46%)" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
