import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { colors } from './colors';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
  control: {
    padding: 2,
    borderRadius: 2,
    bg: colors.whiteAlpha[100],
    borderColor: 'none',
    _active: {
      bg: mode(colors.primary[500], colors.primary[500])(props),
    },
    _checked: {
      bg: mode(colors.primary[500], colors.primary[500])(props),
      borderColor: colors.primary[500],
    },
  },
  icon: {
    color: colors.whiteAlpha[100],
  },
  container: {
    backgroundColor: colors.gray[100],
    width: 400,
    height: 55,
    borderRadius: 5,
    paddingLeft: 5,
    _hover: {
      bg: colors.primary[300],
    },
  },
  label: {
    paddingLeft: 4,
    fontWeight: 700,
    fontSize: '50px',
    color: colors.gray[800],
  },
}));

// Defining a custom variant
const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
  }),
});

const variants = {
  circular: variantCircular,
};

const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 14,
    }),
    label: defineStyle({
      fontSize: '2xl',
      marginLeft: 6,
    }),
  }),
};

const checkboxOverrides = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});

export default checkboxOverrides;
