'use client'
import React from 'react';
import {
    Box,
    Text,
    Button,
    Image,
    ButtonGroup,
    Heading,
    Stack
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FiArrowRight } from "react-icons/fi";
import ContactButton from './handleMail';

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

const HeroSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 500,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide) => (
                <Box key={slide.id} position="relative" height="100vh">
                    <Image
                        src={slide.image}
                        alt={`Hero Image ${slide.id}`}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                    />
                  
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center"
                        color="white"
                    >
                        <Text
                            bgGradient='linear(to-l, #fff, #fff)'
                            color='white'
                            bgClip='text'
                            fontSize={{ base: '6xl', lg: '8xl' }}
                            lineHeight={'1.1'}
                            fontWeight='extrabold'
                        >
                            {slide.title}
                        </Text>
                        
                        <Text fontSize="xl">
                            {slide.subtitle}
                        </Text>
                        <Box py='7'>
                            <ButtonGroup gap={'2'} mt={'5'} mb={'10'}>
                                <ContactButton />
                                <Button
                                    bg='#214B24'
                                    variant='outline'
                                    color='#37B34A'
                                    px="12"
                                    py="7"
                                    fontWeight="bold"
                                    _hover={{ bg: '#214B24', color: '#37B34A' }}
                                >
                                    AI Assistant
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Slider>
    );
};

export default HeroSection;
