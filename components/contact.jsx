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

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <Box bg="#214B24" py="12">
            <Box as="section" bg="bg.surface">
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
                    <Flex align="center" justify="center" direction={{ base: 'column-reverse', lg: 'row'  }}>
                        <Box flex="1" >
                            <form onSubmit={handleSubmit}>
                                <FormControl id="name" mb="4" isRequired>
                                    <FormLabel color='#37B34A'>Name</FormLabel>
                                    <Input border='1px solid #37B34A'
                                        type="text" size={'lg'}
                                        placeholder="Your name"
                                        _focus={{border: '1px solid white'}}
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
            <Container maxW="container.xl">
             
                
            </Container>
        </Box>
    );
};

export default ContactForm;
