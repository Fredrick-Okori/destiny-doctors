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

import TeamPage from "./team";
import NavBar from "./navbar";

export default function Executive() {
    return (
        <>

            <Container maxW={'100%'} bg='white' mt={'15px'}>
               
                    <Center >
                    <Heading
                        color={'#214B24'}
                        as='h1'
                        fontSize='6xl'
                            fontWeight='extrabold'
                            mt={'30px'}
                    >
                        Executive Team 
                    </Heading>
                  
                </Center>   
                <Text textAlign='center' color={'#214B24'}>
                    Young. dedicated. Professional. 
                </Text> 
              
                
              <TeamPage/>
        </Container>
        </>
    )
}