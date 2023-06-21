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
      },
    },
  },
});
