import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Input,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  const color = useColorModeValue('red', 'pink');

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
        </ButtonGroup>
      </VStack>

      <VStack spacing={5} direction="row">
        <Checkbox>Themed Checkbox</Checkbox>
        <Checkbox variant="circular">Themed Circular Checkbox</Checkbox>
        <Checkbox defaultChecked colorScheme={color}>
          Themed Circular Checkbox
        </Checkbox>
      </VStack>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />

      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Stack>
    </Box>
  );
};

export default App;
