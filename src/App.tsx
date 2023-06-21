import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Stack,
  VStack,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  const x = 'x';

  return (
    <Box>
      <VStack>
        <ButtonGroup gap={4}>
          <Button variant="primary" size="md">
            Button Primary(L)
          </Button>
          <Button variant="primarySmall">Button Primary (S)</Button>
          <ThemeToggleButton pos="fixed" bottom="2" right="2" />
        </ButtonGroup>
        <ButtonGroup gap={4}>
          <Button variant="secondary">Button Secondary</Button>
          <Button variant="destructive">Button Desctructive</Button>
          <ThemeToggleButton pos="fixed" bottom="2" right="2" />
        </ButtonGroup>
      </VStack>

      <Stack spacing={5} direction="row">
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
    </Box>
  );
};

export default App;
