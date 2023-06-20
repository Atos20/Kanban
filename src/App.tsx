import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  const x = 'x';

  return (
    <Box>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default App;
