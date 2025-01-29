'use client'
import React from 'react';
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

import Hero from './herosection.programs';


import ProgramsIntroduction from './programs.introduction';

const ProgramsLayout = () => (
    <>
        <Hero/>
        <Box maxW="100%" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} bg={'white'} >
            <ProgramsIntroduction />
        </Box>
    </>
);

export default ProgramsLayout;
