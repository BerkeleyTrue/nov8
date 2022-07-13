import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors, semanticTokenColors } from './theme/colors';

const fonts = {
  mono: `'Fira Code', ui-monospace, SFMono-Regular`,
  sans: `'Fira code', ui-sans-serif, system-ui`,
  serif: `'Fira Code', ui-serfi, Georgia`,
  body: `'Fira Code', ui-serif, SFMono-Regular`,
};

export const theme: ThemeConfig = extendTheme({
  components: {},
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  colors,
  semanticTokens: {
    colors: semanticTokenColors,
  },
  fonts,
  breakpoints: {
    sm: '22em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
