import { colors } from './colors';

const buttonOverrides = {
  Button: {
    baseStyle: {
      color: colors.whiteAlpha[100],
      borderRadius: '2rem',
      fontWeight: 800,
      width: 250,
      margin: 5,
    },
    sizes: {
      xs: {
        height: 29,
        minW: 155,
        fontSize: 'xsm',
      },
      sm: {
        minW: 155,
        fontSize: 'sm',
        px: 4,
        py: 3,
        height: '40px',
      },
      md: {
        minW: 160,
        px: 6,
        py: 4,
        height: '48px',
      },
    },
    variants: {
      solid: {
        color: 'white',
        minW: 167,
        px: 5,
      },
      outline: {
        px: 5,
      },
      primary: {
        color: 'white',
        bg: colors.primary[500],
        fontSize: '14px',
        _hover: {
          bg: colors.primary[400],
        },
      },
      primarySmall: {
        color: 'white',
        bg: colors.primary[500],
        fontSize: '13px',
        _hover: {
          bg: colors.primary[400],
        },
      },
      secondary: {
        color: colors.primary[500],
        bg: colors.gray[100],
        fontSize: '13px',
        _hover: {
          bg: colors.primary[300],
        },
      },
      destructive: {
        bg: colors.red[500],
        fontSize: '13px',
        _hover: {
          bg: colors.red[200],
        },
      },
      dark: {
        color: 'white',
        bg: colors.blue[800],
        fontSize: '14px',
      },
      success: {
        color: 'white',
        bg: colors.green[500],
        fontSize: '14px',
      },
    },
    defaultProps: {
      size: 'sm',
      variant: 'outline',
    },
  },
};

export default buttonOverrides;
