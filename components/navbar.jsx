'use client'
import React, { useState } from "react";
import NextLink from 'next/link'
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
    Button,
    Image,
    Text

} from "@chakra-ui/react";
import { FiX, FiMenu } from "react-icons/fi";



export default function NavBar(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    
    return (
        <>

            <Flex bg="#214B24" p="7" alignItems="center"
                pos={'fixed'}
                top={'0'}
                left={'0'}
                right={'0'}
                zIndex={'1000'}
             
               >

                <Box>
                    <Flex flexDirection={'row'} alignItems={'center'} gap='2'>
                        <Image src="./images/logo_colored.png" alt='Destiny Dectors Uganda' />
                        <Heading as={'h1'} size="md" color="#37B34A" borderLeft={'2px solid #37B34A'} ml='5' pl={'7'}>
                        Destiny Doctors <br /> Uganda
                    </Heading>
</Flex>
                </Box>
                <Spacer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <Link color="#37B34A" mr="4" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }} >
                        Home
                    </Link>
                    <Link color="#37B34A" mr="4" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }}>
                        About
                    </Link>
                    <Link color="#37B34A" mr="4" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }} >
                        Team
                    </Link>
                    <Link color="#37B34A" mr="4" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }} >
                        Programs
                    </Link>
                    <Link color="#37B34A" mr="4" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }}>
                        Contact
                    </Link>
                    <Link color="#37B34A" p={'5'} _hover={{ borderBottom: '1px solid #37B34A' }}>Gallery</Link>
</Box>
                <Spacer />
                <Box>
                    <Button 
                        bg='white'
                        variant='outline'

                        color='#37B34A'
                        px="12"
                        py="7"
                        fontWeight="bold"
                        _hover={{ bg: '#214B24' }}>Donate</Button>
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