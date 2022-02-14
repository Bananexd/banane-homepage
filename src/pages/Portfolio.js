import { Box, Container, Text, Image, SimpleGrid, Divider, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Banane from "../img/banane.jpg"
import Animation from "../styles/Animation";

const Portfolio = () => {
    return (
        <Container pt={10}>
            <Box pb={6}>
                <Image borderRadius='lg' src={Banane} />
            </Box>
            <Animation>
                <Box pb={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Projet Perso</Text>
                    <SimpleGrid pt={8} columns={2} spacing={10}>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Divider />
                <Box pt={8} pb={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Collaboration</Text>
                    <SimpleGrid pt={8} columns={2} spacing={10}>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction='column'>
                                <Image borderRadius='2xl' src={Banane}/>
                                <Text pt={4} textAlign='center' fontSize='2xl'>Name Of Project</Text>
                                <Text textAlign='center' fontSize='lg'>Lorem ipsum dolor siet amet</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box pt={8} pb={8}>
                <Center>
                    <Text color='gray'>© 2022 Alexis Crapet All rights Reserved.</Text>
                </Center>
                </Box>
            </Animation>
        </Container>
    );
}

export default Portfolio;