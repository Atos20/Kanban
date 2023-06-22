import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { colors } from './colors';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
  field: {
    border: '3px solid',
    width: 400,
    minW: 350,
    maxW: 400,
    minWidth: 155,
    outline: 0,
    appearance: 'none',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _placeholder: {
      color: mode(colors.gray[300], colors.gray[400])(props),
    },
    _focusVisible: {
      borderColor: 'none',
      boxShadow: 'none',
    },
    _focus: {
      borderColor: 'var(--chakra-ui-focus-ring-color)',
      boxShadow: '0 0 0 2px var(--chakra-ui-focus-ring-color)',
    },
  },
}));

const rgl = defineStyle({
  fontSize: 'lg',
  px: '4',
  h: 50,
  borderRadius: 5,
});

const sizes = {
  rgl: definePartsStyle({ field: rgl, addon: rgl }),
};

const inputOverrides = defineMultiStyleConfig({
  baseStyle,
  sizes,
});

export default inputOverrides;
