import React from 'react';
import { Container, Flex, Box } from '@modulz/radix';
const HomepageHero = require('../../public/home/blair3satlogo.png');

export const LegacyComposerHero = () => (
  <Box pt={9} role="presentation">
    <Box pb={6} sx={{ position: 'relative' }}>
      <Container size={2} sx={{ maxWidth: '600px', px: 0 }}>
        <img
          src={HomepageHero}
          alt='blair3sat logo'
          style={{
            maxWidth: '100%',
            width: '100%',
            filter: 'drop-shadow(0px 0px 20px hsla(208, 29%, 12%, 0.42))',
            borderRadius: '7px',
            verticalAlign: 'middle',
          }}
        />
      </Container>

      <Flex sx={{ position: 'absolute', top: -3, left: 0, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            boxShadow:
              '0 0 0 80px white, 0 0 0 81px hsl(208, 100%, 90%), 0 0 0 160px hsl(208, 100%, 98%), 0 0 0 161px hsl(208, 100%, 92%), 0 0 0 240px white, 0 0 0 241px hsl(208, 100%, 92%), 0 0 0 320px hsl(208, 100%, 99%), 0 0 0 321px hsl(208, 100%, 94%), 0 0 0 400px white, 0 0 0 401px hsl(208, 100%, 94%), 0 0 0 480px hsl(208, 100%, 99%), 0 0 0 481px hsl(208, 100%, 96%), 0 0 0 560px white, 0 0 0 561px hsl(208, 100%, 96%), 0 0 0 640px hsl(208, 100%, 99%), 0 0 0 641px hsl(208, 100%, 96%), 0 0 0 720px white, 0 0 0 721px hsl(208, 100%, 96%)',
            borderRadius: '50%',
            zIndex: '-1',
            width: 100,
            height: 100,
            opacity: '75%',
          }}
        >
        </Box>
      </Flex>
    </Box>
  </Box>
);