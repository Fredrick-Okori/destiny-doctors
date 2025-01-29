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
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiNavigation, FiNavigation2, FiPhoneCall, FiTwitter } from 'react-icons/fi';

import ContactButton from '@/components/handleMail';

import Link from 'next/link';

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
                    allowfullscreen="true"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>


            </Box>
            <Box py="12">
                <Box as="section" bg="bg.surface">
                    <Container
                        maxW='container.lg'
                        py={{
                            base: '16',
                            md: '20',
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
                                    color='#214B24'
                                >
                                    Our Location
                                </Heading>
                                <Flex direction={{ base: 'column', lg: 'row' }} gap={7}>
                                    <Text color='#214B24' fontSize={17}>
                                        Buzzi, Namulanda, Entebbe Road {" "} | {" "}
                                    </Text>
                                    <Text color='#214B24' fontSize={17}>
                                        Email: destinydoctors1@gmail.com
                                    </Text>
                                    <Text color='#214B24' fontSize={17}>
                                        +256 705 311 386 - +256 774 362 209
                                    </Text>
                                </Flex>

                            </Stack>



                        </Flex>

                    </Container>
                    <Container
                        maxW='container.lg'
                        py={{
                            base: '16',
                            md: '20',
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
                                    color='#214B24'
                                >
                                    Find us
                                </Heading>
                                <Flex direction={'row'} gap={7}>
                                    <Link href="https://twitter.com/destinydoctors" target='_blank'> <FiTwitter size={24} color='#214B24' /></Link>
                                    <Link href=''>
                                        <FiFacebook size={24} color='#214B24' target='_blank' />
                                    </Link>
                                    <Link href=''>
                                        <FiInstagram size={24} color='#214B24' target='_blank' />
                                    </Link>
                                    <Link href="https://ug.linkedin.com/company/destiny-doctors" target='_blank'>
                                        <FiLinkedin size={24} color='#214B24' />
                                    </Link>

                                </Flex>

                            </Stack>



                        </Flex>

                    </Container>
                    <Container
                        py={{
                            base: '16',
                            md: '20',
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
                                    color='#214B24'
                                >
                                    Want to talk to us?
                                </Heading>
                                <Text color="#214B24" maxW="2xl" textAlign="center" fontSize="xl">
                                    Send us an email if you are interested in supporting or partnering with us in any of our programs


                                </Text>
                            </Stack>

                        </Stack>
                        <Flex align="center" justify="center" direction={{ base: 'column-reverse', lg: 'row' }}>
                            <Box flex="1" >
                                <form onSubmit={handleSubmit}>
                                    <FormControl id="name" mb="4" isRequired>
                                        <FormLabel color='#214B24'>Name</FormLabel>
                                        <Input border='1px solid #214B24'
                                            type="text" size={'lg'}
                                            placeholder="Your name"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <FormControl id="email" mb="4" isRequired>
                                        <FormLabel color='#214B24'>Email</FormLabel>
                                        <Input type="email" size={'lg'} border='1px solid #214B24'
                                            placeholder="Your email"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <FormControl id="message" mb="4" isRequired>
                                        <FormLabel color='#214B24'>Message</FormLabel>
                                        <Textarea placeholder="Your message" border='1px solid #214B24'
                                            rows="4"
                                            _focus={{ border: '1px solid white' }}
                                        />
                                    </FormControl>

                                    <ContactButton />
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
