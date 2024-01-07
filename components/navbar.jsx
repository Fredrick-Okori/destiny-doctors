import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar({ navigateTo }) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            as="nav"
            top="0"
            role="navigation"
            bg="#214B24"
            pt={{ base: 'var(--chakra-space-4)', md: 'var(--chakra-space-8)' }}
            pb={{ base: 'var(--chakra-space-4)', md: 'var(--chakra-space-8)' }}
            
        >
            <Container maxW="var(--chakra-sizes-7xl)">
                <Flex
                    alignItems="center"
                  
                    direction={'row'}
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

                    {isMobile ? (
                        <Box display={{ base: 'flex', md: 'none' }}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Menu"
                                    bg="transparent"
                                    color="white"
                                    icon={<FiMenu />}
                                />
                                <MenuList>
                                    <MenuItem onClick={() => navigateTo('/')}>Home</MenuItem>
                                    <MenuItem onClick={() => navigateTo('/about-us')}>About us</MenuItem>
                                    <MenuItem onClick={() => navigateTo('/programs')}>Our Programs</MenuItem>
                                    <MenuItem onClick={() => navigateTo('/our-team')}>Team</MenuItem>
                                    <MenuItem onClick={() => navigateTo('/find-us')}>Find us</MenuItem>
                                    <MenuItem onClick={() => navigateTo('/gallery')}>Gallery</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    ) : (
                        <Flex
                            display={{ base: 'none', md: 'flex' }}
                                alignItems="center"
                                justifyContent={'space-between'}
                        >
                            <ButtonGroup
                                flexDirection="row"
                                gap={{ base: 'var(--chakra-space-2)', md: 'var(--chakra-space-4)' }}
                            >
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/')}>Home</Button>
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/about-us')}>About us</Button>
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/programs')}>Our Programs</Button>
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/our-team')}>Team</Button>
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/find-us')}>Find us</Button>
                                    <Button p={'5'}
                                        color="#37B34A" variant={'none'}
                                        transition="transform 0.6s ease"
                                        _hover={{ border: '1px solid #37B34A', transform: 'scale(1.1)' }} onClick={() => navigateTo('/gallery')}>Gallery</Button>
                            </ButtonGroup>
                        </Flex>
                    )}

                    <Spacer />

                    <Flex>
                        <Button
                            onClick={() => navigateTo('/gallery')}
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
