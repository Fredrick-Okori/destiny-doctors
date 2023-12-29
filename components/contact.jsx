'use client'
import React from 'react';
import {
    Box,
    Flex,
    Image,
    Input,
    Textarea,
    Button,
    FormControl,
    Text,
    FormLabel,
    FormErrorMessage,
    Container,
    Heading, Stack
} from '@chakra-ui/react';
import { FiNavigation, FiNavigation2, FiPhoneCall, FiTwitter } from 'react-icons/fi';

const ContactUsLayout = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <>
            <Box position="relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4597.625546181424!2d32.5368925!3d0.1542387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d91f9e4f733eb%3A0x4288b6232a00d8e1!2sDestiny%20Doctors%20Uganda!5e1!3m2!1sen!2sug!4v1703864689413!5m2!1sen!2sug"
                    width="100%" height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            </Box>
            <Box bg="#214B24" py="12">
                <Box as="section" bg="bg.surface">
                    <Container
                        maxW='container.lg'
                        py={{
                            base: '16',
                            md: '24',
                        }}
                    >
                        <Stack
                            spacing={{
                                base: '8',
                                md: '10',
                            }}
                        >


                        </Stack>
                        <Flex align="center" justify="center" direction={{ base: 'column-reverse', lg: 'row' }}>
                            <Stack
                                spacing={{
                                    base: '4',
                                    md: '5',
                                }}
                                align="center"
                            >
                                <Heading
                                    fontSize='4xl'
                                    as={'h1'}
                                    color='#37B34A'
                                >
                                    Find us
                                </Heading>
                                <FiTwitter/>
                                
                            </Stack>
                            <Box flex="1" bg='white'>
                                <Flex dir='column'>
                                    <Box>

                                    </Box>
                                    <Box>

                                    </Box>
                                </Flex>
                            </Box>


                        </Flex>
                    </Container>
                    <Container
                        py={{
                            base: '16',
                            md: '24',
                        }}
                    >
                        <Stack
                            spacing={{
                                base: '8',
                                md: '10',
                            }}
                        >
                            <Stack
                                spacing={{
                                    base: '4',
                                    md: '5',
                                }}
                                align="center"
                            >
                                <Heading
                                    fontSize='4xl'
                                    as={'h1'}
                                    color='#37B34A'
                                >
                                    Want to talk to us?
                                </Heading>
                                <Text color="#37B34A" maxW="2xl" textAlign="center" fontSize="xl">
                                    With this beautiful and responsive React components you will realize your next project
                                    in no time.
                                </Text>
                            </Stack>

                        </Stack>
                        <Flex align="center" justify="center" direction={{ base: 'column-reverse', lg: 'row' }}>
                            <Box flex="1" >
                                <form onSubmit={handleSubmit}>
                                    <FormControl id="name" mb="4" isRequired>
                                        <FormLabel color='#37B34A'>Name</FormLabel>
                                        <Input border='1px solid #37B34A'
                                            type="text" size={'lg'}
                                            placeholder="Your name"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <FormControl id="email" mb="4" isRequired>
                                        <FormLabel color='#37B34A'>Email</FormLabel>
                                        <Input type="email" size={'lg'} border='1px solid #37B34A'
                                            placeholder="Your email"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <FormControl id="message" mb="4" isRequired>
                                        <FormLabel color='#37B34A'>Message</FormLabel>
                                        <Textarea placeholder="Your message" border='1px solid #37B34A'
                                            rows="4"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <Button type="submit" bg="white"
                                        variant="outline"
                                        color="#37B34A"
                                        px={{ base: '6', md: '12' }}
                                        py={{ base: '4', md: '7' }}
                                        fontWeight="bold"
                                        transition="transform 0.6s ease"
                                        _hover={{ bg: '#214B24', transform: 'scale(1.1)' }} mt="4">
                                        Submit
                                    </Button>
                                </form>
                            </Box>


                        </Flex>
                    </Container>

                </Box>

            </Box>
        </>
    );
};

export default ContactUsLayout;
