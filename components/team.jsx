import React from "react";
import {
    Box, Grid, Image, Flex, Text, Center, Heading,
    GridItem, Container,
    Button,
    ButtonGroup
} from "@chakra-ui/react";


const TeamPage = () => {
    // Sample team data

    const teamMembers = [
        {
            id: 1,
            name: "Dr. John Bosco Ssemuyaba",
            role: "Founder & President",
            imageUrl: ("/images/johnbosco.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },

        {
            id: 2,
            name: "Dr. Elijah Ssebaggala",
            role: "Vice President",
            imageUrl: ("/images/elijah.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 3,
            name: "Dr. Julius Bruno Mugambe",
            role: "Secretary General",
            imageUrl: ("/images/bruno.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },

        {
            id: 4,
            name: "Dr. Sarah Nakato",
            role: "Finance Director",
            imageUrl: ("/images/nakato.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 5,
            name: "Mr. Mark Kinene",
            role: "Projects Director",
            imageUrl: ("/images/mark.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 6,
            name: "Dr. Joseph Musiitwa",
            role: "Clinic Director",
            imageUrl: ("/images/musiitwa.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 7,
            name: "Dr. Samuel Talemwa",
            role: "Monitoring & Quality Assurance Director",
            imageUrl: ("/images/taremwa.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 8,
            name: "Dr. Stuart Ndawula",
            role: "Information & Computer Technology Director",
            imageUrl: ("/images/stuart.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },

        {
            id: 9,
            name: "Mr. Martin Batte",
            role: "Public Relations Officer",
            imageUrl: ("/images/batte.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 10,
            name: "Dr. Grace Walusimbi",
            role: "Welfare Coordinator",
            imageUrl: ("/images/wallace.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 11,
            name: "Dr. Shamim Nalunkuuma",
            role: "Programs Coordinator",
            imageUrl: ("/images/Casest-8.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 12,
            name: "Dr. Guy Ronald Baguma",
            role: "Projects & CPD Coordinator",
            imageUrl: ("/images/baguma.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 13,
            name: "Mr. Fredrick Okori",
            role: "Creative Designer, Software Engineer | Clinician",
            imageUrl: ("/images/fred.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },
        {
            id: 14,
            name: "Ruth Rayner, LLB",
            role: "Legal Advisor",
            imageUrl: ("/images/ruth.jpg"), // Update with the actual path to your image
            bio: "Lorem ipsum dolor sit amet",
        },

        // Add more team members as needed
    ];



    return (
        <>
       
      
        <Container maxW="container.xl" mt={'15px'} >
            <Center >
                <Flex flexDirection={'column'}>
                    <Heading
                        color={'#214B24'}
                        as='h1'
                        fontSize='4xl'
                        fontWeight='extrabold'
                        mt={'25px'}
                    >
                        Want to become a member?
                    </Heading>
                    <Text color={'#214B24'}>Fill our forms and become recognized among our over 300 healthcare providers.</Text>
                    <ButtonGroup gap={'2'} mt={'5'} mb={'10'}>
                        <Button
                            bg='#37B34A'
                            variant='outline'
                            color='#214B24'

                            px="12"
                            py="7"
                            fontWeight="bold"
                            _hover={{ bg: '#214B24', color: '#37B34A' }}
                        >Join Us</Button>

                    </ButtonGroup>
                </Flex>
            </Center>

            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
                gap={8}
                p={4}
                bg={"var(--chakra-colors-white)"}
            >
                {teamMembers.map((member) => (
                    <GridItem key={member.id}
                        borderRadius={"var(--chakra-radii-lg)"}
                        overflow="hidden"
                        borderColor={'var(--chakra-colors-gray-200)'}
                        bg={"white"}
                        boxShadow={"var(--chakra-shadows-xl)"}
                        p={4}
                        textAlign="center"
                        alignItems={'center'}
                        transition="transform 300ms cubic-bezier(0, 0, 0.2, 1)"
                        _hover={{
                            transform: "scale(1.05)",
                        }}
                    >

                        <Image src={member.imageUrl} alt={`Image of ${member.name}`} w="100%" h="450px" borderRadius={'lg'} loading="lazy" objectFit="cover" />

                        <Box>
                            <Text fontSize="lg" fontWeight="bold" mt={'5px'} color={'#214B24'}>
                                {member.name}
                            </Text>
                            <Text color="gray.500" >{member.role}</Text>
                        </Box>


                        <Text mt="2" color="gray.600">
                            {member.bio}
                        </Text>

                    </GridItem>
                ))}
            </Grid>
            </Container>
        </>
    );
};

export default TeamPage;
