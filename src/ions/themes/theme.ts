import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import buttonOverrides from './buttonOverrides';
import checkboxOverrides from './checkboxOverrides';
import { colors } from './colors';
import inputOverrides from './inputOverrides';
import typography from './typography';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

export const primaryTheme = extendTheme({
  ...typography,
  colors,
  components: {
    Button: buttonOverrides,
    Checkbox: checkboxOverrides,
    Input: inputOverrides,
  },
  config,
  styles: {
    global: {
      'html, body, #root': {
        h: '100vh',
        minH: '100vh',
        '--chakra-ui-focus-ring-color': '#635Fc7',
      },
    },
  },
  shadows: {
    // This is also possible. Not sure I like inject this into
    // an existing theme section.
    // It creates a CSS variable named --chakra-shadows-focus-ring-color
    // 'focus-ring-color': '#635Fc7',
    outline: '0 0 0 3px var(--chakra-ui-focus-ring-color)',
  },
});
