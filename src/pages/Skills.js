import { Box, Center, Container, Text, Image, Flex, SimpleGrid, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaDatabase, FaJs, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa'
import Banane from "../img/banane.jpg"
import Animation from "../styles/Animation";

const Skills = () => {
    return (
        <Container pt={10}>
            <Box pb={6}>
                <Image borderRadius='lg' src={Banane} />
            </Box>
            <Animation>
                <Box pb={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Compétences Techniques</Text>
                    <SimpleGrid pt={8} columns={2} spacing={10}>
                        <Box>
                            <Center>
                                <CircularProgress size={150} value={80} color='blue.400'>
                                    <CircularProgressLabel>80%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaReact size={40}/>
                                </Center>
                                <Text pt={2} textAlign='center' fontSize='lg'>ReactJs</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={65} color='yellow.400'>
                                    <CircularProgressLabel>65%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaJs size={40}/>
                                </Center>
                                <Text pt={2} textAlign='center' fontSize='lg'>ExpressJs</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={60} color='red.400'>
                                    <CircularProgressLabel>60%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaDatabase size={40}/>
                                </Center>
                                <Text pt={2} textAlign='center' fontSize='lg'>MongoDB</Text>
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
                                <Text pt={2} textAlign='center' fontSize='lg'>NodeJs</Text>
                            </Flex>
                        </Box>
                        <Box>
                        <Center>
                                <CircularProgress size={150} value={100} color='orange.400'>
                                    <CircularProgressLabel>100%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <Flex direction='column'>
                                <Center pt={2}>
                                    <FaHtml5 size={40}/>
                                </Center>
                                <Text pt={2} textAlign='center' fontSize='lg'>Html</Text>
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
                                <Text pt={2} textAlign='center' fontSize='lg'>Css</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Animation>
        </Container>
    )
}

export default Skills;