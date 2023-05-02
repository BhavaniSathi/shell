import React from 'react';
import {
  ChakraProvider,
  Box,Button,ButtonGroup,Spacer,Flex,Heading,HStack
} from '@chakra-ui/react';
import navBar from './navBar';
function App() {
  return (
    <ChakraProvider>
      <Box display='flex' flexDirection={'column'} pt='3px'>
<Flex minWidth='max-content' alignItems='center' gap='2'>
      <HStack spacing="10" justify="space-between">
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  </HStack>
</Flex>
      </Box>
    </ChakraProvider>
  );
}
export default App;
