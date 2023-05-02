import { Heading,Box,Container,Flex,HStack,ChakraProvider,ButtonGroup,Button,Avatar,Icon,Text,IconButton,useBreakpointValue, theme } from "@chakra-ui/react";
import React from 'react';
import {Search2Icon,QuestionOutlineIcon,SettingsIcon,DownloadIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Logo } from "./Logo";

function Shell() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <ChakraProvider>
      <Box>
            <Box bg={'blue.600'} py={{ base: '3', lg: '4' }} px={{ base: '4', lg: '8'}} pr={{lg:'14'}}>
            <HStack spacing="4" justify="space-between">
            <Logo/>
            {isDesktop?<Flex justify="space-between" flex='1'>
                <ButtonGroup variant="primary" size='md' fontWeight='bold' fontFamily='inherit'>
                  {['Home', 'Dashboard', 'Tasks', 'Bookmarks','Users'].map((item) => (
                   <Button key={item} _hover={{bg:'blue.500'}} bg={item=='Dashboard'?'#3182CE':'brand.highlightColor'} borderRadius={8} color={'#FFFFFF'}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack>
                <Box _hover={{bg:'blue.500'}} border='1' borderRadius={8} px={3} py={2}>
                <Search2Icon boxSize={4} color={'#FFFFFF'} />
                </Box>
                <Box _hover={{bg:'blue.500'}} border='1' borderRadius={8} px={3} py={2}>
                  <SettingsIcon boxSize={4} color={'#FFFFFF'} />
                  </Box>
                  <Box _hover={{bg:'blue.500'}} border='1' borderRadius={8} px={3} py={2}>
                  <QuestionOutlineIcon boxSize={4} color={'#FFFFFF'} />
                  </Box>
                  <Box boxSize={6} px={3}><Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov'/></Box>
                </HStack>
              </Flex>:<HamburgerIcon color={'#FFFFFF'} boxSize={8}/>}
            </HStack>
            </Box>
            <Box bg={'gray.50'} px={{ base: '4', lg: '8'}} pb={{ base: '12', md: '24'}}>
            <Flex   flexDirection={isDesktop?'row':'column'} justifyContent={"space-between"} flex="1" pt={{base:8,md:12}}>
                <Box flexDirection={'column'}>
                    <Heading as='h2'size='lg' fontWeight={500} color={'brand.h2'}>Dashboard</Heading>
                    <Text mt={1} color={'brand.h4'} >All important metrics at a glance</Text>
                </Box>
                <Flex justifyContent={'flex-start'} mt={isDesktop?0:4}>
                <Button color={'brand.button1'} border='1px' w={140} borderColor={'gray.200'} bg={'#FFFFFF'} borderRadius={8}
                _hover={{bg:'gray.50'}}>
                    <DownloadIcon/>
                    <Text pl={3}>Download</Text>
                </Button>
                <Button  bg={'#3182CE'} color={'#FFFFFF'} borderRadius={8} w={84} ml={3} _hover={{bg:'blue.600'}}>Create</Button>
                </Flex>
            </Flex>
            <Flex flexWrap="wrap" justifyContent={{base:'center',md:'space-between'}} alignContent={'space-between'}  pt={7}>
            <Box bg={'#FFFFFF'}  width={{ base: "100%", md: "32%" }} mb={{base:6}} height="144px" borderRadius={8} boxShadow='base'></Box>
            <Box bg={'#FFFFFF'}  width={{ base: "100%", md: "32%" }} mb={{base:6}} height="144px" borderRadius={8} boxShadow='base'></Box>
            <Box bg={'#FFFFFF'}  width={{ base: "100%", md: "32%" }} height="144px" borderRadius={8} boxShadow='base'></Box>
            </Flex>
            <Box bg={'#FFFFFF'} h='320px' borderRadius={8} boxShadow='md' mt={{base:8,md:0}}>
            </Box>
            </Box>
            </Box>
    </ChakraProvider>
  );
}

export default Shell;
