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
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
    {
        id: 1,
        image: './homepage-5-slider-img-3.jpg',
        title: 'Destiny Doctors Uganda',
        subtitle: 'We are transforming healthcare in our society. Want to join this exciting journey?',
    },
    {
        id: 2,
        image: './Carousel_community.jpg',
        title: 'Called to serve',
        subtitle: 'We are transforming healthcare in our society. Want to join this exciting journey?',
    },
    {
        id: 3,
        image: './Casest-7.jpg',
        title: 'Destiny Doctors Uganda',
        subtitle: 'We are transforming healthcare in our society. Want to join this exciting journey?',
    },
    // Add more slides as needed
];


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

export default function About() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    return <>
        <Box position="relative">
            <Image
                src='./service.jpg'
                alt={`Hero Image `}
                w="100%"
                h="40vh"
                objectFit="cover"
            />
            <Box
                position="absolute"
                top="50%"
                left="30%"
                transform="translate(-50%, -50%)"
                textAlign="left"
                color="white"
            >
                <Text
                    bgGradient='linear(to-l, #fff, #fff)'
                    color='white'
                    bgClip='text'
                    fontSize={['2xl', '5xl', '6xl']}
                    fontWeight='extrabold'
                    noOfLines={1}
                >
                    Who we are
                </Text>
                <Text textAlign='left'>
                    We have a broad expertise in digital health <br /> service execution and
                    management with our diverse<br /> and multi talented team with experience and skills in<br /> Public Health, Technology, Nursing, Laboratory
                    and holistic healthcare.
                </Text>
            </Box>
        </Box>
        <Container maxW='100%' bg='white'>
            <Container
                maxWidth='container.xl'
                py={{
                    base: '16',
                    md: '24',
                }}
            >
                <Stack
                    spacing={{
                        base: '8',
                        md: '10',
                    }}
                >
                    <Stack
                        spacing={{
                            base: '4',
                            md: '5',
                        }}
                        align="center"
                    >
                        <Flex direction={{ base: 'column-reverse', lg: 'row' }} alignItems='center' 
                        
                            gap='4'
                        >
                            <Box>
                                <Heading
                                    fontSize='4xl'
                                    as={'h1'}
                                    color='#214B24'
                                >
                                    We are making healthcare accessible to the marginalized communities
                                </Heading>
                            </Box>
                            
                            <Box >
                                <Image src="/about-Jb.jpg" _hover={{

                                     cursor: 'pointer',
                                    transition: "opacity 0.3s linear 2s",
                                    backgroundColor:"rgba(0,0,0,.5)"
                                }}  alt="Founder" borderRadius='7' />
                            </Box>
                            <Box>
                            <Text color="#214B24" maxW="2xl" textAlign="center" fontSize="xl" >
                               When I was founding destiny doctors,
                               I have always beleived that each
                                individual has specific
                                skills that is given by
                                God and I do think that
                                we can use those skills to
                                transform the lives of our communities.
                                </Text>
                            </Box>
                        </Flex>
                        
                    </Stack>

                </Stack>
            </Container>
            <Container maxW='container.xl'>
                <Flex alignItems='center' direction={{ base: 'column-reverse', lg: 'row' }} 

                >
                  
                    <Box
                       
                    >
                    <Flex direction='column'
                           
                            
                    >
                        <Heading
                            fontSize='2xl'
                            as={'h5'}
                                color='#214B24'
                                textAlign='left'
                                pb='20px'
                                paddingRight='60px'
                        >
                            We are making healthcare accessible to the marginalized communities
                        </Heading>
                            <Text color="#214B24" maxW="2xl" textAlign="justify" fontSize="xl"
                                paddingRight='60px'
                               
                            >
                            Here at destiny doctors,
                            we believe that each
                            individual has specific
                            skills that is given by
                            God and we do think that
                            we can use those skills to
                            transform the lives of our communities.
                        </Text>
                    </Flex>
                    </Box>
                  
                    <Box
                        maxWidth={{
                            base: '700px',
                            sm: '100px',
}}
                        py={{
                            base: '16',
                            md: '24',
                        }} 
                    >
                        <Slider {...settings}>
                            {slides.map((slide) => (
                                <Box key={slide.id} position="relative">
                                    <Image
                                        borderRadius='7px'
                                        src={slide.image}
                                        alt={`Hero Image ${slide.id}`}
                                        width='100%'
                                       maxH='450'
                                        objectFit="cover"
                                    />

                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Flex>
            </Container>
        </Container>



    </>
}