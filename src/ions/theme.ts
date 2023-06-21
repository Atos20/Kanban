import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import buttonOverrides from './buttonOverrides';
import checkboxOverrides from './checkboxOverrides';
import { colors } from './colors';
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
