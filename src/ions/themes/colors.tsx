const colors: Colors = {
  whiteAlpha: {
    0: 'rgba(255, 255, 255, 0)',
    100: '#FFFFFF',
  },
  primary: {
    300: '#cfcef1',
    400: '#A8A4FF',
    500: '#635Fc7',
  },
  gray: {
    50: '#F7F9FF',
    100: '#F4F7FD',
    200: '#E4EBFA',
    300: '#828FA3',
    400: '#3E3F4E',
    500: '#2B2C37',
    600: '#20212C',
    800: '#000112',
  },
  blue: {
    50: '#FDFDFF',
    100: '#E4EDF4',
    200: '#CEE2E9',
    400: '#61B3BF',
    500: '#5160E4',
    800: '#06163F',
  },
  red: {
    200: '#FF9898',
    300: '#EA5555',
    400: '#DB2328',
    500: '#DD2F33',
  },
  green: {
    500: '#4BAE7A',
    600: '#438D59',
  },
  yellow: {
    400: '#F6CB31',
    500: '#FFB235',
  },
};

/**
 *
 * @todo replace of primary color usages by blue; primary is not supported by chakra-ui schema
 */
// colors.primary = colors.blue;

export { colors };

type hexColor = `#${string}`;
type rgbColor = `rgba(${number}, ${number},${number}, ${number})`;
type colorTypes = hexColor | rgbColor;

type Colors = {
  whiteAlpha: {
    0: rgbColor;
    100: colorTypes;
  };
  primary: {
    300: hexColor;
    400: hexColor;
    500: hexColor;
  };
  gray: {
    50: hexColor;
    100: hexColor;
    200: hexColor;
    300: hexColor;
    400: hexColor;
    500: hexColor;
    600: hexColor;
    800: hexColor;
  };
  blue: {
    50: hexColor;
    100: hexColor;
    200: hexColor;
    400: hexColor;
    500: hexColor;
    800: hexColor;
  };
  red: {
    200: hexColor;
    300: hexColor;
    400: hexColor;
    500: hexColor;
  };
  green: {
    500: hexColor;
    600: hexColor;
  };
  yellow: {
    400: hexColor;
    500: hexColor;
  };
};
