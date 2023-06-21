import { colors } from './colors';

const ROOT_FONT_SIZE = 16;

const REM_PRECISION = 3;
const pxToRem = (pxValue: number) =>
  `${(pxValue / ROOT_FONT_SIZE).toFixed(REM_PRECISION)}rem`;

const fontSizes = {
  '2xs': pxToRem(10), // label
  xs: pxToRem(12), // paragraphSmallest, tableLabel
  sm: pxToRem(13), // navigation, table small, table label
  md: pxToRem(14), // h4, button, paragraph small
  lg: pxToRem(15), // table
  xl: pxToRem(ROOT_FONT_SIZE), // h3, paragraph
  // '2xl' is vacant
  '3xl': pxToRem(20), // h2
  // '4xl' is vacant
  '5xl': pxToRem(28), // h1, numbers
  // '6xl' - '9xl' are vacant
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: pxToRem(15.6), // navigation, table small
  short: pxToRem(19.2), // h3
  base: pxToRem(24), // h2, paragraph
  tall: pxToRem(26), // table
  taller: pxToRem(33.6), // h1, numbers
  // '3' is vacant
  '4': pxToRem(12), // label
  '5': pxToRem(14), // h4, table label
  // '6' is vacant
  '7': pxToRem(16.8), // button
  '8': pxToRem(18),
  '9': pxToRem(21), // paragraph small
  '10': '2.5rem',
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

const typography = {
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Plus Jakarta Sans, serif',
  },
  fontSizes,
  lineHeights,
  letterSpacings,
};

const sidebarLinkStyle = {
  borderRadius: '8px',
  pt: '11px',
  pb: '13px',
  px: '12px',
};

const typographyOverrides = {
  Heading: {
    variants: {
      h1: {
        fontSize: '5xl',
        fontWeight: 600,
        lineHeight: lineHeights.taller,
      },
      h2: {
        fontSize: '3xl',
        fontWeight: 500,
        lineHeight: lineHeights.base,
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 600,
        lineHeight: lineHeights.shorter,
      },
      h4: {
        fontSize: 'md',
        fontWeight: 600,
        lineHeight: lineHeights['5'],
      },
    },
  },
  Text: {
    variants: {
      button: {
        fontSize: 'md',
        fontWeight: 500,
        lineHeight: lineHeights.shorter,
        cursor: 'pointer',
      },
      label: {
        fontSize: '2xs',
        fontWeight: 600,
        lineHeight: lineHeights['4'],
        letterSpacing: '2px',
        textTransform: 'uppercase',
      },
      paragraph: {
        fontSize: 'xl',
        fontWeight: 400,
        lineHeight: lineHeights.base,
      },
      paragraphSmall: {
        fontSize: 'md',
        fontWeight: 400,
        lineHeight: lineHeights['8'],
      },
      paragraphSmallest: {
        fontSize: 'xs',
        fontWeight: 400,
        lineHeight: lineHeights['8'],
      },
      navigation: {
        fontSize: 'sm',
        fontWeight: 500,
        lineHeight: lineHeights.shorter,
      },
      numbers: {
        fontSize: '5xl',
        fontWeight: 600,
        lineHeight: lineHeights.taller,
      },
      table: {
        fontSize: 'lg',
        fontWeight: 600,
        lineHeight: lineHeights.tall,
      },
      tableSmall: {
        fontSize: 'sm',
        fontWeight: 700,
        lineHeight: lineHeights.shorter,
      },
      tableLabel: {
        fontSize: 'xs',
        fontWeight: 500,
        lineHeight: lineHeights[5],
        textTransform: 'uppercase',
      },
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
    variants: {
      sidebar: {
        ...sidebarLinkStyle,
        color: colors.gray['400'],
        _hover: {
          color: colors.gray['600'],
        },
      },
      sidebarSolid: {
        ...sidebarLinkStyle,
        bgColor: colors.blue['500'],
        width: `${200 - 32}px`,
        height: '100%',
        display: 'block',
        marginTop: '-10px',
      },
    },
  },
};

export default typography;
export { typographyOverrides };
