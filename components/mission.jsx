import React from "react";
import {
    Container,
    Box,
    Card,
    Text,
    Heading,
    CardBody,
    Stack,
    Flex,
    Image,
    Divider,
    Spacer,
    Center,
    ButtonGroup,
    Button
} from "@chakra-ui/react";

import { FiMaximize, FiLayers, FiNavigation, FiActivity, FiHeart, FiPocket } from "react-icons/fi";

// import TeamPage from "./team";
import Executive from "./executive";

const mission = [
    {
        id: 1,
        icon: <FiMaximize size={"90"} />,
        title: "Our Mission",
        body:
            "Transforming health and wellbeing of under-served communities. ",
    },
    {
        id: 2,
        icon: <FiLayers size={"90"} />,
        title: "Our Vision",
        body:
            "To ensure equitable access of health and related services to under-served communities ",
    },
    {
        id: 3,
        icon: <FiLayers size={"90"} />,
        title: "Our objective",
        body:
            "To ensure equitable access of health and related services to under-served communities ",
    },

];

export default function Mission() {
    return (
        <>
            <Container maxW="container.xl" color="#262626" py="7" mt="5">
            <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "center", md: "flex-start" }}
                    placeContent="center"
                >
                    {/* First Column */}
                    <Flex direction="column" alignItems="center" flex={{ base: 1, md: 1 }}>
                        {mission.map((mission, index) => (
                            <Box p={{ base: "4", md: "8" }} key={index}>
                                <Card
                                    bg={'none'}
                                    color={'white'}
                                    maxW="sm"
                                    transition={"transform .6s ease"}
                                    _hover={{
                                        bg: "#37B34A",
                                        transform: "scale(1.1)",
                                        color: "white",
                                    }}
                                >
                                    <CardBody>

                                        <Stack mt="6">
                                            <Heading size="md">{mission.title}</Heading>
                                            <Text>{mission.body}</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                </Box>
                ))}
                    </Flex>

                    {/* Second Column */}
                    <Box p={{ base: "15", md: "8" }} flex={{ base: 1, md: 2 }} bg='#37B34A' h={'100%'} borderRadius={'25'}>

                        <Flex direction={{ base: "column", md: "row" }}
                            justifyContent="space-evenly" mt={'15'} >
                            <Box borderRight={'1px solid #214B24'} padding={'20px'} textAlign={'center'} color={'#214B24'}>
                                <Center> <FiActivity size={'50'} /> </Center>
                                <Heading as={'h1'} textAlign={'center'}>
                                    3145
                                </Heading>
                                <Text>benefited in our community outreach programmes </Text>
                </Box>
                <Box borderRight={'1px solid #214B24'} padding={'20px'} textAlign={'center'} color={'#214B24'}>
                                <Center> <FiHeart size={'50'} /> </Center>
                                <Heading as={'h1'}>
                                    5471
                                </Heading>
                                <Text>Supported with food relief in COVID-19 pandemic</Text>
                </Box>
                <Box borderRight={'1px solid #214B24'} padding={'20px'} textAlign={'center'} color={'#214B24'}>
                                <Center> <FiHeart size={'50'} /> </Center>
                                <Heading as={'h1'}>
                                    1908
                                </Heading>
                                <Text>Students mentored</Text>
                            </Box>
                            <Box textAlign={'center'} alignContent={'center'} padding={'20px'} color={'#214B24'}>
                                <Center> <FiPocket size={'50'} /></Center>
                                <Heading as={'h1'}  >
                                    2201
                                </Heading>
                                <Text> Reached in Gospel minitries</Text>
                            </Box>
                        </Flex>
                        <Image src="/home-1.jpg" alt='Our meet up' borderRadius={'10'} mt={'20'} mb={'20'} />
                        <Spacer />
                        <Box>
                            <Text color="#214B24" lineHeight={'1.9rem'} textAlign={'center'} fontSize={'1.2rem'} >
                                We are a group of exceptional and compassionate service
                                minded health workers determined to change the face of
                                medicine with a vision of transforming the health
                                and wellbeing of under-served communities, elevating hope and advancing holistic healing.<br />


                            </Text>
                        </Box>
                        <Box mt={'20'} textAlign={'center'}>
                            <Heading as={'h4'} color={'#214B24'}>Impressed with this kind of work?</Heading>
                            <Text lineHeight={'1.7rem'}>Lets explore available opportunities or <br />
                                create bespoke solutions to serve our communities
                            </Text>
                            <ButtonGroup gap={'2'} mt={'5'} mb={'10'}>
                                <Button
                                    bg='#37B34A'
                                    variant='outline'
                                    color='#214B24'
                                    px="12"
                                    py="7"
                                    fontWeight="bold"
                                    _hover={{ bg: '#214B24', color: '#37B34A' }}
                                >Get in touch</Button>
                                <Button
                                    bg='#214B24'
                                    variant='outline'
                                    color='#37B34A'
                                    px="12"
                                    py="7"
                                    fontWeight="bold"
                                    _hover={{ bg: '#214B24', color: '#37B34A' }}
                                >Give to us</Button>
                            </ButtonGroup>


                        </Box>
                </Box>
            </Flex>
        </Container>
    
                <Executive />
          

        </>
    );
}
