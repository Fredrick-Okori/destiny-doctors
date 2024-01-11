import React from 'react';
import { Box, Container, Link, Flex, Text, VStack } from '@chakra-ui/react';
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiNavigation, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Box
                // Replace with the path to your blurred image
                bgSize="cover"
                bgPosition="center"
                filter="blur(7px)" // Adjust the blur amount as needed
                h="100%" // Set the height to cover the entire Footer
                w="100%"
                position="fixed"
                top="0"
                left="0"
                zIndex="-1" // Set a lower z-index to position the background behind the content
            />
            <Box as="footer" bgGradient='linear(#37B34A 0%, #37B34A 25%, #37B34A 50%)' color="#214B24" py="8">

                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center" direction={{ base: 'column', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                        <VStack align="start" spacing="4">
                            <Text fontSize="lg" fontWeight="bold">
                                Destiny Doctors Uganda
                            </Text>
                            <Text>  P.O.BOX 7782</Text>
                            <Text>  Buzzi, Namulanda, Wakiso</Text>
                            <Text>  destinydoctors1@gmail.com</Text>
                        </VStack>
                        <VStack align="start" spacing="4">
                            <Text fontSize="lg" fontWeight="bold">
                                Useful Links
                            </Text>
                            <Link href="#">Home</Link>
                            <Link href="#">About Us</Link>
                            <Link href="#">Services</Link>
                            <Link href="#">Contact</Link>
                        </VStack>
                        <VStack align="start" spacing="4">
                            <Text fontSize="lg" fontWeight="bold">
                                Connect With Us
                            </Text>
                            <Link href="https://twitter.com/destinydoctors" isExternal>
                                Twitter
                            </Link>
                            <Link href="" isExternal>

                                Facebook
                            </Link>
                            <Link href="https://ug.linkedin.com/company/destiny-doctors" isExternal>
                                LinkedIn
                            </Link>
                            <Link href="https://www.instagram.com/destinydoctors/?hl=en" isExternal>
                                Instagram
                            </Link>
                        </VStack>
                    </Flex>
                    <Text mt="6" textAlign="center" fontSize="sm" opacity="0.7">
                        &copy; {currentYear} Destiny Doctors Uganda. All rights reserved. | designed by erinet.com
                    </Text>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
