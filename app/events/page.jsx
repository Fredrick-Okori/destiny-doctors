import React from "react";

import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Text,
    Skeleton,
    Container,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';


import EventsParts from "./parts/events.parts";


export default function Events() {
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
                    left={{ base: '50%', lg: '30%' }}
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"

                >
                    <Text
                        bgGradient='linear(to-l, #fff, #fff)'
                        color='white'
                        bgClip='text'
                        fontSize={{ base: '4xl', lg: '7xl' }}
                        fontWeight='extrabold'
                        lineHeight={1.2}
                        textAlign='left'
                        

                    >
                         Medical Outreach  <br/>
                        in Lyantonde
                    </Text>
                    <Text textAlign='left' fontSize='xl' display={{ base: 'none', lg: 'inline' }}>
                      Kaliiro Health Center III on  3rd June 2024
                    </Text>
                </Box>
            </Box>

          
            <EventsParts/>
        </>
    )
}