import { Box, Center, Container, Wrap, WrapItem, Text, Image, Flex, SimpleGrid, CircularProgress, CircularProgressLabel, transition } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaDatabase, FaJs, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa'
import Banane from '../img/banane.jpg'
import Animation from "../styles/Animation";
import { motion } from "framer-motion";

const spinTransition = {
    loop: Infinity,
    duration: 1
}

const Skills = () => {
    return (
        <Container pt={10}>
            <Box pb={6}>
                <Image borderRadius='lg' src={Banane} />
            </Box>
            <Animation>
                <Box pb={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Tech Skills</Text>
                    <SimpleGrid pt={8} columns={2} spacing={10}>
                        <Box>
                            <Center>
                                <motion.div animate={{rotate: 360}} transition={spinTransition}>
                                    <CircularProgress size={150} value={70} color='blue.400'>
                                        <CircularProgressLabel>70%</CircularProgressLabel>
                                    </CircularProgress>
                                </motion.div>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaReact size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={60} color='yellow.400'>
                                    <CircularProgressLabel>60%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaJs size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={65} color='red.400'>
                                    <CircularProgressLabel>65%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaDatabase size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={75} color='green.400'>
                                    <CircularProgressLabel>75%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaNode size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={100} color='orange.400'>
                                    <CircularProgressLabel>
                                        <Center>
                                            <FaHtml5 size={40}/>
                                        </Center>
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaHtml5 size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={90} color='purple.400'>
                                    <CircularProgressLabel>90%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaCss3Alt size={40}/>
                                </Center>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Animation>
        </Container>
    )
}

export default Skills;