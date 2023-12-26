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
    Skeleton,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const App = () => (
    <>
        <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} bg={'#37B34A'} mt={'30px'}>
            <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                <Box
                    width={{ lg: 'sm' }}
                    transform={{ base: 'translateY(-50%)', lg: 'none' }}

                    mx={{ base: '6', md: '8', lg: '0' }}
                    px={{ base: '6', md: '8', lg: '0' }}
                    py={{ base: '6', md: '8', lg: '12' }}
                >
                    <Stack spacing={{ base: '8', lg: '10' }}>
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            <Heading size="xl" color={'#214B24'}>
                                Community Empowerment Program
                            </Heading>
                            <Heading size="md" fontWeight="normal" color={'#214B24'}>
                                Providing community outreaches
                            </Heading>
                        </Stack>
                        <HStack spacing="3">
                            <Link color={'white'} fontWeight="bold" fontSize="lg">
                                Read More
                            </Link>
                            <Icon color={'white'} as={FaArrowRight} />
                        </HStack>
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden">
                    <Image
                        src="/Iganga_10.jpg"
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="cover"
                        flex="1"
                    />
                    <Image
                        display={{ base: 'none', sm: 'initial' }}
                        src="rwimi_ncd.jpg"
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        objectFit="cover"
                    />
                </Flex>
            </Stack>
            <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                <Box
                    width={{ lg: 'sm' }}
                    transform={{ base: 'translateY(-50%)', lg: 'none' }}

                    mx={{ base: '6', md: '8', lg: '0' }}
                    px={{ base: '6', md: '8', lg: '0' }}
                    py={{ base: '6', md: '8', lg: '12' }}
                >
                    <Stack spacing={{ base: '8', lg: '10' }}>
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            <Heading size="xl" color={'#214B24'}>
                                Digital Health Program
                            </Heading>
                            <Heading size="md" fontWeight="normal" color={'#214B24'}>
                                Unleashing digital healthcare access
                            </Heading>
                        </Stack>
                        <HStack spacing="3">
                            <Link color={'white'} fontWeight="bold" fontSize="lg">
                                Read More
                            </Link>
                            <Icon color={'white'} as={FaArrowRight} />
                        </HStack>
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden">
                    <Image
                        src="/jb_conference.jpg"
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="cover"
                        flex="1"
                    />
                    <Image
                        display={{ base: 'none', sm: 'initial' }}
                        src="digital_health.jpg"
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        objectFit="cover"
                    />
                </Flex>
            </Stack>
        </Box>
    </>
);

export default App;
