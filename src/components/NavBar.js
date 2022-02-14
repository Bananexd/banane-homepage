import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ToggleColor from "./ToggleColor";
import { EmailIcon } from "@chakra-ui/icons";

const NavBar = () => {
    return (
    <Container maxW={900} p={4}>
        <Box p={2}>
            <Flex>
                <Heading size='md' p={2} mr={4}>Alexis Crapet</Heading>
                <Button mr={4} variant='link'>
                    <Link to="/">Accueil</Link>
                </Button>
                <Button mr={4} variant='link'>
                    <Link to="/portfolio">Portfolio</Link>
                </Button>
                <Button mr={4} variant='link'>
                    <Link to="/competences">Compétences</Link>
                </Button>
                <Spacer />
                <Button mr={4} colorScheme='purple' leftIcon={<EmailIcon/>}>
                    <a href="mailto:crapet.alexis59@gmail.com">Contactez-moi</a>
                </Button>
                <ToggleColor />
            </Flex>
        </Box>
    </Container>
    );
}

export default NavBar;