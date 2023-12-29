
'use client'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Image,
} from '@chakra-ui/react';
import Executive from './executive';
import { NavLink } from 'react-router-dom';





export default function Navbar() {



    return (
        <Box
            as="nav"
            role="navigation"
            bg="#214B24"
            pt={{ base: 'var(--chakra-space-6)', md: 'var(--chakra-space-10)' }}
            pb={{ base: 'var(--chakra-space-6)', md: 'var(--chakra-space-10)' }}
        >
            <Container maxW="var(--chakra-sizes-7xl)">
                <Flex
                    display="flex"
                    alignItems="center"
                    flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent="space-between"
                    gap={{ base: 'var(--chakra-space-4)', md: 'var(--chakra-space-8)' }}
                >
                    <Flex alignItems="center" gap="var(--chakra-space-2)">
                        <Image
                            bg="#37B34A"
                            borderRadius="full"
                            border="1px solid white"
                            src="/images/Destiny_green.png"
                            alt="Destiny Doctors Uganda"
                            boxSize="90px"
                            width="auto"
                        />
                    </Flex>

                    <Flex>
                        <ButtonGroup
                            flexDirection={{ base: 'column', md: 'row' }}
                            gap={{ base: 'var(--chakra-space-2)', md: 'var(--chakra-space-4)' }}
                        >
                            <Button
                                as={NavLink}
                                p="5"
                                color="#37B34A"
                                variant="none"
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                                to='/'
                            >
                                Home
                            </Button>
                            <Button
                                as={NavLink}
                                to='/about-us'
                                p="5"
                                color="#37B34A"
                                variant="none"
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                            >
                                About us
                            </Button>
                            <Button
                                as={NavLink}
                                to='/our-programs'
                                color="#37B34A"
                                p={'5'}
                                variant={'none'}
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                            >
                                Our Programs
                            </Button>
                            <Button
                                as={NavLink}
                                to='/our-team'
                                                        
                                p={'5'}
                                color="#37B34A" variant={'none'}
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                            >
                                Team
                            </Button>
                            <Button
                                as={NavLink}
                                to='/find-us'
                                p={'5'}
                                color="#37B34A" variant={'none'}
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                            >
                                Find us
                            </Button>
                            <Button
                                as={NavLink}
                                p={'5'}
                                color="#37B34A" variant={'none'}
                                transition="transform 0.6s ease"
                                _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }}
                                to='/gallery'
                            >
                                Gallery
                            </Button>

                        </ButtonGroup>
                    
                    </Flex>

                    <Flex>
                        <Button
                            bg="white"
                            variant="outline"
                            color="#37B34A"
                            px={{ base: '6', md: '12' }}
                            py={{ base: '4', md: '7' }}
                            fontWeight="bold"
                            transition="transform 0.6s ease"
                            _hover={{ bg: '#214B24', transform: 'scale(1.1)' }}
                        >
                            Support us
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
