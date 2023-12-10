'use client'
import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Spacer,
    Link,
    Heading,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Container,
} from "@chakra-ui/react";
import { FiX, FiMenu } from "react-icons/fi";


export default function NavBar(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         // Adjust the value based on when you want the navbar to become fixed
    //         const scrollThreshold = 300;

    //         if (scrollPosition > scrollThreshold) {
    //             setIsNavbarFixed(true);
    //         } else {
    //             setIsNavbarFixed(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    return (
        <>

            <Flex bg="white" p="10" alignItems="center"
                pos={'fixed'}
                top={'0'}
                left={'0'}
                right={'0'}
                zIndex={'1000'}
             
               >

                <Box>
                    <Heading as="h1" size="md" color="#37B34A">
                        Destiny Doctors
                    </Heading>
                </Box>
                <Spacer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <Link color="#37B34A" mr="4">
                        Home
                    </Link>
                    <Link color="#37B34A" mr="4">
                        About
                    </Link>
                    <Link color="#37B34A" mr="4">
                        Contact
                    </Link>
                    <Link color="#37B34A">Gallery</Link>
                </Box>
                <Box display={{ base: 'block', md: 'none' }}>
                    <IconButton
                        colorScheme="teal"
                        icon={<FiMenu />} // You can use any menu icon here
                        onClick={handleDrawerOpen}
                    />
                    <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose} finalFocusRef={undefined}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Browse</DrawerHeader>
                            <DrawerBody>
                                <Link color="teal.500" onClick={handleDrawerClose} mb="2" display="block">
                                    Home
                                </Link>
                                <Link color="teal.500" onClick={handleDrawerClose} mb="2" display="block">
                                    About
                                </Link>
                                <Link color="teal.500" onClick={handleDrawerClose} mb="2" display="block">
                                    Contact
                                </Link>
                                <Link color="teal.500" onClick={handleDrawerClose} display="block">
                                    Gallery
                                </Link>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>

            </Flex>

        </>
    )
}