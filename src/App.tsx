import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => (
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
      <Checkbox defaultChecked>Themed Circular Checkbox</Checkbox>
    </VStack>
    <ThemeToggleButton pos="fixed" bottom="2" right="2" />

    <VStack spacing={3} padding={5}>
      <Input placeholder="some random text here" size="rgl" />
      <Input placeholder="some random text here" size="rgl" />
      <InputGroup w="fit-content">
        <Input isInvalid placeholder="Enter amount" size="rgl" />
        <InputRightElement
          children="Can't be empty"
          pr="20px"
          top="1"
          color="red"
          width="100"
        />
      </InputGroup>
    </VStack>
  </Box>
);

export default App;
