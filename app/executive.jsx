import React from "react";
import {
    Container,
    Box,
    Card,
    Text,
    Heading,
    CardBody,
    Stack,
    Flex,
    Image,
    Divider,
    Spacer,
    Center,
    ButtonGroup,
    Button
} from "@chakra-ui/react";

import { FiMaximize, FiLayers, FiNavigation, FiActivity, FiHeart, FiPocket } from "react-icons/fi";

import TeamPage from "../components/team";
import NavBar from "../components/navbar";

export default function Executive() {
    return (
        <>
            <Box position="relative">
                <Image
                    src='./programs_outreach.jpg'
                    alt={`Hero Image `}
                    w="100%"
                    h="60vh"
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                >

                    <Center >
                        <Heading
                            color={'white'}
                            as='h1'
                            fontSize='6xl'
                            fontWeight='extrabold'
                            mt={'30px'}
                        >
                            Executive Team
                        </Heading>

                    </Center>
                    <Text textAlign='center' color={'white'}>
                        Young. dedicated. Professional.
                    </Text>
                </Box>
            </Box>
            <Container maxW={'100%'} bg='white' mt='-15px'>



                <TeamPage />
            </Container>
        </>
    )
}