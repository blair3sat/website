import React from 'react';
import { ChromelessButton, ChromelessButtonProps } from '@modulz/radix';

type ButtonProps = ChromelessButtonProps & React.ComponentPropsWithRef<'a'> & { as?: any };

export const MarketingButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => (
  <ChromelessButton
    ref={forwardedRef}
    {...props}
    sx={{
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      transition: 'all 100ms ease',
      fontSize: 2,
      height: 6,
      minWidth: 6,
      paddingX: 3,
      backgroundColor: 'transparent',
      color: 'blue600',
      willChange: 'transform',
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '-1',
        backgroundColor: 'white',
        transition: 'all 50ms ease',
        boxShadow: (theme) => `inset 0 0 0 1px ${theme.colors.blue400}`,
      },
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '6px',
        left: '6px',
        zIndex: '-2',
        pointerEvents: 'none',
        willChange: 'transform',
        backgroundImage: (theme) => `repeating-linear-gradient(
			-45deg,
			${theme.colors.blue600},
			${theme.colors.blue600} 1px,
			transparent 1px,
			transparent 6px
		)`,
      },
      '&:hover::before, &:active::before, &:focus::before': {
        boxShadow: (theme) => `inset 0 0 0 1px ${theme.colors.blue600}`,
      },
      '&:active': {
        transform: 'translate(1px, 1px)',
      },
      '&:active::after': {
        transform: 'translate(-6px, -6px)',
      },
      ...props.sx,
    }}
  />
));
