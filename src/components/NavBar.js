import { Box, Button, Container, Flex, Heading, Icon, Spacer } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import ToggleColor from "./ToggleColor";

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
                    <Link to="/skills">Compétences</Link>
                </Button>
                <Spacer />
                <ToggleColor />
            </Flex>
        </Box>
    </Container>
    );
}

export default NavBar;