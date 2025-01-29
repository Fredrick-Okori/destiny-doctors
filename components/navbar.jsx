'use client'
import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useColorModeValue,
    Image,
    Box,
    useColorMode,
    useMediaQuery,
    useDisclosure,
    IconButton,
    HStack,
    Container,
} from "@chakra-ui/react";

import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { useState } from "react";
import ContactButton from "./handleMail";
import Link from "next/link"; // Import Next.js Link

const TbIcons = require("react-icons/tb");

export default function Nav() {

    const [activeButton, setActiveButton] = useState('#37B34A');

   
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection.scrollIntoView({ behavior: "smooth" });
    };



    return (
        <>
            <Flex
                bg={'#214B24'}
                px={4}
                p={3}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >
                <Container maxW='container.xl'>
                    <Flex alignItems={"center"} justifyContent={'space-between'}>
                        <Box>
                            <Link href="/" passHref>
                                <Image
                                    bg="#37B34A"
                                    borderRadius="full"
                                    border="1px solid white"
                                    src="/images/Destiny_green.png"
                                    alt="Destiny Doctors Uganda"
                                    boxSize="60px"
                                    width="auto"
                                />
                            </Link>
                        </Box>
                        <Box>
                            <HStack direction={"row"}>
                                {isLargerThanMD ? (
                                    <>
                                        <Link href="/" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/')}
                                                color={activeButton === '/' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Home
                                            </Button>
                                        </Link>
                                        <Link href="/who-we-are" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/who-we-are')}
                                                color={activeButton === '/who-we-are' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/who-we-are' ? '1px solid #37B34A' : 'none'}
                                            >
                                                About 
                                            </Button>
                                        </Link>
                                        <Link href="/projects" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/projects')}
                                                color={activeButton === '/projects' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/projects' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Programs
                                            </Button>
                                        </Link>
                                        <Link href="/team" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/team')}
                                                color={activeButton === '/team' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/team' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Team
                                            </Button>
                                        </Link>
                                        <Link href="/events" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/events')}
                                                color={activeButton === '/events' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/events' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Events
                                            </Button>
                                        </Link>
                                        <Link href="/contact" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/contact')}
                                                color={activeButton === '/contact' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/contact' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Contact Us
                                            </Button>
                                        </Link>
                                        <Link href="/gallery" passHref>
                                            <Button
                                                onClick={() => setActiveButton('/gallery')}
                                                color={activeButton === '/gallery' ? '#37B34A' : '#37B34A'}
                                                variant={'none'}
                                                transition="transform 0.6s ease"
                                                _hover={{
                                                    borderBottom: '1px solid #37B34A',
                                                    transform: 'scale(1.1)',
                                                    color: '#37B34A',
                                                }}
                                                borderBottom={activeButton === '/gallery' ? '1px solid #37B34A' : 'none'}
                                            >
                                                Gallery
                                            </Button>
                                        </Link>
                                        <Link href="/gallery" target="_blank" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/gallery')}
                                                            color='white'
                                                            variant='filled'
                                                        >
                                                            AI Assistant
                                                        </Button>
                                                    </Link>
                                                  
                                    </>
                                ) : (
                                    <></>
                                )}

                                {isLargerThanMD ? (
                                    <></>
                                ) : (
                                    <>
                                        <Button
                                            as={IconButton}
                                            icon={<FiMenu />}
                                            onClick={onOpen}
                                        ></Button>
                                        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                            <DrawerOverlay />
                                            <DrawerContent bg='#37B34A'>
                                                <DrawerBody>
                                                    <Link href="/" passHref>
                                                        <Button
                                                            onClickCapture={() => setActiveButton('/')}
                                                            color={activeButton === '/' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            Home
                                                        </Button>
                                                    </Link>
                                                    <Link href="/projects" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/projects')}
                                                            color={activeButton === '/projects' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            Projects
                                                        </Button>
                                                    </Link>
                                                    <Link href="/projects" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/projects')}
                                                            color={activeButton === '/projects' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            Projects
                                                        </Button>
                                                    </Link>
                                                    <Link href="/team" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/team')}
                                                            color={activeButton === '/team' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            Team
                                                        </Button>
                                                    </Link>
                                                    <Link href="/contact" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/contact')}
                                                            variant={'none'}
                                                            color={activeButton === '/contact' ? '#214B24' : '#214B24'}
                                                        >
                                                            Contact Us
                                                        </Button>
                                                    </Link>
                                                    <Link href="/gallery" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/gallery')}
                                                            color={activeButton === '/gallery' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            Gallery
                                                        </Button>
                                                    </Link>
                                                    <Link href="/gallery" passHref>
                                                        <Button
                                                            onClick={() => setActiveButton('/gallery')}
                                                            color={activeButton === '/gallery' ? '#214B24' : '#214B24'}
                                                            variant={'none'}
                                                        >
                                                            AI Assistant
                                                        </Button>
                                                    </Link>
                                                  
                                                </DrawerBody>
                                            </DrawerContent>
                                        </Drawer>
                                    </>
                                )}
                            </HStack>
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </>
    );
}

