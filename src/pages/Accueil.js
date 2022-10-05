import { Avatar, Box, Center, Container, Flex, Heading, Text, Image, Button, List, ListItem } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";
import React from "react";
import Banane from '../img/banane.jpg'
import Animation from "../styles/Animation";

const Accueil = () => {
    return (
        <Container pt={10}>
            <Box pb={6}>
                <Image borderRadius='lg' src={Banane} />
            </Box>
            <Animation>
                <Box bg='#2c313c' borderRadius='lg' color='white'>
                    <Center>
                        <Text fontSize='lg'>Bonjour, Je suis Développeur Freelance.</Text>
                    </Center>
                </Box>
                <Box pt={6}>
                    <Flex direction='row'>
                        <Box>
                            <Heading>Crapet Alexis</Heading>
                            <Text>Développeur Freelance <br/>( Fulstack / ReactJs ).</Text>
                        </Box>
                        <Box>
                            <Avatar src={Banane} ml={175} size='xl'/>
                        </Box>
                    </Flex>
                </Box>
                <Box pt={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Travail</Text>
                    <Text textAlign='justify' style={{ textIndent: 40 }} pb={4} pt={4}>Je suis un Étudiant en troisième année de Licence Informatique spécialisation Développement / DevOps. En parallèle de mes études, je suis aussi Développeur Web Freelance depuis 2022. Mes missions principales sont la réalisation de site vitrine pour particulier ou entreprise ainsi que de site E-commerce.</Text>
                    <Center>
                        <Button colorScheme="purple" rightIcon={<ArrowForwardIcon />}><Link to="/portfolio">Mon Portfolio</Link></Button>
                    </Center>
                </Box>
                <Box pt={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Formation</Text>
                    <Flex>
                        <Text pt={4} pr={6}><strong>2017</strong></Text>
                        <Text pt={4}>Lycée Général Yves Kernanec à Marcq en Baroeul / Obtention du baccalauréat ES ( Economique et Sociale).</Text>
                    </Flex>
                    <Flex>
                        <Text pt={4} pr={6}><strong>2018</strong></Text>
                        <Text pt={4}>Epitech Lille : L'école de l'innovation et de l'expertise informatique / Bac +2 Réalisé à Epitech Lille.</Text>
                    </Flex>
                    <Flex>
                        <Text pt={4} pr={6}><strong>2021</strong></Text>
                        <Text pt={4}>Formation avec un enseignant dans le domaine de l'informatique Décisionnelle (SQL).<br/>Formation en Autodidacte sur le stack M.E.R.N ( MongoDB, ExpressJs, ReactJs, NodeJs).</Text>
                    </Flex>
                    <Flex>
                        <Text pt={4} pr={6}><strong>2022</strong></Text>
                        <Text pt={4}>Epsi Lille : L'école d'ingénierie Informatique / Bac + 3 En cours.</Text>
                    </Flex>
                </Box>
                <Box pt={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Hobbies</Text>
                    <Text pt={4}>Musique, Lecture, Jeux, Développement Web.</Text>
                </Box>
                <Box pt={8}>
                    <Text fontSize='2xl' as='u' textUnderlineOffset={8} textDecorationColor="purple.300" textDecorationThickness={4}>Réseaux</Text>
                    <List>
                        <ListItem>
                            <Button pt={8} leftIcon={<FaGithub/>} variant='link'><a href="https://github.com/BananeSensei" target='_blank' rel="noreferrer">Github</a></Button>
                        </ListItem>
                        <ListItem>
                            <Button pt={4} leftIcon={<FaLinkedinIn/>} variant='link'><a href="https://www.linkedin.com/in/alexis-crapet-3b928317a/" target='_blank' rel="noreferrer">LinkedIn</a></Button>
                        </ListItem>
                    </List>
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

export default Accueil;