import React from "react";
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Text,
    Skeleton,
    Container,
    Stack,
    useColorModeValue,
    Divider,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaFileMedical } from 'react-icons/fa';
import { FiBriefcase, FiFile, FiHeart, FiSearch, FiUser } from "react-icons/fi";


const activities = [
    {
        id: 1, 
        image: './IMG_2506.jpg',
    },
    {
        id: 2,  
        image: './IMG_2591.png',
    },
    {
      id: 3, 
        image: './surgery-team.jpeg',
    },
    {
        id: 4,     
        image: './IMG_3610.png',
    },
    {
        id: 5,      
        image: './IMG_3412.jpg',
    },
    {
        id: 6,
        image: './surgery_2.jpeg',
    },
    {
        id: 7,
        image: './Casest-7.jpg',
    },
    {
        id: 8,
        image: './Casest-7.jpg',
    },
    {
        id: 9,
        image: './jb_conference.jpg',
    },
    {
        id: 10,
        image: './Casest-7.jpg',
    },

]


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: '100%' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: '100%' }}
            onClick={onClick}
        />
    );
}

export default function Gallery() {
 

    return <>
       
        <Container maxW='100%' bgImage="url('/customer-circles-temp.png')"
            bgColor='#f5f7f9'
            bgSize="cover"
            bgPosition="center"
            h="auto" // Set the desired height
            w="100%"
        >

            <Container maxW='container.2xl'>
                <Heading
                    fontSize='4xl'
                    as={'h2'}
                    color='#214B24'
                    textAlign='center'
                    pb='10px'
                    paddingRight='60px'
                >
                    What we do
                    <Divider mt='10' />
                </Heading>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
                    gap={8}
                    p={10}
                    pb={'10'}
                    mt={"10"}
                >
                    {activities.map((activity) => (
                        <GridItem key={activity.id} position="relative"
                            borderRadius={"var(--chakra-radii-lg)"}
                            overflow="hidden"
                            borderColor={'var(--chakra-colors-gray-200)'}
                            bg={"white"}
                            boxShadow={"var(--chakra-shadows-xl)"}
                          
                            textAlign="center"
                            alignItems={'center'}
                            transition="transform 300ms cubic-bezier(0, 0, 0.2, 1)"
                            opacity={0.8}

                            _moztransition="opacity .25s ease-in-out" // for Firefox
                            _webkittransition="opacity .25s ease-in-out"
                            _hover={{
                                transform: "scale(1.05)",
                                opacity: '0.5',
                                transition: "opacity .25s ease-in-out"
                            }}
                           
                        >
                                    <Image width='100%' height='100%' src={activity.image} objectFit='cover' alt="full gallery"/> 
                        </GridItem>
                    ))}

                </Grid>
            </Container>
       
        </Container>



    </>
}