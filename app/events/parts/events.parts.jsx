import React from 'react'

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

import {  FiActivity, FiCalendar, FiCheck, FiHeart, FiNavigation} from "react-icons/fi";




export default function EventsParts() {
    return (
        <>
            <Container maxW="container.xl" color="#262626" py="7" mt="15">

                <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "center", md: "flex-start" }}
                    justifyContent='center'
                >
                    {/* First Column */}
                    <Flex direction={{ base: "row", md: "column" }}
                        justifyContent="space-evenly" mt={'15'} >
                        <Box  padding={'20px'} textAlign={'center'} color={'#214B24'}>
                            <Center> <FiActivity size={'50'} /> </Center>
                            <Heading as={'h1'} textAlign={'center'}>
                                3000
                            </Heading>
                            <Text>Total Targeted Beneficiaries</Text>
                        </Box>
                    
                        <Box  padding={'20px'} textAlign={'center'} color={'#214B24'}>
                            <Center> <FiCalendar size={'50'}/> </Center>
                            <Heading as={'h1'}>
                                3rd June 
                            </Heading>
                            <Text>Date</Text>
                        </Box>
                        <Box padding={'20px'} textAlign={'center'} color={'#214B24'}>
                            <Center> <FiCheck size={50} />  </Center>
                            <Heading as={'h1'}>
                                15
                            </Heading>
                            <Text>Medical Specialists</Text>
                        </Box>

                    </Flex>

                    {/* Second Column */}
                    <Box p={{ base: "15", md: "8" }} flex={{ base: 1, md: 2 }}  h={'100%'} borderRadius={'25'}>

                       
                        <Image src="/camp.png" alt='Our meet up' borderRadius={'10'} mt={'0'} mb={'20'} />
                        <Spacer />
                        <Box>
                            <Text color="#214B24" lineHeight={'1.9rem'} textAlign={'justify'} fontSize={'1.2rem'} >
                                Lyantonde is a district about 120km away from Kampala city city, with a population of over one million people.
                                Over time, the community mainly rely on cattle rearing as main source of income. Healthwise, Kaliiro Health Center III is the main health facility providing
                                health services ranging from infectious and non-communicable diseases care.   Majority of the individuals move averagely 14km to access healthcare services at the health
                                facility creating a health & financial burden. This is our first time conducting a free health care services to this community.



                            </Text>
                        </Box>
                        <Box mt={'20'} textAlign={'center'}>
                            <Heading as={'h4'} color={'#214B24'}>Would like to support us in this kind of work? </Heading>
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
                                >Donate</Button>
                            </ButtonGroup>


                        </Box>
                    </Box>
                </Flex>

            </Container>
        </>
    )
}