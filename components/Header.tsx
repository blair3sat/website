import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Pipe,
  Popover,
  ChromelessButton,
  Badge,
  Heading,
  Divider,
  VisuallyHidden,
} from '@modulz/radix';
import { PlusIcon } from '@modulz/radix-icons';

export const Header = () => {
  const [isMissionOpen, setIsMissionOpen] = React.useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);
  const missionRef = React.useRef<HTMLButtonElement>(null);
  const CompanyRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size={2} sx={{ maxWidth: 'none' }}>
      <Flex py={4} sx={{ alignItems: 'center' }}>
        <Text size={4} sx={{ color: 'gray700', fontWeight: '500' }} ml={[1,1]}>
          <NextLink href="/" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              <VisuallyHidden>blair3sat homepage</VisuallyHidden>
              blair3sat
            </Link>
          </NextLink>
        </Text>
        <Flex ml="auto" sx={{ flexDirection: ['row', 'row'], alignItems: ['center', 'center'] }}>
          <ChromelessButton
            ref={missionRef}
            onClick={() => setIsMissionOpen(true)}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              bg: isMissionOpen ? 'gray200' : undefined,
              ':hover': { bg: 'gray200' },
            }}
          >
            <Text size={3} sx={{ color: 'gray700' }}>
              <Flex as="span" sx={{ alignItems: 'center' }}>
                Mission
                <Box as="span" ml={1}>
                  <PlusIcon />
                </Box>
              </Flex>
            </Text>
          </ChromelessButton>

          <Popover targetRef={missionRef} isOpen={isMissionOpen} onClose={() => setIsMissionOpen(false)}>
            <Box py={1} sx={{ width: 300 }}>
              <NextLink href="/publications/rf-mission.pdf" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Radio Frequency</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Monitoring the behavior of radio frequency waves in the ionosphere.                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/publications/optical-mission.pdf" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Optical</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Measuring airglow to determine electron density in the ionosphere.
                  </Text>
                </Box>
              </NextLink>
              <Divider my={1} />
              <NextLink href="/publications" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Publications</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    View our latest articles and presentations.
                  </Text>
                </Box>
              </NextLink>
            </Box>
          </Popover>
          
          <ChromelessButton
            ref={CompanyRef}
            onClick={() => setIsCompanyOpen(true)}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              bg: isCompanyOpen ? 'gray200' : undefined,
              ':hover': { bg: 'gray200' },
            }}
            ml={[1, 2]}
          >
            <Text size={3} sx={{ color: 'gray700' }}>
              <Flex as="span" sx={{ alignItems: 'center' }}>
                Company
                <Box as="span" ml={1}>
                  <PlusIcon />
                </Box>
              </Flex>
            </Text>
          </ChromelessButton>

          <Popover targetRef={CompanyRef} isOpen={isCompanyOpen} onClose={() => setIsCompanyOpen(false)}>
            <Box py={1} sx={{ width: 300 }}>
            <NextLink href="/about" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>About</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    The history and members of blair3sat.
                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Blog</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Updates from the blair3sat team.
                  </Text>
                </Box>
              </NextLink>
              <Divider my={1} />
              <NextLink href="/join-us" passHref>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Join Us</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    How you can help contribute to our mission.
                  </Text>
                </Box>
              </NextLink>
            </Box>
          </Popover>

          <Pipe mx={[2, 2]} />

          <Text size={3} sx={{ color: 'gray700' }} ml={[1,1]}>
            <Link href="mailto:contact@blair3sat.org" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Contact
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
