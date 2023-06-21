import React from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { primaryTheme } from './ions/theme';
import App from './App';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={primaryTheme}>
      <ColorModeScript
        initialColorMode={primaryTheme.config.initialColorMode}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
