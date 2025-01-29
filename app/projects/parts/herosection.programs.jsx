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

export default function Hero() {
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
                    left={{base: '50%', lg: '30%'}}
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                   
                >
                    <Text
                        bgGradient='linear(to-l, #fff, #fff)'
                        color='white'
                        bgClip='text'
                        fontSize={{base: '4xl', lg: '7xl'}}
                        fontWeight='extrabold'
                        
                    >
                        Our Programs
                    </Text>
                    <Text textAlign='left' display={{base: 'none', lg: 'inline'}}>
                        We have a broad expertise in digital health <br /> service execution and
                        management with our diverse<br /> and multi talented team with experience and skills in<br /> Public Health, Technology, Nursing, Laboratory
                        and holistic healthcare.
                    </Text>
                </Box>
            </Box>
        </>
    )
}