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
    Stack,
    useColorMode,
    IconButton,
    useMediaQuery,
    useDisclosure,
    HStack,
    Link,
    Container,
} from "@chakra-ui/react";

import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { useState } from "react";
import ContactButton from "./handleMail";

const TbIcons = require("react-icons/tb");

export default function Nav({ color, navigateTo }) {


    const [activeButton, setActiveButton] = useState('#37B34A');

    const handleButtonClick = (path) => {
        navigateTo(path);
        setActiveButton(path);
    };

    const colors = {
        "blue": "#3182CE",
        "cyan": "#00B5D8",
        "gray": "#718096",
        "green": "#38A169",
        "orange": "#DD6B20",
        "pink": "#D53F8C",
        "purple": "#805AD5",
        "red": "#E53E3E",
        "teal": "#319795",
        "yellow": "#D69E2E"
    };
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection.scrollIntoView({ behavior: "smooth" });
    };


    const TbLetterComponents = [];



    return (
        <>

            <Flex
                bg={'#214B24'}
                px={4}
                p={5}
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
                            <Image
                                bg="#37B34A"
                                borderRadius="full"
                                border="1px solid white"
                                src="/images/Destiny_green.png"
                                alt="Destiny Doctors Uganda"
                                boxSize="90px"
                                width="auto"
                            />
                        </Box>
                        <Box>


                            <Stack direction={"row"} spacing={7}>
                                {isLargerThanMD ? (
                                    <>
                                        <Button
                                            onClick={() => handleButtonClick('/')}
                                            color={activeButton === '/' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/' ? '1px solid #37B34A' : 'none'}
                                        >
                                            Home
                                        </Button>
                                        <Button
                                            onClick={() => handleButtonClick('/page/about')}
                                            color={activeButton === '/page/about' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/page/about' ? '1px solid #37B34A' : 'none'}
                                        >
                                            About us
                                        </Button>
                                        <Button
                                            onClick={() => handleButtonClick('/page/projects')}
                                            color={activeButton === '/page/projects' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/page/projects' ? '1px solid #37B34A' : 'none'}
                                        >
                                            Projects
                                        </Button>
                                        <Button
                                            onClick={() => handleButtonClick('/page/team')}
                                            color={activeButton === '/page/team' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/page/team' ? '1px solid #37B34A' : 'none'}
                                        >
                                            Team
                                        </Button>
                                        <Button
                                            onClick={() => handleButtonClick('/page/contact')}
                                            color={activeButton === '/page/contact' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/page/contact' ? '1px solid #37B34A' : 'none'}
                                        >
                                            Contact Us
                                        </Button>
                                        <Button
                                            onClick={() => handleButtonClick('/page/gallery')}
                                            color={activeButton === '/page/gallery' ? '#37B34A' : '#37B34A'}
                                            variant={'none'}
                                            transition="transform 0.6s ease"
                                            _hover={{
                                                border: '1px solid #37B34A',
                                                transform: 'scale(1.1)',
                                                color: '#37B34A',
                                            }}
                                            border={activeButton === '/page/gallery' ? '1px solid #37B34A' : 'none'}
                                        >
                                            Gallery
                                        </Button>

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
                                            <DrawerContent>
                                                <DrawerBody>
                                                    <Button
                                                        onClick={() => handleButtonClick('/')}
                                                        color={activeButton === '/' ? '#37B34A' : '#37B34A'}
                                                        variant={'none'}


                                                    >
                                                        Home
                                                    </Button>
                                                        <Button onClick={() => handleButtonClick('/page/about')}
                                                            variant={'none'}
                                                        color={activeButton === '/page/about' ? '#37B34A' : '#37B34A'}
                                                    >
                                                        About us
                                                    </Button>
                                                    <Button onClick={() => handleButtonClick('/page/projects')}
                                                        color={activeButton === '/page/projects' ? '#37B34A' : '#37B34A'}
                                                        variant={'none'}
                                                    >
                                                        Projects
                                                    </Button>
                                                    <Button onClick={() => handleButtonClick('/page/team')}
                                                            color={activeButton === '/page/team' ? '#37B34A' : '#37B34A'}
                                                            variant={'none'}
                                                    >
                                                        Team
                                                    </Button>
                                                    <Button onClick={() => { handleButtonClick('/page/contact') }}
                                                        color={activeButton === '/page/contact' ? '#37B34A' : '#37B34A'}
                                                        variant={'none'}
                                                    >
                                                        Contact Us
                                                    </Button>
                                                    <Button onClick={() => handleButtonClick('/page/gallery')}
                                                        color={activeButton === '/page/gallery' ? '#37B34A' : '#37B34A'}
                                                        variant={'none'}
                                                    >
                                                        Gallery
                                                    </Button>
                                                    <Button variant='outline'>
                                                        Donate
                                                    </Button>
                                                </DrawerBody>
                                            </DrawerContent>
                                        </Drawer>
                                    </>
                                )}
                            </Stack>
                        </Box>
                        {isLargerThanMD && (
                            <ContactButton />
                        )}
                    </Flex>
                </Container>
            </Flex>

        </>
    );
}